import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Pressable,
  Image,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { useAuth } from "@/contexts/AuthContext";
import { useInvigilators } from "@/contexts/InvigilatorContext"; // Updated context
import { router } from "expo-router";
import ChangePasswordModal from "@/components/ChangePasswordModal";
import { useToast } from "@/components/ui/useToast";
import { invigilatorTheme } from "./_layout"; // Import invigilator theme

export default function Profile() {
  const { user, logout } = useAuth();
  const { getInvigilator } = useInvigilators(); // Updated hook
  const { showToast } = useToast();
  const [invigilator, setInvigilator] = React.useState<any>(null); // Updated state
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isLogoutPressed, setIsLogoutPressed] = useState(false);
  const [isChangePressed, setIsChangePressed] = useState(false);
  const logoutScale = useRef(new Animated.Value(1)).current;
  const changeScale = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (user?.id) {
      getInvigilator(user.id).then(setInvigilator); // Updated data fetching
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      setInvigilator(null);
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

  if (!invigilator) return null;

  const initial = invigilator.firstName.charAt(0).toUpperCase();

  return (
    <View style={[tw`flex-1`, { backgroundColor: invigilatorTheme.bg }]}>
      {/* Header */}
      <View
        style={[
          tw`p-6 rounded-b-3xl`,
          {
            backgroundColor: invigilatorTheme.primary,
            shadowColor: "#000",
            shadowOpacity: 0.2,
          },
        ]}
      >
        <Text style={[tw`text-2xl font-bold text-white`]}>Profile</Text>
      </View>

      <ScrollView style={tw`flex-1 p-4`}>
        <View style={tw`max-w-2xl mx-auto w-full`}>
          {/* Profile Avatar */}
          <View style={tw`items-center mb-6`}>
            {invigilator.picture ? (
              <Image
                source={{ uri: invigilator.picture }}
                style={tw`w-24 h-24 rounded-full mb-2`}
                resizeMode="cover"
              />
            ) : (
              // Optionally, you can render a placeholder view or leave this empty
              <View
                style={tw`w-24 h-24 rounded-full mb-2 bg-gray-300 items-center justify-center`}
              >
                <Text style={tw`text-4xl text-white font-bold`}>{initial}</Text>
              </View>
            )}
            <Text style={tw`text-xl font-bold text-gray-800`}>
              {invigilator.lastName} {invigilator.firstName}
            </Text>
            <Text style={tw`text-gray-600`}>{invigilator.staffId}</Text>
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
                value={`${invigilator.firstName} ${invigilator.lastName}`}
              />
              <InfoRow label="Staff ID" value={invigilator.invigilatorNumber || invigilator.id || "-"} />
              <InfoRow
                label="Department ID"
                value={invigilator.department?.id || invigilator.departmentId || "N/A"}
              />
              <InfoRow label="Email" value={invigilator.user?.email || user?.email || "-"} />
            </View>
          </View>

          {/* Security */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>
              Security
            </Text>
            <View
              style={[
                tw`bg-white rounded-lg border border-gray-200`,
                {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                  elevation: 5,
                },
              ]}
            >
              <View style={tw`flex-row justify-between items-center p-4`}>
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
                          hovered || pressed ? "#003366" : "#fff8f0",
                        transform: [{ scale: hovered || pressed ? 1.1 : 1 }],
                        minWidth: 120,
                      },
                    ]}
                    onPress={() => setIsPasswordModalVisible(true)}
                  >
                    <Feather
                      name="lock"
                      size={16}
                      color={invigilatorTheme.primary}
                      style={tw`mr-2`}
                    />
                    <Text
                      style={tw`text-[${invigilatorTheme.primary}] font-medium`}
                    >
                      Change
                    </Text>
                  </Pressable>
                ) : (
                  <Animated.View
                    style={{ transform: [{ scale: changeScale }] }}
                  >
                    <Pressable
                      onPress={() => setIsPasswordModalVisible(true)}
                      onPressIn={() => {
                        setIsChangePressed(true);
                        handlePressIn(changeScale, 1.1);
                      }}
                      onPressOut={() => {
                        setIsChangePressed(false);
                        handlePressOut(changeScale);
                      }}
                      style={[
                        tw`flex-row items-center px-4 py-2 rounded-lg`,
                        {
                          backgroundColor: isChangePressed
                            ? "#003366"
                            : "#fff8f0",
                          minWidth: 120,
                        },
                      ]}
                    >
                      <Feather
                        name="lock"
                        size={16}
                        color={invigilatorTheme.primary}
                        style={tw`mr-2`}
                      />
                      <Text
                        style={tw`text-[${invigilatorTheme.primary}] font-medium`}
                      >
                        Change
                      </Text>
                    </Pressable>
                  </Animated.View>
                )}
              </View>
            </View>
          </View>

          {/* Logout Button */}
          <View style={tw`max-w-2xl mx-auto w-full`}>
            {Platform.OS === "web" ? (
              <Pressable
                onPress={handleLogout}
                style={({ hovered, pressed }) => [
                  tw`flex-row items-center justify-center py-3 rounded-lg mb-8 border`,
                  {
                    backgroundColor: hovered || pressed ? "#fff8f0" : "#fff",
                    borderColor: "#ef4444",
                    transform: [{ scale: hovered || pressed ? 1.02 : 1 }],
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
                      backgroundColor: isLogoutPressed ? "#e6ffe6" : "#fff",
                      borderColor: "#ef4444",
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
        userRole="invigilator" // or get from context/user object
      />
    </View>
  );
}

// Helper component for info rows
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={tw`flex-row justify-between py-2 border-b border-gray-100`}>
    <Text style={tw`text-gray-600`}>{label}</Text>
    <Text style={tw`font-medium text-gray-800`}>{value}</Text>
  </View>
);
