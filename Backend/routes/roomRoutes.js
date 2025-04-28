import express from 'express';
import { getRooms, createRoom } from '../controllers/roomController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getRooms);
router.post('/', verifyToken, createRoom); // Admin only route

export default router;
