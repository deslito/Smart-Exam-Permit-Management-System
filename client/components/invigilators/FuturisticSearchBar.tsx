import React from "react";
import { View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { invigilatorTheme } from "@/app/(invigilators)/_layout";

interface FuturisticSearchBarProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

export default function FuturisticSearchBar({ value, onChange, placeholder }: FuturisticSearchBarProps) {
  return (
    <View
      style={[
        tw`flex-row items-center mb-4 px-3 py-2 rounded-2xl`,
        {
          backgroundColor: "rgba(255,255,255,0.7)",
          borderWidth: 1,
          borderColor: invigilatorTheme.primary,
          shadowColor: invigilatorTheme.primary,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3,
        },
      ]}
    >
      <Ionicons name="search" size={22} color={invigilatorTheme.primary} style={tw`mr-2`} />
      <TextInput
        style={[
          tw`flex-1 text-base px-2 py-1`,
          {
            backgroundColor: "transparent",
            color: invigilatorTheme.accent,
            fontWeight: "600",
            letterSpacing: 0.5,
          },
        ]}
        placeholder={placeholder || "Search approved permits..."}
        placeholderTextColor="#b6b6b6"
        value={value}
        onChangeText={onChange}
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}
