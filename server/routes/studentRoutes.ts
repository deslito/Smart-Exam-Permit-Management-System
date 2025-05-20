import express from 'express';
import { getAllStudents, getStudentById } from '../controllers/studentController';
import { authenticateToken } from '../middleware/auth';
import { authorizeRoles } from '../middleware/authorizeRoles';
import { verifyStudentOrInvigilatorAccess } from '../middleware/verifyStudentOrInvigilatorAccess';

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles('admin'), getAllStudents);
router.get('/:id', authenticateToken, authorizeRoles('invigilator', 'student'), verifyStudentOrInvigilatorAccess, getStudentById);

export default router;