import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <div className="space-x-4">
        <Link to="/admin/manage-rooms" className="px-4 py-2 bg-blue-500 text-white rounded">Manage Rooms</Link>
        <Link to="/admin/view-bookings" className="px-4 py-2 bg-green-500 text-white rounded">View Bookings</Link>
      </div>
    </div>
  );
}

export default Dashboard;
