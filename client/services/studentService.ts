import axios from 'axios';
import { API_BASE_URL } from '../config';
import { getToken } from '@/services/authService';

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

export const approveEnrolledCourseUnit = async (enrolledCourseUnitId: string, invigilatorId: string) => {
  try {
    const token = await getToken();
    const res = await axios.post(
      `${API_BASE_URL}/students/enrolled-course-units/${enrolledCourseUnitId}/approve`,
      { invigilatorId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('Enrolled course unit not found');
      }
      if (error.response?.status === 401) {
        throw new Error('Unauthorized: Please log in again');
      }
      if (error.response?.status === 403) {
        throw new Error('Access denied: insufficient permissions');
      }
      if (error.response?.status === 400) {
        throw new Error(error.response.data?.message || 'Invalid request');
      }
      console.error('Error approving course unit:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Approval failed');
    }
    console.error('Unexpected error:', error);
    throw new Error('An unexpected error occurred');
  }
};

// Add this new function
export const getStudentByQrId = async (qrId: string) => {
  try {
    const token = await getToken();
    const res = await axios.get(`${API_BASE_URL}/students/by-qr/${qrId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('Student not found with this QR code');
      }
      if (error.response?.status === 401) {
        throw new Error('Unauthorized: Please log in again');
      }
      if (error.response?.status === 403) {
        throw new Error('Access denied: insufficient permissions');
      }
      console.error('Error fetching student by QR:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Failed to fetch student');
    }
    console.error('Unexpected error:', error);
    throw new Error('An unexpected error occurred');
  }
};

export const getStudentExamsByQrIdAndDate = async (qrId: string, date: string) => {
  try {
    const token = await getToken();
    console.log('Fetching exams for QR:', qrId, 'date:', date);
    const res = await axios.get(`${API_BASE_URL}/students/exams-by-date-qr/${qrId}?date=${date}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('API Response:', JSON.stringify(res.data, null, 2));
    return res.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('No exams found for this date');
      }
      if (error.response?.status === 401) {
        throw new Error('Unauthorized: Please log in again');
      }
      if (error.response?.status === 403) {
        throw new Error('Access denied: insufficient permissions');
      }
      console.error('Error fetching exams by QR and date:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Failed to fetch exams');
    }
    console.error('Unexpected error:', error);
    throw new Error('An unexpected error occurred');
  }
};

export const getStudentsApprovedByInvigilator = async (invigilatorId: string) => {
  try {
    const token = await getToken();
    const res = await axios.get(`${API_BASE_URL}/students/approved-by-invigilator/${invigilatorId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    console.error('Error fetching approved students:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch approved students');
  }
};
