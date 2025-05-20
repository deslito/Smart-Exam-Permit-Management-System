// app/(admin)/adminDashboard.tsx
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import tw from "twrnc";
import { adminTheme } from "./_layout";

export default function AdminDashboard() {
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center bg-[${adminTheme.bg}]`}>
      <Text style={tw`text-2xl font-bold text-[${adminTheme.primary}]`}>Coming Soon!</Text>
    </SafeAreaView>
  );
}
