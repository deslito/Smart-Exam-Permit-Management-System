import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { InvigilatorProvider } from "@/contexts/InvigilatorContext";
import { StudentProvider } from "@/contexts/StudentContext";
import { AdminProvider } from "@/contexts/AdminContext";
import { Toaster } from "@/components/ui/toaster";
import tw from "twrnc";

// Invigilator-specific theme
export const invigilatorTheme = {
  primary: "#F7941D", // Active tab color
  inactive: "#6B7280", // Inactive tab color (gray)
  bg: "#fff8f0", // Background color for hover effect
  accent: "#003366",
};

export default function InvigilatorLayout() {
  return (
    <AdminProvider>
      <InvigilatorProvider>
        <StudentProvider>
          <React.Fragment>
            <Tabs
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: invigilatorTheme.primary,
                tabBarInactiveTintColor: invigilatorTheme.inactive,
                tabBarStyle: {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  height: 70,
                  borderTopWidth: 1,
                  borderTopColor: "rgba(0, 0, 0, 0.1)",
                  // @ts-ignore
                  backdropFilter: "blur(10px)",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10,
                  elevation: 5,
                },
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: "600",
                },
              }}
            >
              <Tabs.Screen
                name="invigilatorDashboard"
                options={{
                  title: "Home",
                  tabBarIcon: ({ color, size, focused }) => (
                    <Pressable
                      style={({ pressed }) => [
                        tw`rounded-full p-2`,
                        pressed && { backgroundColor: invigilatorTheme.bg },
                      ]}
                    >
                      <Ionicons
                        name="home-outline"
                        color={focused ? invigilatorTheme.primary : color}
                        size={size}
                      />
                    </Pressable>
                  ),
                }}
              />
              <Tabs.Screen
                name="scan"
                options={{
                  title: "Scan",
                  tabBarIcon: ({ color, size, focused }) => (
                    <Pressable
                      style={({ pressed }) => [
                        tw`rounded-full p-2`,
                        pressed && { backgroundColor: invigilatorTheme.bg },
                      ]}
                    >
                      <Ionicons
                        name="scan-outline"
                        color={focused ? invigilatorTheme.primary : color}
                        size={size}
                      />
                    </Pressable>
                  ),
                }}
              />
              <Tabs.Screen
                name="scanHistory"
                options={{
                  title: "History",
                  tabBarIcon: ({ color, size, focused }) => (
                    <Pressable
                      style={({ pressed }) => [
                        tw`rounded-full p-2`,
                        pressed && { backgroundColor: invigilatorTheme.bg },
                      ]}
                    >
                      <Ionicons
                        name="time-outline"
                        color={focused ? invigilatorTheme.primary : color}
                        size={size}
                      />
                    </Pressable>
                  ),
                }}
              />
              <Tabs.Screen
                name="invigilatorProfile"
                options={{
                  title: "Profile",
                  tabBarIcon: ({ color, size, focused }) => (
                    <Pressable
                      style={({ pressed }) => [
                        tw`rounded-full p-2`,
                        pressed && { backgroundColor: invigilatorTheme.bg },
                      ]}
                    >
                      <Ionicons
                        name="person-outline"
                        color={focused ? invigilatorTheme.primary : color}
                        size={size}
                      />
                    </Pressable>
                  ),
                }}
              />
              <Tabs.Screen
                name="qr/[id]"
                options={{
                  href: null, // This hides it from the tab bar
                }}
              />
              <Tabs.Screen
                name="qr/WaitingForApproval"
                options={{
                  href: null, // This hides it from the tab bar
                }}
              />
              <Tabs.Screen
                name="qr/ApprovalTimeExpired"
                options={{
                  href: null, // This hides it from the tab bar
                }}
              />
            </Tabs>
            <Toaster />
          </React.Fragment>
        </StudentProvider>
      </InvigilatorProvider>
    </AdminProvider>
  );
}
