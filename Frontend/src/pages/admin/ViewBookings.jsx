import { useEffect, useState } from 'react';
import { getAllBookings } from '../../services/adminService';

function ViewBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const data = await getAllBookings();
      setBookings(data);
    }
    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="border p-4 mb-2">
            <p><strong>Room:</strong> {booking.room?.name || 'N/A'}</p> {/* Optional chaining */}
            <p><strong>User:</strong> {booking.user?.username || 'N/A'}</p> {/* Optional chaining */}
            <p><strong>From:</strong> {booking.fromDate || 'N/A'}</p>
            <p><strong>To:</strong> {booking.toDate || 'N/A'}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewBookings;
