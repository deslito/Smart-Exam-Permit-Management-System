import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { StudentProvider } from "@/contexts/StudentContext";
import tw from "twrnc";

// Student-specific theme
const studentTheme = {
  primary: "#228b22", // Active tab color
  inactive: "#6B7280", // Inactive tab color (gray)
  bg: "#f0fff0", // Background color for hover effect
};

export default function StudentLayout() {
  return (
    <StudentProvider>
      <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: studentTheme.primary,
        tabBarInactiveTintColor: studentTheme.inactive,
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          height: 70,
          borderTopWidth: 1,
          borderTopColor: "rgba(0, 0, 0, 0.1)",
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
        name="studentDashboard"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Pressable
              onPress={() => console.log("Home pressed")}
              style={({ pressed }) => [
                tw`rounded-full p-2`,
                pressed && { backgroundColor: studentTheme.bg },
              ]}
            >
              <Ionicons
                name="home-outline"
                color={focused ? studentTheme.primary : color}
                size={size}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="permit"
        options={{
          title: "Permit",
          tabBarIcon: ({ color, size, focused }) => (
            <Pressable
              onPress={() => console.log("Permit pressed")}
              style={({ pressed }) => [
                tw`rounded-full p-2`,
                pressed && { backgroundColor: studentTheme.bg },
              ]}
            >
              <Ionicons
                name="card-outline"
                color={focused ? studentTheme.primary : color}
                size={size}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size, focused }) => (
            <Pressable
              onPress={() => console.log("History pressed")}
              style={({ pressed }) => [
                tw`rounded-full p-2`,
                pressed && { backgroundColor: studentTheme.bg },
              ]}
            >
              <Ionicons
                name="time-outline"
                color={focused ? studentTheme.primary : color}
                size={size}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="studentProfile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Pressable
              onPress={() => console.log("Profile pressed")}
              style={({ pressed }) => [
                tw`rounded-full p-2`,
                pressed && { backgroundColor: studentTheme.bg },
              ]}
            >
              <Ionicons
                name="person-outline"
                color={focused ? studentTheme.primary : color}
                size={size}
              />
            </Pressable>
          ),
        }}
      />
    </Tabs>
    </StudentProvider>
  );
}
