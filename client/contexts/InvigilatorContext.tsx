import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  getAllInvigilators,
  getInvigilatorById as fetchInvigilatorById,
} from '@/services/invigilatorService';

// 1) Mirrors the Prisma Invigilator model JSON

// Summary invigilator (for getAllInvigilators)
export interface InvigilatorSummary {
  id: string;
  title: string;
  firstName: string;
  otherNames: string | null;
  lastName: string;
  picture: string | null;
  currentSemester: 'ONE' | 'TWO';
}

// User info for detailed invigilator
export interface InvigilatorUser {
  id: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

// Course unit info (for exam)
export interface CourseUnit {
  id: string;
  code: string;
  title: string;
  credits: number;
  year: number;
  semester: 'ONE' | 'TWO';
  category: 'CORE' | 'ELECTIVE';
  programmeId: string;
}

// Exam info (for assignedExams)
export interface Exam {
  id: string;
  courseUnitId: string;
  examDate: string;
  startTime: string;
  endTime: string;
  venue: string;
  isApproved: boolean;
  approvedAt: string | null;
  courseUnit: CourseUnit;
}

// Exam assignment info (for assignedExams)
export interface AssignedExam {
  id: string;
  exam: Exam;
}

// Detailed invigilator (for getInvigilatorById)
export interface Invigilator extends InvigilatorSummary {
  user: InvigilatorUser;
  assignedExams: AssignedExam[];
}

interface InvigilatorContextType {
  invigilators: InvigilatorSummary[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  getInvigilator: (id: string) => Promise<Invigilator | null>;
}

const InvigilatorContext = createContext<InvigilatorContextType | undefined>(undefined);

export const InvigilatorProvider = ({ children }: { children: ReactNode }) => {
  const [invigilators, setInvigilators] = useState<InvigilatorSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all invigilators (summary)
  const refresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllInvigilators();
      setInvigilators(data);
    } catch (err: any) {
      console.error('Error fetching all invigilators:', err);
      setError(err.message || 'Failed to fetch invigilators');
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single invigilator (detailed)
  const getInvigilator = async (id: string): Promise<Invigilator | null> => {
    try {
      return await fetchInvigilatorById(id);
    } catch (err) {
      console.error(`Error fetching invigilator ${id}:`, err);
      return null;
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <InvigilatorContext.Provider
      value={{ invigilators, loading, error, refresh, getInvigilator }}
    >
      {children}
    </InvigilatorContext.Provider>
  );
};

export const useInvigilators = (): InvigilatorContextType => {
  const ctx = useContext(InvigilatorContext);
  if (!ctx) {
    throw new Error('useInvigilators must be used within an InvigilatorProvider');
  }
  return ctx;
};