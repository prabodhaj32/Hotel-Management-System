// // import express from 'express';
// // import { getRooms, createRoom } from '../controllers/roomController.js';
// // import { verifyToken } from '../middleware/authMiddleware.js';

// // const router = express.Router();

// // router.get('/', getRooms);
// // router.post('/', verifyToken, createRoom); // Admin only route


// // export default router;

// import express from 'express';
// import {
//   createRoom,
//   getRooms,
//   getRoomById,
//   updateRoomById,
//   deleteRoomById,
//   uploadImages
// } from '../controllers/roomController.js';

// import { verifyToken } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Public routes
// router.get('/', getRooms);
// router.get('/:id', getRoomById);

// // Protected admin routes
// router.post('/', verifyToken, uploadImages, createRoom);
// router.put('/:id', verifyToken, uploadImages, updateRoomById);
// router.delete('/:id', verifyToken, deleteRoomById);

// export default router;
import express from 'express';
import { createRoom, getRooms, getRoomById, updateRoomById, deleteRoomById, uploadImages } from '../controllers/roomController.js';

const router = express.Router();

// Routes for rooms
router.get('/', getRooms);
router.post('/rooms', uploadImages, createRoom);
router.post('/', uploadImages, createRoom); // Upload images for room creation
router.get('/:id', getRoomById);
router.put('/:id', uploadImages, updateRoomById); // Upload images for room update
router.delete('/:id', deleteRoomById);

export default router;
