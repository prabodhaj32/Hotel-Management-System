// import Room from '../models/Room.js';

// export const getRooms = async (req, res) => {
//   const rooms = await Room.find();
//   res.json(rooms);
// };

// export const createRoom = async (req, res) => {
//   try {
//     const newRoom = await Room.create(req.body);
//     res.status(201).json(newRoom);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
import Room from '../models/Room.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// ---------------- Multer Config ----------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/rooms';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname.replace(/\s+/g, '_')}`;
    cb(null, fileName);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

const upload = multer({ storage, fileFilter });
export const uploadImages = upload.array('images', 5); // Allow up to 5 images

// ---------------- Controllers ----------------

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch rooms', error: err.message });
  }
};

export const createRoom = async (req, res) => {
  try {
    const imageUrls = req.files?.map(file => `/uploads/rooms/${file.filename}`) || [];
    const newRoom = await Room.create({ ...req.body, images: imageUrls });
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create room', error: err.message });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get room', error: err.message });
  }
};

export const updateRoomById = async (req, res) => {
  try {
    const imageUrls = req.files?.map(file => `/uploads/rooms/${file.filename}`) || [];

    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { ...req.body, $push: { images: { $each: imageUrls } } },
      { new: true }
    );

    if (!updatedRoom) return res.status(404).json({ message: 'Room not found' });

    res.json(updatedRoom);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update room', error: err.message });
  }
};

export const deleteRoomById = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json({ message: 'Room deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete room', error: err.message });
  }
};
