import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useStudents } from "@/contexts/StudentContext";
import tw from "twrnc";

export default function StudentQrPage() {
  const { id } = useLocalSearchParams();
  const { getStudentByQrId, approveEnrolledCourseUnit } = useStudents();

  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [approving, setApproving] = useState(false);

  useEffect(() => {
    if (id) {
      getStudentByQrId(id as string)
        .then((data) => setStudent(data))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Text style={tw`text-center mt-10`}>Loading...</Text>;
  if (!student)
    return <Text style={tw`text-center mt-10`}>Student not found</Text>;

  // Find today's enrolled course unit (exam)
  const today = new Date().toISOString().slice(0, 10);
  const todayUnit = student.enrolledUnits?.find(
    (unit: any) =>
      unit.courseUnit?.examDate?.slice(0, 10) === today ||
      unit.examDate?.slice(0, 10) === today // fallback if examDate is on unit
  );

  // Approval state
  const isApproved = todayUnit?.isInvigilatorApproved;
  const approvedBy = todayUnit?.approvedBy;
  const approvedAt = todayUnit?.invigilatorApprovedAt;

  return (
    <ScrollView style={tw`flex-1 bg-gray-50`}>
      {/* Approved by banner */}
      {isApproved && (
        <View style={tw`bg-green-100 px-4 py-3 flex-row items-center`}>
          <Text style={tw`text-green-700 font-semibold`}>
            Approved by: {approvedBy}
          </Text>
          {approvedAt && (
            <Text style={tw`text-xs text-green-700 ml-2`}>
              • Time: {new Date(approvedAt).toLocaleString()}
            </Text>
          )}
        </View>
      )}

      {/* Card */}
      <View style={tw`m-4 bg-white rounded-2xl shadow p-6`}>
        <View style={tw`flex-row items-center mb-4`}>
          <Image
            source={student.picture}
            style={tw`w-16 h-16 rounded-full mr-4`}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`text-xl font-bold`}>
              {student.lastName} {student.firstName}
            </Text>
            <Text style={tw`text-gray-500`}>{student.regNo}</Text>
          </View>
          <View style={tw`ml-2`}>
            <View style={tw`bg-blue-700 px-3 py-1 rounded-full`}>
              <Text style={tw`text-white text-xs font-bold`}>
                {student.permitStatus?.toUpperCase() || "VALID"}
              </Text>
            </View>
          </View>
        </View>

        {/* Info rows */}
        <View style={tw`border-t border-gray-100`}>
          <InfoRow
            label="Course"
            value={student.programme?.course?.name || "-"}
          />
          <InfoRow
            label="Exam"
            value={todayUnit?.courseUnit?.title || "No exam today"}
          />
          <InfoRow
            label="Gender"
            value={student.gender === "MALE" ? "Male" : "Female"}
          />
          <InfoRow
            label="Semester"
            value={`Year ${student.studyYear} Semester ${
              student.currentSemester === "ONE" ? "I" : "II"
            }`}
          />
        </View>

        {/* Permit status message */}
        {student.permitStatus === "valid" && (
          <View
            style={tw`bg-green-100 rounded-lg px-4 py-3 mt-6 flex-row items-center`}
          >
            <Text style={tw`text-green-700 font-semibold mr-2`}>
              ✔ Permit Valid
            </Text>
            <Text style={tw`text-green-700`}>
              Permit is valid. Student is eligible to take the exam.
            </Text>
          </View>
        )}

        {/* Approve button */}
        <View style={tw`mt-6`}>
          <Pressable
            style={[
              tw`rounded-lg py-3`,
              isApproved || approving ? tw`bg-gray-300` : tw`bg-lime-400`,
            ]}
            disabled={isApproved || approving || !todayUnit}
            onPress={async () => {
              if (!todayUnit) return;
              setApproving(true);
              try {
                // Replace with actual invigilator info
                await approveEnrolledCourseUnit(
                  todayUnit.id,
                  "INVIGILATOR_NAME_OR_ID"
                );
                // Refresh student data
                const updated = await getStudentByQrId(id as string);
                setStudent(updated);
              } catch (e) {
                // Optionally show error
              } finally {
                setApproving(false);
              }
            }}
          >
            <Text style={tw`text-white text-center font-semibold`}>
              {isApproved ? "Approved" : approving ? "Approving..." : "Approve"}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={tw`flex-row justify-between py-3 border-b border-gray-100`}>
      <Text style={tw`text-gray-500`}>{label}</Text>
      <Text style={tw`text-right`}>{value}</Text>
    </View>
  );
}
