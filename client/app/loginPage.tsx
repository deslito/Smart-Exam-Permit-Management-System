// app/loginPage.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  TextInputProps,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import KyambogoLogo from "@/assets/images/kyambogoLogo.png";
import { useToast } from "@/components/ui/useToast";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import { useAuth } from "@/contexts/AuthContext";
import tw from "twrnc";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

// Role-specific color themes
const roleThemes = {
  admin: {
    primary: "#0057B7",
    hover: "#003366",
    bg: "#f0f8ff",
    accent: "#FFE600",
  },
  invigilator: {
    primary: "#F7941D",
    hover: "#B6D531",
    bg: "#fff8f0",
    accent: "#003366",
  },
  student: {
    primary: "#B6D531",
    hover: "#0057B7",
    bg: "#f0fff0",
    accent: "#003366",
  },
} as const;

type RouteString = "/(admin)/adminDashboard" | "/(students)/studentDashboard" | "/(invigilators)/invigilatorDashboard";
const getRoleRoute = (role: string): RouteString => {
  const normalized = role.toLowerCase();
  const routes: Record<string, RouteString> = {
    admin: "/(admin)/adminDashboard",
    student: "/(students)/studentDashboard",
    invigilator: "/(invigilators)/invigilatorDashboard",
  };
  return routes[normalized] || "/(students)/studentDashboard";
};

// Themed TextInput component
interface ThemedTextInputProps extends TextInputProps {
  theme: { primary: string; bg: string };
}
function ThemedTextInput({ theme, style, ...rest }: ThemedTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      {...rest}
      className="rounded-md px-3 py-2 text-base"
      style={[
        {
          backgroundColor: theme.bg,
          borderColor: isFocused ? theme.primary : "#ccc",
          borderWidth: isFocused ? 2 : 1,
          borderBottomColor: theme.primary,
          borderBottomWidth: 4,
          ...Platform.select({ web: { outlineWidth: 0, outlineColor: "transparent" } }),
        },
        style,
      ]}
      placeholderTextColor="#888"
      underlineColorAndroid="transparent"
      selectionColor={theme.primary}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const { login } = useAuth();
  const { role } = useLocalSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const normalizedRole = Array.isArray(role) ? role[0] : role;
  const theme = roleThemes[normalizedRole as keyof typeof roleThemes] || roleThemes.student;

  const pageTitle =
    normalizedRole === "admin"
      ? "Admin Login"
      : normalizedRole === "invigilator"
      ? "Invigilator Login"
      : "Student Login";

  const placeholderEmail = `Enter ${normalizedRole} email`;
  const placeholderPassword = `Enter ${normalizedRole} password`;

  const handleSubmit = async () => {
    if (!email || !password) {
      showToast("warning", "Missing fields", "Please enter both email and password");
      return;
    }

    setIsLoggingIn(true);
    try {
      const authUser = await login(email, password);
      showToast("success", "Logged in", "Welcome back!");
      router.push(getRoleRoute(authUser.role));
    } catch (err: any) {
      console.error("Login failed:", err);
      showToast("error", "Login failed", err.message || "Invalid credentials.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  const gesture = Gesture.Tap()
    .onBegin(() => {
      scale.value = withSpring(0.95);
    })
    .onFinalize(() => {
      scale.value = withSpring(1);
    });

  return (
    <BackgroundWrapper theme={theme}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1 justify-center items-center px-6"
      >
        <View className="w-full max-w-md">
          {/* Logo + Titles */}
          <View className="items-center mb-8 space-y-2">
            <Image
              source={KyambogoLogo}
              style={tw`w-48 h-48`}
              resizeMode="contain"
            />
            <Text
              className="text-3xl font-bold"
              style={{ color: theme.primary }}
            >
              Kyambogo University
            </Text>
            <Text className="text-2xl font-semibold text-gray-600">
              {pageTitle}
            </Text>
            <Text className="text-sm text-gray-600">
              Sign in to access the system
            </Text>
          </View>

          {/* Form Container */}
          <View
            className="bg-white p-6 rounded-2xl shadow-md space-y-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            {/* Email */}
            <View style={Platform.OS === "ios" || Platform.OS === "android" ? tw`mb-4` : undefined}>
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Email
              </Text>
              <ThemedTextInput
                theme={theme}
                placeholder={placeholderEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                style={{
                  shadowColor: "#000", // Shadow color
                  shadowOffset: { width: 0, height: 2 }, // Shadow offset
                  shadowOpacity: 0.25, // Shadow opacity
                  shadowRadius: 3.84, // Shadow radius
                  elevation: 5, // Android shadow
                }}
              />
            </View>

            {/* Password */}
            <View style={Platform.OS === "ios" || Platform.OS === "android" ? tw`mb-4` : undefined}>
              <View className="flex-row justify-between items-center mb-1">
                <Text className="text-sm font-medium text-gray-700">
                  Password
                </Text>
                <Pressable
                  onPress={() =>
                    showToast(
                      "info",
                      "Coming soon",
                      "Password reset not yet available."
                    )
                  }
                >
                  <Text
                    className="text-sm underline font-medium"
                    style={{
                      color: theme.primary, // Always use theme.primary
                    }}
                  >
                    Forgot Password?
                  </Text>
                </Pressable>
              </View>
              <View className="relative">
                <ThemedTextInput
                  theme={theme}
                  placeholder={placeholderPassword}
                  secureTextEntry={!showPassword} // Toggle visibility
                  value={password}
                  onChangeText={setPassword}
                  style={{
                    shadowColor: "#000", // Shadow color
                    shadowOffset: { width: 0, height: 2 }, // Shadow offset
                    shadowOpacity: 0.25, // Shadow opacity
                    shadowRadius: 3.84, // Shadow radius
                    elevation: 5, // Android shadow
                    paddingRight: 40, // Add padding for the toggle icon
                  }}
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)} // Toggle password visibility
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: [{ translateY: -12 }],
                  }}
                >
                  {showPassword ? (
                    <Ionicons name="eye-off" size={24} color="black" /> // Icon for "Hide"
                  ) : (
                    <Ionicons name="eye" size={24} color="black" /> // Icon for "Show"
                  )}
                </Pressable>
              </View>
            </View>

            {/* Sign In Button */}
            <Animated.View style={[animatedStyle, { width: "100%" }]}>
              <Pressable
                onPressIn={() => {
                  scale.value = withSpring(0.96); // Shrink on press
                }}
                onPressOut={() => {
                  scale.value = withSpring(1); // Return to normal size
                }}
                onHoverIn={() => {
                  scale.value = withSpring(1.03); // Grow slightly on hover
                }}
                onHoverOut={() => {
                  scale.value = withSpring(1); // Return to normal size
                }}
                onPress={handleSubmit}
                disabled={isLoggingIn}
                className="w-full py-3 rounded-xl items-center mt-2"
                style={{
                  backgroundColor: theme.primary, // Dynamic color based on role
                  shadowColor: "#000", // Shadow color
                  shadowOffset: { width: 0, height: 2 }, // Shadow offset
                  shadowOpacity: 0.25, // Shadow opacity
                  shadowRadius: 3.84, // Shadow radius
                  elevation: 5, // Android shadow
                  borderWidth: 1, // Debugging border
                  borderColor: theme.accent, // Accent color for border
                  opacity: isLoggingIn ? 0.7 : 1,
                }}
              >
                {isLoggingIn ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text className="text-white font-semibold text-base">
                    Sign In
                  </Text>
                )}
              </Pressable>
            </Animated.View>

            {/* Footer Links */}
            <View className="items-center mt-4">
              {normalizedRole === "admin" ? (
                <Text className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Text
                    className="underline font-medium"
                    style={{
                      color: theme.primary, // Always use theme.primary
                    }}
                    onPress={() => router.push("./components/AdminRegister")}
                  >
                    Sign Up
                  </Text>
                </Text>
              ) : (
                <Text className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Text
                    className="underline font-medium"
                    style={{
                      color: theme.primary, // Always use theme.primary
                    }}
                    onPress={() => router.push("/contactAdmin")}
                  >
                    Contact your administrator
                  </Text>
                </Text>
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </BackgroundWrapper>
  );
}
