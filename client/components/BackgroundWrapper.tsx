import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
  theme: { bg: string }; // Add theme prop
};

export default function BackgroundWrapper({ children, theme }: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.bg, // Use theme.bg for background color
      }}
    >
      <ImageBackground
        source={require("@/assets/images/kyambogoLogo.png")} // Ensure this is the correct path
        resizeMode="contain"
        style={StyleSheet.absoluteFill}
        imageStyle={{
          width: "100%",
          height: "100%",
          opacity: 0.05, // Optional: adjust transparency
          alignSelf: "center",
        }}
      />

      {/* Foreground Content */}
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}


