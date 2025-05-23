import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Button, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { adminTheme } from "@/app/(admin)/_layout";

interface InvigilatorFormProps {
  isEdit?: boolean;
  newInvigilator: {
    title: string;
    firstName: string;
    lastName: string;
    otherName: string;
    name?: string; // optional, for compatibility
    email: string;
    department: string;
    password: string;
    confirmPassword: string;
    picture: string; // changed from photoUrl to picture
  };
  departments: { id: string; name: string }[];
  imagePreview: string | null;
  setNewInvigilator: (data: any) => void;
  setImagePreview: (uri: string | null) => void;
  onCancel: () => void;
  onSubmit: () => void;
  handleImagePick: () => void;
  handlePickFromGallery: () => void;
  handleTakePhoto: () => void;
  currentDepartment?: string; // <-- Add this line
}

export default function InvigilatorForm({
  isEdit = false,
  newInvigilator,
  departments,
  imagePreview,
  setNewInvigilator,
  setImagePreview,
  onCancel,
  onSubmit,
  handleImagePick,
  handlePickFromGallery,
  handleTakePhoto,
  currentDepartment, // <-- Add this line
}: InvigilatorFormProps) {
  // Add state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <View>
      <Text style={tw`text-lg font-semibold mb-2`}>
        {isEdit ? "Edit Invigilator" : "Add Invigilator"}
      </Text>
      <TextInput
        style={tw`border rounded-md px-3 py-2 mb-2`}
        placeholder="Title (e.g. Mr, Ms, Dr)"
        value={newInvigilator.title}
        onChangeText={text => setNewInvigilator({ ...newInvigilator, title: text })}
      />
      <TextInput
        style={tw`border rounded-md px-3 py-2 mb-2`}
        placeholder="First Name"
        value={newInvigilator.firstName}
        onChangeText={text => setNewInvigilator({ ...newInvigilator, firstName: text })}
      />
      <TextInput
        style={tw`border rounded-md px-3 py-2 mb-2`}
        placeholder="Last Name"
        value={newInvigilator.lastName}
        onChangeText={text => setNewInvigilator({ ...newInvigilator, lastName: text })}
      />
      <TextInput
        style={tw`border rounded-md px-3 py-2 mb-2`}
        placeholder="Other Names (Optional)"
        value={newInvigilator.otherName}
        onChangeText={text => setNewInvigilator({ ...newInvigilator, otherName: text })}
      />
      <TextInput
        style={tw`border rounded-md px-3 py-2 mb-2`}
        placeholder="Email"
        value={newInvigilator.email}
        onChangeText={text => setNewInvigilator({ ...newInvigilator, email: text })}
      />
      {/* Hidden input for picture (for compatibility, not shown in UI) */}
      <View style={{ display: 'none' }}>
        <TextInput value={newInvigilator.picture} editable={false} />
      </View>
      <Text style={tw`mb-1`}>Department</Text>
      <View style={tw`border rounded-md mb-2`}>
        {departments.map(dep => {
          const isSelected = newInvigilator.department === dep.id;
          const isCurrent = currentDepartment === dep.name;
          return (
            <TouchableOpacity
              key={dep.id}
              style={{
                ...(tw`px-3 py-2` as object),
                ...(isSelected && { backgroundColor: adminTheme.primary + "22" }),
              }}
              onPress={() => setNewInvigilator({ ...newInvigilator, department: dep.id })}
            >
              <Text
                style={tw`
                  ${isSelected ? "font-bold" : ""}
                  ${isCurrent && !isSelected ? "italic text-blue-700" : ""}
                `}
              >
                {dep.name}
                {isCurrent && !isSelected ? " (Current)" : ""}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={tw`relative mb-2`}>
        <TextInput
          style={tw`border rounded-md px-3 py-2 pr-10`} // pr-10 for icon space
          placeholder={isEdit ? "New Password (optional)" : "Password"}
          value={newInvigilator.password}
          onChangeText={text => setNewInvigilator({ ...newInvigilator, password: text })}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={tw`absolute right-3 top-3`}
          onPress={() => setShowPassword((v) => !v)}
        >
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={22} color="#888" />
        </TouchableOpacity>
      </View>
      <View style={tw`relative mb-2`}>
        <TextInput
          style={tw`border rounded-md px-3 py-2 pr-10`}
          placeholder="Confirm Password"
          value={newInvigilator.confirmPassword}
          onChangeText={text => setNewInvigilator({ ...newInvigilator, confirmPassword: text })}
          secureTextEntry={!showConfirm}
        />
        <TouchableOpacity
          style={tw`absolute right-3 top-3`}
          onPress={() => setShowConfirm((v) => !v)}
        >
          <Ionicons name={showConfirm ? "eye-off" : "eye"} size={22} color="#888" />
        </TouchableOpacity>
      </View>
      <View style={tw`items-center my-4`}>
        <TouchableOpacity
          onPress={
            Platform.OS === "web"
              ? undefined // Disable touch on web, use buttons if you want
              : handleImagePick
          }
          style={{ opacity: Platform.OS === "web" ? 0.6 : 1 }}
          disabled={Platform.OS === "web"}
        >
          {imagePreview ? (
            <Image
              source={{ uri: imagePreview }}
              style={tw`w-24 h-24 rounded-full mb-2`}
              resizeMode="cover"
            />
          ) : (
            <View style={tw`w-24 h-24 rounded-full bg-gray-200 items-center justify-center mb-2`}>
              <Ionicons name="person-outline" size={48} color="#aaa" />
            </View>
          )}
          {/* Only show the text if not on web */}
          {Platform.OS !== "web" && (
            <Text style={tw`text-blue-600`}>
              {imagePreview ? "Change Photo" : "Upload Photo"}
            </Text>
          )}
        </TouchableOpacity>
        {Platform.OS === "web" && (
          <View style={tw`flex-row justify-center mt-2`}>
            <Button title="Pick from Gallery" onPress={handlePickFromGallery} />
            <View style={tw`w-4`} />
            <Button title="Take Photo" onPress={handleTakePhoto} />
          </View>
        )}
      </View>
      <View style={tw`flex-row justify-end`}>
        <Pressable
          style={[tw`px-4 py-2 rounded-md mr-2`, { backgroundColor: "#e5e7eb" }]}
          onPress={onCancel}
        >
          <Text>Cancel</Text>
        </Pressable>
        <Pressable
          style={[tw`px-4 py-2 rounded-md`, { backgroundColor: adminTheme.primary }]}
          onPress={onSubmit}
        >
          <Text style={tw`text-white font-semibold`}>{isEdit ? "Update" : "Create"}</Text>
        </Pressable>
      </View>
    </View>
  );
}