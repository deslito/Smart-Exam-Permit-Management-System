import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useStudents } from "@/contexts/StudentContext";
import { useAuth } from "@/contexts/AuthContext";
import { useInvigilators } from "@/contexts/InvigilatorContext";
import config, { QR_CODE_BASE_URL } from "../../../config";
import tw from "twrnc";

export default function StudentQrPage() {
  const { id } = useLocalSearchParams();
  const { getStudentByQrId, approveEnrolledCourseUnit } = useStudents();
  const { user } = useAuth();
  const { getInvigilator } = useInvigilators();

  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [approving, setApproving] = useState(false);
  const [invigilator, setInvigilator] = useState<any>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      getStudentByQrId(id as string)
        .then((data) => setStudent(data))
        .finally(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    if (user?.id) {
      getInvigilator(user.id).then(setInvigilator);
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      const userAgent = navigator.userAgent || navigator.vendor;
      if (/android/i.test(userAgent)) {
        // Open in Android app using intent or scheme
        window.location.href = `intent://invigilators/${id}#Intent;scheme=kyambogoexamapp;package=com.deslito.smartexampermitapp;end`;
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        // Open in iOS app using scheme
        window.location.href = `kyambogoexamapp://invigilators/${id}`;
      } else {
        // Fallback to web URL (now correct: just append /<id> to QR_CODE_BASE_URL)
        window.location.href = `${QR_CODE_BASE_URL}/${id}`;
      }
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
      {/* Approved by banner - always show if approved, with latest info from DB */}
      {isApproved && (
        <View style={tw`bg-green-100 px-4 py-3 flex-row items-center justify-between`}> 
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-green-700 font-semibold`}>
              Approved by: {approvedBy || "-"}
            </Text>
            {approvedAt && (
              <Text style={tw`text-xs text-green-700 ml-2`}>
                • Time: {new Date(approvedAt).toLocaleString()}
              </Text>
            )}
          </View>
          <Text style={tw`text-green-700 font-bold ml-4`}>APPROVED</Text>
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
            style={({ pressed }) => [
              tw`rounded-lg py-3`,
              (isApproved || approving)
                ? tw`bg-gray-300 opacity-60`
                : tw`bg-lime-400`,
              // Remove hover/press effect if disabled
              (isApproved || approving) && tw``,
              // Optionally, you can add a border or cursor style for web
            ]}
            disabled={isApproved || approving || !todayUnit}
            onPress={async () => {
              if (!todayUnit || !invigilator) return;
              setApproving(true);
              setFeedback(null);
              try {
                // Use invigilator's name or staff ID for approvedBy
                const approvedBy =
                  invigilator.invigilatorNumber ||
                  invigilator.id ||
                  invigilator.firstName + " " + invigilator.lastName;
                await approveEnrolledCourseUnit(todayUnit.id, approvedBy);
                // Refresh student data
                const updated = await getStudentByQrId(id as string);
                setStudent(updated);
                setFeedback("Approval successful.");
              } catch (e) {
                setFeedback("Approval failed. Please try again.");
              } finally {
                setApproving(false);
              }
            }}
          >
            <Text style={tw`text-white text-center font-semibold`}>
              {isApproved ? "Approved" : approving ? "Approving..." : "Approve"}
            </Text>
          </Pressable>
          {feedback && (
            <Text
              style={tw`text-center mt-2 text-${
                feedback.includes("failed") ? "red-600" : "green-700"
              }`}
            >
              {feedback}
            </Text>
          )}
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
