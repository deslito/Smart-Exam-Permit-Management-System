// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { jwtDecode } from 'jwt-decode';
import { 
  login as apiLogin, 
  logout as apiLogout,
  changePassword as apiChangePassword // Add this import
} from '@/services/authService';

//
// Types
//
export interface AuthUser {
  id: string;
  email: string;
  role: string;     // "STUDENT" | "INVIGILATOR" | "ADMIN"
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  /**
   * Performs login, persists credentials, and returns the authenticated user
   */
  login: (email: string, password: string) => Promise<AuthUser>;
  logout: () => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const persistAuth = async (jwt: string, authUser: AuthUser) => {
    if (Platform.OS === 'web') {
      localStorage.setItem('token', jwt);
      localStorage.setItem('user', JSON.stringify(authUser));
    } else {
      await SecureStore.setItemAsync('token', jwt);
      await SecureStore.setItemAsync('user', JSON.stringify(authUser));
    }
    setToken(jwt);
    setUser(authUser);
  };

  useEffect(() => {
    (async () => {
      try {
        const storedToken = Platform.OS === 'web'
          ? localStorage.getItem('token')
          : await SecureStore.getItemAsync('token');
        if (!storedToken) return;

        const storedUserJson = Platform.OS === 'web'
          ? localStorage.getItem('user')
          : await SecureStore.getItemAsync('user');

        if (storedUserJson) {
          setToken(storedToken);
          setUser(JSON.parse(storedUserJson));
        } else {
          const payload = jwtDecode<{ id: string; email: string; role: string }>(storedToken);
          const authUser: AuthUser = {
            id: payload.id,
            email: payload.email,
            role: payload.role,
          };
          setToken(storedToken);
          setUser(authUser);
        }
      } catch (err) {
        console.error('Auth hydration error:', err);
        if (Platform.OS === 'web') {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        } else {
          await SecureStore.deleteItemAsync('token');
          await SecureStore.deleteItemAsync('user');
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /**
   * Logs in the user via API, persists token and user, and returns the AuthUser
   */
  const login = async (email: string, password: string): Promise<AuthUser> => {
    setLoading(true);
    try {
      const { token: jwt, user: authUserFromApi } = await apiLogin(email, password);
      const authUser: AuthUser = authUserFromApi && authUserFromApi.id
        ? authUserFromApi
        : jwtDecode<{ id: string; email: string; role: string }>(jwt);
      await persistAuth(jwt, authUser);
      return authUser;
    } catch (error) {
      console.error('Login failed in AuthContext:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logs out the user both server-side (if implemented) and locally
   */
  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      await apiLogout();
    } catch (error) {
      console.warn('Logout API failed, proceeding with local cleanup:', error);
    } finally {
      if (Platform.OS === 'web') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } else {
        await SecureStore.deleteItemAsync('token');
        await SecureStore.deleteItemAsync('user');
      }
      setToken(null);
      setUser(null);
      setLoading(false);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    try {
      await apiChangePassword(currentPassword, newPassword);
    } catch (error) {
      console.error('Change password error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
