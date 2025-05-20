import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import tw from "twrnc";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components/ui/customToast";
import { invigilatorTheme } from "./_layout";
import { Camera, CameraView, BarcodeScanningResult } from "expo-camera";
import * as Linking from 'expo-linking';

// Helper function for mobile detection
const isMobile = () => {
  if (Platform.OS !== "web") return true;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export default function ScanQRPage() {
  const router = useRouter();
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

  // Mobile web: load html5-qrcode and start scanner
  useEffect(() => {
    if (
      Platform.OS.toString() === "web" &&
      isMobile() &&
      html5QrRef.current &&
      !html5QrLoaded
    ) {
      import("html5-qrcode").then(({ Html5Qrcode }) => {
        const qr = new Html5Qrcode("qr-reader");
        qr.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: 250,
          },
          (decodedText: string) => {
            setScanData("Student Results Page Coming Soon!");
            setModalVisible(true);
            qr.stop();
            Toast.show({ 
              type: "info", 
              text1: "Coming Soon!",
              text2: "Student Results feature is under development" 
            });
          },
          (error: any) => {
            // Ignore scan errors
          }
        );
        setHtml5QrLoaded(true);
      });
    }
  }, [html5QrLoaded]);

  // Native mobile scan handler
  const handleBarCodeScanned = ({ data }: BarcodeScanningResult) => {
    setScanned(true);
    setScanData("Student Results Page Coming Soon!");
    setModalVisible(true);
    Toast.show({ 
      type: "success", 
      text1: "QR Code Scanned!",
      text2: "Student Results feature coming soon" 
    });
  };

  // Desktop web: show error/instruction page with animation
  if (Platform.OS.toString() === "web" && !isMobile()) {
    return (
      <SafeAreaView
        style={tw`flex-1 bg-[${invigilatorTheme.bg}] justify-center items-center`}
      >
        <View style={tw`items-center p-4`}>
          <iframe
            src="https://lottie.host/embed/scanQR/d4a41058-3d11-437a-80c7-b7fcec64b79b"
            style={{ width: 300, height: 300, border: "none" }}
            title="Scan QR Code Animation"
          />
          <Text
            style={tw`text-2xl font-bold text-[${invigilatorTheme.accent}] mt-4 mb-2`}
          >
            QR Scanning Not Supported
          </Text>
          <Text style={tw`text-base text-gray-700 text-center mb-4`}>
            Please switch to a mobile device to scan QR codes.
          </Text>
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
                onBarcodeScanned={
                  scanned
                    ? undefined
                    : (result: BarcodeScanningResult) => {
                        setScanned(true);
                        setScanData(result.data);
                        setModalVisible(true);
                        Toast.show({
                          type: "success",
                          text1: "QR Code Scanned!",
                        });
                      }
                }
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
