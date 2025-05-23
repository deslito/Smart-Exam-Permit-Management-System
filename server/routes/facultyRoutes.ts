import express from 'express';
import { getAllFaculties } from '../controllers/facultyController';

const router = express.Router();

// GET /api/faculties
router.get('/', getAllFaculties);

export default router;
