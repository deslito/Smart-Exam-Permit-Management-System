// app/(admin)/manageInvigilators.tsx
import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "twrnc";
import { adminTheme } from "./_layout";
import { Ionicons } from "@expo/vector-icons";
import { useToast } from "@/components/ui/useToast";
import { useAdmins } from "@/contexts/AdminContext";
import { useAuth } from "@/contexts/AuthContext";

type PermitStatus = "valid" | "invalid" | "expired" | "approved" | "pending" | "completed";

export default function ManageExams() {
  const { admins, approveExam } = useAdmins();
  const { user } = useAuth();
  const [approvingIds, setApprovingIds] = React.useState<string[]>([]);
  // Use the signed-in admin if possible
  const admin = admins.find(a => a.id === user?.id) || admins[0];
  const { showToast } = useToast();

  const allCourseUnits =
    admin?.facultyOrSchool?.departments
      ?.flatMap(dept => dept.courses || [])
      .flatMap(course => course.courseUnits || []) || [];

  const examSessions = allCourseUnits.flatMap((unit) =>
    (unit.exams || []).map((exam) => ({
      id: exam.id,
      courseCode: unit.course?.code || "-",
      courseName: unit.course?.name || "-",
      date: exam.examDate || "",
      time: exam.startTime
        ? new Date(exam.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : "",
      status: exam.isApproved ? "approved" : "pending",
      invigilators: exam.invigilators?.length || 0,
      venue: exam.venue || "-",
    }))
  );

  // Group exams by date and status
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isSameDay = (d1: Date, d2: Date) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

  const completedExams = examSessions.filter(e => {
    const examDate = new Date(e.date);
    examDate.setHours(0, 0, 0, 0);
    return examDate < today && e.status === "approved";
  });
  const todaysExams = examSessions.filter(e => {
    const examDate = new Date(e.date);
    examDate.setHours(0, 0, 0, 0);
    return isSameDay(examDate, today);
  });
  const upcomingExams = examSessions.filter(e => {
    const examDate = new Date(e.date);
    examDate.setHours(0, 0, 0, 0);
    return examDate > today;
  });

  // Approve exam and refresh UI
  const handleApproveExam = async (examId: string) => {
    setApprovingIds(ids => [...ids, examId]);
    try {
      await approveExam(examId); // This calls backend and refreshes admin data
      showToast(
        "success",
        "Exam Approved",
        "Invigilators can now verify students for this exam"
      );
    } catch (err) {
      showToast("error", "Failed", "Could not approve exam.");
    } finally {
      setApprovingIds(ids => ids.filter(id => id !== examId));
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // --- UI helpers for screenshot-matching styles ---
  const PendingBadge = () => (
    <View style={{
      borderWidth: 1,
      borderColor: '#f59e42',
      borderRadius: 16,
      paddingHorizontal: 12,
      paddingVertical: 2,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      minWidth: 80,
      justifyContent: 'center',
    }}>
      <Ionicons name="time-outline" size={16} color="#f59e42" style={{ marginRight: 4 }} />
      <Text style={{ color: '#f59e42', fontWeight: '500', fontSize: 15 }}>Pending</Text>
    </View>
  );
  const ApprovedBadge = () => (
    <View style={{
      borderWidth: 1,
      borderColor: '#a3e635',
      borderRadius: 16,
      paddingHorizontal: 12,
      paddingVertical: 2,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      minWidth: 80,
      justifyContent: 'center',
    }}>
      <Ionicons name="checkmark-done-outline" size={16} color="#65a30d" style={{ marginRight: 4 }} />
      <Text style={{ color: '#65a30d', fontWeight: '500', fontSize: 15 }}>Approved</Text>
    </View>
  );
  const ApproveButton = ({ onPress, dull }: { onPress: () => void; dull?: boolean }) => (
    <Pressable
      style={{
        backgroundColor: dull ? '#d9f99d' : '#a3e635', // faint green for upcoming
        borderRadius: 8,
        paddingHorizontal: 22,
        paddingVertical: 8,
        minWidth: 80,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: dull ? 0.7 : 1,
      }}
      onPress={onPress}
      disabled={false}
    >
      <Text style={{ color: dull ? '#365314' : '#fff', fontWeight: '600', fontSize: 17 }}>Approve</Text>
    </Pressable>
  );
  const ApprovedButton = () => (
    <View style={{
      backgroundColor: '#e0e7ef',
      borderRadius: 8,
      paddingHorizontal: 18,
      paddingVertical: 8,
      minWidth: 80,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.8,
    }}>
      <Text style={{ color: '#6477b9', fontWeight: '600', fontSize: 17 }}>Approved</Text>
    </View>
  );

  // --- Table row renderer ---
  function renderExamRow(exam: any, section?: string) {
    const isApproved = exam.status === 'approved' || approvingIds.includes(exam.id);
    const isUpcoming = section === 'Upcoming Exam Sessions';
    return (
      <View key={exam.id} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderColor: '#f1f5f9' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', fontSize: 16, color: '#222' }}>{exam.courseCode}</Text>
          <Text style={{ color: '#64748b', fontSize: 15, marginTop: 2 }}>{exam.courseName}</Text>
        </View>
        <Text style={{ flex: 1, color: '#64748b', fontSize: 15 }}>{formatDate(exam.date)}</Text>
        <Text style={{ flex: 1, color: '#64748b', fontSize: 15 }}>{exam.time}</Text>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {isApproved ? <ApprovedBadge /> : <PendingBadge />}
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          {isApproved ? <ApprovedButton /> : <ApproveButton onPress={() => handleApproveExam(exam.id)} dull={isUpcoming} />}
        </View>
      </View>
    );
  }

  // --- Section renderer ---
  function renderSection(title: string, exams: any[]) {
    if (!exams.length) return null;
    return (
      <Card style={{ padding: 24, marginBottom: 24, borderRadius: 16, borderWidth: 1, borderColor: '#e5e7eb', backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
          <Ionicons name="calendar-outline" size={24} color="#2563eb" style={{ marginRight: 8 }} />
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#222' }}>{title}</Text>
        </View>
        {/* Table header */}
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#e5e7eb', paddingBottom: 10, marginBottom: 2 }}>
          <Text style={{ flex: 1, fontWeight: '600', color: '#64748b', fontSize: 16 }}>Course</Text>
          <Text style={{ flex: 1, fontWeight: '600', color: '#64748b', fontSize: 16 }}>Date</Text>
          <Text style={{ flex: 1, fontWeight: '600', color: '#64748b', fontSize: 16 }}>Time</Text>
          <Text style={{ flex: 1, fontWeight: '600', color: '#64748b', fontSize: 16, textAlign: 'center' }}>Status</Text>
          <Text style={{ flex: 1, fontWeight: '600', color: '#64748b', fontSize: 16, textAlign: 'right' }}>Action</Text>
        </View>
        {exams.map(e => renderExamRow(e, title))}
      </Card>
    );
  }

  // --- Main render ---
  return (
    <ScrollView style={{ flex: 1, backgroundColor: adminTheme.bg }}>
      {/* Header */}
      <View style={{ padding: 32, paddingTop: 40, backgroundColor: '#0366b1', marginBottom: 16 }}>
        <Text style={{ fontSize: 32, fontWeight: '700', color: '#fff' }}>Exam Session Approval</Text>
        <Text style={{ color: '#e0e7ef', fontWeight: '500', fontSize: 18, marginTop: 4 }}>Approve exam sessions for invigilators</Text>
      </View>
      <View style={{ paddingHorizontal: 16, paddingBottom: 32 }}>
        {renderSection("Today's Exam Sessions", todaysExams)}
        {renderSection("Upcoming Exam Sessions", upcomingExams)}
        {renderSection("Completed Exam Sessions", completedExams)}
      </View>
    </ScrollView>
  );
}

// Safe Card wrapper
function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return (
    <View style={{ ...(tw`bg-white rounded-lg shadow-sm` as object), ...style }}>
      {children}
    </View>
  );
}
