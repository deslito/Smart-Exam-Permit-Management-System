import express from "express";
import { getExamsByFaculty } from "../controllers/examController";

const router = express.Router();

// GET /exams/faculty/:facultyId
router.get("/faculty/:facultyId", getExamsByFaculty);

// NOTE: Make sure in server.ts you use:
// app.use('/exams', examRoutes);
// and NOT app.use('/exams', getExamsByFaculty);

export default router;
