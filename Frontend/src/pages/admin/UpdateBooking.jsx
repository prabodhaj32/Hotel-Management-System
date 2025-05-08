import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateBookingById, getAllBookings } from "../../services/adminService";

function UpdateBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    async function fetchBooking() {
      const bookings = await getAllBookings();
      const found = bookings.find((b) => b._id === id);
      if (found) setBooking(found);
    }
    fetchBooking();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBookingById(id, booking);
    navigate("/admin/view-bookings");
  };

  if (!booking) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-6">Update Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={booking.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Full name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={booking.address}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Street, City"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Telephone</label>
          <input
            type="tel"
            name="telephone"
            value={booking.telephone}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="e.g., 0771234567"
            pattern="[0-9]{10,15}"
            required
          />
        </div>

        {/* Optional: allow editing dates */}
        <div>
          <label className="block text-sm font-medium mb-1">From Date</label>
          <input
            type="date"
            name="fromDate"
            value={booking.fromDate?.split("T")[0]}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">To Date</label>
          <input
            type="date"
            name="toDate"
            value={booking.toDate?.split("T")[0]}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default UpdateBooking;
