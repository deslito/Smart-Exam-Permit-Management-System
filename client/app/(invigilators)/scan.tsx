import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  Animated,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import tw from "twrnc";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components/ui/customToast";
import { invigilatorTheme } from "./_layout";
import { Camera, CameraView, BarcodeScanningResult } from "expo-camera";
import * as Linking from 'expo-linking';
import { useStudents } from "@/contexts/StudentContext";

// Helper function for mobile detection
const isMobile = () => {
  if (Platform.OS !== "web") return true;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

// --- FuturisticDangerTriangleLoaderV2 component ---
function FuturisticDangerTriangleLoaderV2() {
  // Three animated dots orbiting a triangle, with a pulsing neon triangle and exclamation
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2200,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.15, duration: 900, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 900, useNativeDriver: true }),
      ])
    ).start();
  }, []);
  const rotate = rotateAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        {/* Neon triangle */}
        <View style={{ width: 120, height: 120, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{
            width: 0,
            height: 0,
            borderLeftWidth: 60,
            borderRightWidth: 60,
            borderBottomWidth: 104,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: invigilatorTheme.primary,
            opacity: 0.18,
            position: 'absolute',
            top: 0,
          }} />
          {/* Neon border triangle (simulate with 3 lines) */}
          <View style={{ position: 'absolute', top: 10, left: 10, right: 10, bottom: 10 }}>
            {/* Top border */}
            <View style={{ position: 'absolute', top: 0, left: 28, width: 44, height: 4, borderRadius: 2, backgroundColor: invigilatorTheme.primary, shadowColor: invigilatorTheme.primary, shadowOpacity: 0.7, shadowRadius: 8, elevation: 8 }} />
            {/* Left border */}
            <View style={{ position: 'absolute', left: 0, top: 8, width: 4, height: 64, borderRadius: 2, backgroundColor: '#00ffb2', shadowColor: '#00ffb2', shadowOpacity: 0.7, shadowRadius: 8, elevation: 8, transform: [{ rotate: '-60deg' }] }} />
            {/* Right border */}
            <View style={{ position: 'absolute', right: 0, top: 8, width: 4, height: 64, borderRadius: 2, backgroundColor: '#ff00e0', shadowColor: '#ff00e0', shadowOpacity: 0.7, shadowRadius: 8, elevation: 8, transform: [{ rotate: '60deg' }] }} />
          </View>
          {/* Exclamation mark with neon glow */}
          <Text style={{ color: invigilatorTheme.primary, fontWeight: 'bold', fontSize: 54, textShadowColor: '#fff', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 16, position: 'absolute', top: 38, left: 0, right: 0, textAlign: 'center', zIndex: 2 }}>!</Text>
          {/* Animated orbiting dots */}
          <Animated.View style={{ position: 'absolute', width: 120, height: 120, alignItems: 'center', justifyContent: 'center', transform: [{ rotate }] }}>
            {[0, 1, 2].map(i => {
              const angle = (i * 2 * Math.PI) / 3;
              const x = 48 * Math.cos(angle);
              const y = 48 * Math.sin(angle);
              return (
                <View key={i} style={{ position: 'absolute', left: 60 + x - 8, top: 60 + y - 8, width: 16, height: 16, borderRadius: 8, backgroundColor: i === 0 ? invigilatorTheme.primary : (i === 1 ? '#00ffb2' : '#ff00e0'), shadowColor: '#fff', shadowOpacity: 0.7, shadowRadius: 8, elevation: 8, borderWidth: 2, borderColor: '#fff' }} />
              );
            })}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
}

export default function ScanQRPage() {
  const router = useRouter();
  const { students } = useStudents(); // get all students from context
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [scanData, setScanData] = useState<string | null>(null);

  // For html5-qrcode
  const html5QrRef = useRef<HTMLDivElement>(null);
  const [html5QrLoaded, setHtml5QrLoaded] = useState(false);

  // Native mobile: ask for camera permission
  useEffect(() => {
    if (Platform.OS !== "web") {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }
  }, []);

  // Add function to handle navigation after scan
  const handleScanResult = async (data: string) => {
    setScanned(true);
    // Try to extract the QR code ID from the scanned URL
    const match = data.match(/\/qr\/([^/]+)/);
    const qrId = match ? match[1] : null;
    if (!qrId) {
      setScanData("Invalid QR code");
      setModalVisible(true);
      Toast.show({
        type: "error",
        text1: "Invalid QR Code",
        text2: "Could not extract student QR code ID"
      });
      return;
    }
    // Fetch the full student details by QR id (async, always up-to-date)
    let student: any = null;
    if (typeof useStudents === 'function' && useStudents().getStudentByQrId) {
      student = await useStudents().getStudentByQrId(qrId);
    } else if (students && Array.isArray(students)) {
      student = students.find((s: any) => s.qrId === qrId || s.id === qrId);
    }
    if (!student) {
      setScanData("Student not found");
      setModalVisible(true);
      Toast.show({
        type: "error",
        text1: "Student Not Found",
        text2: "No student matches this QR code."
      });
      return;
    }
    // Find the next enrolled exam (enrolledUnit) for today or upcoming
    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const upcomingUnits = (student.enrolledUnits || [])
      .filter((unit: any) => {
        // Find the exam date for this course unit
        const examDate = unit.examDate || unit.courseUnit?.examDate;
        if (!examDate) return false;
        return new Date(examDate) >= new Date(todayStr);
      })
      .sort((a: any, b: any) => {
        const aDate = new Date(a.examDate || a.courseUnit?.examDate);
        const bDate = new Date(b.examDate || b.courseUnit?.examDate);
        return aDate.getTime() - bDate.getTime();
      });
    const nextUnit = upcomingUnits[0];
    if (!nextUnit) {
      setScanData("No upcoming exam found for this student");
      setModalVisible(true);
      Toast.show({
        type: "error",
        text1: "No Upcoming Exam",
        text2: "This student has no upcoming exam."
      });
      return;
    }
    // Check approval and timing
    const isApproved = nextUnit.isInvigilatorApproved || nextUnit.approved || nextUnit.isApproved;
    const start = new Date(nextUnit.startTime || nextUnit.examDate || nextUnit.courseUnit?.examDate);
    const end = new Date(nextUnit.endTime || (start.getTime() + 2 * 60 * 60 * 1000)); // fallback: 2hr window
    if (!isApproved) {
      router.push('/(invigilators)/qr/WaitingForApproval');
      return;
    }
    if (now < start) {
      router.push('/(invigilators)/qr/WaitingForApproval');
      return;
    }
    if (now > end) {
      router.push('/(invigilators)/qr/ApprovalTimeExpired');
      return;
    }
    // Exam is approved and ongoing
    router.push({ pathname: '/(invigilators)/qr/[id]', params: { id: qrId } });
  };

  // Mobile web: load html5-qrcode and start scanner
  useEffect(() => {
    let qr: any = null;
    if (
      Platform.OS.toString() === "web" &&
      isMobile() &&
      html5QrRef.current &&
      !html5QrLoaded
    ) {
      import("html5-qrcode").then(({ Html5Qrcode }) => {
        qr = new Html5Qrcode("qr-reader");
        qr.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: 250,
          },
          (decodedText: string) => {
            handleScanResult(decodedText);
            qr.stop();
          },
          (error: any) => {
            // Ignore scan errors
          }
        );
        setHtml5QrLoaded(true);
      });
    }

    // Cleanup function to stop scanner when component unmounts
    return () => {
      if (qr) {
        qr.stop();
      }
    };
  }, [html5QrLoaded]);

  // Native mobile scan handler
  const handleBarCodeScanned = ({ data }: BarcodeScanningResult) => {
    if (!scanned) {
      handleScanResult(data);
    }
  };

  // To fix the black screen issue, add a cleanup effect and reset scanned state on focus
  useEffect(() => {
    // Reset states when component unmounts
    return () => {
      setScanned(false);
      setScanData(null);
      setModalVisible(false);
      setHtml5QrLoaded(false);
    };
  }, []);

  // Reset scanned state when the screen regains focus (for expo-router)
  useEffect(() => {
    const focusHandler = () => setScanned(false);
    window?.addEventListener?.('focus', focusHandler);
    return () => {
      window?.removeEventListener?.('focus', focusHandler);
    };
  }, []);

  // Desktop web: show error/instruction page with animation
  if (Platform.OS.toString() === "web" && !isMobile()) {
    return (
      <SafeAreaView style={tw`flex-1 bg-[${invigilatorTheme.bg}]`}>
        {/* Header restored */}
        <View style={[tw`p-6 rounded-b-3xl w-full`, { backgroundColor: invigilatorTheme.primary, shadowColor: "#000", shadowOpacity: 0.2 }]}> 
          <Text style={tw`text-2xl font-bold text-white`}>Scan QR Code</Text>
        </View>
        <View style={tw`flex-1 items-center justify-center p-4`}>        
          <FuturisticDangerTriangleLoaderV2 />
          <Text style={tw`text-2xl font-bold text-[${invigilatorTheme.accent}] mt-8 mb-2`}>QR Scanning Not Supported</Text>
          <Text style={tw`text-base text-gray-700 text-center mb-4`}>Please switch to a mobile device to scan QR codes.</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Mobile web: html5-qrcode
  if (Platform.OS.toString() === "web" && isMobile()) {
    return (
      <SafeAreaView style={tw`flex-1 bg-[${invigilatorTheme.bg}]`}>
        <View style={tw`flex-1 p-4 items-center`}>
          <Text
            style={tw`text-2xl font-bold mb-4 text-[${invigilatorTheme.accent}]`}
          >
            QR Code Scanner
          </Text>
          <div
            ref={html5QrRef}
            id="qr-reader"
            style={{ width: 300, height: 300, margin: "0 auto" }}
          />
          {/* Modal for scan result */}
          <Modal
            transparent
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <View
              style={tw`flex-1 bg-black bg-opacity-50 justify-center items-center`}
            >
              <View style={tw`bg-white p-6 rounded-lg w-3/4`}>
                <Text
                  style={tw`text-center font-bold mb-2 text-[${invigilatorTheme.primary}]`}
                >
                  Scan Complete
                </Text>
                <Text style={tw`text-center mb-4 text-gray-700`}>
                  {scanData ? `Data: ${scanData}` : "No data found."}
                </Text>
                <Pressable
                  style={tw`mt-2 bg-[${invigilatorTheme.primary}] py-2 rounded-lg`}
                  onPress={() => {
                    setModalVisible(false);
                    setScanned(false);
                  }}
                >
                  <Text style={tw`text-white text-center`}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }

  // Native mobile: expo-camera/next
  if (Platform.OS !== "web") {
    if (hasPermission === null) {
      return (
        <View
          style={tw`flex-1 justify-center items-center bg-[${invigilatorTheme.bg}]`}
        >
          {/* Header */}
          <View style={[tw`w-full p-6 rounded-b-3xl`, { backgroundColor: invigilatorTheme.primary, shadowColor: "#000", shadowOpacity: 0.2 }]}> 
            <Text style={tw`text-2xl font-bold text-white`}>Scan QR Code</Text>
          </View>
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
          {/* Header */}
          <View style={[tw`w-full p-6 rounded-b-3xl`, { backgroundColor: invigilatorTheme.primary, shadowColor: "#000", shadowOpacity: 0.2 }]}> 
            <Text style={tw`text-2xl font-bold text-white`}>Scan QR Code</Text>
          </View>
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
        {/* Themed header for mobile, matching web */}
        <View style={[tw`p-6 rounded-b-3xl w-full`, { backgroundColor: invigilatorTheme.primary, shadowColor: "#000", shadowOpacity: 0.2 }]}> 
          <Text style={tw`text-2xl font-bold text-white`}>Scan QR Code</Text>
        </View>
        <View style={tw`flex-1 p-4`}>
          <Text
            style={tw`text-2xl font-bold mb-4 text-[${invigilatorTheme.accent}]`}
          >
            QR Code Scanner
          </Text>
          <View style={tw`flex-1 items-center justify-center`}>
            <View
              style={tw`overflow-hidden rounded-2xl border-4 border-[${invigilatorTheme.primary}]`}
            >
              <CameraView
                style={{ width: 300, height: 300 }}
                barcodeScannerSettings={{
                  barcodeTypes: ["qr"],
                }}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                // Add key prop to force re-render
                key={scanned ? "scanning" : "not-scanning"}
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
        {/* Modal for scan result */}
        <Modal
          transparent
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={tw`flex-1 bg-black bg-opacity-50 justify-center items-center`}
          >
            <View style={tw`bg-white p-6 rounded-lg w-3/4`}>
              <Text
                style={tw`text-center font-bold mb-2 text-[${invigilatorTheme.primary}]`}
              >
                Scan Complete
              </Text>
              <Text style={tw`text-center mb-4 text-gray-700`}>
                {scanData ? `Data: ${scanData}` : "No data found."}
              </Text>
              <Pressable
                style={tw`mt-2 bg-[${invigilatorTheme.primary}] py-2 rounded-lg`}
                onPress={() => {
                  setModalVisible(false);
                  setScanned(false);
                }}
              >
                <Text style={tw`text-white text-center`}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Toast config={toastConfig} />
      </SafeAreaView>
    );
  }

  // fallback
  return null;
}
