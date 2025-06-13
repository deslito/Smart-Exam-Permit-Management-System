import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useInvigilators } from "@/contexts/InvigilatorContext";
import type { Invigilator } from "@/contexts/InvigilatorContext";
import { useStudents } from "@/contexts/StudentContext";
import { useAuth } from "@/contexts/AuthContext";
import tw from "twrnc";
import FuturisticSearchBar from "@/components/invigilators/FuturisticSearchBar";
import { invigilatorTheme } from "./_layout";

interface ApprovedStudent {
  enrolledUnitId: string;
  regNo: string;
  studentNo: string;
  courseUnit: {
    code: string;
    title: string;
  };
  programme: string;
  approvedAt: string;
}

interface GroupedApprovals {
  [date: string]: ApprovedStudent[];
}

export default function ScanHistory() {
  const { user } = useAuth();
  const { getInvigilator } = useInvigilators();
  const { getStudentsApprovedByInvigilator } = useStudents();
  const [invigilator, setInvigilator] = useState<Invigilator | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [groupedApprovals, setGroupedApprovals] = useState<GroupedApprovals>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (user?.id) {
        try {
          setLoading(true);
          const invigilatorData = await getInvigilator(user.id);
          setInvigilator(invigilatorData);
          if (invigilatorData?.id) {
            const approvedStudents = await getStudentsApprovedByInvigilator(invigilatorData.id);
            setGroupedApprovals(approvedStudents);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchData();
  }, [user]);
  const filterApprovedStudents = (searchTerm: string) => {
    if (!invigilator?.id) return;
    
    getStudentsApprovedByInvigilator(invigilator.id)
      .then(students => {
        if (!searchTerm) {
          setGroupedApprovals(students);
          return;
        }

        const searchTermLower = searchTerm.toLowerCase();
        const filtered: GroupedApprovals = {};

        Object.entries(students).forEach(([date, approvals]) => {
          const matchingApprovals = approvals.filter(student => 
            student.regNo.toLowerCase().includes(searchTermLower) ||
            student.studentNo.toLowerCase().includes(searchTermLower) ||
            student.courseUnit.code.toLowerCase().includes(searchTermLower) ||
            student.courseUnit.title.toLowerCase().includes(searchTermLower) ||
            student.programme.toLowerCase().includes(searchTermLower)
          );

          if (matchingApprovals.length > 0) {
            filtered[date] = matchingApprovals;
          }
        });

        setGroupedApprovals(filtered);
      })
      .catch(error => {
        console.error('Error filtering students:', error);
      });
  };
  useEffect(() => {
    filterApprovedStudents(searchQuery);
  }, [searchQuery]);
  if (loading || !invigilator) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[${invigilatorTheme.bg}]`}>
        <ActivityIndicator size="large" color={invigilatorTheme.primary} />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-[${invigilatorTheme.bg}] p-4`}>
      {/* Header */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-2xl font-bold text-[${invigilatorTheme.primary}] mb-2`}>
          Scan History
        </Text>
        <Text style={tw`text-gray-600`}>
          View all previously approved exam permits
        </Text>
      </View>

      <FuturisticSearchBar
        value={searchQuery}
        onChange={setSearchQuery}        placeholder="Search by reg number, student number, or course..."
      />

      <ScrollView style={tw`mt-4`}>
        {Object.entries(groupedApprovals).map(([date, students]) => (
          <View key={date} style={tw`mb-6`}>
            <View style={tw`flex-row items-center mb-2`}>
              <View style={tw`flex-1 h-[1px] bg-gray-300`} />
              <Text style={tw`mx-4 text-gray-500 font-medium`}>{date}</Text>
              <View style={tw`flex-1 h-[1px] bg-gray-300`} />
            </View>

            {students.map((student: ApprovedStudent, index: number) => (
              <View
                key={`${student.enrolledUnitId}-${index}`}
                style={tw`mb-4 p-4 rounded-lg bg-white shadow-md border border-gray-200`}
              >                <View style={tw`flex-row justify-between items-start`}>
                  <View style={tw`flex-1`}>
                    <View style={tw`flex-row justify-between items-center mb-1`}>
                      <Text style={tw`text-lg font-bold text-[${invigilatorTheme.primary}]`}>
                        Reg No: {student.regNo}
                      </Text>
                    </View>
                    <Text style={tw`text-base font-semibold text-gray-800 mb-1`}>
                      Student No: {student.studentNo}
                    </Text>
                    <Text style={tw`text-sm text-gray-600`}>
                      Course Unit: {student.courseUnit.code} - {student.courseUnit.title}
                    </Text>
                    <Text style={tw`text-sm text-gray-600`}>
                      Programme: {student.programme}
                    </Text>
                  </View>
                  <View style={tw`bg-green-100 px-3 py-1 rounded-full`}>
                    <Text style={tw`text-green-800 text-xs font-medium`}>APPROVED</Text>
                  </View>
                </View>
                <Text style={tw`text-xs text-gray-500 mt-2`}>
                  Time: {new Date(student.approvedAt).toLocaleTimeString()}
                </Text>
              </View>
            ))}
          </View>
        ))}
        
        {Object.keys(groupedApprovals).length === 0 && (
          <View style={tw`flex-1 justify-center items-center py-8`}>
            <Text style={tw`text-gray-500 text-lg`}>No scan records found</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}