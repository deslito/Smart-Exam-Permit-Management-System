import axios from 'axios';
import { API_BASE_URL } from '../config';
import { getToken } from './authService';

// Get all invigilators (admin only)
export const getAllInvigilators = async () => {
  const token = await getToken();
  const res = await axios.get(`${API_BASE_URL}/invigilators`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// Get invigilator by ID (admin or own invigilator)
export const getInvigilatorById = async (id: string) => {
  const token = await getToken();
  const res = await axios.get(`${API_BASE_URL}/invigilators/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createInvigilator = async (data: any) => {
  const token = await getToken();
  const res = await axios.post(`${API_BASE_URL}/invigilators`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateInvigilator = async (id: string, data: any) => {
  const token = await getToken();
  const res = await axios.put(`${API_BASE_URL}/invigilators/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteInvigilator = async (id: string) => {
  const token = await getToken();
  const res = await axios.delete(`${API_BASE_URL}/invigilators/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};