import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookRoom from './pages/BookRoom';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import ManageRooms from './pages/admin/ManageRooms';
import ViewBookings from './pages/admin/ViewBookings';
import UpdateBooking from './pages/admin/UpdateBooking'; // ✅ Don't forget this import

function App() {
  return (
    <Router>
      {/* Common Navbar */}
      <Navbar />

      <div className="container mx-auto p-4">
        <Routes>
          {/* Public/User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:roomId" element={<BookRoom />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/manage-rooms" element={<ManageRooms />} />
          <Route path="/admin/view-bookings" element={<ViewBookings />} />
          <Route path="/admin/update-booking/:id" element={<UpdateBooking />} /> {/* ✅ Added */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
