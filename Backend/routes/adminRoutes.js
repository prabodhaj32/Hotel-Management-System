import express from 'express';
import { getRooms, deleteRoom } from '../controllers/adminRoomController.js';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to get all rooms (admin only)
router.get('/rooms', verifyToken, verifyAdmin, getRooms);

// Route to delete a room by ID (admin only)
router.delete('/rooms/:id', verifyToken, verifyAdmin, deleteRoom);

export default router;
