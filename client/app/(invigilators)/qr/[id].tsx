import { useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

export default function QrStudentPage() {
  const { id } = useLocalSearchParams();
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Fetch student data by QR code ID
      fetch(`${process.env.EXPO_PUBLIC_API_BASE_URL}/(invigilators)/qr/${id}`)
        .then(res => res.json())
        .then(data => {
          setStudent(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!student) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>Student not found or invalid QR code.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Student Permit Info</Text>
      <Text>Name: {student.firstName} {student.lastName}</Text>
      <Text>Reg No: {student.regNo}</Text>
      <Text>Status: {student.permitStatus}</Text>
      {/* Add more student info as needed */}
      <Text>Coming Soon </Text>
    </View>
  );
}