// import React from 'react';
// import { Link } from 'react-router-dom';


// function RoomCard({ room }) {
//   return React.createElement(
//     'div',
//     { className: 'border p-4 rounded-md shadow-md' },
//     [
//       React.createElement('img', {
//         src: room.images[0],
//         alt: room.name,
//         className: 'h-40 w-full object-cover rounded-md',
//         key: 'img'
//       }),
//       React.createElement(
//         'h2',
//         { className: 'text-lg font-bold mt-2', key: 'title' },
//         room.name
//       ),
//       React.createElement(
//         'p',
//         { className: 'text-sm text-gray-600', key: 'desc' },
//         room.description
//       ),
//       React.createElement(
//         'p',
//         { className: 'mt-2 font-semibold', key: 'price' },
//         `$${room.price} / night`
//       ),
//       React.createElement(
//         Link,
//         { to: `/book/${room._id}`, key: 'link' },
//         React.createElement(
//           'button',
//           { className: 'mt-3 px-4 py-2 bg-blue-500 text-white rounded-md' },
//           'Book Now'
//         )
//       )
//     ]
//   );
// }

// export default RoomCard;
import React from 'react';
import { Link } from 'react-router-dom';

function RoomCard({ room }) {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <img
        src={room.images?.[0] || 'https://via.placeholder.com/300x200?text=No+Image'}
        alt={room.name}
        className="h-40 w-full object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{room.name}</h2>
      <p className="text-sm text-gray-600 mt-1">{room.description}</p>
      <p className="mt-2 font-semibold text-gray-800">${room.price} / night</p>
      <Link to={`/book/${room._id}`}>
        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Book Now
        </button>
      </Link>
    </div>
  );
}

export default RoomCard;
