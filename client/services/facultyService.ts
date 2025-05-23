import axios from 'axios';
import { API_BASE_URL } from '../config';

export const getAllFaculties = async () => {
  const res = await axios.get(`${API_BASE_URL}/faculties`);
  return res.data;
};
