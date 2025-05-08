
// import axios from 'axios';

// const ADMIN_API_URL = 'http://localhost:8000/api/admin';     // Admin-specific API
// const BOOKING_API_URL = 'http://localhost:8000/api/bookings'; // Booking-specific API


// // Fetch all rooms (Admin)
// export const getAllRooms = async () => {
//   const res = await axios.get(`${ADMIN_API_URL}/rooms`, { withCredentials: true });
//   return res.data;
// };

// // Delete a specific room by ID (Admin)
// export const deleteRoom = async (id) => {
//   const res = await axios.delete(`${ADMIN_API_URL}/rooms/${id}`, { withCredentials: true });
//   return res.data;
// };

// // Fetch all bookings (Admin)
// export const getAllBookings = async () => {
//   const res = await axios.get(BOOKING_API_URL, { withCredentials: true });
//   return res.data;
// };

// // Delete a booking by ID
// export const deleteBookingById = async (id) => {
//   const res = await axios.delete(`${BOOKING_API_URL}/${id}`, { withCredentials: true });
//   return res.data;
// };

// // Get a single booking by ID
// export const getBookingById = async (id) => {
//   const res = await axios.get(`${BOOKING_API_URL}/${id}`, { withCredentials: true });
//   return res.data;
// };

// // Update a booking by ID
// export const updateBookingById = async (id, updateData) => {
//   const res = await axios.put(`${BOOKING_API_URL}/${id}`, updateData, { withCredentials: true });
//   return res.data;
// };
import axios from 'axios';

const ADMIN_API_URL = 'http://localhost:8000/api/admin';     // Admin-specific API
const BOOKING_API_URL = 'http://localhost:8000/api/bookings'; // Booking-specific API
const ROOMS_API_URL = 'http://localhost:8000/api/rooms';     // General room API

// ========== ROOMS ==========

// Admin: Fetch all rooms
export const getAllRooms = async () => {
  const res = await axios.get(`${ADMIN_API_URL}/rooms`, { withCredentials: true });
  return res.data;
};

// Admin: Delete a room
export const deleteRoom = async (id) => {
  const res = await axios.delete(`${ADMIN_API_URL}/rooms/${id}`, { withCredentials: true });
  return res.data;
};

// Admin: Create a room (with images)
export const createRoom = async (roomData) => {
  const res = await axios.post(`${ADMIN_API_URL}/rooms`, roomData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true
  });
  return res.data;
};

// Admin: Update room by ID
export const updateRoomById = async (roomId, roomData) => {
  const res = await axios.put(`${ADMIN_API_URL}/rooms/${roomId}`, roomData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true
  });
  return res.data;
};

// ========== BOOKINGS ==========

// Admin: Fetch all bookings
export const getAllBookings = async () => {
  const res = await axios.get(BOOKING_API_URL, { withCredentials: true });
  return res.data;
};

// Admin: Delete a booking
export const deleteBookingById = async (id) => {
  const res = await axios.delete(`${BOOKING_API_URL}/${id}`, { withCredentials: true });
  return res.data;
};

// Admin: Get a booking by ID
export const getBookingById = async (id) => {
  const res = await axios.get(`${BOOKING_API_URL}/${id}`, { withCredentials: true });
  return res.data;
};

// Admin: Update a booking by ID
export const updateBookingById = async (id, updateData) => {
  const res = await axios.put(`${BOOKING_API_URL}/${id}`, updateData, { withCredentials: true });
  return res.data;
};
