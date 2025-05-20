// components/common/BottomNav.tsx
import React from "react";
import { View, Pressable, Text } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { Home, CreditCard, User, History, Scan } from "lucide-react-native";
import tw from "twrnc";
import { useAuth } from "@/contexts/AuthContext";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  route: string;
}

export default function BottomNav() {
  const { selectedRole } = useAuth();
  console.log("Selected Role:", selectedRole); // Debugging line
  const router = useRouter();
  const segments = useSegments();

  if (selectedRole === "admin") return null;

  const base = selectedRole === "invigilator" ? "(invigilators)" : "(student)";

  const getNavItems = (): NavItem[] => {
    switch (selectedRole) {
      case "invigilator":
        return [
        { label: "Dashboard", icon: <Home size={24} />, route: `/${base}` },
        { label: "Scan", icon: <Scan size={24} />, route: `/${base}/scan` },
        { label: "History", icon: <History size={24} />, route: `/${base}/scan-history` },
        { label: "Profile", icon: <User size={24} />, route: `/${base}/profile` },
      ];
      case "student":
        return[
        { label: "Dashboard", icon: <Home size={24} />, route: `/${base}` },
        { label: "Permit", icon: <CreditCard size={24} />, route: `/${base}/permit` },
        { label: "History", icon: <History size={24} />, route: `/${base}/history` },
        { label: "Profile", icon: <User size={24} />, route: `/${base}/profile` },
      ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <View style={tw`flex-row justify-around items-center bg-white border-t border-gray-200 py-2`}>
      {navItems.map((item) => {
        const isActive = segments[0] === base && segments[1] === item.route.split("/").pop();
        return (
          <Pressable
            key={item.route}
            onPress={() => router.push(item.route as any)}
            style={tw`items-center`}
          >
            {React.cloneElement(item.icon as React.ReactElement, {
              color: isActive ? "#0057B7" : "#6B7280",
            })}
            <Text style={tw`text-xs mt-1 ${isActive ? "text-primary" : "text-gray-500"}`}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
