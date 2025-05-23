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
  approveEnrolledCourseUnit as approveECUApi
} from '@/services/studentService';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { getToken } from '@/services/authService';

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
  programme: Programme; // <-- Add full programme object (with nested course, department, facultyOrSchool)
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
  getStudentByQrId: (qrId: string) => Promise<Student | null>; // <-- Add this
  approveEnrolledCourseUnit: (enrolledCourseUnitId: string, approvedBy: string) => Promise<void>; // <-- Add this
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
      // Ensure each student has the full programme object (with nested course, department, facultyOrSchool)
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

  // NEW: Fetch student by QR code record ID
  const getStudentByQrId = async (qrId: string): Promise<Student | null> => {
    // Intercept the simulation id for Asiimire Tracy
    if (qrId === 'SIM_TRACY_VALID') {
      // Return mock data for Tracy
      return {
        id: 'asiimiretracy',
        firstName: 'Tracy',
        otherNames: null,
        lastName: 'Asiimire',
        studentNo: '2400802001',
        regNo: '24/U/DCED/002/PD',
        gender: 'FEMALE',
        studyYear: 2,
        campus: 'Main',
        academicYear: '2024/2025',
        currentSemester: 'TWO',
        picture: 'https://res.cloudinary.com/dummy/image/upload/v1/students/tracy.png',
        paymentStatus: 'paid',
        permitStatus: 'valid',
        programmeId: 'DCED',
        enrolledUnits: [
          {
            id: 'unit1',
            studentId: 'asiimiretracy',
            courseUnitId: 'CU1',
            attempt: 1,
            year: 2,
            semester: 'TWO',
            isInvigilatorApproved: false,
            invigilatorApprovedAt: null,
            approvedBy: null,
            courseUnit: {
              title: 'Digital Systems',
              code: 'CU1',
              credits: 3,
              category: 'CORE',
              year: 2,
              semester: 'TWO',
            },
          },
        ],
        studentQrCodes: [
          {
            id: 'SIM_TRACY_VALID',
            studentId: 'asiimiretracy',
            qrCode: null,
            semester: 'TWO',
            issuedAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
            isActive: true,
          },
        ],
        programme: {
          id: 'DCED',
          name: 'DCED',
          programme: 'DAY',
          courseId: 'CENG',
          course: {
            name: 'Computer Engineering',
            code: 'CENG',
            department: {
              name: 'Engineering',
              facultyOrSchool: { name: 'Faculty of Technology' },
            },
          },
        },
      };
    }
    try {
      const token = await getToken();
      // You need an API endpoint for this!
      const res = await axios.get(`${API_BASE_URL}/students/by-qr/${qrId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.data;
    } catch (err) {
      console.error(`Error fetching student by QR ID ${qrId}:`, err);
      return null;
    }
  };

  const approveEnrolledCourseUnit = async (enrolledCourseUnitId: string, approvedBy: string) => {
    try {
      await approveECUApi(enrolledCourseUnitId, approvedBy);
    } catch (err) {
      console.error('Error approving enrolled course unit:', err);
      throw err;
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students,
        loading,
        error,
        refresh,
        getStudent,
        getStudentByQrId,
        approveEnrolledCourseUnit
      }}
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