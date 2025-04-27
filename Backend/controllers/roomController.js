import Room from '../models/Room.js';

export const getRooms = async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
};

export const createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
