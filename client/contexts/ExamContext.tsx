import React, { createContext, useContext, useState, useEffect } from "react";
import { getExamsByFaculty } from "../services/examService";
import { useAdmins } from "./AdminContext";
import { useAuth } from "./AuthContext";

const ExamContext = createContext<any>(null);

export const ExamProvider = ({ children }: { children: React.ReactNode }) => {
  const { admins } = useAdmins();
  const { user } = useAuth();
  const admin = admins.find((a: any) => a.id === user?.id) || admins[0];
  const facultyId = admin?.facultyOrSchool?.id;

  const [exams, setExams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!facultyId) return;
    setLoading(true);
    getExamsByFaculty(facultyId)
      .then(setExams)
      .catch((e) => setError(e?.message || "Failed to fetch exams"))
      .finally(() => setLoading(false));
  }, [facultyId]);

  return (
    <ExamContext.Provider value={{ exams, loading, error }}>
      {children}
    </ExamContext.Provider>
  );
};

export const useExams = () => useContext(ExamContext);
