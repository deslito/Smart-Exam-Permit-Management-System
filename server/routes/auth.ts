// routes/auth.ts
import express from 'express';
import { login, changePassword } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.post('/login', login); // ✅ login must be a RequestHandler
router.post('/change-password', authenticateToken, changePassword);

export default router;
