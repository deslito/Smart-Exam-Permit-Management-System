import 'dotenv/config';
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: "Kyambogo University Smart Exam Permit Management System",
  description: "This is a mobile application for managing exam permits at Kyambogo University. It allows students to generate and manage their exam permits efficiently.",
  slug: "kyambogo-university-smart-exam-permit-management-system",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  icon: "./assets/images/kyambogoLogo.png",
  splash: {
    image: "./assets/images/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.kyambogo.smartexampermit",
    infoPlist: {
      NSCameraUsageDescription: 'Allow Smart Exam Permit to access your camera to scan QR codes',
    },
  },
  android: {
    package: "com.deslito.smartexampermitapp",
    permissions: [
      'CAMERA',
      'READ_EXTERNAL_STORAGE',
      'WRITE_EXTERNAL_STORAGE'
    ],
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "server",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "expo-secure-store",
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "621d9f61-c9cc-4976-9e96-55982fc1c6f5",
    },
    EXPO_PUBLIC_API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL,
    EXPO_PUBLIC_ENV: process.env.EXPO_PUBLIC_ENV,
  },
  scheme: "kyambogoexamapp", // Short and clean deep linking scheme
  platforms: ["ios", "android", "web"],
});