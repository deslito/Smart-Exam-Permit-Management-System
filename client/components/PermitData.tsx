import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import { QRCode } from "./QrCode";
import { StatusBadge } from "./StatusBadge";
import { useStudents } from "@/contexts/StudentContext";
import { useAuth } from "@/contexts/AuthContext";
import KyambogoLogo from "@/assets/images/kyambogoLogo.png";
import tw from "twrnc";

// First, define the types
type CourseUnitStatus = "NORMAL" | "RETAKE";
type PermitStatus = "valid" | "invalid" | "expired";

interface CourseUnit {
  code: string;
  name: string;
  creditUnits: number;
  category: "CORE" | "ELECTIVE";
  status: CourseUnitStatus;
  description?: string;
}

export interface PermitData {
  id?: string;
  studentName: string;
  gender?: string;
  studentNumber: string;
  regNumber: string;
  programme: string;
  yearOfStudy: number;
  campus: string;
  semester: "I" | "II";
  academicYear: string;
  faculty?: string;
  department?: string;
  courseUnits: CourseUnit[];
  printDate?: string;
  status: PermitStatus;
  photoUrl?: string;
  qrCode?: string;
}

export interface PermitCardProps {
  permitData: any;
  hideQRCode?: boolean;
  hideInstructions?: boolean;
  statusBadge?: string;
  variant?: string;
}

export const PermitCard = ({
  permitData,
  hideQRCode,
  hideInstructions,
  statusBadge,
  variant,
}: PermitCardProps) => {
  const { user } = useAuth();
  const { getStudent } = useStudents();
  const [permitDataState, setPermitDataState] = useState<PermitData | null>(permitData || null);

  useEffect(() => {
    if (permitData) {
      setPermitDataState(permitData);
      return;
    }

    if (!user?.id) return;
    getStudent(user.id).then((student) => {
      if (!student) return;
      const qr = student.studentQrCodes?.[0];
      setPermitDataState({
        studentName: `${student.firstName} ${student.lastName}`,
        gender: student.gender,
        studentNumber: student.studentNo,
        regNumber: student.regNo,
        programme: student.programme?.course?.name || "",
        yearOfStudy: student.studyYear,
        campus: student.campus,
        semester: student.currentSemester === "ONE" ? "I" : "II",
        academicYear: student.academicYear,
        faculty: student.programme?.course?.department?.facultyOrSchool?.name || "",
        department: student.programme?.course?.department?.name || "",
        courseUnits: student.enrolledUnits.map((unit: any) => ({
          code: unit.courseUnit.code,
          name: unit.courseUnit.title,
          creditUnits: unit.courseUnit.credits,
          category: unit.courseUnit.category,
          status: unit.attempt === 1 ? "NORMAL" : "RETAKE",
          description: unit.courseUnit.description,
        })),
        printDate: new Date().toISOString(),
        status: student.permitStatus as PermitStatus,
        photoUrl: student.picture || undefined, // Convert null to undefined
        qrCode: qr?.qrCode || undefined,       // Convert null to undefined
      });
    });
  }, [user, getStudent, permitData]);

  if (!permitDataState) return null;

  const printDateTime = permitDataState.printDate ? new Date(permitDataState.printDate) : new Date();

  return (
    <ScrollView style={tw`flex-1`} contentContainerStyle={tw`items-center p-4`}>
      <View style={[tw`bg-white rounded-xl shadow-lg w-full`, { maxWidth: 820 }]}>
        {/* Header */}
        <View style={tw`items-center py-6`}>
          <Image source={KyambogoLogo} style={{ width: 100, height: 100, resizeMode: "contain" }} />
          <Text style={tw`text-xl font-bold text-blue-900 mt-2`}>Kyambogo University</Text>
          <Text style={tw`text-sm text-green-600`}>Knowledge and Skills for Service</Text>
        </View>
        {/* Date & Time */}
        <View style={tw`flex-row justify-between px-6 py-2`}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="calendar-outline" size={16} color="#666" />
            <Text style={tw`text-sm text-gray-600 ml-1`}>{format(printDateTime, "dd MMM yyyy")}</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="time-outline" size={16} color="#666" />
            <Text style={tw`text-sm text-gray-600 ml-1`}>{format(printDateTime, "HH:mm:ss")}</Text>
          </View>
        </View>
        {/* Student Info */}
        <View style={tw`flex-row px-6 py-4 border-t border-b border-gray-100 relative`}>
          {/* Status Badge - Now absolutely positioned */}
          <View style={tw`absolute top-4 right-6`}>
            <StatusBadge status={permitDataState.status} />
          </View>

          {/* Photo */}
          <View style={tw`mr-6`}>
            {permitDataState.photoUrl ? (
              <Image 
                source={{ uri: permitDataState.photoUrl }} 
                style={[tw`rounded-full`, { width: 100, height: 100 }]} 
              />
            ) : (
              <View style={[tw`bg-gray-100 rounded-full items-center justify-center`, { width: 100, height: 100 }]}>
                <Ionicons name="person" size={60} color="#9ca3af" />
              </View>
            )}
          </View>

          {/* Student Info Columns */}
          <View style={tw`flex-1 flex-row flex-wrap`}>
            <View style={tw`flex-1 min-w-1/2 pr-2`}>
              <Text style={tw`text-lg font-bold text-gray-900 mb-1`}>{permitDataState.studentName}</Text>
              <InfoRow label="Gender" value={permitDataState.gender} />
              <InfoRow label="Reg Number" value={permitDataState.regNumber} />
              <InfoRow label="Study Year" value={permitDataState.yearOfStudy} />
              <InfoRow label="Semester" value={permitDataState.semester} />
              <InfoRow label="Faculty" value={permitDataState.faculty} />
            </View>
            <View style={tw`flex-1 min-w-1/2 pl-2`}>
              <InfoRow label="Student No" value={permitDataState.studentNumber} />
              <InfoRow label="Programme" value={permitDataState.programme} />
              <InfoRow label="Campus" value={permitDataState.campus} />
              <InfoRow label="Academic Year" value={permitDataState.academicYear} />
              <InfoRow label="Department" value={permitDataState.department} />
            </View>
          </View>
        </View>
        {/* Registered Course Units */}
        <View style={tw`px-6 py-4`}>
          <Text style={tw`text-lg font-semibold mb-3`}>Registered Course Units</Text>
          <View style={tw`border border-gray-200 rounded-lg overflow-hidden`}>
            {/* Table Header */}
            <View style={tw`flex-row bg-gray-50 p-3 border-b border-gray-200`}>
              <Text style={tw`flex-1 font-bold text-xs text-gray-500`}>Code</Text>
              <Text style={tw`flex-2 font-bold text-xs text-gray-500`}>Course Unit</Text>
              <Text style={tw`w-8 font-bold text-xs text-gray-500`}>CU</Text>
              <Text style={tw`w-14 font-bold text-xs text-gray-500`}>Category</Text>
              <Text style={tw`w-14 font-bold text-xs text-gray-500`}>Status</Text>
            </View>
            {/* Table Body */}
            {permitDataState.courseUnits.map((unit, i) => (
              <View
                key={unit.code}
                style={tw`flex-row py-2 px-3 border-b border-gray-50`}
              >
                <Text style={tw`flex-1 text-xs text-gray-700`}>{unit.code}</Text>
                <Text style={tw`flex-2 text-xs text-gray-700`}>{unit.name}</Text>
                <Text style={tw`w-8 text-xs text-gray-700`}>{unit.creditUnits}</Text>
                <Text style={tw`w-14 text-xs text-gray-700`}>{unit.category}</Text>
                <Text style={tw`w-14 text-xs ${unit.status === "NORMAL" ? "text-green-700" : "text-yellow-700"} font-semibold`}>
                  {unit.status}
                </Text>
              </View>
            ))}
          </View>
        </View>
        {/* QR Code */}
        {!hideQRCode && permitDataState.qrCode && (
          <View style={tw`items-center py-6 border-t border-gray-100`}>
            {/* Only encode the UUID, not a URL */}
            <QRCode value={permitDataState.qrCode} size={150} />
            <Text style={tw`mt-2 text-xs text-gray-500`}>Permit QR UUID: {permitDataState.qrCode}</Text>
          </View>
        )}
        {/* Instructions */}
        {!hideInstructions && (
          <View style={tw`px-6 py-4 bg-gray-50 rounded-b-xl`}>
            <Text style={tw`font-medium mb-2`}>Instructions:</Text>
            {[
              "Present this permit along with your student ID",
              "Arrive at least 15 minutes before the exam",
              "Electronic devices are not allowed during the exam",
              "This QR code will be scanned for verification",
              "Any permit tampering is considered exam malpractice",
            ].map((inst, i) => (
              <Text key={i} style={tw`text-sm text-gray-600 mb-1`}>
                • {inst}
              </Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

// Helper for info rows
const InfoRow = ({ label, value, noMargin }: { label: string; value: any; noMargin?: boolean }) => (
  <View style={!noMargin && tw`mb-1`}>
    {typeof value === 'string' ? (
      <Text style={tw`text-sm text-gray-900`}>
        <Text style={tw`text-gray-500 font-medium`}>{label}: </Text>
        {value}
      </Text>
    ) : (
      <View style={tw`flex-row items-center`}>
        <Text style={tw`text-sm text-gray-500 font-medium`}>{label}: </Text>
        {value}
      </View>
    )}
  </View>
);
