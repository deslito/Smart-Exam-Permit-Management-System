import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  getAllAdmins,
  getAdminById as fetchAdminById,
} from '@/services/adminService';

//
// 1) Mirrors the Prisma Admin model JSON
//

// Summary admin (for getAllAdmins)
export interface AdminSummary {
  id: string;
  firstName: string;
  otherNames: string | null;
  lastName: string;
  picture: string | null;
  facultyOrSchool: string;
}

// User info for detailed admin
export interface AdminUser {
  id: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

// Detailed admin (for getAdminById)
export interface Admin extends AdminSummary {
  user: AdminUser;
}

interface AdminContextType {
  admins: AdminSummary[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  getAdmin: (id: string) => Promise<Admin | null>;
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
      console.error('Error fetching all admins:', err);
      setError(err.message || 'Failed to fetch admins');
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

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AdminContext.Provider
      value={{ admins, loading, error, refresh, getAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// Hook to consume
export const useAdmins = (): AdminContextType => {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error('useAdmins must be used within an AdminProvider');
  }
  return ctx;
};