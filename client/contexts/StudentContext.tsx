// contexts/StudentContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  getAllStudents,
  getStudentById as fetchStudentById,
} from '@/services/studentService';

//
// 1) Mirrors the Prisma Student model JSON
//

// Summary student (for getAllStudents)
export interface StudentSummary {
  id: string;
  firstName: string;
  otherNames: string | null;
  lastName: string;
  studentNo: string;
  regNo: string;
  gender: 'MALE' | 'FEMALE'; // <-- Added gender
  studyYear: number;
  campus: string;
  academicYear: string;
  currentSemester: 'ONE' | 'TWO';
  picture: string | null;
  paymentStatus: 'paid' | 'pending';
  permitStatus: 'valid' | 'invalid';
  programmeId: string;
}

export interface CourseUnitInfo {
  title: string;
  code: string;
  credits: number;
  category: 'CORE' | 'ELECTIVE';
  year: number;
  semester: 'ONE' | 'TWO';
}

export interface EnrolledUnit {
  id: string;
  studentId: string;
  courseUnitId: string;
  attempt: number;
  year: number;
  semester: 'ONE' | 'TWO';
  isInvigilatorApproved: boolean;
  invigilatorApprovedAt: string | null;
  approvedBy: string | null;
  courseUnit: CourseUnitInfo;
}

export interface StudentQrCode {
  id: string;
  studentId: string;
  qrCode: string | null;
  semester: 'ONE' | 'TWO';
  issuedAt: string;
  expiresAt: string;
  isActive: boolean;
}

export interface ProgrammeCourse {
  name: string;
  code: string;
  department: {
    name: string;
    facultyOrSchool: {
      name: string;
    };
  };
}

export interface Programme {
  id: string;
  name: string;
  programme: 'DAY' | 'EVENING';
  courseId: string;
  course: ProgrammeCourse;
}

export interface Student {
  id: string;
  firstName: string;
  otherNames: string | null;
  lastName: string;
  studentNo: string;
  regNo: string;
  gender: 'MALE' | 'FEMALE'; // <-- Added gender
  studyYear: number;
  campus: string;
  academicYear: string;
  currentSemester: 'ONE' | 'TWO';
  picture: string | null;
  paymentStatus: 'paid' | 'pending';
  permitStatus: 'valid' | 'invalid';
  programmeId: string;
  enrolledUnits: EnrolledUnit[];
  studentQrCodes: StudentQrCode[];
  programme: Programme;
}

interface StudentContextType {
  students: StudentSummary[]; // Use summary type for list
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  getStudent: (id: string) => Promise<Student | null>;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<StudentSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch full list (summary)
  const refresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (err: any) {
      console.error('Error fetching all students:', err);
      setError(err.message || 'Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  // Helper: fetch a single student (detailed)
  const getStudent = async (id: string): Promise<Student | null> => {
    try {
      return await fetchStudentById(id);
    } catch (err) {
      console.error(`Error fetching student ${id}:`, err);
      return null;
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <StudentContext.Provider
      value={{ students, loading, error, refresh, getStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

// Hook to consume
export const useStudents = (): StudentContextType => {
  const ctx = useContext(StudentContext);
  if (!ctx) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return ctx;
};