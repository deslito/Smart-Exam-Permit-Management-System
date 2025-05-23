import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import { useToast } from "@/components/ui/useToast";
import { getAllFaculties } from "@/services/facultyService";

const theme = {
  primary: "#0057B7",
  hover: "#003366",
  bg: "#f0f8ff",
  accent: "#FFE600",
};

export default function AdminRegister() {
  const router = useRouter();
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [faculties, setFaculties] = useState<{ id: string; name: string }[]>([]);
  const [faculty, setFaculty] = useState<string>("");
  const [loadingFaculties, setLoadingFaculties] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoadingFaculties(true);
        const data = await getAllFaculties();
        setFaculties(data);
        setFaculty(data[0]?.id || "");
      } catch (e: any) {
        showToast("error", "Failed to load faculties", e?.message || "Could not fetch faculties");
      } finally {
        setLoadingFaculties(false);
      }
    })();
  }, []);

  // Animation for button
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || !faculty) {
      showToast("warning", "Missing fields", "Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      showToast("error", "Password mismatch", "Passwords do not match");
      return;
    }
    setIsRegistering(true);
    try {
      // TODO: Call backend registration endpoint
      // await adminService.createAdmin({ email, password, faculty });
      showToast("success", "Registration successful", "You can now log in as admin.");
      router.replace("/loginPage?role=admin");
    } catch (err: any) {
      showToast("error", "Registration failed", err?.message || "Could not register admin.");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <BackgroundWrapper theme={theme}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1 justify-center items-center px-6"
      >
        <View className="w-full max-w-md" style={{ flexGrow: 1, justifyContent: "center" }}>
          <View className="items-center mb-8 space-y-2">
            <Text className="text-3xl font-bold" style={{ color: theme.primary }}>
              Admin Registration
            </Text>
            <Text className="text-base text-gray-600">Create a new admin account</Text>
          </View>

          <View className="bg-white p-6 rounded-2xl shadow-md space-y-5"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            {/* Email */}
            <View>
              <Text className="text-sm font-medium text-gray-700 mb-1">Email</Text>
              <TextInput
                className="rounded-md px-3 py-2 text-base"
                style={{
                  backgroundColor: theme.bg,
                  borderColor: theme.primary,
                  borderWidth: 1,
                  borderBottomColor: theme.primary,
                  borderBottomWidth: 3,
                  marginBottom: 8,
                }}
                placeholder="Enter admin email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#888"
                selectionColor={theme.primary}
              />
            </View>

            {/* Password */}
            <View>
              <Text className="text-sm font-medium text-gray-700 mb-1">Password</Text>
              <View className="relative">
                <TextInput
                  className="rounded-md px-3 py-2 text-base"
                  style={{
                    backgroundColor: theme.bg,
                    borderColor: theme.primary,
                    borderWidth: 1,
                    borderBottomColor: theme.primary,
                    borderBottomWidth: 3,
                    marginBottom: 8,
                    paddingRight: 40,
                  }}
                  placeholder="Enter password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#888"
                  selectionColor={theme.primary}
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: 10, top: "50%", transform: [{ translateY: -12 }] }}
                >
                  {showPassword ? (
                    <Ionicons name="eye-off" size={22} color="black" />
                  ) : (
                    <Ionicons name="eye" size={22} color="black" />
                  )}
                </Pressable>
              </View>
            </View>

            {/* Confirm Password */}
            <View>
              <Text className="text-sm font-medium text-gray-700 mb-1">Confirm Password</Text>
              <View className="relative">
                <TextInput
                  className="rounded-md px-3 py-2 text-base"
                  style={{
                    backgroundColor: theme.bg,
                    borderColor: theme.primary,
                    borderWidth: 1,
                    borderBottomColor: theme.primary,
                    borderBottomWidth: 3,
                    marginBottom: 8,
                    paddingRight: 40,
                  }}
                  placeholder="Re-enter password"
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholderTextColor="#888"
                  selectionColor={theme.primary}
                />
                <Pressable
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ position: "absolute", right: 10, top: "50%", transform: [{ translateY: -12 }] }}
                >
                  {showConfirmPassword ? (
                    <Ionicons name="eye-off" size={22} color="black" />
                  ) : (
                    <Ionicons name="eye" size={22} color="black" />
                  )}
                </Pressable>
              </View>
            </View>

            {/* Faculty Dropdown */}
            <View>
              <Text className="text-sm font-medium text-gray-700 mb-1">Faculty</Text>
              <View
                className="rounded-md border"
                style={{
                  backgroundColor: theme.bg,
                  borderColor: theme.primary,
                  borderWidth: 1,
                  borderBottomColor: theme.primary,
                  borderBottomWidth: 3,
                  marginBottom: 8,
                }}
              >
                {loadingFaculties ? (
                  <ActivityIndicator color={theme.primary} />
                ) : faculties.length === 0 ? (
                  <Text style={{ padding: 12, color: '#888' }}>No faculties found</Text>
                ) : (
                  <Picker
                    selectedValue={faculty}
                    onValueChange={setFaculty}
                    style={{ backgroundColor: 'transparent', color: '#222' }}
                    itemStyle={{ color: '#222' }}
                  >
                    {faculties.map((fac) => (
                      <Picker.Item key={fac.id} label={fac.name} value={fac.id} />
                    ))}
                  </Picker>
                )}
              </View>
            </View>

            {/* Register Button */}
            <Animated.View style={[animatedStyle, { width: "100%" }]}>
              <Pressable
                onPressIn={() => { scale.value = withSpring(0.96); }}
                onPressOut={() => { scale.value = withSpring(1); }}
                onHoverIn={() => { scale.value = withSpring(1.03); }}
                onHoverOut={() => { scale.value = withSpring(1); }}
                onPress={handleRegister}
                disabled={isRegistering}
                className="w-full py-3 rounded-xl items-center mt-2"
                style={{
                  backgroundColor: theme.primary,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  borderWidth: 1,
                  borderColor: theme.accent,
                  opacity: isRegistering ? 0.7 : 1,
                }}
              >
                {isRegistering ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text className="text-white font-semibold text-base">Register</Text>
                )}
              </Pressable>
            </Animated.View>

            {/* Back to Login */}
            <View className="items-center mt-4">
              <Text className="text-sm text-gray-600">
                Already have an account?{' '}
                <Text
                  className="underline font-medium"
                  style={{ color: theme.primary }}
                  onPress={() => router.replace("/loginPage?role=admin")}
                >
                  Log In
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </BackgroundWrapper>
  );
}
