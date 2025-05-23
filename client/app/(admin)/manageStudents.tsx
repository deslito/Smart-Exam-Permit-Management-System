import React, { useState, useMemo } from "react";
import { View, Text, TextInput, ScrollView, Pressable, ActivityIndicator } from "react-native";
import tw from "twrnc";
import { adminTheme } from "./_layout";
import { Ionicons } from "@expo/vector-icons";
import { useStudents } from "@/contexts/StudentContext";
import { useAdmins } from "@/contexts/AdminContext";
import { useAuth } from "@/contexts/AuthContext";

export default function ManageStudents() {
  const { students, loading, error, refresh } = useStudents();
  const { admins } = useAdmins();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  // Find the currently signed-in admin by user id
  const admin = admins.find(a => a.id === user?.id) || admins[0];

  // Get all courses under the admin's faculty
  const facultyCourses = (admin?.facultyOrSchool?.departments || [])
    .flatMap(dept => dept.courses || []);

  // Build a set of course codes for quick lookup
  const facultyCourseCodes = new Set(facultyCourses.map(c => c.code));

  // Filter students: only those whose programme.course.code is in facultyCourseCodes
  const facultyStudents = useMemo(
    () =>
      students.filter(
        s => s.programme?.course?.code && facultyCourseCodes.has(s.programme.course.code)
      ),
    [students, facultyCourseCodes]
  );

  // Search and filter students
  const filteredStudents = useMemo(() => {
    if (!searchTerm) return facultyStudents;
    return facultyStudents.filter(student =>
      student.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (student.programme?.course?.name?.toLowerCase?.() || "").includes(searchTerm.toLowerCase())
    );
  }, [facultyStudents, searchTerm]);

  // Group students by course (not by department/programme)
  const groupedByCourse = useMemo(() => {
    // Map course code to course info and students
    const courseMap: Record<string, { courseName: string; courseCode: string; students: typeof students }> = {};
    facultyCourses.forEach(course => {
      courseMap[course.code] = {
        courseName: course.name,
        courseCode: course.code,
        students: [],
      };
    });
    filteredStudents.forEach(student => {
      const code = student.programme?.course?.code;
      if (code && courseMap[code]) {
        courseMap[code].students.push(student);
      }
    });
    // Return as array, sorted by course name
    return Object.values(courseMap).sort((a, b) => a.courseName.localeCompare(b.courseName));
  }, [filteredStudents, facultyCourses]);

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      {/* Header */}
      <View style={tw`p-6 pt-12`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Manage Students</Text>
        {/* Search Bar */}
        <View style={tw`flex-row mb-4`}>
          <TextInput
            style={tw`flex-1 border rounded-md px-3 py-2 bg-white`}
            placeholder="Search by reg number, student number or course"
            value={searchTerm}
            onChangeText={setSearchTerm}
            onSubmitEditing={refresh}
            returnKeyType="search"
          />
          <Pressable
            style={tw`ml-2 px-4 py-2 rounded-md bg-[${adminTheme.primary}]`}
            onPress={refresh}
          >
            <Ionicons name="search" size={20} color="#fff" />
          </Pressable>
        </View>
      </View>

      {/* Loading/Error States */}
      {loading ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" color={adminTheme.primary} />
        </View>
      ) : error ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-red-600`}>{error}</Text>
        </View>
      ) : (
        <ScrollView style={tw`flex-1 px-6`} contentContainerStyle={tw`pb-6`}>
          {groupedByCourse.length === 0 ? (
            <View style={tw`py-8 items-center`}>
              <Text style={tw`text-gray-400`}>
                No students found. Try a different search term.
              </Text>
            </View>
          ) : (
            groupedByCourse.map((course) => (
              <View key={course.courseCode} style={tw`mb-6 rounded-lg overflow-hidden bg-white shadow-sm`}>
                {/* Course Header */}
                <Pressable
                  style={tw`flex-row justify-between items-center px-4 py-3 bg-gray-50`}
                  onPress={() => setOpenCourse(openCourse === course.courseCode ? null : course.courseCode)}
                >
                  <View>
                    <Text style={tw`font-medium text-lg`}>{course.courseName}</Text>
                    <Text style={tw`text-sm text-gray-500`}>
                      {course.students.length} student{course.students.length !== 1 ? "s" : ""}
                    </Text>
                  </View>
                  <Ionicons
                    name={openCourse === course.courseCode ? "chevron-up" : "chevron-down"}
                    size={22}
                    color={adminTheme.primary}
                  />
                </Pressable>
                {openCourse === course.courseCode && (
                  <View>
                    {course.students.length === 0 ? (
                      <View style={tw`px-4 py-3`}>
                        <Text style={tw`text-gray-400`}>No students in this course.</Text>
                      </View>
                    ) : (
                      course.students.map((student) => (
                        <View
                          key={student.studentNo}
                          style={tw`px-4 py-3 border-t border-gray-100 flex-row justify-between items-center`}
                        >
                          <View style={tw`flex-1`}>
                            <Text style={tw`font-semibold`}>
                              Student No: {student.studentNo}
                            </Text>
                            <Text style={tw`text-xs text-gray-500`}>
                              Reg Number: {student.regNo}
                            </Text>
                          </View>
                          <View style={tw`px-2 py-1 rounded-full ${student.permitStatus === "valid" ? "bg-green-500" : "bg-red-500"} ml-2`}>
                            <Text style={tw`text-xs text-white font-semibold`}>
                              {student.permitStatus.toUpperCase()}
                            </Text>
                          </View>
                        </View>
                      ))
                    )}
                  </View>
                )}
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}
