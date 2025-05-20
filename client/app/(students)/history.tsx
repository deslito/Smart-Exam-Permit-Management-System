import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useAuth } from "@/contexts/AuthContext";
import { useStudents, Student, EnrolledUnit } from "@/contexts/StudentContext";
import { PermitCard } from "@/components/PermitData";
import { StatusBadge } from "@/components/StatusBadge";
import tw from "twrnc";

export interface Permit {
  id: string;
  studentName: string;
  gender: 'MALE' | 'FEMALE';
  studentNumber: string;
  regNumber: string;
  programme: string;
  yearOfStudy: number;
  campus: string;
  semester: 'I' | 'II';
  academicYear: string;
  faculty: string;
  department: string;
  courseUnits: {
    code: string;
    name: string;
    creditUnits: number;
    category: string;
    status: 'NORMAL' | 'RETAKE';
  }[];
  printDate: string;
  examDate: string;
  status: 'expired';
  photoUrl: string | null;
}

export default function History() {
  const { user } = useAuth();
  const { getStudent } = useStudents();
  const [permits, setPermits] = useState<Permit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermits = async () => {
      if (!user?.id) return;
      
      try {
        const student = await getStudent(user.id);
        if (!student) return;

        const currentSemester = student.currentSemester;
        const currentYear = student.studyYear;

        // Group enrolled units by semester and year
        const semesterUnits = student.enrolledUnits.reduce((acc, unit) => {
          const key = `${unit.year}-${unit.semester}`;
          if (!acc[key]) acc[key] = [];
          acc[key].push(unit);
          return acc;
        }, {} as Record<string, EnrolledUnit[]>);

        // Create permits for each previous semester
        const previousPermits: Permit[] = Object.entries(semesterUnits)
          .filter(([key]) => {
            const [year, semester] = key.split('-');
            return (
              Number(year) < currentYear || 
              (Number(year) === currentYear && semester < currentSemester)
            );
          })
          .map(([key, units]): Permit => {
            const [year] = key.split('-');
            
            return {
              id: `${student.id}-${key}`,
              studentName: `${student.firstName} ${student.lastName}`,
              gender: student.gender,
              studentNumber: student.studentNo,
              regNumber: student.regNo,
              programme: student.programme?.course?.name || "",
              yearOfStudy: Number(year),
              campus: student.campus,
              semester: units[0].semester === "ONE" ? "I" : "II",
              academicYear: student.academicYear,
              faculty: student.programme?.course?.department?.facultyOrSchool?.name || "",
              department: student.programme?.course?.department?.name || "",
              courseUnits: units.map((u) => ({
                code: u.courseUnit.code,
                name: u.courseUnit.title,
                creditUnits: u.courseUnit.credits,
                category: u.courseUnit.category,
                status: u.attempt === 1 ? "NORMAL" : "RETAKE",
              })),
              printDate: new Date().toISOString(),
              examDate: new Date().toISOString(),
              status: "expired",
              photoUrl: student.picture,
            };
          });

        setPermits(previousPermits);
      } catch (error) {
        console.error('Error fetching permits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPermits();
  }, [user?.id, getStudent]);

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[#f0fff0]`}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[tw`flex-1`, { backgroundColor: "#f0fff0" }]}>
      <View
        style={[
          tw`p-6 rounded-b-3xl`,
          { backgroundColor: "#228b22", shadowColor: "#000", shadowOpacity: 0.2 },
        ]}
      >
        <Text style={[tw`text-2xl font-bold text-white`]}>Permit History</Text>
      </View>

      <ScrollView contentContainerStyle={tw`p-4`}>
        {permits.length === 0 ? (
          <Text style={tw`text-center text-gray-600 mt-4`}>
            No previous permits found.
          </Text>
        ) : (
          permits.map((permit) => (
            <View key={permit.id} style={tw`mb-6`}>
              <PermitCard
                permitData={permit}
                hideQRCode
                hideInstructions
                variant="history"
              />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}