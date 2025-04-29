import axios from 'axios';

const API_URL = 'http://localhost:8000/api/admin'; // Correct base URL

// Fetch all rooms for the admin
export const getAllRooms = async () => {
  const res = await axios.get(`${API_URL}/rooms`, { withCredentials: true }); // Corrected endpoint
  return res.data;
};

// Delete a specific room by ID
export const deleteRoom = async (id) => {
  const res = await axios.delete(`${API_URL}/rooms/${id}`, { withCredentials: true }); // Corrected endpoint
  return res.data;
};

// Fetch all bookings for the admin
export const getAllBookings = async () => {
    const res = await axios.get(`${API_URL}/bookings`, { withCredentials: true });
    return res.data;
  };