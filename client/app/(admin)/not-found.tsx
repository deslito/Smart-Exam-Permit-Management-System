import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <View style={tw`flex-1 bg-[#f7fafc] justify-center items-center px-6`}>
      <View style={tw`items-center mb-8`}>
        <View style={tw`bg-[#f1f5f9] rounded-full p-5 mb-6`}>
          <Ionicons name="warning-outline" size={48} color="#fbbf24" />
        </View>
        <Text style={tw`text-2xl font-bold text-gray-900 mb-2`}>Page Not Found</Text>
        <Text style={tw`text-base text-gray-500 text-center`}>
          The page you're looking for doesn't exist or has been moved.
        </Text>
      </View>
      <Pressable
        style={tw`bg-[#174ea6] px-6 py-3 rounded-lg mt-4`}
        onPress={() => router.replace("/(admin)/adminDashboard")}
      >
        <Text style={tw`text-white font-semibold text-base`}>Return to Dashboard</Text>
      </Pressable>
    </View>
  );
}