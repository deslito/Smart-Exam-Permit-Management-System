// app/(admin)/managePermits.tsx
import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import tw from "twrnc";
import { adminTheme } from "./_layout";
import { Ionicons } from "@expo/vector-icons";
import { useAdmins } from "@/contexts/AdminContext";
import { useAuth } from "@/contexts/AuthContext";

export default function ManagePermits() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const { admins } = useAdmins();
  const { user } = useAuth();

  // Get current admin (by user id) or fallback to first
  const admin = admins.find(a => a.id === user?.id) || admins[0];
  const faculty = admin?.facultyOrSchool;

  // Get all enrolled course units for the faculty
  const allEnrolledUnits = faculty?.departments
    ?.flatMap(dept => dept.courses)
    .flatMap(course => course?.courseUnits)
    .flatMap(unit => unit?.enrolledBy) || [];

  // Get today's date for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Build a lookup for courseUnitId -> { code, title, completedExam: boolean, examApprovedAt: string | null }
  const courseUnitMap: Record<string, { code: string; title: string; completedExam: boolean; examApprovedAt: string | null }> = {};
  faculty?.departments?.forEach(dept => {
    dept.courses?.forEach(course => {
      course.courseUnits?.forEach(unit => {
        // Find the completed exam and its approvedAt
        let completedExam = false;
        let examApprovedAt: string | null = null;
        (unit.exams || []).forEach(exam => {
          const examDate = new Date(exam.examDate);
          examDate.setHours(0, 0, 0, 0);
          if (exam.isApproved && examDate < today) {
            completedExam = true;
            examApprovedAt = exam.approvedAt || null;
          }
        });
        courseUnitMap[unit.id] = { code: unit.code, title: unit.title, completedExam, examApprovedAt };
      });
    });
  });

  // Only show approved permits for completed exams, with correct approvedAt
  const permits = allEnrolledUnits.filter(unit => {
    const cu = courseUnitMap[unit.courseUnitId];
    return unit.isInvigilatorApproved && cu && cu.completedExam;
  }).map(unit => {
    const cu = courseUnitMap[unit.courseUnitId] || {};
    // Pick the later of invigilatorApprovedAt and examApprovedAt, or just invigilatorApprovedAt if present
    let approvedAt = unit.invigilatorApprovedAt;
    if (cu.examApprovedAt && approvedAt) {
      approvedAt = new Date(approvedAt) > new Date(cu.examApprovedAt) ? approvedAt : cu.examApprovedAt;
    } else if (cu.examApprovedAt) {
      approvedAt = cu.examApprovedAt;
    }
    return {
      id: unit.id,
      studentNumber: unit.student?.regNo || "-",
      enrolledCourseUnit: cu.code && cu.title ? `${cu.code} - ${cu.title}` : unit.courseUnitId,
      approvedBy: unit.approvedBy || "-",
      approvedAt,
      status: "valid",
    };
  });

  const sortedPermits = [...permits].sort((a, b) => {
    if (!a.enrolledCourseUnit || !b.enrolledCourseUnit) return 0;
    return a.enrolledCourseUnit.localeCompare(b.enrolledCourseUnit);
  });
  const filteredPermits = sortedPermits.filter(
    (permit) =>
      permit.studentNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      permit.enrolledCourseUnit?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      permit.approvedBy?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const permitsToShow =
    activeTab === "all"
      ? filteredPermits
      : filteredPermits.filter((p) => p.status === "valid");

  return (
    <SafeAreaView style={{ ...(tw`flex-1` as object), backgroundColor: adminTheme.bg }}>
      <View style={{ ...(tw`w-full px-0 pb-2` as object), backgroundColor: adminTheme.primary }}>
        <Text style={tw`text-2xl font-bold text-white px-6 pt-8 pb-2`}>Manage Permits</Text>
        <Text style={tw`text-white opacity-90 font-medium px-6 pb-4`}>
          View approved student examination permits
        </Text>
      </View>
      {/* Search and Tabs */}
      <View style={tw`px-6 py-4`}>
        <View style={tw`flex-row items-center mb-4`}>
          <View style={tw`flex-1 flex-row items-center bg-white rounded-md border px-2`}>
            <Ionicons name="search" size={18} color="#888" style={tw`mr-2`} />
            <TextInput
              style={tw`flex-1 py-2`}
              placeholder="Search permits or invigilators..."
              value={searchTerm}
              onChangeText={setSearchTerm}
              returnKeyType="search"
            />
          </View>
        </View>
        <View style={tw`flex-row mb-2`}>
          {/* Tab options placeholder, if needed */}
        </View>
      </View>
      {/* Permits Table */}
      <ScrollView style={tw`px-6`}>
        <View style={tw`flex-row border-b border-gray-200 pb-2 mb-2`}>
          <Text style={tw`flex-1 font-bold text-gray-600`}>Student No.</Text>
          <Text style={tw`flex-1 font-bold text-gray-600`}>Course Unit</Text>
          <Text style={tw`flex-1 font-bold text-gray-600`}>Approved By</Text>
          <Text style={tw`flex-1 font-bold text-gray-600`}>Approved At</Text>
        </View>
        {permitsToShow.length === 0 ? (
          <View style={tw`py-8 items-center`}>
            <Text style={tw`text-gray-400`}>No permits found.</Text>
          </View>
        ) : (
          permitsToShow.map((permit, idx) => (
            <View key={permit.id || idx} style={tw`flex-row items-center py-3 border-b border-gray-100`}>
              <Text style={tw`flex-1 text-xs`}>{permit.studentNumber}</Text>
              <Text style={tw`flex-1 text-xs`}>{permit.enrolledCourseUnit}</Text>
              <Text style={tw`flex-1 text-xs`}>{permit.approvedBy}</Text>
              <Text style={tw`flex-1 text-xs`}>{permit.approvedAt ? new Date(permit.approvedAt).toLocaleString() : '-'}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
