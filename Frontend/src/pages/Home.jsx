import React, { useEffect, useState } from 'react';
import { getRooms } from '../services/roomService';
import RoomCard from '../components/RoomCard';

function Home() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      const data = await getRooms();
      setRooms(data);
    }
    fetchRooms();
  }, []);

  return React.createElement(
    'div',
    { className: 'p-6 grid grid-cols-1 md:grid-cols-3 gap-6' },
    rooms.map((room) =>
      React.createElement(RoomCard, { key: room._id, room: room })
    )
  );
}

export default Home;
