import axios from 'axios';
import { API_BASE_URL } from '../config';
import { getToken } from './authService';

export const getAllStudents = async () => {
  try {
    const token = await getToken();
    const res = await axios.get(`${API_BASE_URL}/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      // Server responded with a status other than 2xx
      if (error.response.status === 403) {
        console.error('Access denied: insufficient role');
        throw new Error('Access denied: insufficient role');
      }
      if (error.response.status === 401) {
        console.error('Unauthorized: Please log in again');
        throw new Error('Unauthorized: Please log in again');
      }
      // Other server errors
      console.error('Server error:', error.response.data);
      throw new Error(error.response.data.message || 'Something went wrong');
    } else if (error.request) {
      // No response was received from the server
      console.error('No response received:', error.request);
      throw new Error('No response from server');
    } else {
      // Something went wrong in setting up the request
      console.error('Error in request setup:', error.message);
      throw new Error('Error in request setup');
    }
  }
};

export const getStudentById = async (id: string) => {
  try {
    const token = await getToken();
    const res = await axios.get(`${API_BASE_URL}/students/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      // Server responded with a status other than 2xx
      if (error.response.status === 403) {
        console.error('Access denied: insufficient role');
        throw new Error('Access denied: insufficient role');
      }
      if (error.response.status === 401) {
        console.error('Unauthorized: Please log in again');
        throw new Error('Unauthorized: Please log in again');
      }
      // Other server errors
      console.error('Server error:', error.response.data);
      throw new Error(error.response.data.message || 'Something went wrong');
    } else if (error.request) {
      // No response was received from the server
      console.error('No response received:', error.request);
      throw new Error('No response from server');
    } else {
      // Something went wrong in setting up the request
      console.error('Error in request setup:', error.message);
      throw new Error('Error in request setup');
    }
  }
};
