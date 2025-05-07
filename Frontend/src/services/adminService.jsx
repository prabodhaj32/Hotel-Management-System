import axios from 'axios';

const API_URL = 'http://localhost:8000/api/admin'; // Admin-related base URL
const BOOKING_API_URL = 'http://localhost:8000/api/bookings'; // Booking-related base URL

// Fetch all rooms for the admin
export const getAllRooms = async () => {
  const res = await axios.get(`${API_URL}/rooms`, { withCredentials: true });
  return res.data;
};

// Delete a specific room by ID
export const deleteRoom = async (id) => {
  const res = await axios.delete(`${API_URL}/rooms/${id}`, { withCredentials: true });
  return res.data;
};

// Fetch all bookings for the admin
export const getAllBookings = async () => {
  const res = await axios.get(`${API_URL}/bookings`, { withCredentials: true });
  return res.data;
};

// Delete a booking by ID
export const deleteBookingById = async (id) => {
  const res = await axios.delete(`${BOOKING_API_URL}/${id}`, { withCredentials: true });
  return res.data;
};

// Get a single booking by ID
export const getBookingById = async (id) => {
  const res = await axios.get(`${BOOKING_API_URL}/${id}`, { withCredentials: true });
  return res.data;
};

// Update a booking by ID
export const updateBookingById = async (id, updateData) => {
  const res = await axios.put(`${BOOKING_API_URL}/${id}`, updateData, { withCredentials: true });
  return res.data;
};
