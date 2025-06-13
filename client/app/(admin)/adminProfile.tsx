import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  Platform,
  Animated,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { adminTheme } from "./_layout";
import ChangePasswordModal from "@/components/ChangePasswordModal";
import { useAuth } from "@/contexts/AuthContext";
import { useAdmins } from "@/contexts/AdminContext";
import { router } from "expo-router";
import { useToast } from "@/components/ui/useToast";

export default function AdminProfile() {
  const { user, logout } = useAuth();
  const { getAdmin } = useAdmins();
  const [admin, setAdmin] = React.useState<any>(null);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isLogoutPressed, setIsLogoutPressed] = useState(false);
  const [isChangePressed, setIsChangePressed] = useState(false);
  const logoutScale = useRef(new Animated.Value(1)).current;
  const changeScale = useRef(new Animated.Value(1)).current;
  const { showToast } = useToast();

  React.useEffect(() => {
    if (user?.id) {
      getAdmin(user.id).then(setAdmin);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      setAdmin(null);
      setIsPasswordModalVisible(false);
      router.replace("/chooseRole");
    } catch (error) {
      console.error("Logout error:", error);
      showToast("error", "Failed to logout");
    }
  };

  const handlePressIn = (scaleRef: Animated.Value, scaleTo: number) => {
    if (Platform.OS !== "web") {
      Animated.spring(scaleRef, {
        toValue: scaleTo,
        useNativeDriver: true,
      }).start();
    }
  };
  const handlePressOut = (scaleRef: Animated.Value) => {
    if (Platform.OS !== "web") {
      Animated.spring(scaleRef, { toValue: 1, useNativeDriver: true }).start();
    }
  };

  const initial = admin?.firstName?.charAt(0).toUpperCase();

  return (
    <View style={tw`flex-1 bg-[${adminTheme.bg}]`}>
      <ScrollView style={tw`flex-1 p-4`}>
        <View style={tw`max-w-2xl mx-auto w-full`}>
          {/* Header */}
          <Text style={tw`text-2xl font-bold mb-4 mt-2`}>Profile</Text>
          <View style={tw`border-b border-gray-200 mb-6`} />

          {/* Avatar and Name */}
          <View style={tw`items-center mb-6`}>
            {admin?.picture ? (
              <Image
                source={{ uri: admin.picture }}
                style={tw`w-24 h-24 rounded-full mb-2`}
                resizeMode="cover"
              />
            ) : null}
            <Text style={tw`text-xl font-bold text-gray-800`}>
              {admin?.lastName || ""} {admin?.firstName || ""}
            </Text>
            <Pressable
              className="flex-row items-center justify-center mt-3 px-4 py-2 rounded-lg border border-gray-200 bg-white w-full max-w-xs"
              android_ripple={{ color: "#e5e7eb" }}
              style={{ alignSelf: "center" }}
            >
              <Feather name="edit-2" size={16} color={adminTheme.primary} />
              <Text
                className="ml-2"
                style={{ color: adminTheme.primary, fontWeight: "500" }}
              >
                Edit Profile
              </Text>
            </Pressable>
          </View>

          {/* Personal Information */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>
              Personal Information
            </Text>
            <View
              style={[
                tw`bg-white rounded-lg p-4 shadow-sm`,
                {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                  elevation: 5,
                },
              ]}
            >
              <InfoRow
                label="Full Name"
                value={`${admin?.firstName || ""} ${admin?.lastName || ""}`}
              />
              <InfoRow label="Email" value={user?.email || "-"} />
            </View>
          </View>

          {/* Security */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>
              Security
            </Text>
            <View
              style={[
                tw`bg-white rounded-lg p-4 shadow-sm`,
                {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                  elevation: 5,
                },
              ]}
            >
              <View style={tw`flex-row justify-between items-center`}>
                <View>
                  <Text style={tw`font-medium text-gray-800 text-base`}>
                    Password
                  </Text>
                  <Text style={tw`text-gray-500 text-sm`}>
                    Change your password
                  </Text>
                </View>
                {Platform.OS === "web" ? (
                  <Pressable
                    style={({ hovered, pressed }) => [
                      tw`flex-row items-center px-4 py-2 rounded-lg`,
                      {
                        backgroundColor:
                          hovered || pressed ? "#c4e2ff" : "#f0f8ff",
                        transform: [{ scale: hovered || pressed ? 1.1 : 1 }],
                        minWidth: 120,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 6,
                      },
                    ]}
                    onPress={() => setIsPasswordModalVisible(true)}
                  >
                    <Feather
                      name="lock"
                      size={16}
                      color="#0057B7"
                      style={tw`mr-2`}
                    />
                    <Text style={tw`text-[#0057B7] font-medium`}>Change</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    style={[
                      tw`flex-row items-center px-4 py-2 rounded-lg`,
                      {
                        backgroundColor: "#f0f8ff",
                        minWidth: 120,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 6,
                      },
                    ]}
                    onPress={() => setIsPasswordModalVisible(true)}
                  >
                    <Feather
                      name="lock"
                      size={16}
                      color="#0057B7"
                      style={tw`mr-2`}
                    />
                    <Text style={tw`text-[#0057B7] font-medium`}>Change</Text>
                  </Pressable>
                )}
              </View>
            </View>
          </View>

          {/* Logout Button */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            {Platform.OS === "web" ? (
              <Pressable
                onPress={handleLogout}
                style={({ hovered, pressed }) => [
                  tw`flex-row items-center justify-center py-3 rounded-lg mb-8 border`,
                  {
                    backgroundColor: hovered || pressed ? "#f0f8ff" : "#fff",
                    borderColor: "#ef4444",
                    transform: [{ scale: hovered || pressed ? 1.02 : 1 }],
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 6,
                  },
                ]}
              >
                <Feather name="log-out" size={20} color="#ef4444" />
                <Text style={[tw`ml-2 font-medium`, { color: "#ef4444" }]}>
                  Logout
                </Text>
              </Pressable>
            ) : (
              <Animated.View style={{ transform: [{ scale: logoutScale }] }}>
                <Pressable
                  onPress={handleLogout}
                  onPressIn={() => {
                    setIsLogoutPressed(true);
                    handlePressIn(logoutScale, 1.02);
                  }}
                  onPressOut={() => {
                    setIsLogoutPressed(false);
                    handlePressOut(logoutScale);
                  }}
                  style={[
                    tw`flex-row items-center justify-center py-3 rounded-lg mb-8 border`,
                    {
                      backgroundColor: isLogoutPressed ? "#f0f8ff" : "#fff",
                      borderColor: "#ef4444",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 4,
                      elevation: 6,
                    },
                  ]}
                >
                  <Feather name="log-out" size={20} color="#ef4444" />
                  <Text style={[tw`ml-2 font-medium`, { color: "#ef4444" }]}>
                    Logout
                  </Text>
                </Pressable>
              </Animated.View>
            )}
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

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={tw`flex-row justify-between py-2 border-b border-gray-100`}>
    <Text style={tw`text-gray-600`}>{label}</Text>
    <Text style={tw`font-medium text-gray-800`}>{value}</Text>
  </View>
);
