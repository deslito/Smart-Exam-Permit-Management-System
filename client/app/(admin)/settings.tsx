import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Switch,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { adminTheme } from "./_layout";

export default function AdminSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <SafeAreaView style={tw`flex-1 bg-[${adminTheme.bg}]`}>
      <View style={tw`flex-1 p-4 max-w-2xl w-full mx-auto`}>
        <Text style={tw`text-2xl font-bold mb-6 mt-2`}>Settings</Text>

        {/* Notifications Card */}
        <View
          style={[
            tw`bg-white rounded-xl p-5 mb-6`,
            {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 3,
            },
          ]}
        >
          <View style={tw`flex-row items-center mb-4`}>
            <Ionicons name="notifications-outline" size={22} color="#222" />
            <Text style={tw`text-lg font-bold ml-2`}>Notifications</Text>
          </View>
          <View style={tw`flex-row items-center justify-between mb-1`}>
            <View>
              <Text style={tw`font-semibold text-gray-800`}>
                Email Notifications
              </Text>
              <Text style={tw`text-gray-500 text-xs`}>
                Receive email notifications about important updates
              </Text>
            </View>
            <Switch
              value={emailNotifications}
              onValueChange={setEmailNotifications}
              trackColor={{ false: "#d1d5db", true: adminTheme.primary }}
              thumbColor={emailNotifications ? adminTheme.primary : "#f4f3f4"}
              ios_backgroundColor="#d1d5db"
              style={
                Platform.OS === "web" ? { transform: [{ scale: 1.2 }] } : {}
              }
            />
          </View>
        </View>

        {/* Appearance Card */}
        <View
          style={[
            tw`bg-white rounded-xl p-5 mb-6`,
            {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 3,
            },
          ]}
        >
          <Text style={tw`text-lg font-bold mb-4`}>Appearance</Text>
          <Text style={tw`font-semibold text-gray-800 mb-2`}>Theme</Text>
          <View style={tw`flex-row items-center`}>
            <Pressable
              className="flex-row items-center mr-6"
              onPress={() => setTheme("light")}
            >
              <Ionicons
                name={
                  theme === "light" ? "radio-button-on" : "radio-button-off"
                }
                size={20}
                color={adminTheme.primary}
              />
              <Ionicons
                name="sunny-outline"
                size={18}
                color="#fbbf24"
                style={tw`ml-1`}
              />
              <Text style={tw`ml-1 text-gray-700`}>Light</Text>
            </Pressable>
            <Pressable
              className="flex-row items-center"
              onPress={() => setTheme("dark")}
            >
              <Ionicons
                name={theme === "dark" ? "radio-button-on" : "radio-button-off"}
                size={20}
                color={adminTheme.primary}
              />
              <Ionicons
                name="moon-outline"
                size={18}
                color="#64748b"
                style={tw`ml-1`}
              />
              <Text style={tw`ml-1 text-gray-700`}>Dark</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
