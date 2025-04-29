import React from 'react';
import { Link } from 'react-router-dom';


function RoomCard({ room }) {
  return React.createElement(
    'div',
    { className: 'border p-4 rounded-md shadow-md' },
    [
      React.createElement('img', {
        src: room.images[0],
        alt: room.name,
        className: 'h-40 w-full object-cover rounded-md',
        key: 'img'
      }),
      React.createElement(
        'h2',
        { className: 'text-lg font-bold mt-2', key: 'title' },
        room.name
      ),
      React.createElement(
        'p',
        { className: 'text-sm text-gray-600', key: 'desc' },
        room.description
      ),
      React.createElement(
        'p',
        { className: 'mt-2 font-semibold', key: 'price' },
        `$${room.price} / night`
      ),
      React.createElement(
        Link,
        { to: `/book/${room._id}`, key: 'link' },
        React.createElement(
          'button',
          { className: 'mt-3 px-4 py-2 bg-blue-500 text-white rounded-md' },
          'Book Now'
        )
      )
    ]
  );
}

export default RoomCard;
