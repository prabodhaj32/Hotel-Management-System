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
// Delete a booking by ID
export const deleteBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    // Example using Mongoose
    const deleted = await Booking.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a booking by ID
export const updateBookingById = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updated = await Booking.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Booking not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};