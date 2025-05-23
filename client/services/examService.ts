import axios from 'axios';
import { API_BASE_URL } from '../config';
import { GetCourseUnitsByFacultyAndSemesterResponse, Semester } from '../types/courseUnit';

export const getExamsByFaculty = async (facultyId: string) => {
  const res = await axios.get(`${API_BASE_URL}/exams/faculty/${facultyId}`);
  return res.data;
};

export const getCourseUnitsByFacultyAndSemester = async (
  facultyId: string, 
  year?: number, 
  semester?: Semester
): Promise<GetCourseUnitsByFacultyAndSemesterResponse> => {
  const params = new URLSearchParams();
  if (year) params.append('year', year.toString());
  if (semester) params.append('semester', semester);

  const res = await axios.get(
    `${API_BASE_URL}/course-units/faculty/${facultyId}${params.toString() ? `?${params.toString()}` : ''}`
  );
  return res.data;
};
