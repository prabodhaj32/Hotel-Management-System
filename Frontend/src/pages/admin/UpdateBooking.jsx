import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookingById, updateBookingById } from "../../services/adminService"; // fixed path

function UpdateBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    async function fetchBooking() {
      try {
        const data = await getBookingById(id);
        setBooking(data);
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    }

    fetchBooking();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBookingById(id, booking);
      navigate("/admin/view-bookings");
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  if (!booking) return <p>Loading booking...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Update Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={booking.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="address"
          value={booking.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="telephone"
          value={booking.telephone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Booking
        </button>
      </form>
    </div>
  );
}

export default UpdateBooking;
