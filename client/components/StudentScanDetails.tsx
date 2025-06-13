import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  ActivityIndicator,
  Image,
} from "react-native";
import tw from "twrnc";
import { invigilatorTheme } from "@/app/(invigilators)/_layout";
import { useInvigilators } from "@/contexts/InvigilatorContext";
import { getInvigilatorById } from "@/services/invigilatorService";
import { EnrolledUnit } from "@/contexts/StudentContext";

interface StudentScanDetailsProps {
  visible: boolean;
  onClose: () => void;
  student: any;
  scanData: string | null;
  isApproving?: boolean;
  onApprove?: () => void;
  approvedUnit: EnrolledUnit | null;  // Changed from optional to nullable
  examTitle?: string;
}

// Helper component for info rows
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={tw`flex-row justify-between py-3 border-b border-gray-100`}>
    <Text style={tw`text-gray-500`}>{label}</Text>
    <Text style={tw`text-right font-medium`}>{value}</Text>
  </View>
);

export function StudentScanDetails({
  visible,
  onClose,
  student,
  scanData,
  isApproving = false,
  onApprove = () => {}, // fallback to no-op
  approvedUnit,
  examTitle,
}: StudentScanDetailsProps){
  const [invigilatorName, setInvigilatorName] = useState<string>("Loading...");

  useEffect(() => {
    if (approvedUnit?.approvedBy) {
      getInvigilatorById(approvedUnit.approvedBy)
        .then(invigilator => {
          if (invigilator) {
            setInvigilatorName(
              `${invigilator.title} ${invigilator.lastName} ${invigilator.otherNames || ''} ${invigilator.firstName}`.trim()
            );
          } else {
            setInvigilatorName(approvedUnit.approvedBy || "Unknown");
          }
        })
        .catch(error => {
          console.error('Error fetching invigilator:', error);
          setInvigilatorName(approvedUnit.approvedBy || "Unknown");
        });
    }
  }, [approvedUnit?.approvedBy]);

  // Format approval time
  const formatDateTime = (iso: string) => {
    const d = new Date(iso);
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}`;
  };
  const handleApprove = () => {
    onApprove();
  };// Removed redundant formatInvigilatorName function as we're using useEffect hook

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={tw`flex-1 bg-black bg-opacity-50 justify-center items-center`}
      >
        <View style={tw`bg-white p-6 rounded-lg w-11/12 max-w-md m-4`}>
          {/* Header Banner First */}
          <View
            style={tw`bg-[${invigilatorTheme.primary}] -mx-6 -mt-6 p-4 rounded-t-lg mb-6`}
          >
            <Text style={tw`text-white text-xl font-bold text-center`}>
              Student Details
            </Text>
          </View>

          {/* Approved Banner - Now below header */}
          {approvedUnit && approvedUnit.isInvigilatorApproved && (
            <View style={tw`bg-green-50 border-l-4 border-green-400 p-4 mb-4`}>
              <View style={tw`flex-row items-center mb-1`}>
                <Text style={tw`text-green-700 text-base font-semibold mr-2`}>
                  ✓
                </Text>                <Text style={tw`text-green-700 font-semibold`}>
                  Approved by: {invigilatorName}
                </Text>
              </View>
              <Text style={tw`text-green-700 text-xs`}>
                Time:{" "}
                {approvedUnit.invigilatorApprovedAt
                  ? formatDateTime(approvedUnit.invigilatorApprovedAt)
                  : "N/A"}
              </Text>
            </View>
          )}

          {/* Rest of the content remains the same */}
          {student ? (
            <>
              {/* Profile Section */}
              <View style={tw`flex-row items-center mb-6`}>
                <View
                  style={tw`w-20 h-20 bg-gray-200 rounded-full mr-4 overflow-hidden`}
                >
                  {student.picture ? (
                    <Image
                      source={{ uri: student.picture }}
                      style={tw`w-full h-full`}
                    />
                  ) : (
                    <View style={tw`w-full h-full bg-gray-300`} />
                  )}
                </View>
                <View style={tw`flex-1`}>
                  <Text style={tw`text-xl font-bold mb-1`}>
                    {student.firstName} {student.lastName}
                  </Text>
                  <Text style={tw`text-gray-600`}>{student.studentNo}</Text>
                </View>
                {/* Valid Badge */}
                <View style={tw`bg-blue-500 px-3 py-1 rounded-full`}>
                  <Text style={tw`text-white text-sm font-medium`}>VALID</Text>
                </View>
              </View>

              {/* Details Grid */}
              <View style={tw`space-y-4`}>
                <InfoRow
                  label="Course"                  value={
                    approvedUnit?.courseUnit?.title ||
                    "Not available"
                  }
                />
                <InfoRow
                  label="Gender"
                  value={student.gender === "MALE" ? "Male" : "Female"}
                />

                <InfoRow label="Exam" value={approvedUnit?.courseUnit?.title || "Not available"} />
                <InfoRow
                  label="Semester"
                  value={`Year ${student.studyYear} Semester ${
                    student.currentSemester === "ONE" ? "I" : "II"
                  }`}
                />
              </View>

              {/* Permit Status */}
              <View
                style={tw`mt-6 p-4 bg-green-50 rounded-lg border border-green-100`}
              >
                <View style={tw`flex-row items-center`}>
                  <View
                    style={tw`w-5 h-5 rounded-full bg-green-500 mr-2 items-center justify-center`}
                  >
                    <Text style={tw`text-white text-xs`}>✓</Text>
                  </View>
                  <Text style={tw`text-green-700 font-medium`}>
                    Permit Valid
                  </Text>
                </View>
                <Text style={tw`text-green-600 text-sm mt-1`}>
                  Student is eligible to take the exam.
                </Text>
              </View>

              {/* QR Code info at bottom */}
              <View style={tw`mt-4 pt-4 border-t border-gray-100`}>
                <Text style={tw`text-xs text-gray-500`}>QR Code UUID:</Text>
                <Text style={tw`text-xs font-mono mt-1 break-all`}>
                  {scanData}
                </Text>
              </View>
            </>
          ) : (
            <View style={tw`py-8`}>
              <ActivityIndicator
                size="large"
                color={invigilatorTheme.primary}
              />
              <Text style={tw`text-center mt-4 text-gray-600`}>
                Loading student details...
              </Text>
            </View>
          )}

          {/* Action Buttons */}
          <View style={tw`mt-6 flex-row gap-4 justify-center`}>
            {/* Show Approve and Close before approving */}
            {!approvedUnit?.isInvigilatorApproved && !isApproving && (
              <>
                <Pressable
                  style={tw`flex-1 bg-[#4CAF50] py-3 rounded-lg`}
                  onPress={handleApprove}
                  disabled={isApproving}
                >
                  <Text style={tw`text-white font-semibold text-center`}>
                    Approve
                  </Text>
                </Pressable>
                <Pressable
                  style={tw`flex-1 bg-[${invigilatorTheme.primary}] py-3 rounded-lg`}
                  onPress={onClose}
                  accessibilityRole="button"
                  accessibilityLabel="Close modal"
                >
                  <Text style={tw`text-white font-semibold text-center`}>
                    Close
                  </Text>
                </Pressable>
              </>
            )}
            {/* Show loader if approving, only Close button centered after approval */}
            {isApproving && (
              <View style={tw`flex-1 flex-row justify-center items-center`}>
                <ActivityIndicator color={invigilatorTheme.primary} />
                <Text
                  style={tw`ml-2 text-[${invigilatorTheme.primary}] font-semibold`}
                >
                  Approving...
                </Text>
              </View>
            )}
            {approvedUnit?.isInvigilatorApproved && !isApproving && (
              <Pressable
                style={tw`flex-1 bg-[${invigilatorTheme.primary}] py-3 rounded-lg`}
                onPress={onClose}
                accessibilityRole="button"
                accessibilityLabel="Close modal"
              >
                <Text style={tw`text-white font-semibold text-center`}>
                  Close
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}
