import { View, Text, Animated, Easing } from "react-native";
import React, { useRef, useEffect } from "react";
import tw from "twrnc";

export default function ApprovalTimeExpired() {
  // Animated fade-out clock
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
    <View style={tw`flex-1 bg-white justify-center items-center px-6`}>  
      <Animated.View
        style={[
          tw`mb-8`,
          {
            opacity: fadeAnim,
            transform: [{ rotate }],
          },
        ]}
      >
        {/* Simple clock icon using emoji, can be replaced with SVG if needed */}
        <Text style={tw`text-7xl`}>⏰</Text>
      </Animated.View>
      <Text style={tw`text-2xl font-bold text-red-600 mb-2 text-center`}>
        Approval Time Expired
      </Text>
      <Text style={tw`text-base text-gray-700 text-center`}>The approval window for this exam permit has expired. Please contact the invigilator or try again later.</Text>
    </View>
  );
}
