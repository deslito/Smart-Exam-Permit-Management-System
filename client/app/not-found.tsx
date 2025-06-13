import React, { useRef, useEffect } from "react";
import { View, Text, Pressable, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";
import tw from "twrnc";

export default function NotFoundPage() {
  const router = useRouter();

  // Animation setup
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1600,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={tw`flex-1 bg-[#f7fafc] justify-center items-center px-6`}>
      <View style={tw`items-center mb-8`}>
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ rotate }],
            marginBottom: 24,
          }}
        >
          <Text style={tw`text-7xl`}>📘</Text>
        </Animated.View>
        <Text style={tw`text-2xl font-bold text-[#174ea6] mb-2`}>
          Page Not Found
        </Text>
        <Text style={tw`text-base text-gray-500 text-center mb-2`}>
          We couldn't find what you're looking for.
        </Text>
        <Text style={tw`text-base text-gray-500 text-center`}>
          Please check the URL or return to the homepage.
        </Text>
      </View>
      <Pressable
        style={tw`bg-[#174ea6] px-6 py-3 rounded-lg mt-4`}
        onPress={() => router.replace("/")}
      >
        <Text style={tw`text-white font-semibold text-base`}>Return Home</Text>
      </Pressable>
    </View>
  );
}
