import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { adminTheme } from "@/app/(admin)/_layout";
import type { ToastType } from "@/components/ui/useToast";

interface InvigilatorCardProps {
  invigilator: any;
  onEdit: () => void;
  onShowToast: (type: ToastType, message: string, subtext?: string) => void;
  onDelete: () => void; // <-- Add this line
}

export default function InvigilatorCard({
  invigilator,
  onEdit,
  onShowToast,
  onDelete, // <-- Add this line
}: InvigilatorCardProps) {
  return (
    <View
      style={{
        ...tw`p-4 mb-3 rounded-lg bg-white`,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      <View style={tw`flex-row items-center`}>
        <Image
          source={{ uri: invigilator.picture }}
          style={tw`w-12 h-12 rounded-full mr-4`}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`font-semibold text-base`}>
            {invigilator.title} {invigilator.lastName} {invigilator.firstName}
            {invigilator.otherNames ? ` ${invigilator.otherNames}` : ""}
          </Text>
          <Text style={tw`text-gray-500 text-sm`}>{invigilator.invigilatorNumber}</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Pressable style={tw`p-2 mr-1`} onPress={onEdit}>
            <Ionicons name="create-outline" size={20} color={adminTheme.primary} />
          </Pressable>
          <Pressable
            style={tw`p-2`}
            onPress={onDelete} // Call delete handler directly
          >
            <Ionicons name="trash-outline" size={20} color="#ef4444" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}