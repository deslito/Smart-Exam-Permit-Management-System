import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  Pressable,
  Image,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { useAuth } from "@/contexts/AuthContext";
import { useStudents } from "@/contexts/StudentContext";
import { router } from "expo-router";
import ChangePasswordModal from "@/components/ChangePasswordModal";
import { useToast } from "@/components/ui/useToast";

export default function Profile() {
  const { user, logout } = useAuth();
  const { getStudent } = useStudents();
  const { showToast } = useToast();
  const [student, setStudent] = React.useState<any>(null);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isLogoutPressed, setIsLogoutPressed] = useState(false);
  const [isChangePressed, setIsChangePressed] = useState(false);

  // Animated values for scaling (mobile)
  const logoutScale = useRef(new Animated.Value(1)).current;
  const changeScale = useRef(new Animated.Value(1)).current;

  // Helper for scaling on mobile
  const handlePressIn = (scaleRef: Animated.Value, scaleTo: number) => {
    if (Platform.OS !== "web") {
      Animated.spring(scaleRef, { toValue: scaleTo, useNativeDriver: true }).start();
    }
  };
  const handlePressOut = (scaleRef: Animated.Value) => {
    if (Platform.OS !== "web") {
      Animated.spring(scaleRef, { toValue: 1, useNativeDriver: true }).start();
    }
  };

  React.useEffect(() => {
    if (user?.id) {
      getStudent(user.id).then(setStudent);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      setStudent(null);
      setIsPasswordModalVisible(false);
      router.replace("/chooseRole");
    } catch (error) {
      console.error("Logout error:", error);
      showToast("error", "Failed to logout");
    }
  };

  if (!student) return null;

  const initial = student.firstName.charAt(0).toUpperCase();

  return (
    <View style={[tw`flex-1`, { backgroundColor: "#f0fff0" }]}>
      {/* Header */}
      <View
        style={[
          tw`p-6 rounded-b-3xl`,
          {
            backgroundColor: "#228b22",
            shadowColor: "#000",
            shadowOpacity: 0.2,
          },
        ]}
      >
        <Text style={[tw`text-2xl font-bold text-white`]}>Profile</Text>
      </View>

      <ScrollView style={tw`flex-1 p-4`}>
        <View style={tw`max-w-2xl mx-auto w-full`}>
          {/* Profile Picture */}
          <View style={tw`items-center mb-6`}>
            {student.picture ? (
              <Image
                source={{ uri: student.picture }}
                style={tw`w-24 h-24 rounded-full mb-2`}
                resizeMode="cover"
              />
            ) : (
              <View
                style={tw`bg-blue-600 w-24 h-24 rounded-full items-center justify-center mb-2`}
              >
                <Text style={tw`text-white text-4xl font-bold`}>{initial}</Text>
              </View>
            )}
            <Text style={tw`text-xl font-bold text-gray-800`}>
              {student.lastName} {student.firstName}
            </Text>
            <Text style={tw`text-gray-600`}>{student.studentNo}</Text>
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
                value={`${student.firstName} ${student.lastName}`}
              />
              <InfoRow label="Registration Number" value={student.regNo} />
              <InfoRow
                label="Current Semester"
                value={student.currentSemester === "ONE" ? "I" : "II"}
              />
              <InfoRow label="Email" value={user?.email || ""} />
            </View>
          </View>

          {/* Academic Information */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>
              Academic Information
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
                label="Program"
                value={student.programme?.course.name || ""}
              />
              <InfoRow label="Year" value={`${student.studyYear}rd Year`} />
              <InfoRow label="Status" value="Active" />
            </View>
          </View>

          {/* Security */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>
              Security
            </Text>
            <View style={tw`bg-white rounded-lg border border-gray-200`}>
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
                        backgroundColor: hovered || pressed ? "#e6ffe6" : "#f0fff0",
                        transform: [{ scale: hovered || pressed ? 1.1 : 1 }],
                        minWidth: 120,
                      },
                    ]}
                    onPress={() => setIsPasswordModalVisible(true)}
                  >
                    <Feather name="lock" size={16} color="#228b22" style={tw`mr-2`} />
                    <Text style={tw`text-[#228b22] font-medium`}>Change</Text>
                  </Pressable>
                ) : (
                  <Animated.View style={{ transform: [{ scale: changeScale }] }}>
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
                          backgroundColor: isChangePressed ? "#e6ffe6" : "#f0fff0",
                          minWidth: 120,
                        },
                      ]}
                    >
                      <Feather name="lock" size={16} color="#228b22" style={tw`mr-2`} />
                      <Text style={tw`text-[#228b22] font-medium`}>Change</Text>
                    </Pressable>
                  </Animated.View>
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
                    backgroundColor: hovered || pressed ? "#e6ffe6" : "#fff",
                    borderColor: "#ef4444",
                    transform: [{ scale: hovered || pressed ? 1.02 : 1 }],
                  },
                ]}
              >
                <Feather name="log-out" size={20} color="#ef4444" />
                <Text style={[tw`ml-2 font-medium`, { color: "#ef4444" }]}>Logout</Text>
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
                  <Text style={[tw`ml-2 font-medium`, { color: "#ef4444" }]}>Logout</Text>
                </Pressable>
              </Animated.View>
            )}
          </View>
        </View>
      </ScrollView>

      <ChangePasswordModal
        isVisible={isPasswordModalVisible}
        onClose={() => setIsPasswordModalVisible(false)}
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
