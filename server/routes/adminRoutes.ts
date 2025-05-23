import express from 'express';
import { getAllAdmins, getAdminById, approveExam } from '../controllers/adminController';
import { authenticateToken } from '../middleware/auth';
import { authorizeRoles } from '../middleware/authorizeRoles';
import { verifyOwnAdminAccess } from '../middleware/verifyAdmin';

const router = express.Router();

router.get('/', authenticateToken, getAllAdmins);
router.get('/:id', authenticateToken, authorizeRoles('admin'), verifyOwnAdminAccess, getAdminById);
router.patch("/exams/:examId/approve", authenticateToken, authorizeRoles('admin'), approveExam);

export default router;