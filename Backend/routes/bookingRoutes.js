import express from 'express';
import { createBooking, getBookings } from '../controllers/bookingController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getBookings);
router.post('/', verifyToken, createBooking);

export default router;
