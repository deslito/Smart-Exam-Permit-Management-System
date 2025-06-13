// RoleBasedLoader.tsx
import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, Platform } from "react-native";
import { BlurView } from "expo-blur";
import tw from "twrnc";

interface Props {
  role?: "student" | "admin" | "invigilator" | "lecturer";
}

const ROLE_COLORS = {
  student: {
    barColor: "#10B981",
    blurColor: "rgba(16,185,129,0.15)",
  },
  admin: {
    barColor: "#EF4444",
    blurColor: "rgba(239,68,68,0.15)",
  },
  invigilator: {
    barColor: "#F7941D",
    blurColor: "rgba(247,148,29,0.15)",
  },
  lecturer: {
    barColor: "#6366F1",
    blurColor: "rgba(99,102,241,0.15)",
  },
};

const NUM_BARS = 12;

const RoleBasedLoader = ({ role = "student" }: Props) => {
  const { barColor, blurColor } = ROLE_COLORS[role];
  const animations = useRef(
    [...Array(NUM_BARS)].map(() => new Animated.Value(0.25))
  ).current;

  useEffect(() => {
    animations.forEach((anim, index) => {
      const loop = () => {
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 600,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0.25,
            duration: 600,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]).start(() => loop());
      };
      setTimeout(loop, index * 100);
    });
  }, []);

  const bars = [...Array(NUM_BARS)].map((_, i) => {
    const rotate = (360 / NUM_BARS) * i;
    const translateY = -28;
    return (
      <Animated.View
        key={i}
        style={[
          tw`absolute w-1.5 h-5.5 rounded-lg`,
          {
            backgroundColor: barColor,
            transform: [{ rotate: `${rotate}deg` }, { translateY }],
            opacity: animations[i],
          },
        ]}
      />
    );
  });

  return (
    <View style={tw`absolute inset-0 z-50`}>
      <BlurView intensity={50} tint="light" style={tw`flex-1 items-center justify-center bg-white/15`}>
        <BlurView
          intensity={90}
          tint="light"
          style={[
            tw`w-25 h-25 rounded-2xl items-center justify-center bg-white/20 overflow-hidden`,
            Platform.OS === 'ios' ? tw`shadow-lg` : undefined,
          ]}
        >
          <View style={tw`w-18 h-18 relative items-center justify-center`}>
            {bars}
          </View>
        </BlurView>
      </BlurView>
    </View>
  );
};

export default RoleBasedLoader;
