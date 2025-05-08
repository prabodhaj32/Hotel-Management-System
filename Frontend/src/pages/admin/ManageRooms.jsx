// import { useEffect, useState } from 'react';
// import { getAllRooms, deleteRoom } from '../../services/adminService';

// function ManageRooms() {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     async function fetchRooms() {
//       const data = await getAllRooms();
//       setRooms(data);
//     }
//     fetchRooms();
//   }, []);

//   const handleDelete = async (roomId) => {
//     await deleteRoom(roomId);
//     setRooms(prev => prev.filter(room => room._id !== roomId));
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Manage Rooms</h2>
//       {rooms.map(room => (
//         <div key={room._id} className="border p-4 mb-2 flex justify-between items-center">
//           <div>
//             <h3 className="font-bold">{room.name}</h3>
//             <p>${room.price} / night</p>
//           </div>
//           <button onClick={() => handleDelete(room._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ManageRooms;
import { useEffect, useState } from 'react';
import { getAllRooms, deleteRoom, createRoom, updateRoomById } from '../../services/adminService';
import { useNavigate } from 'react-router-dom';

function ManageRooms() {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    name: '',
    description: '',
    price: '',
    images: [], // Image files to be uploaded
  });
  const navigate = useNavigate();

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

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newRoom.name);
    formData.append('description', newRoom.description);
    formData.append('price', newRoom.price);
    newRoom.images.forEach((image, index) => {
      formData.append('images', image);
    });

    const createdRoom = await createRoom(formData);
    setRooms(prev => [...prev, createdRoom]);
    setNewRoom({
      name: '',
      description: '',
      price: '',
      images: [],
    });
  };

  const handleImageChange = (e) => {
    setNewRoom({
      ...newRoom,
      images: [...e.target.files],
    });
  };

  const handleUpdateRoom = async (roomId) => {
    const formData = new FormData();
    formData.append('name', newRoom.name);
    formData.append('description', newRoom.description);
    formData.append('price', newRoom.price);
    newRoom.images.forEach((image, index) => {
      formData.append('images', image);
    });

    await updateRoomById(roomId, formData);
    setRooms(prev => prev.map(room => room._id === roomId ? newRoom : room));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Rooms</h2>
      
      <form onSubmit={handleCreateRoom} className="mb-4 space-y-4">
        <input
          name="name"
          value={newRoom.name}
          onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
          className="border p-2 w-full"
          placeholder="Room Name"
        />
        <input
          name="description"
          value={newRoom.description}
          onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
          className="border p-2 w-full"
          placeholder="Room Description"
        />
        <input
          name="price"
          type="number"
          value={newRoom.price}
          onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
          className="border p-2 w-full"
          placeholder="Price per night"
        />
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">Create Room</button>
      </form>

      {rooms.map(room => (
        <div key={room._id} className="border p-4 mb-2 flex justify-between items-center">
          <div>
            <h3 className="font-bold">{room.name}</h3>
            <p>${room.price} / night</p>
            {room.images && room.images.map((image, index) => (
              <img key={index} src={image} alt={room.name} className="w-32 h-32 object-cover mt-2" />
            ))}
          </div>
          <div>
            <button onClick={() => handleUpdateRoom(room._id)} className="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
            <button onClick={() => handleDelete(room._id)} className="bg-red-500 text-white px-3 py-1 rounded ml-2">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManageRooms;
