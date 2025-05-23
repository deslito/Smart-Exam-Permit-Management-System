import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useInvigilators } from "@/contexts/InvigilatorContext";
import { useAdmins } from "@/contexts/AdminContext";
import { useAuth } from "@/contexts/AuthContext";
import tw from "twrnc";

export default function ScanHistory() {
  const { user } = useAuth();
  const { getInvigilator } = useInvigilators();
  const { admins } = useAdmins();
  const [invigilator, setInvigilator] = React.useState<any>(null);

  React.useEffect(() => {
    if (user?.id) {
      getInvigilator(user.id).then(setInvigilator);
    }
  }, [user]);

  // Wait for invigilator to load
  if (!invigilator) {
    return <View style={tw`flex-1 justify-center items-center`}><Text>Loading...</Text></View>;
  }

  // Get all enrolled course units for this invigilator's department
  const department = invigilator?.department;
  const faculty = admins.find(a => a.facultyOrSchool.departments.some((d: any) => d.id === department?.id))?.facultyOrSchool;

  if (!faculty) {
    return <View style={tw`flex-1 justify-center items-center`}><Text>No faculty found for your department.</Text></View>;
  }

  const allEnrolledUnits = faculty?.departments
    ?.flatMap((dept: any) => dept.courses)
    .flatMap((course: any) => course?.courseUnits)
    .flatMap((unit: any) => unit?.enrolledBy) || [];

  // Only show those approved by this invigilator
  const scanHistory = allEnrolledUnits.filter((unit: any) =>
    unit.isInvigilatorApproved &&
    unit.approvedBy === invigilator?.invigilatorNumber
  ).map((unit: any) => {
    // Find course unit info
    let courseUnit = null;
    for (const dept of faculty.departments) {
      for (const course of dept.courses) {
        courseUnit = course.courseUnits.find((u: any) => u.id === unit.courseUnitId);
        if (courseUnit) break;
      }
      if (courseUnit) break;
    }
    return {
      id: unit.id,
      student: unit.student?.regNo || "-",
      courseUnit: courseUnit ? `${courseUnit.code} - ${courseUnit.title}` : unit.courseUnitId,
      approvedAt: unit.invigilatorApprovedAt,
    };
  });

  return (
    <ScrollView style={tw`flex-1 bg-white`} contentContainerStyle={tw`p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Scan History</Text>
      {scanHistory.length === 0 ? (
        <Text style={tw`text-gray-400`}>No scans found for you.</Text>
      ) : (
        scanHistory.map((item, idx) => (
          <View key={item.id || idx} style={tw`mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200`}>
            <Text style={tw`font-semibold`}>Student: <Text style={tw`font-normal`}>{item.student}</Text></Text>
            <Text style={tw`font-semibold`}>Course Unit: <Text style={tw`font-normal`}>{item.courseUnit}</Text></Text>
            <Text style={tw`font-semibold`}>Approved At: <Text style={tw`font-normal`}>{item.approvedAt ? new Date(item.approvedAt).toLocaleString() : '-'}</Text></Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}