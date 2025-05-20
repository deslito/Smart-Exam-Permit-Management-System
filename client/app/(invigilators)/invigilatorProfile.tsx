import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Platform, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { useAuth } from "@/contexts/AuthContext";
import { useInvigilators } from "@/contexts/InvigilatorContext"; // Updated context
import { router } from "expo-router";
import ChangePasswordModal from '@/components/ChangePasswordModal';
import { useToast } from "@/components/ui/useToast";
import { invigilatorTheme } from "./_layout"; // Import invigilator theme

export default function Profile() {
  const { user, logout } = useAuth();
  const { getInvigilator } = useInvigilators(); // Updated hook
  const { showToast } = useToast();
  const [invigilator, setInvigilator] = React.useState<any>(null); // Updated state
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

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
      console.error('Logout error:', error);
      showToast('error', 'Failed to logout');
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
          { backgroundColor: invigilatorTheme.primary, shadowColor: "#000", shadowOpacity: 0.2 },
        ]}
      >
        <Text style={[tw`text-2xl font-bold text-white`]}>Profile</Text>
      </View>

      <ScrollView style={tw`flex-1 p-4`}>
        <View style={tw`max-w-2xl mx-auto w-full`}>
          {/* Profile Avatar */}
          <View style={tw`items-center mb-6`}>
            <View style={tw`bg-[${invigilatorTheme.primary}] w-24 h-24 rounded-full items-center justify-center mb-2`}>
              <Text style={tw`text-white text-4xl font-bold`}>{initial}</Text>
            </View>
            <Text style={tw`text-xl font-bold text-gray-800`}>{invigilator.firstName} {invigilator.lastName}</Text>
            <Text style={tw`text-gray-600`}>{invigilator.staffId}</Text>
            <TouchableOpacity style={tw`mt-2 flex-row items-center`}>
              <Feather name="edit-2" size={16} color={invigilatorTheme.primary} />
              <Text style={tw`ml-1 text-[${invigilatorTheme.primary}]`}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Personal Information */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>Personal Information</Text>
            <View style={[tw`bg-white rounded-lg p-4 shadow-sm`,
              {
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    elevation: 5,
                  }
            ]}>
              <InfoRow label="Full Name" value={`${invigilator.firstName} ${invigilator.lastName}`} />
              <InfoRow label="Staff ID" value={invigilator.staffId} />
              <InfoRow label="Department" value={invigilator.department || "N/A"} /> {/* Example */}
              <InfoRow label="Email" value={user?.email || ""} />
            </View>
          </View>

          {/* Security */}
          <View style={tw`mb-6 max-w-2xl w-full`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>Security</Text>
            <View style={tw`bg-white rounded-lg shadow-sm`}>
              <View 
                style={[
                  tw`flex-row justify-between items-center p-2 rounded-lg`,
                  {
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    elevation: 5,
                  }
                ]}
              >
                <View style={tw`flex-row items-center`}>
                  <View>
                    <Text style={tw`font-medium text-gray-800 text-base ml-3`}>Password</Text>
                    <Text style={tw`text-gray-500 text-sm ml-3`}>Change your password</Text>
                  </View>
                </View>
                <Pressable
                  style={({ hovered }) => [
                    tw`px-4 py-2 rounded-lg flex-row items-center`,
                    {
                      backgroundColor: hovered ? '#ffe6cc' : '#fff8f0', // Updated hover color
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.3,
                      shadowRadius: 2,
                      elevation: 4,
                      transform: [{ scale: hovered ? 1.1 : 1 }],
                      transitionDuration: Platform.OS === 'web' ? '200ms' : undefined,
                    }
                  ]}
                  onPress={() => setIsPasswordModalVisible(true)}
                >
                  <Feather name="lock" size={16} color={invigilatorTheme.primary} style={tw`mr-1`} />
                  <Text style={tw`text-[${invigilatorTheme.primary}] font-medium`}>Change</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Logout Button */}
          <View style={tw`max-w-2xl mx-auto w-full`}>
            <Pressable
              onPress={handleLogout}
              style={({ hovered }) => [
                tw`flex-row items-center justify-center p-3 rounded-lg mb-8`,
                {
                  backgroundColor: hovered ? '#ffe6cc' : '#fff', // Updated hover color
                  borderWidth: 1,
                  borderColor: hovered ? '#ef4444' : '#ef4444',
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 4,
                  transform: [{ scale: hovered ? 1.02 : 1 }],
                }
              ]}
            >
              <Feather name="log-out" size={20} color="#ef4444" />
              <Text style={[
                tw`ml-2 font-medium`,
                { color: '#ef4444' }
              ]}>Logout</Text>
            </Pressable>
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