import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

export default function ComingSoon() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold text-gray-700`}>Coming Soon</Text>
      <Text style={tw`text-base text-gray-500 mt-2`}>This feature is under development.</Text>
    </View>
  );
}