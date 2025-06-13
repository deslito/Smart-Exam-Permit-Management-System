import React from "react";
import { View, Text } from "react-native";
import QRCodeSVG from "react-native-qrcode-svg";

interface QRCodeProps {
  // value field will contain the UUID to encode in the QR code
  value: string;
  size?: number;
  className?: string;
}

export const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 100,
  className,
}) => {
  return (
    <View className={className}>
      <QRCodeSVG
        value={value}
        size={size}
      />
      <Text className="text-xs text-center mt-1 text-gray-500">Scan to verify</Text>
    </View>
  );
};
