// app/_layout.tsx
import React from "react";
import "../global.css";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SafeAreaView, Platform } from "react-native";
import { Toaster } from "@/components/ui/toaster";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components/ui/customToast";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fff0" }}>
        <QueryClientProvider client={queryClient}>
      
          <TooltipProvider>
            <AuthProvider>
              <Stack
                initialRouteName="index"
                screenOptions={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
              
            </AuthProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </SafeAreaView>
      {Platform.OS === "web" ? <Toaster /> : <Toast config={toastConfig} />}
    </SafeAreaProvider>
  );
}
