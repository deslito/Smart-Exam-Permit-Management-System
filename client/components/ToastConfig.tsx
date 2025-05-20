// components/ToastConfig.tsx
import React from "react";
import { Text, StyleSheet, Platform, View } from "react-native";
import { BlurView } from "expo-blur";
import { ToastConfig } from "react-native-toast-message";

const toastStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 20,
    marginTop: Platform.OS === "web" ? 30 : 50,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    shadowColor: "#000",
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  message: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#14213D",
    marginTop: 4,
  },
  errorContainer: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    borderColor: "rgba(255,0,0,0.3)",
  },
});

export const toastConfig: ToastConfig = {
  success: ({ text1, text2 }) => (
    <BlurView intensity={60} tint="light" style={toastStyles.container}>
      <Text style={toastStyles.title}>{text1}</Text>
      {text2 ? <Text style={toastStyles.message}>{text2}</Text> : null}
    </BlurView>
  ),
  error: ({ text1, text2 }) => (
    <BlurView
      intensity={100}
      tint="dark"
      style={[toastStyles.container, toastStyles.errorContainer]}
    >
      <Text style={toastStyles.title}>{text1}</Text>
      {text2 ? <Text style={toastStyles.message}>{text2}</Text> : null}
    </BlurView>
  ),
};
