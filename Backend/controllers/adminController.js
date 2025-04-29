import Booking from '../models/Booking.js';

// GET all bookings
export const getAllBookings = async (req, res) => {
    try {
      // Assuming you have a Booking model that represents bookings in your DB
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
