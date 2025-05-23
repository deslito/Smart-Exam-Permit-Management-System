import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  getAllAdmins,
  getAdminById as fetchAdminById,
  approveExam as approveExamApi,
} from "@/services/adminService";

// Exam assignment (if you want to use invigilators as objects)
export interface ExamAssignment {
  id: string;
  invigilatorId: string;
  examId: string;
}

// Exam interface (from courseUnit.exams)
export interface Exam {
  id: string;
  examDate: string;
  startTime: string;
  endTime: string;
  venue: string;
  isApproved: boolean;
  approvedAt?: string | null;
  invigilators: ExamAssignment[];
}

// Student and EnrolledCourseUnit
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  regNo: string;
  programme: {
    id: string;
    name: string;
  };
  enrolledUnits: {
    id: string;
    courseUnit: {
      id: string;
      code: string;
      title: string;
    };
  }[];
}

export interface EnrolledCourseUnit {
  id: string;
  student: Student;
  attempt: number;
  year: number;
  semester: "ONE" | "TWO";
  isInvigilatorApproved: boolean;
  invigilatorApprovedAt?: string | null;
  approvedBy?: string | null;
  courseUnitId: string;
}

// CourseUnit interface (matches controller)
export interface CourseUnit {
  id: string;
  code: string;
  title: string;
  credits: number;
  year: number;
  semester: "ONE" | "TWO";
  category: "CORE" | "ELECTIVE";
  courseName: string;
  course: {
    code: string;
    name: string;
  };
  exams: Exam[];
  enrolledBy: EnrolledCourseUnit[];
}

// Course, Department, FacultyOrSchool
export interface Course {
  id: string;
  name: string;
  type: "Bachelor" | "Diploma" | "Master" | "Phd";
  code: string;
  departmentId: string;
  courseUnits: CourseUnit[];
}

export interface Department {
  id: string;
  name: string;
  facultyOrSchoolId: string;
  courses: Course[];
}

export interface FacultyOrSchool {
  id: string;
  name: string;
  code: string;
  departments: Department[];
}

// Admin summary and user
export interface AdminSummary {
  id: string;
  firstName: string;
  otherNames: string | null;
  lastName: string;
  picture: string | null;
  facultyOrSchool: FacultyOrSchool;
}

export interface AdminUser {
  id: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface Admin extends AdminSummary {
  user: AdminUser;
}

interface AdminContextType {
  admins: AdminSummary[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  getAdmin: (id: string) => Promise<Admin | null>;
  approveExam: (examId: string) => Promise<any>; // <-- Add this
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [admins, setAdmins] = useState<AdminSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all admins (summary)
  const refresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllAdmins();
      setAdmins(data);
    } catch (err: any) {
      console.error("Error fetching all admins:", err);
      setError(err.message || "Failed to fetch admins");
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single admin (detailed)
  const getAdmin = async (id: string): Promise<Admin | null> => {
    try {
      return await fetchAdminById(id);
    } catch (err) {
      console.error(`Error fetching admin ${id}:`, err);
      return null;
    }
  };

  const approveExam = async (examId: string) => {
    await approveExamApi(examId);
    await refresh(); // Optionally refresh admin data after approval
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AdminContext.Provider
      value={{ admins, loading, error, refresh, getAdmin, approveExam }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// Hook to consume
export const useAdmins = (): AdminContextType => {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error("useAdmins must be used within an AdminProvider");
  }
  return ctx;
};
