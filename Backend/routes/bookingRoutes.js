
import express from 'express';
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById
} from '../controllers/bookingController.js';

import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   GET /api/bookings
// @desc    Get all bookings
router.get('/', verifyToken, getBookings);

// @route   POST /api/bookings
// @desc    Create a new booking
router.post('/', verifyToken, createBooking);

// @route   GET /api/bookings/:id
// @desc    Get a single booking by ID
router.get('/:id', verifyToken, getBookingById);

// @route   PUT /api/bookings/:id
// @desc    Update booking by ID
router.put('/:id', verifyToken, updateBookingById);

// @route   DELETE /api/bookings/:id
// @desc    Delete booking by ID
router.delete('/:id', verifyToken, deleteBookingById);

export default router;

