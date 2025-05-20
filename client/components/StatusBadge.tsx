import React from "react";
import { View, Text } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import tw from "twrnc";

type PermitStatus = "valid" | "invalid" | "expired" | "approved" | "pending";

interface StatusBadgeProps {
  status: PermitStatus;
  style?: any;
  showIcon?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  style,
  showIcon = true,
}) => {
  const statusMap: Record<
    PermitStatus,
    { label: string; icon: React.ReactNode; badgeStyle: any }
  > = {
    valid: {
      label: "VALID",
      icon: <FontAwesome name="check" size={14} color="white" />,
      badgeStyle: tw`bg-green-600`,
    },
    pending: {
      label: "PENDING",
      icon: (
        <MaterialCommunityIcons name="clock-outline" size={14} color="white" />
      ),
      badgeStyle: tw`bg-yellow-500`,
    },
    approved: {
      label: "APPROVED",
      icon: <FontAwesome name="check" size={14} color="white" />,
      badgeStyle: tw`bg-blue-600`,
    },
    expired: {
      label: "EXPIRED",
      icon: <Entypo name="circle-with-cross" size={14} color="white" />,
      badgeStyle: tw`bg-red-700`,
    },
    invalid: {
      label: "INVALID",
      icon: <Entypo name="circle-with-cross" size={14} color="white" />,
      badgeStyle: tw`bg-gray-500`,
    },
  };

  const { label, icon, badgeStyle } = statusMap[status] || statusMap["pending"];

  return (
    <View
      style={[
        tw`flex-row items-center px-2 py-1 rounded-full`,
        badgeStyle,
        style,
      ]}
    >
      {showIcon && <View style={tw`mr-1`}>{icon}</View>}
      <Text style={tw`text-xs text-white font-semibold`}>{label}</Text>
    </View>
  );
};
