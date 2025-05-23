import axios from 'axios';
import { API_BASE_URL } from '../config';
import { getToken } from './authService';

// Get all admins (admin only)
export const getAllAdmins = async () => {
  const token = await getToken();
  const res = await axios.get(`${API_BASE_URL}/admins`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// Get admin by ID (admin only, own resource)
export const getAdminById = async (id: string) => {
  const token = await getToken();
  const res = await axios.get(`${API_BASE_URL}/admins/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export async function approveExam(examId: string) {
  const token = await getToken();
  const res = await axios.patch(
    `${API_BASE_URL}/admins/exams/${examId}/approve`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
}