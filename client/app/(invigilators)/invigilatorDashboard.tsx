import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { useInvigilators, Invigilator } from "@/contexts/InvigilatorContext";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { invigilatorTheme } from "./_layout";

export default function InvigilatorDashboard() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { getInvigilator } = useInvigilators();

  const [profile, setProfile] = useState<Invigilator | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showExams, setShowExams] = useState(false);

  // For animated arrow rotation
  const rotateAnim = useState(new Animated.Value(0))[0];

  // --- Populate assigned exams and recent activities ---
  // Assigned exams: show as course titles
  // Recent activities: show as past scanned exams (course unit titles, most recent first)
  const assignedExams = profile?.assignedExams?.map((exam: any) => ({
    title: exam.exam?.courseUnit?.title || exam.exam?.courseUnit?.code || 'Exam',
    date: exam.exam?.examDate ? new Date(exam.exam.examDate).toLocaleDateString() : '-',
    venue: exam.exam?.venue || '-',
    examDate: exam.exam?.examDate ? new Date(exam.exam.examDate) : null,
  })) || [];

  // Simulate recent scans: use assigned exams with examDate < today
  const today = new Date();
  const recentActivities = (profile?.assignedExams || [])
    .filter((exam: any) => {
      if (!exam.exam?.examDate) return false;
      return new Date(exam.exam.examDate) < today;
    })
    .sort((a: any, b: any) => new Date(b.exam.examDate).getTime() - new Date(a.exam.examDate).getTime())
    .slice(0, 5)
    .map((exam: any) => ({
      title: exam.exam?.courseUnit?.title || exam.exam?.courseUnit?.code || 'Exam',
      description: 'Scanned successfully',
      date: exam.exam?.examDate ? new Date(exam.exam.examDate).toLocaleDateString() : '-',
    }));

  // Upcoming activities: assigned exams with examDate >= today
  const upcomingActivities = assignedExams
    .filter(e => e.examDate && e.examDate >= today)
    .sort((a, b) => (a.examDate && b.examDate ? a.examDate.getTime() - b.examDate.getTime() : 0));

  useEffect(() => {
    if (authLoading) return;
    if (!user || !user.id) {
      setError("You must be logged in to view this page.");
      setLoading(false);
      return;
    }

    setLoading(true);
    getInvigilator(user.id)
      .then((data: Invigilator | null) => {
        if (!data) throw new Error("Invigilator not found");
        setProfile(data);
      })
      .catch((err: any) => {
        setError(err.message || "Failed to load profile.");
      })
      .finally(() => setLoading(false));
  }, [authLoading, user, getInvigilator]);

  // Animate arrow rotation
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: showExams ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [showExams]);

  if (authLoading || loading) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[${invigilatorTheme.bg}]`}>
        <ActivityIndicator size="large" color={invigilatorTheme.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[${invigilatorTheme.bg}]`}>
        <Text style={tw`text-red-600`}>{error}</Text>
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[${invigilatorTheme.bg}]`}>
        <Text style={tw`text-gray-600`}>Invigilator not found.</Text>
      </View>
    );
  }

  const {
    title,
    firstName,
    lastName,
    otherNames,
    picture,
    currentSemester,
    user: invUser,
  } = profile;

  return (
    <View style={tw`flex-1 bg-[${invigilatorTheme.bg}]`}>
      <ScrollView
        style={tw`w-full`}
        contentContainerStyle={[{ flexGrow: 1 }, tw`items-center`]}
      >
        <View
          style={[
            tw`w-full m-3 p-0 rounded-3xl border border-gray-200 shadow-lg bg-[${invigilatorTheme.bg}]`,
            { elevation: 6 },
          ]}
        >
          {/* Header */}
          <View style={tw`bg-[${invigilatorTheme.primary}] p-6 pt-8 rounded-b-3xl`}>
            <Text style={tw`text-white text-2xl font-bold`}>Welcome back,</Text>
            <Text style={tw`text-white opacity-90 font-medium text-lg`}>
              {title ? `${title} ` : ""}
              {lastName} {firstName} {otherNames ? otherNames : ""}
            </Text>
            <Text style={tw`text-white opacity-75 text-xs mt-1`}>
              Reg: {profile.id} • Semester {currentSemester === "ONE" ? "I" : "II"}
            </Text>
          </View>

          {/* Glassmorphic Quick Stats */}
          <View style={tw`px-4 -mt-6`}>
            <LinearGradient
              colors={['rgba(255,255,255,0.8)', 'rgba(255,248,240,0.8)']}
              style={tw`rounded-2xl p-4 mb-4 shadow border border-gray-200`}
            >
              <View style={tw`flex-row justify-between`}>
                <View style={tw`items-center`}>
                  <Text style={tw`text-xs bg-transparent text-gray-600`}>Role</Text>
                  <View style={tw`flex-row items-center mt-1`}>
                    <Ionicons name="school" size={20} color={invigilatorTheme.primary} />
                    <Text style={tw`ml-1 text-sm font-semibold`}>
                      Invigilator
                    </Text>
                  </View>
                </View>
                <View style={tw`items-center`}>
                  <Text style={tw`text-xs text-gray-600`}>Assigned Exams</Text>
                  <Text style={tw`mt-1 text-sm font-semibold`}>
                    {assignedExams.length}
                  </Text>
                </View>
                <View style={tw`items-center`}>
                  <Text style={tw`text-xs text-gray-600`}>Semester</Text>
                  <Text style={tw`mt-1 text-sm font-semibold`}>
                    {currentSemester === "ONE" ? "I" : "II"}
                  </Text>
                </View>
              </View>
            </LinearGradient>

            {/* Assigned Exams Section */}
            <Text style={tw`text-base font-bold mb-2 text-gray-800`}>
              Assigned Exams
            </Text>
            <View style={tw`bg-white border border-gray-200 rounded-2xl mb-4 shadow`}>
              <Pressable
                onPress={() => setShowExams((prev) => !prev)}
                style={tw`flex-row justify-between items-center px-4 py-3`}
              >
                <View>
                  <Text style={tw`font-semibold text-gray-700`}>
                    Semester {currentSemester === "ONE" ? "I" : "II"}
                  </Text>
                  <Text style={tw`text-xs text-gray-500 mt-1`}>
                    Exams you are assigned to
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
                      color={invigilatorTheme.primary}
                    />
                  </Animated.View>
                  <Text style={tw`ml-1 text-xs text-[${invigilatorTheme.primary}] font-semibold`}>
                    {showExams ? "Hide" : "Show"}
                  </Text>
                </View>
              </Pressable>
              {showExams && (
                <View style={tw`px-4 pb-4`}>
                  {assignedExams.length === 0 ? (
                    <Text style={tw`text-gray-500 text-center mt-2`}>
                      No exams assigned yet.
                    </Text>
                  ) : (
                    <View>
                      <View style={tw`flex-row py-2 border-b border-gray-100`}>
                        <Text style={tw`flex-1 font-bold text-xs text-gray-500`}>
                          Course
                        </Text>
                        <Text style={tw`flex-1 font-bold text-xs text-gray-500`}>
                          Date
                        </Text>
                        <Text style={tw`flex-1 font-bold text-xs text-gray-500`}>
                          Venue
                        </Text>
                      </View>
                      {assignedExams.map((exam, i) => (
                        <View key={i} style={tw`flex-row py-2 border-b border-gray-50`}>
                          <Text style={tw`flex-1 text-xs text-gray-700`}>
                            {exam.title}
                          </Text>
                          <Text style={tw`flex-1 text-xs text-gray-700`}>
                            {exam.date}
                          </Text>
                          <Text style={tw`flex-1 text-xs text-gray-700`}>
                            {exam.venue}
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
                style={tw`flex-1 m-1 p-4 items-center rounded-2xl border border-[${invigilatorTheme.primary}] bg-white shadow`}
                onPress={() => router.push("/(invigilators)/scan")}
              >
                <Ionicons
                  name="qr-code-outline"
                  size={28}
                  color={invigilatorTheme.primary}
                />
                <Text
                  style={tw`mt-2 text-sm font-medium text-[${invigilatorTheme.primary}]`}
                >
                  Scan
                </Text>
              </Pressable>
              <Pressable
                style={tw`flex-1 m-1 p-4 items-center rounded-2xl border border-[${invigilatorTheme.primary}] bg-white shadow`}
                onPress={() => router.push("/(invigilators)/scanHistory")}
              >
                <Ionicons
                  name="time-outline"
                  size={24}
                  color={invigilatorTheme.primary}
                />
                <Text
                  style={tw`mt-2 text-sm font-medium text-[${invigilatorTheme.primary}]`}
                >
                  Activity History
                </Text>
              </Pressable>
            </View>

            {/* Upcoming Activities */}
            <Text style={tw`text-base font-bold mb-2 text-gray-800`}>
              Upcoming Activities
            </Text>
            <View style={tw`bg-white border border-gray-200 rounded-2xl p-4 shadow mb-4`}>
              {upcomingActivities.length === 0 ? (
                <Text style={tw`text-gray-500 text-center`}>No upcoming activities.</Text>
              ) : (
                upcomingActivities.map((item, idx) => (
                  <View key={idx} style={tw`flex-row justify-between items-center mb-2`}>
                    <View>
                      <Text style={tw`font-medium text-sm`}>{item.title}</Text>
                    </View>
                    <Text style={tw`text-xs text-gray-400`}>{item.date}</Text>
                  </View>
                ))
              )}
            </View>

            {/* Recent Activity */}
            <Text style={tw`text-base font-bold mb-2 text-gray-800`}>
              Recent Activity
            </Text>
            <View style={tw`bg-white border border-gray-200 rounded-2xl p-4 shadow mb-6`}>
              {recentActivities.length === 0 ? (
                <Text style={tw`text-gray-500 text-center`}>No recent activity.</Text>
              ) : (
                recentActivities.map((item, idx) => (
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
                ))
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
