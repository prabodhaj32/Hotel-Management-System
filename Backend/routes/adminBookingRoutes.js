import express from 'express';
import { getAllBookings } from '../controllers/adminController.js';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to get all bookings (admin only)
router.get('/bookings', verifyToken, verifyAdmin, getAllBookings); 

export default router;
