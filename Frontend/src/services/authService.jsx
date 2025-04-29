import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth';

// Register function
export const register = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/register`,
      { username, email, password },
      { withCredentials: true } // Allow cookies in cross-origin requests (CORS)
    );
    return response.data; // Return the response data (or handle it accordingly)
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Or handle the error more gracefully
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password },
      { withCredentials: true } // Allow cookies in cross-origin requests (CORS)
    );
    return response.data; // Return the response data (or handle it accordingly)
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Or handle the error more gracefully
  }
};