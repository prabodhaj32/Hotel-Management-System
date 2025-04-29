import { useEffect, useState } from 'react';
import { getAllRooms, deleteRoom } from '../../services/adminService';

function ManageRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      const data = await getAllRooms();
      setRooms(data);
    }
    fetchRooms();
  }, []);

  const handleDelete = async (roomId) => {
    await deleteRoom(roomId);
    setRooms(prev => prev.filter(room => room._id !== roomId));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Rooms</h2>
      {rooms.map(room => (
        <div key={room._id} className="border p-4 mb-2 flex justify-between items-center">
          <div>
            <h3 className="font-bold">{room.name}</h3>
            <p>${room.price} / night</p>
          </div>
          <button onClick={() => handleDelete(room._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ManageRooms;
