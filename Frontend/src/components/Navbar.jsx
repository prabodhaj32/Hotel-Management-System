import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 shadow-md flex justify-between items-center">
      <h1 className="font-bold text-xl">HotelBooking</h1>
      <div className="space-x-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
        <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
        <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
