import express from 'express';
import { getAllStudents, getStudentById, getStudentByQrRecordId, approveEnrolledCourseUnit, getStudentExamsByDateByQrCode, getStudentsApprovedByInvigilator } from '../controllers/studentController';
import { authenticateToken } from '../middleware/auth';
import { authorizeRoles } from '../middleware/authorizeRoles';
import { verifyStudentOrInvigilatorAccess } from '../middleware/verifyStudentOrInvigilatorAccess';

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles('admin'), getAllStudents);
router.get('/:id', authenticateToken, authorizeRoles('student'), verifyStudentOrInvigilatorAccess, getStudentById);
router.get('/by-qr/:qrId', authenticateToken, authorizeRoles('invigilator'), getStudentByQrRecordId);
router.get('/approved-by-invigilator/:invigilatorId', authenticateToken, authorizeRoles('invigilator'), getStudentsApprovedByInvigilator);
router.post('/enrolled-course-units/:enrolledCourseUnitId/approve', authenticateToken, authorizeRoles('invigilator'), approveEnrolledCourseUnit);
router.get('/exams-by-date-qr/:qrId', authenticateToken, authorizeRoles('invigilator'), getStudentExamsByDateByQrCode);

export default router;