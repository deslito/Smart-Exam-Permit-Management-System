// services/authService.ts
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { API_BASE_URL } from '../config';

const STORAGE_USER_KEY = 'user';
const STORAGE_TOKEN_KEY = 'token';

const setItem = async (key: string, value: string) => {
  if (Platform.OS === 'web') {
    localStorage.setItem(key, value);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
};

const getItem = async (key: string) => {
  if (Platform.OS === 'web') {
    return localStorage.getItem(key);
  }
  return await SecureStore.getItemAsync(key);
};

const removeItem = async (key: string) => {
  if (Platform.OS === 'web') {
    localStorage.removeItem(key);
  } else {
    await SecureStore.deleteItemAsync(key);
  }
};

export const login = async (email: string, password: string): Promise<{ token: string; user: any }> => {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    const { token, user } = res.data;

    // Persist token and user (even if user is missing, token will help decode it later)
    await setItem(STORAGE_TOKEN_KEY, token);
    if (user) await setItem(STORAGE_USER_KEY, JSON.stringify(user));

    return { token, user };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message;
      console.error('Login error:', message);
      throw new Error(message);
    }
    console.error('Login error:', error);
    throw new Error('Login failed');
  }
};

export const getToken = async (): Promise<string | null> => {
  return await getItem(STORAGE_TOKEN_KEY);
};

export const logout = async (): Promise<void> => {
  await removeItem(STORAGE_TOKEN_KEY);
  await removeItem(STORAGE_USER_KEY);
};

export const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
  const token = await getToken();
  if (!token) throw new Error('No authentication token');

  try {
    await axios.post(
      `${API_BASE_URL}/auth/change-password`,
      { currentPassword, newPassword },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message;
      throw new Error(message);
    }
    throw new Error('Failed to change password');
  }
};
