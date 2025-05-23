export type Semester = 'ONE' | 'TWO';
export type CourseCategory = 'CORE' | 'ELECTIVE';

export interface CourseUnit {
  id: string;
  code: string;
  title: string;
  credits: number;
  year: number;
  semester: Semester;
  category: CourseCategory;
  courseName: string;
  course: {
    department: {
      name: string;
    };
  };
}

export interface GetCourseUnitsByFacultyAndSemesterResponse {
  courseUnits: CourseUnit[];
  error?: string;
}
