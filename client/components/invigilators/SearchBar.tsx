import React from "react";
import { View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { adminTheme } from "@/app/(admin)/_layout";

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <View style={tw`flex-row mb-4`}>
      <TextInput
        style={{
          ...tw`flex-1 border rounded-md px-3 py-2`,
          backgroundColor: "#fff",
        }}
        placeholder="Search by name or staff ID"
        value={value}
        onChangeText={onChange}
        returnKeyType="search"
      />
      <Pressable
        style={{
          ...tw`ml-2 px-4 py-2 rounded-md`,
          backgroundColor: adminTheme.primary,
        }}
      >
        <Ionicons name="search" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}