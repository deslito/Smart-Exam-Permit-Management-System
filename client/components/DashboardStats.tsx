// components/DashboardStats.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export interface CourseUnit {
  code: string;
  name: string;
  creditUnits: number;
  category: "CORE" | "ELECTIVE";
  status: "NORMAL" | "RETAKE";
}

interface DashboardStatsProps {
  username: string;
  regNumber: string;
  semester: string;
  permitStatus: string; // "valid", "pending", "expired"
  paymentStatus: string; // "paid", "pending", "unpaid"
  courseProgress: number; // percentage
  examDate: string;
}

export default function DashboardStats({
  username,
  regNumber,
  semester,
  permitStatus,
  paymentStatus,
  courseProgress,
  examDate,
}: DashboardStatsProps) {
  const [showUnits, setShowUnits] = useState(false);

  // Mock course units data
  const courseUnits: CourseUnit[] = [
    {
      code: "CSC 201",
      name: "Data Structures",
      creditUnits: 4,
      category: "CORE",
      status: "NORMAL",
    },
    {
      code: "CSC 202",
      name: "Computer Networks",
      creditUnits: 3,
      category: "CORE",
      status: "NORMAL",
    },
    {
      code: "CSC 203",
      name: "Database Systems",
      creditUnits: 3,
      category: "CORE",
      status: "NORMAL",
    },
    {
      code: "CSC 204",
      name: "Computer Graphics",
      creditUnits: 3,
      category: "ELECTIVE",
      status: "NORMAL",
    },
  ];

  const statusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "valid":
        return <Ionicons name="checkmark-circle" size={20} color="#10B981" />;
      case "pending":
        return <Ionicons name="time" size={20} color="#F59E0B" />;
      case "expired":
        return <Ionicons name="time" size={20} color="#EF4444" />;
      default:
        return null;
    }
  };

  return (
    <View>
      {/* Header */}
      {/* <View style={tw`bg-university-byyyy p-6 pt-8 rounded-b-3xl`}>
        <Text style={tw`text-white text-2xl font-bold`}>Welcome back,</Text>
        <Text style={tw`text-white opacity-90 font-medium text-lg`}>
          {username}
        </Text>
        <Text style={tw`text-white opacity-75 text-xs mt-1`}>
          Reg: {regNumber} • {semester}
        </Text>
      </View> */}

      {/* Quick Stats */}
      <View style={tw`px-4 -mt-6`}>
        <View
          style={tw`bg-white/20 border border-white/30 rounded-2xl p-4 flex-row justify-between mb-4`}
        >
          <View style={tw`items-center`}>
            <Text style={tw`text-xs text-foreground/80`}>Permit</Text>
            <View style={tw`flex-row items-center mt-1`}>
              {statusIcon(permitStatus)}
              <Text style={tw`ml-1 font-medium capitalize text-foreground`}>
                {permitStatus}
              </Text>
            </View>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-xs text-foreground/80`}>Payment</Text>
            <View style={tw`flex-row items-center mt-1`}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={tw`ml-1 font-medium text-foreground`}>
                {paymentStatus}
              </Text>
            </View>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-xs text-foreground/80`}>Progress</Text>
            <View
              style={tw`mt-1 w-20 bg-muted h-1.5 rounded-full overflow-hidden`}
            >
              <View
                style={[
                  tw`h-full`,
                  { width: `${courseProgress}%`, backgroundColor: "#D1D700" },
                ]}
              />
            </View>
            <Text style={tw`mt-1 text-xs text-foreground`}>
              {courseProgress}%
            </Text>
          </View>
        </View>
      </View>

      {/* Upcoming Exam Section */}
      <View style={tw`px-4 mb-4`}>
        <TouchableOpacity
          style={tw`bg-white p-4 rounded-2xl shadow-neuro flex-row justify-between items-center`}
          onPress={() => setShowUnits(!showUnits)}
        >
          <View style={tw`flex-row items-center`}>
            <Ionicons
              name="calendar-outline"
              size={24}
              color="#0057B7"
              style={tw`bg-muted p-2 rounded-lg`}
            />
            <View style={tw`ml-4`}>
              <Text style={tw`font-medium`}>{semester}</Text>
              <Text style={tw`text-xs text-foreground/80`}>
                Next Exam: {examDate}
              </Text>
            </View>
          </View>
          <Ionicons
            name="chevron-down"
            size={20}
            color="#0057B7"
            style={
              showUnits ? { transform: [{ rotate: "180deg" }] } : undefined
            }
          />
        </TouchableOpacity>

        {showUnits && (
          <ScrollView style={tw`mt-2 max-h-40 border rounded-lg border-muted`}>
            {courseUnits.map((unit, idx) => (
              <View
                key={idx}
                style={tw`flex-row p-3 border-b last:border-0 items-center`}
              >
                <Text style={tw`flex-1 text-xs`}>{unit.code}</Text>
                <Text style={tw`flex-3 text-xs`}>{unit.name}</Text>
                <Text style={tw`flex-1 text-center text-xs`}>
                  {unit.creditUnits}
                </Text>
                <Text style={tw`flex-1 text-center text-xs`}>
                  {unit.category}
                </Text>
                <Text
                  style={[
                    tw`flex-1 text-center text-xs rounded-full px-1`,
                    {
                      backgroundColor:
                        unit.status === "RETAKE"
                          ? "rgba(255,153,51,0.1)"
                          : "rgba(13,203,140,0.1)",
                      color: unit.status === "RETAKE" ? "#FF9933" : "#0DCB8C",
                    },
                  ]}
                >
                  {unit.status}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
