import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import tw from "twrnc";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components/ui/customToast";
import { invigilatorTheme } from "./_layout";
import { Camera, CameraView, BarcodeScanningResult } from "expo-camera";
import { useStudents, EnrolledUnit, Student } from "@/contexts/StudentContext";
import type { Exam } from "@/contexts/AdminContext";
import { StudentScanDetails } from "@/components/StudentScanDetails";
import { Html5Qrcode } from "html5-qrcode";
import { getStudentExamsByQrIdAndDate } from "@/services/studentService";
import { NoExamToday } from "@/components/NoExamToday";
import { useAuth } from "@/contexts/AuthContext";
import { useInvigilators } from "@/contexts/InvigilatorContext";
import DesktopScanWarning from "@/components/invigilators/DesktopScanWarning";
import WaitingForApprovalModal from "@/components/invigilators/WaitingForApprovalModal";
import ApprovalTimeExpiredModal from "@/components/invigilators/ApprovalTimeExpiredModal";

// Helper function for mobile detection
const isMobile = () => {
  if (Platform.OS !== "web") return true;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

// Loader modal for after scanning
const LoaderModal = ({
  visible,
  message,
}: {
  visible: boolean;
  message: string;
}) => (
  <Modal
    transparent
    visible={visible}
    animationType="fade"
    onRequestClose={() => {}}
  >
    <View style={tw`flex-1 bg-black bg-opacity-50 justify-center items-center`}>
      <View
        style={tw`bg-white p-6 rounded-lg w-11/12 max-w-md m-4 items-center`}
      >
        <View
          style={tw`bg-[${invigilatorTheme.primary}] w-full rounded-t-lg mb-6`}
        >
          <Text style={tw`text-white text-xl font-bold text-center py-4`}>
            {message}
          </Text>
        </View>
        <ActivityIndicator size="large" color={invigilatorTheme.primary} />
        <Text style={tw`mt-4 text-gray-600 text-center`}>Please wait...</Text>
      </View>
    </View>
  </Modal>
);

export default function ScanQRPage() {
  const router = useRouter();
  const { getStudentByQrId, approveEnrolledCourseUnit } = useStudents();
  const { user } = useAuth();
  const { getInvigilator } = useInvigilators();
  const [invigilatorProfile, setInvigilatorProfile] = useState<any>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [scanData, setScanData] = useState<string | null>(null);
  const [student, setStudent] = useState<Student | null>(null);
  const [isApproving, setIsApproving] = useState(false);
  const [noExamModalVisible, setNoExamModalVisible] = useState(false);
  const [waitingForApprovalVisible, setWaitingForApprovalVisible] = useState(false);
  const [approvalExpiredVisible, setApprovalExpiredVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Checking Student & Exam"
  );
  const [currentExam, setCurrentExam] = useState<Exam | null>(null);
  const html5QrRef = useRef<HTMLDivElement>(null);
  const [html5QrLoaded, setHtml5QrLoaded] = useState(false);
  const [approvedUnit, setApprovedUnit] = useState<EnrolledUnit | null>(null);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  // Fetch invigilator profile on component mount
  useEffect(() => {
    if (user?.id) {
      getInvigilator(user.id)
        .then((data) => {
          if (data) {
            setInvigilatorProfile(data);
          }
        })
        .catch(() => {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: "Failed to load invigilator profile",
          });
        });
    }
  }, [user]);

  // Find enrolled unit for today's exam
  const findTodayEnrolledUnit = (
    student: Student,
    exams: Exam[]
  ): [EnrolledUnit | null, Exam | null] => {
    if (!student || !student.enrolledUnits || !exams || exams.length === 0)
      return [null, null];
    // Find the first exam for today
    const exam = exams[0];
    const enrolledUnit = student.enrolledUnits.find(
      (eu: EnrolledUnit) => eu.courseUnitId === exam.courseUnitId
    ) || null;
    return [enrolledUnit, exam];
  };

  // Check exam timing and approval status
  const checkExamStatus = (exam: Exam): 'waiting' | 'expired' | 'valid' => {
    const now = new Date();
    const startTime = new Date(exam.startTime);
    const endTime = new Date(exam.endTime);

    // If not approved and start time is within next hour, show waiting
    if (!exam.isApproved && now < startTime && startTime.getTime() - now.getTime() <= 3600000) {
      return 'waiting';
    }

    // If end time has passed, it's expired
    if (now > endTime) {
      return 'expired';
    }

    // If exam is approved and within time window, it's valid
    if (exam.isApproved && now >= startTime && now <= endTime) {
      return 'valid';
    }

    // In all other cases, show waiting
    return 'waiting';
  };

  // Approve handler
  const handleApprove = async () => {
    if (!approvedUnit) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "No enrolled unit to approve",
      });
      return;
    }

    if (!invigilatorProfile?.id) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Invigilator ID not found",
      });
      return;
    }

    setIsApproving(true);
    try {
      await approveEnrolledCourseUnit(approvedUnit.id, invigilatorProfile.id);

      const updatedStudent = await getStudentByQrId(scanData!);
      setStudent(updatedStudent);

      const updatedUnit = updatedStudent?.enrolledUnits?.find(
        (unit: any) => unit.id === approvedUnit.id
      );
      setApprovedUnit(updatedUnit || null);

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Student has been approved for the exam",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to approve student",
      });
    } finally {
      setIsApproving(false);
    }
  };

  // Request camera permission on mount
  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    requestPermission();
  }, []);

  // Cleanup HTML5 QR scanner
  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
        scannerRef.current = null;
      }
    };
  }, []);

  // Initialize HTML5 QR scanner
  useEffect(() => {
    if (
      Platform.OS === "web" &&
      isMobile() &&  // Changed condition to handle mobile web
      !html5QrLoaded &&
      html5QrRef.current &&
      !scannerRef.current
    ) {
      try {
        const scanner = new Html5Qrcode(html5QrRef.current.id);
        scannerRef.current = scanner;
        
        scanner
          .start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: 250,
            },
            async (decodedText: string) => {
              if (scannerRef.current) {
                scannerRef.current.stop().then(() => {
                  scannerRef.current = null;
                  setHtml5QrLoaded(false);
                  handleScan(decodedText);
                }).catch(() => {
                  // If stop fails, still proceed with scan
                  scannerRef.current = null;
                  setHtml5QrLoaded(false);
                  handleScan(decodedText);
                });
              }
            },
            () => {} // Ignore failures
          )
          .catch(() => {
            Toast.show({
              type: "error",
              text1: "Scanner Error",
              text2: "Failed to start QR scanner",
            });
            scannerRef.current = null;
            setHtml5QrLoaded(false);
          });
        setHtml5QrLoaded(true);
      } catch (err) {
        Toast.show({
          type: "error",
          text1: "Scanner Error",
          text2: "Failed to initialize QR scanner",
        });
        scannerRef.current = null;
        setHtml5QrLoaded(false);
      }
    }
  }, [html5QrRef.current, html5QrLoaded]);

  // Handle scan logic
  const handleScan = async (data: string) => {
    setScanned(true);
    setScanData(data);
    setModalVisible(false);
    setNoExamModalVisible(false);
    setWaitingForApprovalVisible(false);
    setApprovalExpiredVisible(false);
    setStudent(null);
    setApprovedUnit(null);
    setCurrentExam(null);
    setLoadingMessage("Checking Student & Exam");
    setLoading(true);

    try {
      // 1. Fetch student details
      setLoadingMessage("Fetching student details...");
      const studentData = await getStudentByQrId(data);
      if (studentData) {
        setStudent(studentData);
      }

      if (!studentData) {
        setLoading(false);
        Toast.show({
          type: "error",
          text1: "Invalid QR Code",
          text2: "No student found with this code",
        });
        return;
      }

      // 2. Check exams for today
      setLoadingMessage("Checking exam schedule...");
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      const todayStr = `${yyyy}-${mm}-${dd}`;

      const examResult = await getStudentExamsByQrIdAndDate(data, todayStr);

      setLoading(false);

      if (!examResult.exams || examResult.exams.length === 0) {
        setNoExamModalVisible(true);
        return;
      }

      // 3. Find matching enrolled unit for today's exam
      const [enrolledUnit, exam] = findTodayEnrolledUnit(studentData, examResult.exams);
      
      if (!enrolledUnit || !exam) {
        Toast.show({
          type: "error",
          text1: "No Enrolled Course Unit",
          text2: "Student is not enrolled for today's exam",
        });
        return;
      }

      setApprovedUnit(enrolledUnit);
      setCurrentExam(exam);

      // 4. Check exam status
      const examStatus = checkExamStatus(exam);
      
      if (examStatus === 'waiting') {
        setWaitingForApprovalVisible(true);
      } else if (examStatus === 'expired') {
        setApprovalExpiredVisible(true);
      } else {
        setModalVisible(true);
      }

    } catch (error) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to process QR code",
      });
    }
  };

  // Handle barcode scan
  const handleBarCodeScanned = async (result: BarcodeScanningResult) => {
    if (scanned) return;
    setScanned(true);
    await handleScan(result.data);
  };

  // Reset scanned state when the screen regains focus
  useEffect(() => {
    const focusHandler = () => {
      setScanned(false);
      setScanData(null);
    };
    window?.addEventListener?.("focus", focusHandler);
    return () => {
      window?.removeEventListener?.("focus", focusHandler);
    };
  }, []);
  const resetScanner = () => {
    setScanned(false);
    setScanData(null);
    setModalVisible(false);
    setNoExamModalVisible(false);
    setWaitingForApprovalVisible(false);
    setApprovalExpiredVisible(false);
    setStudent(null);
    setApprovedUnit(null);
    setCurrentExam(null);
    setLoading(false);
    setLoadingMessage("Checking Student & Exam");
    if (Platform.OS === "web") {
      // Stop current scanner instance if it exists
      if (scannerRef.current) {
        scannerRef.current.stop()
          .then(() => {
            scannerRef.current = null;
            setHtml5QrLoaded(false); // This will trigger scanner reinitialize
          })
          .catch(() => {
            scannerRef.current = null;
            setHtml5QrLoaded(false);
          });
      } else {
        setHtml5QrLoaded(false);
      }
    }
  };

  // Native mobile: expo-camera barcode scanning
  if (Platform.OS !== "web") {
    if (hasPermission === null) {
      return (
        <View
          style={tw`flex-1 justify-center items-center bg-[${invigilatorTheme.bg}]`}
        >
          <ActivityIndicator size="large" color={invigilatorTheme.primary} />
          <Text style={tw`mt-4 text-gray-700`}>
            Requesting camera permission...
          </Text>
        </View>
      );
    }
    if (hasPermission === false) {
      return (
        <View
          style={tw`flex-1 justify-center items-center bg-[${invigilatorTheme.bg}]`}
        >
          <Text style={tw`text-red-600`}>No access to camera</Text>
          <Pressable
            style={tw`mt-4 bg-[${invigilatorTheme.primary}] py-2 px-6 rounded-lg`}
            onPress={async () => {
              const { status } = await Camera.requestCameraPermissionsAsync();
              setHasPermission(status === "granted");
            }}
          >
            <Text style={tw`text-white font-semibold`}>Allow Camera</Text>
          </Pressable>
        </View>
      );
    }
    return (
      <SafeAreaView style={tw`flex-1 bg-[${invigilatorTheme.bg}]`}>
        {/* Header */}
        <View
          style={[
            tw`p-6 rounded-b-3xl w-full`,
            {
              backgroundColor: invigilatorTheme.primary,
              shadowColor: "#000",
              shadowOpacity: 0.2,
            },
          ]}
        >
          <Text style={tw`text-2xl font-bold text-white`}>Scan QR Code</Text>
        </View>
        <View style={tw`flex-1 p-4`}>
          {/* Instructions */}
          <View style={tw`mb-6`}>
            <Text style={tw`text-center text-gray-1000 text-base mb-2`}>
              Position the student's QR code within the frame
            </Text>
            <Text style={tw`text-center text-gray-500 text-sm`}>
              Make sure the code is well-lit and clearly visible
            </Text>
          </View>
          <View style={tw`items-center justify-center mb-4`}>
            <View
              style={tw`overflow-hidden rounded-2xl border-4 border-[${invigilatorTheme.primary}]`}
            >
              <CameraView
                style={{ width: 300, height: 300 }}
                barcodeScannerSettings={{
                  barcodeTypes: ["qr"],
                }}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
              />
            </View>
            {scanned && (
              <Pressable
                style={tw`mt-6 bg-[${invigilatorTheme.primary}] py-3 px-8 rounded-lg`}
                onPress={() => {
                  setScanned(false);
                  setScanData(null);
                }}
              >
                <Text style={tw`text-white font-semibold`}>Scan Again</Text>
              </Pressable>
            )}
          </View>
        </View>
        <StudentScanDetails
          visible={modalVisible}
          onClose={() => {
            setModalVisible(false);
            resetScanner();
          }}
          student={student}
          scanData={scanData}
          isApproving={isApproving}
          onApprove={handleApprove}
          approvedUnit={approvedUnit}
        />
        <NoExamToday
          visible={noExamModalVisible}
          onClose={() => {
            setNoExamModalVisible(false);
            resetScanner();
          }}
        />
        <LoaderModal visible={loading} message={loadingMessage} />
        <Toast config={toastConfig} />
        <WaitingForApprovalModal
          visible={waitingForApprovalVisible}
          onClose={() => {
            setWaitingForApprovalVisible(false);
            resetScanner();
          }}
        />
        <ApprovalTimeExpiredModal
          visible={approvalExpiredVisible}
          onClose={() => {
            setApprovalExpiredVisible(false);
            resetScanner();
          }}
        />
      </SafeAreaView>
    );
  }  // Web fallback
  if (Platform.OS === "web") {
    // For desktop web
    if (!isMobile()) {
      return <DesktopScanWarning />;
    }
    // For mobile web
    return (
      <SafeAreaView style={tw`flex-1 bg-[${invigilatorTheme.bg}]`}>
        <View
          style={[
            tw`p-6 rounded-b-3xl w-full`,
            { backgroundColor: invigilatorTheme.primary },
          ]}
        >
          <Text style={tw`text-2xl font-bold text-white`}>Scan QR Code</Text>
        </View>
          <View style={tw`flex-1 p-4 items-center`}>
            {/* Instructions */}
            <View style={tw`mb-6`}>
              <Text style={tw`text-center text-gray-700 text-base mb-2`}>
                Position the student's QR code within the frame
              </Text>
              <Text style={tw`text-center text-gray-500 text-sm`}>
                Make sure the code is well-lit and clearly visible
              </Text>
            </View>
            <div
              ref={html5QrRef}
              id="qr-reader"
              style={{
                width: 300,
                height: 300,
                margin: "0 auto",
                borderRadius: "16px",
                overflow: "hidden",
                border: `4px solid ${invigilatorTheme.primary}`,
              }}
            />
            {scanned && (
              <Pressable
                style={tw`mt-6 bg-[${invigilatorTheme.primary}] py-3 px-8 rounded-lg`}
                onPress={() => {
                  setScanned(false);
                  setScanData(null);
                  setHtml5QrLoaded(false); // This will trigger scanner reinitialize
                }}
              >
                <Text style={tw`text-white font-semibold`}>Scan Again</Text>
              </Pressable>
            )}
          </View>
          <StudentScanDetails
            visible={modalVisible}
            onClose={() => {
              setModalVisible(false);
              resetScanner();
            }}
            student={student}
            scanData={scanData}
            isApproving={isApproving}
            onApprove={handleApprove}
            approvedUnit={approvedUnit}
          />
          <NoExamToday
            visible={noExamModalVisible}
            onClose={() => {
              setNoExamModalVisible(false);
              resetScanner();
            }}
          />
          <LoaderModal visible={loading} message={loadingMessage} />
          <Toast config={toastConfig} />
          <WaitingForApprovalModal
            visible={waitingForApprovalVisible}
            onClose={() => {
              setWaitingForApprovalVisible(false);
              resetScanner();
            }}
          />
          <ApprovalTimeExpiredModal
            visible={approvalExpiredVisible}
            onClose={() => {
              setApprovalExpiredVisible(false);
              resetScanner();
            }}
          />
        </SafeAreaView>
      );
    }
    return (
      <View
        style={tw`flex-1 justify-center items-center bg-[${invigilatorTheme.bg}]`}
      >
        <Text style={tw`text-xl text-gray-700 mb-4`}>
          Please use a mobile device to scan QR codes
        </Text>
      </View>
    );
  return null;
}