import React, { useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import HorizontalDivider from "@/components/HorizontalDivider";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useToast } from "@/components/ui/useToast";
import { BlurView } from "expo-blur";

const neuromorphicShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 12,
  elevation: 8,
};

type RoleKey = "admin" | "invigilator" | "student";

const roles: {
  key: RoleKey;
  title: string;
  badge: string;
  description: string;
  icon: string;
  color: string;
  divider: string;
}[] = [
  {
    key: "admin",
    title: "Administrator",
    badge: "Admin-only",
    description:
      "Assign invigilators, monitor permit statuses, and manage department-level approvals.",
    icon: "admin-panel-settings",
    color: "bg-university-blue/80 text-white",
    divider: "#ffffff",
  },
  {
    key: "invigilator",
    title: "Invigilator",
    badge: "Staff-only",
    description:
      "Scan and approve student permits, flag issues or duplicates, and review scan history.",
    icon: "remove-red-eye",
    color: "bg-university-orange/80 text-white",
    divider: "#ffffff",
  },
  {
    key: "student",
    title: "Student",
    badge: "Student Access",
    description:
      "View and print your permit if fees are cleared, and track your permit history.",
    icon: "school",
    color: "bg-university-green/80 text-white",
    divider: "#ffffff",
  },
];

export default function ChooseRolePage() {
  const router = useRouter();
  const [hovered, setHovered] = useState<RoleKey | null>(null);
  const { showToast } = useToast();

  // Role-specific themes
  const roleThemes = {
    admin: {
      primary: "#0057B7", // Blue from logo
      hover: "#003366", // Dark blue from logo
      bg: "#f0f8ff",
      accent: "#FFE600", // Yellow highlight
      cardBg: "#0057B7",
      cardText: "#fff",
    },
    invigilator: {
      primary: "#F7941D", // Orange from logo
      hover: "#B6D531", // Green from logo
      bg: "#fff8f0",
      accent: "#003366", // Dark blue
      cardBg: "#F7941D",
      cardText: "#fff",
    },
    student: {
      primary: "#B6D531", // Green from logo
      hover: "#0057B7", // Blue from logo
      bg: "#f0fff0",
      accent: "#003366", // Dark blue
      cardBg: "#B6D531",
      cardText: "#003366", // Use dark blue for contrast
    },
  };

  const theme =
    hovered && roleThemes[hovered] ? roleThemes[hovered] : { bg: "#ffffff" };

  const onSelect = (roleKey: RoleKey) => {
    const role = roles.find((r) => r.key === roleKey);
    if (!role) {
      showToast("error", "Role not found", `Role key: ${roleKey} is invalid.`);
      return;
    }
    showToast("info", `Signing in as ${role.title}`, role.description);
    router.push({
      pathname: "/loginPage",
      params: { role: role.key },
    });
  };

  const renderIcon = (icon: string, isHovered: boolean) => (
    <MaterialIcons
      name={icon as any}
      size={28}
      color={isHovered ? "#000000" : "#FFFFFF"}
    />
  );

  return (
    <BackgroundWrapper theme={theme}>
      <View className="flex-1 items-center justify-center px-4">
        <BlurView
          intensity={10}
          tint="light"
          style={[
            tw`w-full max-w-3xl py-10 px-6 rounded-2xl shadow-md my-5 border border-white/30`,
            {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
            },
          ]}
        >
          <Text className="z-10 text-3xl font-bold text-university-navy text-center mb-6">
            Choose Your Role
          </Text>
          <View
            className="w-11/12 mx-auto items-center"
            style={
              Platform.OS === "ios" || Platform.OS === "android"
                ? { gap: 28 }
                : { gap: 16 }
            }
          >
            {roles.map((r) => {
              const isHovered = hovered === r.key;
              const scale = useSharedValue(1);

              const animatedStyle = useAnimatedStyle(() => ({
                transform: [{ scale: scale.value }],
              }));

              // Get colors from roleThemes
              const cardBg = roleThemes[r.key].cardBg;
              const cardText = roleThemes[r.key].cardText;

              return (
                <Animated.View
                  key={r.key}
                  style={animatedStyle}
                  className="items-center w-full"
                >
                  <Pressable
                    onPressIn={() => {
                      scale.value = withSpring(0.96);
                    }}
                    onPressOut={() => {
                      scale.value = withSpring(1);
                    }}
                    onHoverIn={() => {
                      setHovered(r.key);
                      scale.value = withSpring(1.03);
                    }}
                    onHoverOut={() => {
                      setHovered(null);
                      scale.value = withSpring(1);
                    }}
                    onPress={() => onSelect(r.key)}
                    style={[
                      tw`w-full max-w-md rounded-xl p-4 border border-white/30 transition-all duration-200 justify-between`,
                      isHovered ? tw`shadow-lg -translate-y-1` : null,
                      neuromorphicShadow,
                      {
                        backgroundColor: cardBg,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        elevation: 5,
                      },
                    ]}
                  >
                    <View className="flex-row items-center justify-between mb-2">
                      <View className="flex-row items-center">
                        {renderIcon(r.icon, isHovered)}
                        <Text
                          style={{
                            marginLeft: 12,
                            fontSize: 20,
                            fontWeight: "600",
                            color: isHovered ? "#000" : cardText,
                          }}
                        >
                          {r.title}
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: "rgba(255,255,255,0.2)",
                          paddingHorizontal: 8,
                          paddingVertical: 2,
                          borderRadius: 999,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: isHovered ? "#000" : cardText,
                          }}
                        >
                          {r.badge}
                        </Text>
                      </View>
                    </View>

                    <HorizontalDivider color={isHovered ? "#000" : r.divider} />

                    <Text
                      style={{
                        marginTop: 8,
                        color: isHovered ? "#000" : cardText,
                      }}
                    >
                      {r.description}
                    </Text>
                  </Pressable>
                </Animated.View>
              );
            })}
          </View>
        </BlurView>
      </View>
    </BackgroundWrapper>
  );
}
