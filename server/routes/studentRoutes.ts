import express from 'express';
import { getAllStudents, getStudentById, getStudentByQrRecordId, approveEnrolledCourseUnit } from '../controllers/studentController';
import { authenticateToken } from '../middleware/auth';
import { authorizeRoles } from '../middleware/authorizeRoles';
import { verifyStudentOrInvigilatorAccess } from '../middleware/verifyStudentOrInvigilatorAccess';

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles('admin'), getAllStudents);
router.get('/:id', authenticateToken, authorizeRoles('student'), verifyStudentOrInvigilatorAccess, getStudentById);
router.get('/students/by-qr/:qrId', authenticateToken, authorizeRoles('invigilator'), getStudentByQrRecordId);
router.post('/enrolled-course-units/:enrolledCourseUnitId/approve', authenticateToken, authorizeRoles('invigilator'), approveEnrolledCourseUnit);

export default router;