import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Modal, Platform, Alert } from "react-native";
import tw from "twrnc";
import { adminTheme } from "./_layout";
import { Ionicons } from "@expo/vector-icons";
import { useToast } from "@/components/ui/useToast";
import InvigilatorList from "@/components/invigilators/InvigilatorList";
import InvigilatorForm from "@/components/invigilators/InvigilatorForm";
import SearchBar from "@/components/invigilators/SearchBar";
import { useAdmins } from "@/contexts/AdminContext";
import { useInvigilators } from "@/contexts/InvigilatorContext";
import type { InvigilatorSummary } from "@/contexts/InvigilatorContext";
import type { ToastType } from "@/components/ui/useToast";
import * as ImagePicker from 'expo-image-picker';

export default function ManageInvigilators() {
  const { showToast } = useToast();
  const { admins } = useAdmins();
  const { invigilators, createInvigilator, updateInvigilator, deleteInvigilator } = useInvigilators();

  // Get departments from the first admin's facultyOrSchool (or signed-in admin if you wish)
  const admin = admins[0];
  const departments =
    admin?.facultyOrSchool?.departments?.map((dep: any) => ({
      id: dep.id,
      name: dep.name,
    })) || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedInvigilator, setSelectedInvigilator] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Updated state to match new form fields
  const [newInvigilator, setNewInvigilator] = useState({
    title: "",
    firstName: "",
    lastName: "",
    otherName: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
    picture: "",
  });

  const handlePickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: false,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImagePreview(uri);
      await uploadImage(uri);
    }
  };

  const handleTakePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: false,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImagePreview(uri);
      await uploadImage(uri);
    }
  };

  const handleImagePick = async () => {
    if (Platform.OS === "web") {
      // On web, show two buttons in your form/modal for "Pick from Gallery" and "Take Photo"
      // and call handlePickFromGallery or handleTakePhoto directly.
      showToast("info", "Please use the buttons below to pick or take a photo.");
      return;
    }
    // On mobile, use Alert as before
    Alert.alert(
      "Select Photo",
      "Choose a method",
      [
        { text: "Take Photo", onPress: handleTakePhoto },
        { text: "Choose from Gallery", onPress: handlePickFromGallery },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  const uploadImage = async (uri: string) => {
    const formData = new FormData();
    let fileType = 'image/jpeg';
    let fileName = 'photo.jpg';
    if (Platform.OS === "web") {
      // Try to infer file type and name from uri
      const extMatch = uri.match(/\.([a-zA-Z0-9]+)$/);
      if (extMatch) {
        const ext = extMatch[1].toLowerCase();
        switch (ext) {
          case 'png': fileType = 'image/png'; fileName = 'photo.png'; break;
          case 'jpg': fileType = 'image/jpeg'; fileName = 'photo.jpg'; break;
          case 'jpeg': fileType = 'image/jpeg'; fileName = 'photo.jpeg'; break;
          case 'gif': fileType = 'image/gif'; fileName = 'photo.gif'; break;
          case 'webp': fileType = 'image/webp'; fileName = 'photo.webp'; break;
          case 'bmp': fileType = 'image/bmp'; fileName = 'photo.bmp'; break;
          case 'svg': fileType = 'image/svg+xml'; fileName = 'photo.svg'; break;
          default: fileType = 'image/*'; fileName = 'photo.' + ext; break;
        }
      }
      const response = await fetch(uri);
      const blob = await response.blob();
      formData.append('photo', blob, fileName);
    } else {
      // React Native: use { uri, name, type }
      formData.append('photo', {
        uri,
        name: fileName,
        type: fileType,
      } as any);
    }
    try {
      const response = await fetch('https://your-backend.com/api/invigilators/upload-photo', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = await response.json();
      if (data.url) {
        if (typeof window !== 'undefined' && Platform.OS === 'web' && !showToast) {
          window.alert('Image uploaded!');
        } else {
          showToast("success", "Image uploaded!");
        }
        return data.url;
      } else {
        if (typeof window !== 'undefined' && Platform.OS === 'web' && !showToast) {
          window.alert('Image upload failed.');
        } else {
          showToast("error", "Image upload failed.");
        }
        return null;
      }
    } catch (error) {
      if (typeof window !== 'undefined' && Platform.OS === 'web' && !showToast) {
        window.alert('Image upload error.');
      } else {
        showToast("error", "Image upload error.");
      }
      return null;
    }
  };

  // Add Invigilator
  const handleAddInvigilator = () => {
    setImagePreview(null);
    setNewInvigilator({
      title: "",
      firstName: "",
      lastName: "",
      otherName: "",
      email: "",
      department: "",
      password: "",
      confirmPassword: "",
      picture: "",
    });
    setIsAddModalOpen(true);
  };

  // Edit Invigilator
  const handleEditInvigilator = (invigilator: any) => {
    // Find department name by id
    const departmentObj = departments.find(dep => dep.id === invigilator.departmentId);
    const departmentName = departmentObj ? departmentObj.name : "";

    setSelectedInvigilator({
      ...invigilator,
      departmentName, // <-- Add this line
    });
    setImagePreview(invigilator.picture);

    setNewInvigilator({
      title: invigilator.title || "",
      firstName: invigilator.firstName || "",
      lastName: invigilator.lastName || "",
      otherName: invigilator.otherNames || "",
      email: invigilator.user?.email || "",
      department: invigilator.departmentId || "", // Use departmentId here
      password: "",
      confirmPassword: "",
      picture: invigilator.picture || "",
    });
    setIsEditModalOpen(true);
  };

  // Delete Invigilator
  const handleDeleteInvigilator = async (id: string) => {
    try {
      await deleteInvigilator(id);
      showToast("success", "Invigilator deleted successfully!");
    } catch (error) {
      showToast("error", "Failed to delete invigilator.");
    }
  };

  // Create Account
  const handleCreateAccount = async () => {
    try {
      let invigilatorData = { ...newInvigilator };
      // If imagePreview is a local file (not a URL), upload it
      if (imagePreview && !imagePreview.startsWith('http')) {
        const url = await uploadImage(imagePreview);
        if (url) {
          invigilatorData.picture = url;
        }
      }
      await createInvigilator(invigilatorData);
      showToast("success", "Invigilator created successfully!");
      setIsAddModalOpen(false);
      setNewInvigilator({
        title: "",
        firstName: "",
        lastName: "",
        otherName: "",
        email: "",
        department: "",
        password: "",
        confirmPassword: "",
        picture: "",
      });
      setImagePreview(null);
    } catch (error) {
      showToast("error", "Failed to create invigilator.");
    }
  };

  // Update Account
  const handleUpdateAccount = async () => {
    try {
      // Use Record<string, any> for dynamic key access
      const current = newInvigilator as Record<string, any>;
      const original = selectedInvigilator as Record<string, any>;
      const updateData: Record<string, any> = {};
      Object.keys(current).forEach(key => {
        if (
          current[key] !== "" &&
          (key !== "password" && key !== "confirmPassword" ? current[key] !== original[key] : true)
        ) {
          updateData[key] = current[key];
        }
      });
      // If imagePreview is a local file (not a URL), upload it and update picture
      if (imagePreview && !imagePreview.startsWith('http')) {
        const url = await uploadImage(imagePreview);
        if (url) {
          updateData.picture = url;
        }
      }
      await updateInvigilator(selectedInvigilator.id, updateData);
      showToast("success", "Invigilator updated successfully!");
      setIsEditModalOpen(false);
      setSelectedInvigilator(null);
      setImagePreview(null);
    } catch (error) {
      showToast("error", "Failed to update invigilator.");
    }
  };

  return (
    <View style={{ ...tw`flex-1`, backgroundColor: adminTheme.bg }}>
      {/* Fixed Header */}
      <View style={tw`p-6 pt-12 bg-white border-b border-gray-200`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Manage Invigilators</Text>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Pressable
          style={{
            ...tw`flex-row items-center px-4 py-2 rounded-md mb-4`,
            backgroundColor: adminTheme.primary,
          }}
          onPress={handleAddInvigilator}
        >
          <Ionicons name="add" size={20} color="#fff" style={tw`mr-2`} />
          <Text style={tw`text-white font-semibold`}>Add Invigilator</Text>
        </Pressable>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={tw`flex-1`} contentContainerStyle={tw`p-6`}>
        <InvigilatorList
          searchTerm={searchTerm}
          onEdit={handleEditInvigilator}
          onOpenEditModal={() => setIsEditModalOpen(true)}
          onShowToast={showToast}
          onDelete={handleDeleteInvigilator} // <-- Add this line
        />
      </ScrollView>

      {/* Add Invigilator Modal */}
      <Modal visible={isAddModalOpen} animationType="slide" transparent>
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-30`}>
          <View style={[tw`bg-white rounded-lg p-6 w-11/12`, Platform.OS === "web" && { maxWidth: 400 }]}>
            <InvigilatorForm
              isEdit={false}
              newInvigilator={newInvigilator}
              departments={departments}
              imagePreview={imagePreview}
              setNewInvigilator={setNewInvigilator}
              setImagePreview={setImagePreview}
              onCancel={() => setIsAddModalOpen(false)}
              onSubmit={handleCreateAccount}
              handleImagePick={handleImagePick}
              handlePickFromGallery={handlePickFromGallery}
              handleTakePhoto={handleTakePhoto}
            />
          </View>
        </View>
      </Modal>

      {/* Edit Invigilator Modal */}
      <Modal visible={isEditModalOpen} animationType="slide" transparent>
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-30`}>
          <View style={[tw`bg-white rounded-lg p-6 w-11/12`, Platform.OS === "web" && { maxWidth: 400 }]}>
            <InvigilatorForm
              isEdit={true}
              newInvigilator={newInvigilator}
              departments={departments}
              imagePreview={imagePreview}
              setNewInvigilator={setNewInvigilator}
              setImagePreview={setImagePreview}
              onCancel={() => setIsEditModalOpen(false)}
              onSubmit={handleUpdateAccount}
              handleImagePick={handleImagePick}
              handlePickFromGallery={handlePickFromGallery}
              handleTakePhoto={handleTakePhoto}
              currentDepartment={selectedInvigilator?.departmentName}
            />
          </View>
        </View>
      </Modal>
      {/* Warning for admin about invigilator deletion */}
      <View style={tw`flex-row items-center justify-center mb-2 mt-6 px-6`}>
        <Ionicons name="warning" size={20} color="#f59e42" style={tw`mr-2`} />
        <Text style={tw`text-orange-600 font-semibold  text-center`}>Once an invigilator has been assigned to an exam, they cannot be deleted from the system until the exam period has ended.</Text>
      </View>
    </View>
  );
}
