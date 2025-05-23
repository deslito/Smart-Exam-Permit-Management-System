import React, { useRef, useEffect } from "react";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, Animated } from "react-native";
import tw from "twrnc";

export default function ContactAdmin() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-blue-50 justify-center items-center px-6`}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          width: "100%",
          maxWidth: 400,
        }}
      >
        <View style={tw`bg-white rounded-3xl shadow-lg p-8 items-center`}>
          <Animated.Text
            style={tw`text-3xl font-bold text-blue-800 mb-2`}
          >
            Contact Admin
          </Animated.Text>
          <Text style={tw`text-base text-gray-700 mb-6 text-center`}>If you are experiencing any issues with the University system, please fill out the form below and our system administrator will get back to you as soon as possible.</Text>
          <TextInput
            style={tw`w-full border border-blue-200 rounded-lg px-4 py-3 mb-4 bg-blue-50 text-base`}
            placeholder="Your Name"
            placeholderTextColor="#64748b"
          />
          <TextInput
            style={tw`w-full border border-blue-200 rounded-lg px-4 py-3 mb-4 bg-blue-50 text-base`}
            placeholder="Your Email"
            placeholderTextColor="#64748b"
            keyboardType="email-address"
          />
          <TextInput
            style={tw`w-full border border-blue-200 rounded-lg px-4 py-3 mb-6 bg-blue-50 text-base`}
            placeholder="Describe your issue..."
            placeholderTextColor="#64748b"
            multiline
            numberOfLines={4}
          />
          <Pressable
            style={tw`w-full bg-blue-700 py-3 rounded-lg items-center shadow`}
            onPress={() => {}}
          >
            <Text style={tw`text-white font-semibold text-lg`}>Send Message</Text>
          </Pressable>
        </View>
        <Animated.Text
          style={{
            opacity: fadeAnim,
            marginTop: 32,
            textAlign: "center",
            fontSize: 16,
            color: "#64748b",
          }}
        >
           a9 {new Date().getFullYear()} University IT Support
        </Animated.Text>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
