// app/(admin)/_layout.tsx
import React, { useState } from "react";
import { View, Text, Pressable, SafeAreaView, Platform } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { AdminProvider } from "@/contexts/AdminContext";
import { StudentProvider } from "@/contexts/StudentContext";
import { InvigilatorProvider } from "@/contexts/InvigilatorContext";
import { useRouter } from "expo-router";
import { Toaster } from "@/components/ui/toaster";

// Admin theme colors from login page
export const adminTheme = {
  primary: "#0057B7",
  hover: "#003366",
  bg: "#f0f8ff",
  accent: "#FFE600",
};

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout?.();
    router.replace("/chooseRole");
  };

  return (
    <LinearGradient
      colors={[adminTheme.bg, "transparent"]}
      className="flex-1 rounded-2xl overflow-hidden"
    >
      <DrawerContentScrollView {...props}>
        <View className="p-5 border-b border-black/10">
          <Text
            className="text-xl font-bold"
            style={{ color: adminTheme.primary }}
          >
            Admin Panel
          </Text>
        </View>
        <DrawerItemList {...props} />
        <Pressable
          className="p-4 mt-5 bg-white/20 rounded-lg items-center"
          onPress={handleLogout}
        >
          <Text
            className="text-base font-bold"
            style={{ color: adminTheme.primary }}
          >
            Logout
          </Text>
        </Pressable>
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

function HamburgerMenu({ navigation }: { navigation: any }) {
  return (
    <Pressable
      className="p-2 ml-2"
      onPress={() => navigation.toggleDrawer()}
      android_ripple={{ color: adminTheme.primary + "33" }}
    >
      <Ionicons name="menu" size={28} color={adminTheme.primary} />
    </Pressable>
  );
}

export default function AdminLayout() {
  // Responsive: show permanent drawer on web, hamburger on mobile/tablet
  const isWeb = Platform.OS === "web";

  return (
    <AuthProvider>
      <AdminProvider>
        <StudentProvider>
          <InvigilatorProvider>
            <View style={{ flex: 1 }}>
              <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={({ navigation }) => ({
                  headerShown: !isWeb,
                  header: !isWeb
                    ? () => (
                        <SafeAreaView
                          style={[
                            tw`bg-white flex-row items-center h-16 border-b border-gray-200`,
                            { paddingTop: Platform.OS === "android" ? 24 : 0 },
                          ]}
                        >
                          <HamburgerMenu navigation={navigation} />
                          <Text
                            className="text-lg font-bold ml-4"
                            style={{ color: adminTheme.primary }}
                          >
                            Admin Panel
                          </Text>
                        </SafeAreaView>
                      )
                    : undefined,
                  drawerType: isWeb ? "permanent" : "front",
                  drawerStyle: [tw`bg-transparent`, { width: 240 }],
                  drawerItemStyle: tw`rounded-lg my-1`,
                  drawerLabelStyle: tw`font-bold`,
                  sceneContainerStyle: { backgroundColor: adminTheme.bg },
                })}
              >
                <Drawer.Screen
                  name="adminDashboard"
                  getComponent={() => require("./adminDashboard").default}
                  options={{
                    drawerLabel: "Dashboard",
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="home-outline" size={size} color={color} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="manageExams"
                  getComponent={() => require("./manageExams").default}
                  options={{
                    drawerLabel: "Exams",
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="school-outline" size={size} color={color} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="manageStudents"
                  getComponent={() => require("./manageStudents").default}
                  options={{
                    drawerLabel: "Students",
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="people-outline" size={size} color={color} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="manageInvigilators"
                  getComponent={() => require("./manageInvigilators").default}
                  options={{
                    drawerLabel: "Invigilators",
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="body-outline" size={size} color={color} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="managePermits"
                  getComponent={() => require("./managePermits").default}
                  options={{
                    drawerLabel: "Permits",
                    drawerIcon: ({ color, size }) => (
                      <Ionicons
                        name="document-text-outline"
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="settings"
                  getComponent={() => require("./settings").default}
                  options={{
                    drawerLabel: "Settings",
                    drawerIcon: ({ color, size }) => (
                      <Ionicons
                        name="settings-outline"
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="profile"
                  getComponent={() => require("./adminProfile").default}
                  options={{
                    drawerLabel: "Profile",
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="person-outline" size={size} color={color} />
                    ),
                  }}
                />
              </Drawer.Navigator>
              <Toaster />
            </View>
          </InvigilatorProvider>
        </StudentProvider>
      </AdminProvider>
    </AuthProvider>
  );
}
