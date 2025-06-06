import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors middleware
import authRoutes from './routes/auth';
import studentRoutes from './routes/studentRoutes';
import adminRoutes from './routes/adminRoutes';
import invigilatorRoutes from './routes/invigilatorRoutes';
import facultyRoutes from './routes/facultyRoutes';
import examRoutes from './routes/examRoutes';
import pingRoute from './routes/pingRoute'; // Import ping route

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use('/auth', authRoutes); // ✅ this now works
app.use('/students', studentRoutes); // ✅ this now works
app.use('/admins', adminRoutes); // ✅ this now works
app.use('/invigilators', invigilatorRoutes); // ✅ this now works
app.use('/faculties', facultyRoutes); // <-- Faculties API
app.use('/exams', examRoutes); // Exams API
app.use('/ping', pingRoute); // Ping API

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
