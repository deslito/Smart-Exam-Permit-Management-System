import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors middleware
import authRoutes from './routes/auth';
import studentRoutes from './routes/studentRoutes';
import adminRoutes from './routes/adminRoutes';
import invigilatorRoutes from './routes/invigilatorRoutes';

dotenv.config();

const app = express();

// Enable CORS for all origins (for development purposes)
app.use(cors());

// Or configure CORS for specific origins
// app.use(
//   cors({
//     origin: 'http://localhost:8081', // Replace with your app's origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true, // Allow cookies if needed
//   })
// );

app.use(express.json());
app.use('/auth', authRoutes); // ✅ this now works
app.use('/students', studentRoutes); // ✅ this now works
app.use('/admins', adminRoutes); // ✅ this now works
app.use('/invigilators', invigilatorRoutes); // ✅ this now works

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
