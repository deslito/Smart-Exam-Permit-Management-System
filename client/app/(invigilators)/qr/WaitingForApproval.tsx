import React, { useEffect } from "react";
import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default function WaitingForApproval() {
  // Animation values
  const fadeAnim = new Animated.Value(0);
  const loadingAnim = new Animated.Value(0);

  useEffect(() => {
    // Fade in animations with delays
    const animations = [0, 100, 200, 300, 400].map((delay) =>
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay,
        useNativeDriver: true,
      })
    );

    // Loading bar animation
    const loadingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(loadingAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(loadingAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );

    // Start all animations
    Animated.parallel([...animations, loadingAnimation]).start();
  }, []);

  return (
    <View style={tw`flex-1 items-center justify-center p-4 bg-gray-50`}>
      <View style={tw`w-full max-w-md space-y-6`}>
        {/* Icon */}
        <Animated.View style={[tw`items-center mb-6`, { opacity: fadeAnim }]}>
          <Ionicons name="warning-outline" size={64} color="#f97316" />
        </Animated.View>

        {/* Title */}
        <Animated.Text style={[tw`text-2xl font-bold text-center`, { opacity: fadeAnim }]}>
          Waiting for Admin Approval
        </Animated.Text>

        {/* Description */}
        <Animated.View style={[tw`items-center`, { opacity: fadeAnim }]}>
          <Text style={tw`text-gray-600 text-center mb-4`}>
            The exam session needs to be approved by an administrator before you can verify students.
          </Text>
          <Text style={tw`text-sm text-gray-500 text-center`}>
            This helps ensure that only authorized personnel can verify students during the scheduled exam time.
          </Text>
        </Animated.View>

        {/* Loading Bar */}
        <Animated.View style={[tw`items-center mt-8`, { opacity: fadeAnim }]}>
          <View style={tw`w-64 h-2 bg-gray-200 rounded-full overflow-hidden`}>
            <Animated.View
              style={[
                tw`absolute h-full bg-[#f97316]`,
                {
                  width: "100%",
                  transform: [{
                    translateX: loadingAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-256, 256], // width of the container
                    }),
                  }],
                },
              ]}
            />
          </View>
        </Animated.View>

        {/* Alert */}
        <Animated.View 
          style={[
            tw`mt-8 p-4 rounded-lg border border-[#f97316]/30 bg-[#f97316]/10`,
            { opacity: fadeAnim }
          ]}
        >
          <Text style={tw`text-sm text-center text-gray-700`}>
            Please contact the exam administrator to approve this exam session.
          </Text>
        </Animated.View>

        {/* Back Button */}
        <Animated.View style={[tw`items-center mt-8`, { opacity: fadeAnim }]}>
          <Pressable
            style={tw`flex-row items-center px-6 py-3 rounded-lg border border-gray-200`}
            onPress={() => router.back()}
          >
            <Ionicons 
              name="arrow-back-outline" 
              size={16} 
              color="#374151" 
              style={tw`mr-2`} 
            />
            <Text style={tw`text-gray-700 font-medium`}>Go Back</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}