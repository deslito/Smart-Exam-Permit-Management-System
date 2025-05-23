import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Platform } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import ChangePasswordModal from "@/components/ChangePasswordModal";

const adminTheme = {
  primary: "#0057B7",
  accent: "#FFE600",
  bg: "#f0f8ff",
};

export default function AdminProfile() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

  // Mock admin data (replace with real data as needed)
  const admin = {
    firstName: "Admin",
    lastName: "User",
    email: "admin@kyu.edu",
  };

  const initial = admin.firstName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await logout?.();
    router.replace("/loginPage");
  };

  return (
    <View style={tw`flex-1 bg-[${adminTheme.bg}]`}>
      <ScrollView style={tw`flex-1 p-4`}>
        <View style={tw`max-w-2xl mx-auto w-full`}>
          {/* Header */}
          <Text style={tw`text-2xl font-bold mb-4 mt-2`}>Profile</Text>
          <View style={tw`border-b border-gray-200 mb-6`} />

          {/* Avatar and Name */}
          <View style={tw`items-center mb-6`}>
            <View style={tw`bg-[${adminTheme.primary}] w-24 h-24 rounded-full items-center justify-center mb-2`}>
              <Text style={tw`text-white text-4xl font-bold`}>{initial}</Text>
            </View>
            <Text style={tw`text-xl font-bold text-gray-800`}>{admin.lastName} {admin.firstName}</Text>
            <Pressable
              className="flex-row items-center justify-center mt-3 px-4 py-2 rounded-lg border border-gray-200 bg-white w-full max-w-xs"
              android_ripple={{ color: "#e5e7eb" }}
              style={{ alignSelf: "center" }}
            >
              <Feather name="edit-2" size={16} color={adminTheme.primary} />
              <Text className="ml-2" style={{ color: adminTheme.primary, fontWeight: "500" }}>Edit Profile</Text>
            </Pressable>
          </View>

          {/* Personal Information */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>Personal Information</Text>
            <View
              style={[
                tw`bg-white rounded-lg p-4 shadow-sm`,
                {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                  elevation: 5,
                }
              ]}
            >
              <InfoRow label="Full Name" value={`${admin.firstName} ${admin.lastName}`} />
              <InfoRow label="Email" value={admin.email} />
            </View>
          </View>

          {/* Security */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>Security</Text>
            <View
              style={[
                tw`bg-white rounded-lg shadow-sm`,
                {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                  elevation: 5,
                }
              ]}
            >
              <View
                style={tw`flex-row justify-between items-center p-2 rounded-lg`}
              >
                <View>
                  <Text style={tw`font-medium text-gray-800 text-base ml-3`}>Password</Text>
                  <Text style={tw`text-gray-500 text-sm ml-3`}>Change your password</Text>
                </View>
                <Pressable
                  style={({ hovered, pressed }) => [
                    tw`px-4 py-2 rounded-lg flex-row items-center`,
                    {
                      backgroundColor: hovered
                        ? "#e6f0ff"
                        : pressed
                        ? "#dbeafe"
                        : "#fff",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.3,
                      shadowRadius: 2,
                      elevation: 4,
                      transform: [{ scale: hovered || pressed ? 1.05 : 1 }],
                      transitionDuration: Platform.OS === "web" ? "200ms" : undefined,
                    },
                  ]}
                  onPress={() => setIsPasswordModalVisible(true)}
                >
                  <Ionicons name="lock-closed-outline" size={18} color={adminTheme.primary} />
                  <Text
                    style={[
                      tw`ml-2 font-medium`,
                      { color: adminTheme.primary }
                    ]}
                  >
                    Change
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Logout Button */}
          <View style={tw`max-w-2xl mx-auto w-full`}>
            <Pressable
              onPress={handleLogout}
              style={({ hovered, pressed }) => [
                tw`flex-row items-center justify-center p-3 rounded-lg mb-8`,
                {
                  backgroundColor: hovered
                    ? "#ffe6e6"
                    : pressed
                    ? "#fee2e2"
                    : "#fff",
                  borderWidth: 1,
                  borderColor: "#ef4444",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 4,
                  transform: [{ scale: hovered || pressed ? 1.02 : 1 }],
                  transitionDuration: Platform.OS === "web" ? "200ms" : undefined,
                },
              ]}
            >
              <Feather name="log-out" size={20} color="#ef4444" />
              <Text style={tw`ml-2 font-medium`} className="text-[#ef4444]">
                Logout
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <ChangePasswordModal
        isVisible={isPasswordModalVisible}
        onClose={() => setIsPasswordModalVisible(false)}
        userRole="admin"
      />
    </View>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={tw`flex-row justify-between py-2 border-b border-gray-100`}>
      <Text style={tw`text-gray-600`}>{label}</Text>
      <Text style={tw`font-medium text-gray-800`}>{value}</Text>
    </View>
  );
}