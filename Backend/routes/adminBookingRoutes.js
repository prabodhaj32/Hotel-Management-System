import express from 'express';
import { getAllBookings } from '../controllers/adminController.js';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to get all bookings (admin only)
router.get('/bookings', verifyToken, verifyAdmin, getAllBookings); 

export default router;

// import express from 'express';
// import { 
//   getAllBookings, 
//   deleteBookingById, 
//   updateBookingById 
// } from '../controllers/adminController.js';
// import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Get all bookings (admin only)
// router.get('/bookings', verifyToken, verifyAdmin, getAllBookings);

// // Delete a booking by ID (admin only)
// router.delete('/bookings/:id', verifyToken, verifyAdmin, deleteBookingById);

// // Update a booking by ID (admin only)
// router.put('/bookings/:id', verifyToken, verifyAdmin, updateBookingById);

// export default router;
