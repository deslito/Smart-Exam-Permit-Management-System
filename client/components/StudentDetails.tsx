// app/(invigilators)/student-details.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons"; // <-- Use Ionicons
import tw from "twrnc";

type ScanRecord = {
  invigilator: string;
  timestamp: string;
  status: "approved" | "pending";
  staffId: string;
};

interface StudentData {
  id: string;
  name: string;
  regNumber: string;
  course: string;
  gender: string;
  programme: string;
  semester: string;
  feesBalance: number;
  photoUrl?: string;
}

export default function StudentDetailsPage() {
  // Remove the generic here; we'll coerce at runtime instead
  const params = useLocalSearchParams();
  const studentData = (params as any).studentData as StudentData;
  const router = useRouter();
  const { user } = useAuth();

  const [permitStatus, setPermitStatus] = useState<"valid" | "pending" | "approved">(
    studentData?.feesBalance === 0 ? "valid" : "pending"
  );
  const [scanHistory, setScanHistory] = useState<ScanRecord[]>([]);
  const [processingApproval, setProcessingApproval] = useState(false);
  const [processingPending, setProcessingPending] = useState(false);
  const [invigilator, setInvigilator] = useState<any>(null);

  useEffect(() => {
    if (!studentData) {
      router.replace("/(invigilators)/scan");
    }
  }, []);

  if (!studentData) return null;

  const isPermitValid = studentData.feesBalance === 0;
  const isApproved = permitStatus === "approved";

  const addHistory = (status: "approved" | "pending") => {
    setScanHistory((h) => [
      {
        invigilator: user?.email || "Invigilator",
        timestamp: new Date().toLocaleString(),
        status,
        staffId: user?.id || "",
      },
      ...h,
    ]);
  };

  const handleApprove = () => {
    if (!isPermitValid) {
      // fire your toast from the root toast container
      return;
    }
    setProcessingApproval(true);
    setTimeout(() => {
      setPermitStatus("approved");
      addHistory("approved");
      setProcessingApproval(false);
    }, 1500);
  };

  const handlePending = () => {
    setProcessingPending(true);
    setTimeout(() => {
      setPermitStatus("pending");
      addHistory("pending");
      setProcessingPending(false);
    }, 1500);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="px-4 pt-0" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="bg-university-blue p-4">
          <Text className="text-white text-lg font-bold">Student Details</Text>
        </View>

        {/* Scan History */}
        {scanHistory.map((r, i) => (
          <View
            key={i}
            className={`flex-row p-3 mt-2 rounded-lg items-center border-l-4 ${
              r.status === "approved"
                ? "bg-green-100 border-green-500"
                : "bg-yellow-100 border-yellow-500"
            }`}
          >
            {r.status === "approved" ? (
              <Ionicons name="checkmark-circle" color="#059669" size={20} />
            ) : (
              <Ionicons name="time" color="#D97706" size={20} />
            )}
            <View className="ml-3 flex-1">
              <Text className="font-semibold">
                {r.status === "approved" ? "Approved" : "Pending"} by {r.invigilator}
              </Text>
              <Text className="text-xs text-gray-600">
                ID: {r.staffId} • {r.timestamp}
              </Text>
            </View>
          </View>
        ))}

        {/* Student Card */}
        <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
          <View className="flex-row items-center mb-4">
            {studentData.photoUrl ? (
              <Image
                source={{ uri: studentData.photoUrl }}
                className="w-16 h-16 rounded-full"
              />
            ) : (
              <View className="w-16 h-16 rounded-full bg-gray-200 items-center justify-center">
                <Ionicons name="person" color="#6B7280" size={32} />
              </View>
            )}
            <View className="flex-1 ml-4">
              <Text className="text-lg font-semibold">{studentData.name}</Text>
              <Text className="text-gray-600">{studentData.regNumber}</Text>
            </View>
            <View
              className={`px-3 py-1 rounded-full ${
                isPermitValid ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <Text className="text-white text-xs font-semibold">
                {isPermitValid ? "VALID" : "INVALID"}
              </Text>
            </View>
          </View>

          {/* Details rows */}
          {([
            ["Course", studentData.course],
            ["Gender", studentData.gender],
            ["Programme", studentData.programme],
            ["Semester", studentData.semester],
            ["Fees Balance", `UGX ${studentData.feesBalance.toLocaleString()}`],
          ] as [string, string][]).map(([label, value]) => (
            <View
              key={label}
              className="flex-row justify-between py-2 border-t border-gray-200"
            >
              <Text className="text-gray-600">{label}</Text>
              <Text
                className={`font-medium ${
                  label === "Fees Balance" && studentData.feesBalance > 0
                    ? "text-red-600"
                    : ""
                }`}
              >
                {value}
              </Text>
            </View>
          ))}

          {/* Alerts */}
          {!isPermitValid && (
            <View className="flex-row items-center p-3 bg-red-100 rounded-lg mt-4">
              <Ionicons name="alert-circle" color="#B91C1C" size={20} />
              <Text className="ml-2 text-red-800">
                Outstanding balance. Cannot approve.
              </Text>
            </View>
          )}
          {isPermitValid && !isApproved && (
            <View className="flex-row items-center p-3 bg-green-100 rounded-lg mt-4">
              <Ionicons name="checkmark-circle" color="#047857" size={20} />
              <Text className="ml-2 text-green-800">Permit is valid.</Text>
            </View>
          )}

          {/* Actions */}
          <View className="flex-row mx-3 mt-4">
            <Pressable
              onPress={handleApprove}
              disabled={processingApproval || !isPermitValid || isApproved}
              className={`flex-1 py-3 rounded-lg items-center ${
                processingApproval || isApproved || !isPermitValid
                  ? "bg-green-300"
                  : "bg-green-600"
              }`}
            >
              {processingApproval ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white font-semibold">
                  {isApproved ? "Approved" : "Approve"}
                </Text>
              )}
            </Pressable>
            <Pressable
              onPress={handlePending}
              disabled={processingPending}
              className={`flex-1 py-3 rounded-lg items-center border ${
                processingPending ? "border-gray-300" : "border-gray-600"
              }`}
            >
              {processingPending ? (
                <ActivityIndicator />
              ) : (
                <Text className="text-gray-700">Pending</Text>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}