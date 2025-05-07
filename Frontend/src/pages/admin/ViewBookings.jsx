// import { useEffect, useState } from 'react';
// import { getAllBookings } from '../../services/adminService';

// function ViewBookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     async function fetchBookings() {
//       const data = await getAllBookings();
//       setBookings(data);
//     }
//     fetchBookings();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">All Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings available</p>
//       ) : (
//         bookings.map((booking) => (
//           <div key={booking._id} className="border p-4 mb-2 rounded shadow-sm">
//             <p><strong>Room:</strong> {booking.room?.name || 'N/A'}</p>
//             <p><strong>User:</strong> {booking.user?.username || 'N/A'}</p>
//             <p><strong>From:</strong> {new Date(booking.fromDate).toLocaleDateString()}</p>
//             <p><strong>To:</strong> {new Date(booking.toDate).toLocaleDateString()}</p>
//             <p><strong>Name:</strong> {booking.name}</p>
//             <p><strong>Address:</strong> {booking.address}</p>
//             <p><strong>Phone:</strong> {booking.telephone}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default ViewBookings;

import { useEffect, useState } from "react";
import { getAllBookings, deleteBookingById } from "../../services/adminService";
import { useNavigate } from "react-router-dom";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBookings() {
      const data = await getAllBookings();
      setBookings(data);
    }
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    await deleteBookingById(id);
    setBookings(bookings.filter((b) => b._id !== id));
  };

  const handleUpdate = (id) => {
    navigate(`/admin/update-booking/${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="border p-4 mb-2 rounded shadow-sm">
            <p><strong>Room:</strong> {booking.room?.name || 'N/A'}</p>
            <p><strong>User:</strong> {booking.user?.username || 'N/A'}</p>
            <p><strong>From:</strong> {new Date(booking.fromDate).toLocaleDateString()}</p>
            <p><strong>To:</strong> {new Date(booking.toDate).toLocaleDateString()}</p>
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Address:</strong> {booking.address}</p>
            <p><strong>Phone:</strong> {booking.telephone}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => handleUpdate(booking._id)} className="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
              <button onClick={() => handleDelete(booking._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewBookings;
