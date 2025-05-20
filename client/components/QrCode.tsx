import React from "react";
import { View, Image, Text } from "react-native";

interface QRCodeProps {
  // value field will contain the cloudinary qrCode url stored in our StudentContext
  value: string;                   
  size?: number;
  className?: string;
}

export const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 100,
  className,
}) => {
  // Show QR Code *image from cloud/in-api, not remote renderer!*
  // Fallback for easily-identifiable missing value
  const cloudsccURL = value;
  // (Part of generic enhancement/adapt UI fit if ever nec)
  return (
    <View className={className}>
      <Image
        source={{ uri: cloudsccURL }}
        style={{
          width: size,
          height: size,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEDCC", // per glass / round quadradic look/colorlines
        }}
      />
      <Text className="text-xs text-center mt-1 text-gray-500">Scan to verify</Text>
    </View>
  );
};
