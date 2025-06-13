import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Platform } from "react-native";
import { useAuth } from "@/contexts/AuthContext";
import { useStudents, Student, EnrolledUnit } from "@/contexts/StudentContext";
import { PermitCard } from "@/components/PermitData";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { StorageAccessFramework } from "expo-file-system";
import tw from "twrnc";
import { generatePermitHtml } from "@/components/GeneratePdf";
import { useToast } from "@/components/ui/useToast";

export default function PermitPage() {
  const { user } = useAuth();
  const { getStudent, loading: studentsLoading } = useStudents();
  const { showToast } = useToast();
  const [student, setStudent] = useState<Student | null>(null);
  const [studentLoading, setStudentLoading] = useState(true);
  const [permitData, setPermitData] = useState<any>(null);
  const [pdfUri, setPdfUri] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!user?.id) return;
    setStudentLoading(true);
    getStudent(user.id)
      .then((data) => setStudent(data))
      .finally(() => setStudentLoading(false));
  }, [user?.id, getStudent]);

  useEffect(() => {
    if (!student) return;

    const currentYear = student.studyYear;
    const currentSem = student.currentSemester;

    const registeredUnits = student.enrolledUnits?.filter(
      (unit: EnrolledUnit) => unit.year === currentYear && unit.semester === currentSem
    ) || [];

    let status: "valid" | "invalid" | "expired" = "invalid";
    if (student.studentQrCodes?.length) {
      const qr = student.studentQrCodes[0];
      const isExpired = qr.semester !== student.currentSemester;
      status = isExpired ? "expired" : student.permitStatus;
    }

    setPermitData({
      id: student.studentQrCodes?.[0]?.qrCode || student.id,
      studentName: `${student.firstName} ${student.lastName}`,
      gender: student.gender || "",
      studentNumber: student.studentNo,
      regNumber: student.regNo,
      programme: student.programme?.course?.name || "",
      yearOfStudy: student.studyYear || 1,
      campus: student.campus || "Main Campus",
      semester: student.currentSemester === "ONE" ? "I" : "II",
      academicYear: student.academicYear || "",
      department: student.programme?.course?.department?.name || "",
      faculty: student.programme?.course?.department?.facultyOrSchool?.name || "",
      courseUnits: registeredUnits.map((u: EnrolledUnit) => ({
        code: u.courseUnit.code,
        name: u.courseUnit.title,
        creditUnits: u.courseUnit.credits,
        category: u.courseUnit.category,
        status: u.attempt === 1 ? "NORMAL" : "RETAKE",
      })),
      status,
      photoUrl: student.picture || undefined,
      qrCode: student.studentQrCodes?.[0]?.qrCode,
      printDate: new Date().toISOString(),
      permitId: student.studentQrCodes?.[0]?.id || `PERM-${student.regNo}`,
      examDate: new Date().toISOString().split("T")[0],
    });
  }, [student]);

  if (studentLoading || studentsLoading || !permitData) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[#f0fff0]`}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const generatePdf = async (): Promise<string | undefined> => {
    if (pdfUri) return pdfUri;
    try {
      const html = await generatePermitHtml(permitData);
      const { uri } = await Print.printToFileAsync({ html });
      setPdfUri(uri);
      return uri;
    } catch (e) {
      console.error(e);
      showToast("error", "Could not generate PDF");
    }
  };

  const handleDownload = async () => {
    try {
      const html = await generatePermitHtml(permitData);
      const { uri } = await Print.printToFileAsync({ html });

      if (Platform.OS === "web") {
        if (!uri) throw new Error("PDF generation failed.");
        
        try {
          // For web, we need to fetch the blob and create a proper download
          const response = await fetch(uri);
          const blob = await response.blob();
          const pdfBlob = new Blob([blob], { type: 'application/pdf' });
          const downloadUrl = URL.createObjectURL(pdfBlob);
          
          // Create invisible anchor and trigger download
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.download = `ExamPermit_${permitData.regNumber}.pdf`;
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Clean up the URL object
          setTimeout(() => URL.revokeObjectURL(downloadUrl), 100);
          showToast("success", "Permit downloaded successfully");
        } catch (webError) {
          console.error("Web download error:", webError);
          // Fallback: try direct link download
          const link = document.createElement("a");
          link.href = uri;
          link.download = `ExamPermit_${permitData.regNumber}.pdf`;
          link.target = "_blank";
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          showToast("success", "Permit download initiated");
        }
      } else {
        const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
        if (permissions.granted) {
          if (!uri) throw new Error("PDF file not generated");
          const base64File = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
          });

          const fileUri: string = await StorageAccessFramework.createFileAsync(
            permissions.directoryUri,
            `ExamPermit_${permitData.regNumber}.pdf`,
            "application/pdf"
          );

          await FileSystem.writeAsStringAsync(fileUri, base64File, {
            encoding: FileSystem.EncodingType.Base64,
          });
          showToast("success", "Permit saved successfully");
        } else {
          if (!uri) throw new Error("PDF file not generated");
          await Sharing.shareAsync(uri, {
            mimeType: "application/pdf",
            UTI: "com.adobe.pdf",
            dialogTitle: "Save your Exam Permit",
          });
        }
      }
    } catch (error) {
      console.error("Download error:", error);
      showToast("error", "Failed to download permit");
    }
  };

  const handlePrint = async () => {
    try {
      const html = await generatePermitHtml(permitData);
      if (Platform.OS === "web") {
        // Check if it's a mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
          // For mobile web, create a printable HTML page instead of PDF
          try {
            const printWindow = window.open("", "_blank");
            if (printWindow) {
              // Add mobile-optimized print styles
              const mobileHtml = html.replace(
                '<style>',
                `<style>
                  @media print {
                    body { font-size: 12px !important; }
                    .watermark { display: none !important; }
                    .header { margin-bottom: 10px !important; }
                    .student-info { padding: 10px 5px !important; }
                    .info-grid { grid-template-columns: 1fr !important; gap: 4px !important; }
                    .info-grid p { font-size: 11px !important; margin: 2px 0 !important; }
                    table { font-size: 10px !important; }
                    th, td { padding: 2px 4px !important; }
                    .instructions { padding: 8px !important; }
                    .qr-code img { width: 100px !important; height: 100px !important; }
                  }`
              );
              
              printWindow.document.write(mobileHtml);
              printWindow.document.close();
              printWindow.focus();
              
              // Wait for content to load before printing
              setTimeout(() => {
                try {
                  printWindow.print();
                  showToast("success", "Print dialog opened. Complete printing from your browser.");
                } catch (printErr) {
                  console.error("Print error:", printErr);
                  showToast("info", "Please use your browser's print option (Ctrl+P or Cmd+P).");
                }
              }, 1000);
            } else {
              showToast("error", "Pop-up blocked. Please allow pop-ups and try again.");
            }
          } catch (mobileError) {
            console.error("Mobile print error:", mobileError);
            showToast("error", "Mobile printing not supported. Please use Download instead.");
          }
        } else {
          // Desktop web printing
          const printWindow = window.open("", "_blank");
          if (printWindow) {
            printWindow.document.write(html);
            printWindow.document.close();
            printWindow.focus();
            
            // Wait for content to load before printing
            printWindow.onload = () => {
              setTimeout(() => {
                printWindow.print();
                printWindow.close();
              }, 500);
            };
          } else {
            showToast("error", "Pop-up blocked. Please allow pop-ups and try again.");
          }
        }
      } else {
        try {
          await Print.printAsync({
            html,
            orientation: "portrait",
            margins: {
              left: 20,
              top: 20,
              right: 20,
              bottom: 20,
            },
          });
        } catch (printError) {
          try {
            const { uri } = await Print.printToFileAsync({ html });
            await Sharing.shareAsync(uri, {
              mimeType: "application/pdf",
              UTI: "com.adobe.pdf",
              dialogTitle: "Open or print your Exam Permit PDF",
            });
          } catch (fallbackError) {
            console.error("Print and fallback error:", fallbackError);
            showToast(
              "error",
              "Printing is not supported on this device. Please use the Download or Share option instead."
            );
          }
        }
      }
    } catch (error) {
      console.error("Print error:", error);
      showToast(
        "error",
        "Printing is not supported on this device. Please use the Download or Share option instead."
      );
    }
  };

  const handleShare = async () => {
    try {
      const html = await generatePermitHtml(permitData);
      const { uri } = await Print.printToFileAsync({ html });

      if (Platform.OS === "web") {
        if (!uri) throw new Error("PDF generation failed.");
        
        try {
          // For web, we need to create a proper PDF file for sharing
          const response = await fetch(uri);
          if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.status}`);
          }
          
          const arrayBuffer = await response.arrayBuffer();
          const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
          
          // Check if Web Share API is available and supports files
          if (navigator.share && navigator.canShare) {
            const file = new File([pdfBlob], `ExamPermit_${permitData.regNumber}.pdf`, {
              type: 'application/pdf',
              lastModified: Date.now()
            });
            
            const shareData = {
              title: "Exam Permit",
              text: "Here is my Kyambogo University Exam Permit.",
              files: [file]
            };
            
            // Test if we can share files
            if (navigator.canShare(shareData)) {
              await navigator.share(shareData);
              showToast("success", "Permit shared successfully!");
              return;
            }
          }
          
          // Fallback 1: Try text/URL sharing if available
          if (navigator.share) {
            try {
              await navigator.share({
                title: "Exam Permit",
                text: `Here is my Kyambogo University Exam Permit. Download it from: ${window.location.origin}/permit-download`,
                url: window.location.href
              });
              showToast("info", "Shared permit page link. Use Download button to get PDF.");
              return;
            } catch (shareError) {
              console.log("URL sharing failed:", shareError);
            }
          }
          
          // Fallback 2: Copy to clipboard
          if (navigator.clipboard && navigator.clipboard.writeText) {
            const shareText = `Check out my Kyambogo University Exam Permit: ${window.location.href}`;
            await navigator.clipboard.writeText(shareText);
            showToast("success", "Permit page link copied to clipboard! Share it and use Download button to get PDF.");
            return;
          }
          
          // Fallback 3: Trigger download as last resort
          const downloadUrl = URL.createObjectURL(pdfBlob);
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.download = `ExamPermit_${permitData.regNumber}.pdf`;
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(downloadUrl), 100);
          showToast("info", "Sharing not supported. File downloaded instead.");
          
        } catch (webError) {
          console.error("Web share error:", webError);
          // Ultimate fallback - copy page URL
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(window.location.href);
              showToast("info", "Page link copied. Share it and use Download button to get PDF.");
            } else {
              showToast("error", "Sharing not supported in this browser. Use Download button instead.");
            }
          } catch (clipboardError) {
            showToast("error", "Sharing not supported in this browser. Use Download button instead.");
          }
        }
      } else {
        const uri = await generatePdf();
        if (!uri) return;
        if (!(await Sharing.isAvailableAsync())) {
          return showToast("error", "Sharing not available");
        }
        await Sharing.shareAsync(uri, { mimeType: "application/pdf" });
      }
    } catch (error) {
      console.error("Share error:", error);
      showToast("error", "Failed to share permit");
    }
  };

  if (studentLoading || !permitData) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[#f0fff0]`}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[tw`flex-1`, { backgroundColor: "#f0fff0" }]}>
      <View
        style={[
          tw`p-6 rounded-b-3xl`,
          {
            backgroundColor: "#228b22",
            shadowColor: "#000",
            shadowOpacity: 0.2,
          },
        ]}
      >
        <Text style={tw`text-2xl font-bold text-white`}>Permit</Text>
      </View>
      <ScrollView contentContainerStyle={tw`p-4`} keyboardShouldPersistTaps="handled">
        <Text style={tw`text-center text-lg font-bold text-green-800 mb-2`}>
          Your Examination Permit
        </Text>
        <PermitCard permitData={{
          ...permitData,
          // Pass only the UUID as the QR code value
          qrCode: permitData.qrCode || permitData.id,
        }} />

        {permitData.status === "invalid" && (
          <View
            style={[
              tw`p-4 rounded-lg my-4 bg-red-50 border border-red-200`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 2,
              },
            ]}
          >
            <View style={tw`flex-row items-center mb-1`}>
              <Ionicons name="alert-circle-outline" size={20} color="#ef4444" />
              <Text style={tw`ml-2 font-bold text-red-500`}>Outstanding Balance</Text>
            </View>
            <Text style={tw`text-red-600`}>
              You have an outstanding balance. Please clear your fees to download the permit.
            </Text>
          </View>
        )}        <View style={[
            tw`mt-4`,
            Platform.OS === 'web' ? tw`flex flex-col items-center` : tw`flex-row justify-between`
          ]}>
          {Platform.OS !== "web" && (
            <TouchableOpacity
              onPress={handleDownload}
              disabled={permitData.status === "invalid"}
              style={[tw`flex-1 items-center py-2 rounded-lg border mr-1`, { borderColor: "#228b22", backgroundColor: "#f0fff0", shadowColor: "#000", shadowOpacity: 0.25, shadowOffset: { width: 1, height: 4 }, shadowRadius: 8, elevation: 4, borderWidth: 1.5 }, permitData.status === "invalid" && tw`opacity-50 bg-gray-100`]}
            >
              <Feather name="download" size={20} color={permitData.status === "invalid" ? "#999" : "#228b22"} />
              <Text style={[tw`mt-1`, { color: permitData.status === "invalid" ? "#999" : "#228b22" }]}>Download</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={handlePrint}
            disabled={permitData.status === "invalid"}
            style={[
              tw`items-center py-3 rounded-lg border`,
              {
                borderColor: "#228b22",
                backgroundColor: "#f0fff0",
                shadowColor: "#000",
                shadowOpacity: 0.25,
                shadowOffset: { width: 1, height: 4 },
                shadowRadius: 8,
                elevation: 8,
                borderWidth: 1.5,
                width: Platform.OS === 'web' ? 200 : '100%',
                alignSelf: 'center'
              },
              permitData.status === "invalid" && tw`opacity-50 bg-gray-100`
            ]}
          >
            <View style={tw`flex-row items-center justify-center`}>
              <Feather name="printer" size={20} color={permitData.status === "invalid" ? "#999" : "#228b22"} />
              <Text style={[tw`ml-2`, { color: permitData.status === "invalid" ? "#999" : "#228b22" }]}>Print</Text>
            </View>
          </TouchableOpacity>

          {Platform.OS !== "web" && (
            <TouchableOpacity
              onPress={handleShare}
              disabled={permitData.status === "invalid"}
              style={[tw`flex-1 items-center py-2 rounded-lg border ml-1`, { borderColor: "#228b22", backgroundColor: "#f0fff0", shadowColor: "#000", shadowOpacity: 0.25, shadowOffset: { width: 1, height: 4 }, shadowRadius: 8, elevation: 8, borderWidth: 1.5 }, permitData.status === "invalid" && tw`opacity-50 bg-gray-100`]}
            >
              <Ionicons name="share-social-outline" size={20} color={permitData.status === "invalid" ? "#999" : "#228b22"} />
              <Text style={[tw`mt-1`, { color: permitData.status === "invalid" ? "#999" : "#228b22" }]}>Share</Text>
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            shadowColor: "#222",
            shadowOpacity: 0.35,
            shadowOffset: { width: 0, height: 6 },
            shadowRadius: 12,
            elevation: 8,
            backgroundColor: "#f7f7f7",
            borderRadius: 18,
            borderWidth: 1,
            borderColor: "#e0e0e0",
            padding: 16,
            marginBottom: 24,
            marginTop: 30,
          }}
        >
          <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>Permit Details</Text>

          <View style={tw`my-2`}>
            <View style={tw`flex-row justify-between py-2 border-b border-gray-200`}>
              <Text style={tw`text-gray-600`}>Permit ID</Text>
              <Text style={tw`font-medium text-gray-800`}>{permitData.permitId}</Text>
            </View>

            <View style={tw`flex-row justify-between py-2 border-b border-gray-200`}>
              <Text style={tw`text-gray-600`}>Exam Date</Text>
              <Text style={tw`font-medium text-gray-800`}>
                {new Date(permitData.examDate).toLocaleDateString()}
              </Text>
            </View>

            <View style={tw`flex-row justify-between py-2 border-b border-gray-200`}>
              <Text style={tw`text-gray-600`}>Year of Study</Text>
              <Text style={tw`font-medium text-gray-800`}>Year {permitData.yearOfStudy}</Text>
            </View>

            <View style={tw`flex-row justify-between py-2 border-b border-gray-200`}>
              <Text style={tw`text-gray-600`}>Semester</Text>
              <Text style={tw`font-medium text-gray-800`}>
                Semester {permitData.semester}
              </Text>
            </View>
          </View>

          <View style={tw`mt-3`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-3`}>Instructions</Text>
            <View
              style={{
                marginTop: 1,
                marginBottom: 10,
                shadowColor: "#505050",
                shadowOpacity: 0.35,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 12,
                elevation: 4,
                backgroundColor: "#eaf4fb",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#e0e0e0",
                padding: 16,
              }}
            >
              <View style={tw`my-2`}>
                <Text style={tw`text-gray-700`}>
                  • Present this permit along with your student ID
                </Text>
                <Text style={tw`text-gray-700`}>
                  • Arrive at least 15 minutes before the exam
                </Text>
                <Text style={tw`text-gray-700`}>
                  • Electronic devices are not allowed during the exam
                </Text>
                <Text style={tw`text-gray-700`}>
                  • The QR code will be scanned for verification
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}