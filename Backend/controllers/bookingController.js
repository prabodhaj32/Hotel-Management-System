
import Booking from '../models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(400).json({ message: "Failed to create booking", error: err.message });
  }
};

// Get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user').populate('room');
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ message: "Failed to fetch bookings", error: err.message });
  }
};

// Get booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('user').populate('room');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (err) {
    console.error("Error fetching booking by ID:", err);
    res.status(500).json({ message: "Failed to fetch booking", error: err.message });
  }
};

// Update booking by ID
export const updateBookingById = async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(updatedBooking);
  } catch (err) {
    console.error("Error updating booking:", err);
    res.status(400).json({ message: "Failed to update booking", error: err.message });
  }
};

// Delete booking by ID
export const deleteBookingById = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    console.error("Error deleting booking:", err);
    res.status(500).json({ message: "Failed to delete booking", error: err.message });
  }
};
