// app/(students)/studentDashboard.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  ScrollView,
  ActivityIndicator,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { useStudents, Student, EnrolledUnit } from "@/contexts/StudentContext";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const studentTheme = {
  primary: "#228b22",
  bg: "#f0fff0",
};

interface CourseUnit {
  code: string;
  name: string;
  creditUnits: number;
  category: string;
  status: "NORMAL" | "RETAKE";
}

interface StudentProfile {
  id: string;
  firstName: string;
  lastName: string;
  regNo: string;
  studyYear: number;
  currentSemester: string;
  permitStatus: string;
  paymentStatus: string;
  enrolledUnits: EnrolledUnit[]; // <-- Use EnrolledUnit, not CourseUnit
}

interface Activity {
  title: string;
  description: string;
  date: string;
}

export default function StudentDashboard() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { getStudent } = useStudents();

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showUnits, setShowUnits] = useState(false);

  // For animated arrow rotation
  const rotateAnim = useState(new Animated.Value(0))[0];

  const recentActivities: Activity[] = [
    {
      title: "Permit Generated",
      description: "Advanced Mathematics",
      date: "Today",
    },
    {
      title: "Payment Confirmed",
      description: "Semester Fees",
      date: "Yesterday",
    },
  ];

  useEffect(() => {
    if (authLoading) return;
    if (!user || !user.id) {
      setError("You must be logged in to view this page.");
      setLoading(false);
      return;
    }

    setLoading(true);
    getStudent(user.id)
      .then((data: Student | null) => {
        if (!data) throw new Error("Student not found in studentDashboard");
        const enrolledUnits: EnrolledUnit[] = (data as any).enrolledUnits || [];
        setProfile({
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          regNo: data.regNo,
          studyYear: data.studyYear,
          currentSemester: data.currentSemester,
          permitStatus: data.permitStatus.toUpperCase(),
          paymentStatus: data.paymentStatus.toUpperCase(),
          enrolledUnits,
        });
      })
      .catch((err: any) => {
        console.error(err);
        setError(err.message || "Failed to load profile.");
      })
      .finally(() => setLoading(false));
  }, [authLoading, user, getStudent]);

  // Animate arrow rotation
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: showUnits ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [showUnits]);

  if (authLoading || loading) {
    return (
      <View
        style={tw`flex-1 justify-center items-center bg-[${studentTheme.bg}]`}
      >
        <ActivityIndicator size="large" color={studentTheme.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={tw`flex-1 justify-center items-center bg-[${studentTheme.bg}]`}
      >
        <Text style={tw`text-red-600`}>{error}</Text>
      </View>
    );
  }

  const {
    firstName,
    lastName,
    regNo,
    studyYear,
    currentSemester,
    permitStatus,
    paymentStatus,
    enrolledUnits,
  } = profile!;

  const currentYear = studyYear;
  const currentSem = currentSemester;

  const todayUnits = enrolledUnits.filter(
    (unit) => unit.year === currentYear && unit.semester === currentSem
  );

  const statusIcon = (status: string) => {
    switch (status) {
      case "VALID":
        return <Ionicons name="checkmark-circle" size={20} color="#10B981" />;
      case "PENDING":
        return <Ionicons name="time" size={20} color="#F59E0B" />;
      case "EXPIRED":
        return <Ionicons name="close-circle" size={20} color="#EF4444" />;
      default:
        return null;
    }
  };

  // Progress bar (static for demo)
  const progress = 0.75;

  return (
    <View style={tw`flex-1 bg-[${studentTheme.bg}]`}>
      <ScrollView
        style={tw`w-full`}
        contentContainerStyle={[{ flexGrow: 1 }, tw`items-center`]}
      >
        <View
          style={[
            tw`w-full m-3 p-0 rounded-3xl border border-gray-200 shadow-lg bg-[${studentTheme.bg}]`,
            { elevation: 6 },
          ]}
        >
          {/* Header */}
          <View style={tw`bg-[${studentTheme.primary}] p-6 pt-8 rounded-b-3xl`}>
            <Text style={tw`text-white text-2xl font-bold`}>Welcome back,</Text>
            <Text style={tw`text-white opacity-90 font-medium text-lg`}>
              {firstName} {lastName}
            </Text>
            <Text style={tw`text-white opacity-75 text-xs mt-1`}>
              Reg: {regNo} • Year {studyYear} • {currentSemester}
            </Text>
          </View>

          {/* Glassmorphic Quick Stats */}
          <View style={tw`px-4 -mt-6`}>
            <LinearGradient
              colors={['rgba(255,255,255,0.8)', 'rgba(224,255,224,0.8)']}
              style={tw`rounded-2xl p-4 mb-4 shadow border border-gray-200`}
            >
              <View style={tw`flex-row justify-between`}>
                <View style={tw`items-center`}>
                  <Text style={tw`text-xs bg-transparent text-gray-600`}>Permit</Text>
                  <View style={tw`flex-row items-center mt-1`}>
                    {statusIcon(permitStatus)}
                    <Text style={tw`ml-1 text-sm font-semibold`}>
                      {permitStatus}
                    </Text>
                  </View>
                </View>
                <View style={tw`items-center`}>
                  <Text style={tw`text-xs text-gray-600`}>Payment</Text>
                  <Text style={tw`mt-1 text-sm font-semibold`}>
                    {paymentStatus}
                  </Text>
                </View>
                <View style={tw`items-center`}>
                  <Text style={tw`text-xs text-gray-600`}>Progress</Text>
                  <View style={tw`flex-row items-center mt-1`}>
                    <View
                      style={tw`w-16 h-2 rounded-full bg-gray-200 mr-2 overflow-hidden`}
                    >
                      <View
                        style={{
                          width: `${progress * 100}%`,
                          height: "100%",
                          backgroundColor: studentTheme.primary,
                          borderRadius: 8,
                        }}
                      />
                    </View>
                    <Text style={tw`text-xs font-semibold text-gray-700`}>
                      {Math.round(progress * 100)}%
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>

            {/* Current Semester Section */}
            <Text style={tw`text-base font-bold mb-2 text-gray-800`}>
              Current Semester
            </Text>
            <View
              style={tw`bg-white border border-gray-200 rounded-2xl mb-4 shadow`}
            >
              <Pressable
                onPress={() => setShowUnits((prev) => !prev)}
                style={tw`flex-row justify-between items-center px-4 py-3`}
              >
                <View>
                  <Text style={tw`font-semibold text-gray-700`}>
                    Year {studyYear} Semester {currentSemester === "ONE" ? "I" : "II"}
                  </Text>
                  <Text style={tw`text-xs text-gray-500 mt-1`}>
                    Enrolled Course Units
                  </Text>
                </View>
                <View style={tw`flex-row items-center`}>
                  <Animated.View
                    style={{
                      transform: [
                        {
                          rotate: rotateAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0deg", "180deg"],
                          }),
                        },
                      ],
                    }}
                  >
                    <Ionicons
                      name="chevron-down"
                      size={24}
                      color={studentTheme.primary}
                    />
                  </Animated.View>
                  <Text style={tw`ml-1 text-xs text-[${studentTheme.primary}] font-semibold`}>
                    {showUnits ? "Hide" : "Show"}
                  </Text>
                </View>
              </Pressable>
              {showUnits && (
                <View style={tw`px-4 pb-4`}>
                  {todayUnits.length === 0 ? (
                    <Text style={tw`text-gray-500 text-center mt-2`}>
                      No course units enrolled for this semester.
                    </Text>
                  ) : (
                    <View>
                      <View style={tw`flex-row py-2 border-b border-gray-100`}>
                        <Text style={tw`flex-1 font-bold text-xs text-gray-500`}>
                          Code
                        </Text>
                        <Text style={tw`flex-2 font-bold text-xs text-gray-500`}>
                          Course Unit
                        </Text>
                        <Text style={tw`w-8 font-bold text-xs text-gray-500`}>
                          CU
                        </Text>
                        <Text style={tw`w-14 font-bold text-xs text-gray-500`}>
                          Category
                        </Text>
                        <Text style={tw`w-14 font-bold text-xs text-gray-500`}>
                          Status
                        </Text>
                      </View>
                      {todayUnits.map((unit, i) => (
                        <View key={i} style={tw`flex-row py-2 border-b border-gray-50`}>
                          <Text style={tw`flex-1 text-xs text-gray-700`}>
                            {unit.courseUnit.code}
                          </Text>
                          <Text style={tw`flex-2 text-xs text-gray-700`}>
                            {unit.courseUnit.title}
                          </Text>
                          <Text style={tw`w-8 text-xs text-gray-700`}>
                            {unit.courseUnit.credits}
                          </Text>
                          <Text style={tw`w-14 text-xs text-gray-700`}>
                            {unit.courseUnit.category}
                          </Text>
                          <Text style={tw`w-14 text-xs ${unit.attempt === 1 ? "text-green-700" : "text-yellow-700"} font-semibold`}>
                            {unit.attempt === 1 ? "NORMAL" : "RETAKE"}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              )}
            </View>

            {/* Quick Actions */}
            <Text style={tw`text-base font-bold mb-2 text-gray-800`}>
              Quick Actions
            </Text>
            <View style={tw`flex-row justify-between mb-4`}>
              <Pressable
                style={tw`flex-1 m-1 p-4 items-center rounded-2xl border border-[${studentTheme.primary}] bg-white shadow`}
                onPress={() => router.push("/(students)/permit")}
              >
                <Ionicons
                  name="card-outline"
                  size={24}
                  color={studentTheme.primary}
                />
                <Text
                  style={tw`mt-2 text-sm font-medium text-[${studentTheme.primary}]`}
                >
                  View Permit
                </Text>
              </Pressable>
              <Pressable
                style={tw`flex-1 m-1 p-4 items-center rounded-2xl border border-[${studentTheme.primary}] bg-white shadow`}
                onPress={() => router.push("/(students)/history")}
              >
                <Ionicons
                  name="time-outline"
                  size={24}
                  color={studentTheme.primary}
                />
                <Text
                  style={tw`mt-2 text-sm font-medium text-[${studentTheme.primary}]`}
                >
                  Permit History
                </Text>
              </Pressable>
            </View>

            {/* Recent Activity */}
            <Text style={tw`text-base font-bold mb-2 text-gray-800`}>
              Recent Activity
            </Text>
            <View style={tw`bg-white border border-gray-200 rounded-2xl p-4 shadow mb-6`}>
              {recentActivities.map((item, idx) => (
                <View
                  key={idx}
                  style={tw`flex-row justify-between items-center mb-2`}
                >
                  <View>
                    <Text style={tw`font-medium text-sm`}>{item.title}</Text>
                    <Text style={tw`text-xs text-gray-500`}>
                      {item.description}
                    </Text>
                  </View>
                  <Text style={tw`text-xs text-gray-400`}>{item.date}</Text>
                </View>
              ))}
            </View>
          </View>
      </View>
      </ScrollView>
    </View>
  );
}
