import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert, Platform } from "react-native";
import { useAuth } from "@/contexts/AuthContext";
import { useStudents, Student, EnrolledUnit } from "@/contexts/StudentContext";
import { PermitCard } from "@/components/PermitData";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from 'expo-file-system';
import { StorageAccessFramework } from 'expo-file-system';
import tw from "twrnc";
import { generatePermitHtml } from "@/components/GeneratePdf";

export default function PermitPage() {
  const { user } = useAuth(); // assuming user.id is the student id
  const { getStudent, loading: studentsLoading } = useStudents();

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
      examDate: new Date().toISOString().split('T')[0],
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
      Alert.alert("Error", "Could not generate PDF");
    }
  };

  const handleDownload = async () => {
    try {
      const uri = await generatePdf();
      if (!uri) return;

      if (Platform.OS === "web") {
        const html = await generatePermitHtml(permitData);
        const { base64 } = await Print.printToFileAsync({ 
          html,
          base64: true 
        });
        
        const link = document.createElement("a");
        link.href = `data:application/pdf;base64,${base64}`;
        link.download = `ExamPermit_${permitData.regNumber}.pdf`;
        link.click();
      } else {
        // Mobile download
        const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
        
        if (permissions.granted) {
          const base64 = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          
          const fileUri: string = await StorageAccessFramework.createFileAsync(
            permissions.directoryUri,
            `ExamPermit_${permitData.regNumber}.pdf`,
            'application/pdf'
          );
          
          await FileSystem.writeAsStringAsync(fileUri, base64, {
            encoding: FileSystem.EncodingType.Base64,
          });
          Alert.alert('Success', 'Permit saved successfully');
        } else {
          await Sharing.shareAsync(uri, {
            mimeType: "application/pdf",
            UTI: "com.adobe.pdf",
            dialogTitle: "Save your Exam Permit",
          });
        }
      }
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Error', 'Failed to download permit');
    }
  };

  const handlePrint = async () => {
    try {
      const html = await generatePermitHtml(permitData);
      if (Platform.OS === 'web') {
        // For web, use the native browser print
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write(html);
          printWindow.document.close();
          printWindow.print();
          printWindow.close();
        }
      } else {
        // Mobile printing
        const printer = await Print.selectPrinterAsync();
        await Print.printAsync({
          html,
          printerUrl: printer?.url,
          orientation: 'portrait',
          margins: { 
            left: 20,
            top: 20,
            right: 20,
            bottom: 20
          }
        });
      }
    } catch (error) {
      console.error('Print error:', error);
      Alert.alert('Error', 'Failed to print permit');
    }
  };

  const handleShare = async () => {
    try {
      if (Platform.OS === "web") {
        const html = await generatePermitHtml(permitData);
        const { base64 } = await Print.printToFileAsync({ 
          html,
          base64: true 
        });
        
        if (navigator.share) {
          const blob = await (await fetch(`data:application/pdf;base64,${base64}`)).blob();
          const file = new File([blob], `ExamPermit_${permitData.regNumber}.pdf`, { type: 'application/pdf' });
          await navigator.share({
            files: [file],
            title: 'Exam Permit',
          });
        } else {
          // Fallback to download if sharing not supported
          handleDownload();
        }
      } else {
        const uri = await generatePdf();
        if (!uri) return;
        if (!(await Sharing.isAvailableAsync())) {
          return Alert.alert("Error", "Sharing not available");
        }
        await Sharing.shareAsync(uri, { mimeType: "application/pdf" });
      }
    } catch (error) {
      console.error("Share error:", error);
      Alert.alert("Error", "Failed to share permit");
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
      <ScrollView
        contentContainerStyle={tw`p-4`}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={tw`text-center text-lg font-bold text-green-800 mb-2`}>
          Your Examination Permit
        </Text>
        <PermitCard permitData={permitData} />
        
        {/* Outstanding Balance Warning */}
        {permitData.status === "invalid" && (
          <View style={[
            tw`p-4 rounded-lg my-4 bg-red-50 border border-red-200`,
            {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }
          ]}>
            <View style={tw`flex-row items-center mb-1`}>
              <Ionicons name="alert-circle-outline" size={20} color="#ef4444" />
              <Text style={tw`ml-2 font-bold text-red-500`}>Outstanding Balance</Text>
            </View>
            <Text style={tw`text-red-600`}>
              You have an outstanding balance. Please clear your fees to download the permit.
            </Text>
          </View>
        )}

        {/* Action Buttons */}
        <View style={tw`flex-row justify-between mt-4`}>
          <TouchableOpacity
            onPress={handleDownload}
            disabled={permitData.status === "invalid"}
            style={[
              tw`flex-1 items-center py-2 rounded-lg border mr-1`,
              {
                borderColor: "#228b22",
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
                elevation: 4, // Android shadow
              },
              permitData.status === "invalid" && tw`opacity-50 bg-gray-100`,
            ]}
          >
            <Feather 
              name="download" 
              size={20} 
              color={permitData.status === "invalid" ? "#999" : "#228b22"} 
            />
            <Text style={[
              tw`mt-1`,
              { color: permitData.status === "invalid" ? "#999" : "#228b22" }
            ]}>Download</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePrint}
            disabled={permitData.status === "invalid"}
            style={[
              tw`flex-1 items-center py-2 rounded-lg border mx-1`,
              {
                borderColor: "#228b22",
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
                elevation: 4, // Android shadow
              },
              permitData.status === "invalid" && tw`opacity-50 bg-gray-100`,
            ]}
          >
            <Feather 
              name="printer" 
              size={20} 
              color={permitData.status === "invalid" ? "#999" : "#228b22"} 
            />
            <Text style={[
              tw`mt-1`,
              { color: permitData.status === "invalid" ? "#999" : "#228b22" }
            ]}>Print</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleShare}
            disabled={permitData.status === "invalid"}
            style={[
              tw`flex-1 items-center py-2 rounded-lg border ml-1`,
              {
                borderColor: "#228b22",
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
                elevation: 4, // Android shadow
              },
              permitData.status === "invalid" && tw`opacity-50 bg-gray-100`,
            ]}
          >
            <Ionicons 
              name="share-social-outline" 
              size={20} 
              color={permitData.status === "invalid" ? "#999" : "#228b22"} 
            />
            <Text style={[
              tw`mt-1`,
              { color: permitData.status === "invalid" ? "#999" : "#228b22" }
            ]}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* Permit Details Section */}
        {/* <View style={tw`mt-6 bg-gray-50 rounded-lg p-4`}> */}
                {/* Permit Details Section */}
        <View style={tw`mt-6 bg-gray-50 rounded-lg p-4`}>
          <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>Permit Details</Text>
          
          <View style={tw`space-y-2`}>
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
              <Text style={tw`font-medium text-gray-800`}>Semester {permitData.semester}</Text>
            </View>
          </View>

          {/* Instructions */}
          <View style={tw`mt-6`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-3`}>Instructions</Text>
            <View style={tw`bg-blue-50 p-4 rounded-lg`}>
              <View style={tw`space-y-2`}>
                <Text style={tw`text-gray-700`}>• Present this permit along with your student ID</Text>
                <Text style={tw`text-gray-700`}>• Arrive at least 15 minutes before the exam</Text>
                <Text style={tw`text-gray-700`}>• Electronic devices are not allowed during the exam</Text>
                <Text style={tw`text-gray-700`}>• The QR code will be scanned for verification</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}