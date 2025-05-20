import express from 'express';
import { getAllInvigilators, getInvigilatorById } from '../controllers/invigilatorController';
import { authenticateToken } from '../middleware/auth';
import { authorizeRoles } from '../middleware/authorizeRoles';
import { verifyInvigilatorOrAdminAccess } from '../middleware/verifyInvigilatorOrAdminAccess';

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles('admin'), getAllInvigilators);
router.get('/:id', authenticateToken, authorizeRoles('invigilator', 'student'), verifyInvigilatorOrAdminAccess, getInvigilatorById);

export default router;