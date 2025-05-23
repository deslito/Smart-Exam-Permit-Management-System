// app/(admin)/adminDashboard.tsx
import React, { useMemo } from "react";
import { View, Text, ScrollView, Pressable, ActivityIndicator } from "react-native";
import { adminTheme } from "./_layout";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import tw from "twrnc";
import { useAdmins } from "@/contexts/AdminContext";
import { useStudents } from "@/contexts/StudentContext";
import { useAuth } from "@/contexts/AuthContext"; // <-- Import AuthContext

export default function AdminDashboard() {
  const { admins, loading: adminsLoading } = useAdmins();
  const { students, loading: studentsLoading } = useStudents();
  const { user } = useAuth();

  const admin = admins.find(a => a.id === user?.id) || admins[0];
  const facultyCode = admin?.facultyOrSchool?.code || "-";

  // Faculty info from the current admin's facultyOrSchool
  const faculty = admin?.facultyOrSchool;
  const departments = faculty?.departments || [];
  const totalCourses = departments.reduce(
    (sum: number, dept: { courses?: { id: string; name: string }[] }) => 
      sum + (dept.courses?.length || 0),
    0
  );

  // Get all course codes in the faculty
  const facultyCourseCodes = new Set(
    departments.flatMap((dept) => (dept.courses || []).map((c) => c.code))
  );

  // Only students in the admin's faculty (by course code)
  const facultyStudents = useMemo(
    () =>
      students.filter(
        (s) => s.programme?.course?.code && facultyCourseCodes.has(s.programme.course.code)
      ),
    [students, facultyCourseCodes]
  );

  // Students with valid permits in this faculty
  const validPermits = facultyStudents.filter((s) => s.permitStatus === "valid");

  // Get all enrolled course units from the admin's faculty
  const allEnrolledUnits = admin?.facultyOrSchool?.departments
    ?.flatMap(dept => dept.courses)
    .flatMap(course => course?.courseUnits)
    .flatMap(unit => unit?.enrolledBy) || [];

  // Find today's completed exams (approved and examDate is today)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const completedToday: { id: string; courseUnitTitle: string; studentCount: number }[] = [];
  admin?.facultyOrSchool?.departments?.forEach(dept => {
    dept.courses?.forEach(course => {
      course.courseUnits?.forEach(unit => {
        unit.exams?.forEach(exam => {
          const examDate = new Date(exam.examDate);
          examDate.setHours(0, 0, 0, 0);
          if (exam.isApproved && examDate.getTime() === today.getTime()) {
            // Count students enrolled for this course unit
            const studentCount = unit.enrolledBy?.length || 0;
            completedToday.push({
              id: exam.id,
              courseUnitTitle: unit.title,
              studentCount,
            });
          }
        });
      });
    });
  });

  // Calculate stats
  const stats = {
    totalStudents: facultyStudents.length,
    validPermits: validPermits.length,
    facultyCode,
    verifiedToday: allEnrolledUnits.filter(
      (unit) =>
        unit.isInvigilatorApproved &&
        unit.invigilatorApprovedAt &&
        new Date(unit.invigilatorApprovedAt).toDateString() === new Date().toDateString()
    ).length,
  };

  const facultyInfo = faculty
    ? {
        name: faculty.name,
        code: faculty.id, // <-- Use id as the code
        departments: departments.length,
        totalCourses,
      }
    : {
        name: "-",
        code: "-", // fallback
        departments: "-",
        totalCourses: "-",
      };

  // Replace recentActivities with completedToday exams
  const recentActivities = completedToday.length > 0
    ? completedToday.map((exam, idx) => ({
        id: exam.id,
        action: `Exam Completed`,
        student: `${exam.courseUnitTitle} (${exam.studentCount} students)`,
        timestamp: "Today",
      }))
    : [
        { id: 1, action: "No exams completed today", student: "-", timestamp: "" }
      ];

  if (adminsLoading || studentsLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[#f0f8ff]`}>
        <ActivityIndicator size="large" color={adminTheme.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={tw`flex-1 bg-[#f0f8ff]`}>
      {/* Header */}
      <View style={{
        ...tw`p-6 pt-12 rounded-b-3xl`,
        backgroundColor: adminTheme.primary
      }}>
        <Text style={tw`text-2xl font-bold text-white`}>Admin Dashboard</Text>
        <Text style={tw`opacity-90 font-medium text-white mt-1`}>
          {admin?.firstName
            ? `${admin.firstName}${admin.otherNames ? " " + admin.otherNames : ""} ${admin.lastName}`
            : "Admin User"}
        </Text>
        <Text style={tw`text-xs opacity-75 text-white`}>Role: Administrator</Text>
      </View>

      {/* Faculty Info */}
      <View style={tw`px-4 -mt-6`}>
        <Card style={tw`p-4`}>
          <View style={tw`flex-row items-center mb-4`}>
            <Ionicons name="school-outline" size={20} color={adminTheme.primary} style={tw`mr-2`} />
            <Text style={tw`text-md font-semibold`}>Faculty: {facultyInfo.name}</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <StatCard
              title="Total Students"
              value={stats.totalStudents.toString()}
              icon={<Ionicons name="people-outline" size={32} color={adminTheme.primary} />}
            />
            <StatCard
              title="Valid Permits"
              value={stats.validPermits.toString()}
              icon={<Ionicons name="card-outline" size={32} color="#22c55e" />}
            />
          </View>
        </Card>
      </View>

      {/* Permit Status */}
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-semibold mb-3`}>Permit Status Distribution</Text>
        <Card style={tw`p-4`}>
          <StatusProgressBar label="Approved" value={100} color={adminTheme.primary} />
        </Card>
      </View>

      {/* Faculty Details */}
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-semibold mb-3`}>Faculty Details</Text>
        <Card style={tw`p-4`}>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`flex-1 items-center`}>
              <Text style={tw`text-sm text-gray-500 text-center`}>Faculty Code</Text>
              <Text style={tw`font-medium text-center`}>{facultyInfo.code}</Text>
            </View>
            <View style={tw`flex-1 items-center`}>
              <Text style={tw`text-sm text-gray-500 text-center`}>Departments</Text>
              <Text style={tw`font-medium text-center`}>{facultyInfo.departments}</Text>
            </View>
            <View style={tw`flex-1 items-center`}>
              <Text style={tw`text-sm text-gray-500 text-center`}>Total Courses</Text>
              <Text style={tw`font-medium text-center`}>{facultyInfo.totalCourses}</Text>
            </View>
          </View>
        </Card>
      </View>

      {/* Department Breakdown */}
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-semibold mb-3`}>Students by Department</Text>
        <Card style={tw`p-4`}>
          {departments.length === 0 ? (
            <Text style={tw`text-gray-400`}>No departments found for this faculty.</Text>
          ) : (
            departments.map((dept) => {
              // Get all course codes in this department (since course id is not available on the frontend)
              const deptCourseCodes = (dept.courses || []).map(c => c.code);
              // Count students whose programme.course.code matches a course in this department
              // This follows: student -> programme -> course (by code) -> department -> facultyOrSchool
              const count = facultyStudents.filter(
                s => deptCourseCodes.includes(s.programme?.course?.code)
              ).length;
              return (
                <View key={dept.id} style={tw`flex-row justify-between items-center py-2 border-b border-gray-100 last:border-0`}>
                  <Text style={tw`font-medium`}>{dept.name}</Text>
                  <Text style={tw`text-gray-700 font-bold`}>{count}</Text>
                </View>
              );
            })
          )}
        </Card>
      </View>

      {/* Quick Actions */}
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-semibold mb-3`}>Quick Actions</Text>
        <View style={tw`flex-row justify-between`}>
          <Link href="/(admin)/manageInvigilators" asChild>
            <Pressable style={tw`flex-1 bg-white rounded-xl p-4 mx-1 items-center`}>
              <Ionicons name="person-outline" size={24} color={adminTheme.primary} />
              <Text style={tw`mt-2 font-medium text-sm`}>Manage Invigilators</Text>
            </Pressable>
          </Link>
          <Link href="/(admin)/managePermits" asChild>
            <Pressable style={tw`flex-1 bg-white rounded-xl p-4 mx-1 items-center`}>
              <Ionicons name="card-outline" size={24} color={adminTheme.primary} />
              <Text style={tw`mt-2 font-medium text-sm`}>Manage Permits</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={tw`p-4`}>
        <View style={tw`flex-row justify-between items-center mb-3`}>
          <Text style={tw`text-lg font-semibold`}>Recent Activity</Text>
          <Link href="/(admin)/not-found" asChild>
            <Text style={{
              ...tw`text-sm font-medium`,
              color: adminTheme.primary
            }}>
              View All
            </Text>
          </Link>
        </View>
        <Card style={tw`p-4`}>
          {recentActivities.map((activity, idx) => (
            <View key={activity.id}>
              <View style={tw`flex-row justify-between items-center`}>
                <View>
                  <Text style={tw`font-medium`}>{activity.action}</Text>
                  <Text style={tw`text-sm text-gray-500`}>{activity.student}</Text>
                </View>
                <Text style={tw`text-xs text-gray-400 text-right`}>{activity.timestamp}</Text>
              </View>
              {idx < recentActivities.length - 1 && <Separator style={tw`my-2`} />}
            </View>
          ))}
        </Card>
      </View>

      {/* Today's Verification */}
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-semibold mb-3`}>Today's Verification</Text>
        <Card style={tw`p-4 flex-row items-center`}>
          <Ionicons name="calendar-outline" size={40} color={adminTheme.primary} />
          <View style={tw`ml-4`}>
            <Text style={tw`font-medium`}>{stats.verifiedToday} Permits Verified</Text>
            <Text style={tw`text-sm text-gray-500`}>Today</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

// Simple Card component
function Card({ children, style }: { children: React.ReactNode; style?: any }) {
  return (
    <View style={{
      ...tw`bg-white rounded-lg shadow-sm`,
      ...(style as object)
    }}>
      {children}
    </View>
  );
}

// Simple ProgressBar component
function ProgressBar({ value, color = "#0057B7" }: { value: number; color?: string }) {
  return (
    <View style={tw`w-full h-2 bg-gray-200 rounded-full overflow-hidden`}>
      <View style={{
        ...tw`h-2 rounded-full`,
        width: `${value}%`,
        backgroundColor: color
      }} />
    </View>
  );
}

// Simple Separator component
function Separator({ style }: { style?: any }) {
  return <View style={{
    ...tw`h-px w-full bg-gray-200`,
    ...(style as object)
  }} />;
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <View style={tw`bg-white rounded-xl p-3 shadow-sm flex-row items-center mr-2 flex-1`}>
      <View style={tw`mr-3`}>{icon}</View>
      <View>
        <Text style={tw`text-sm text-gray-500`}>{title}</Text>
        <Text style={tw`text-xl font-bold`}>{value}</Text>
      </View>
    </View>
  );
}

function StatusProgressBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <View>
      <View style={tw`flex-row justify-between mb-1`}>
        <Text style={tw`text-sm font-medium`}>{label}</Text>
        <Text style={tw`text-sm font-medium`}>{value}%</Text>
      </View>
      <ProgressBar value={value} color={color} />
    </View>
  );
}
