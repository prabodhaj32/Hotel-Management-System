import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createBooking } from '../services/bookingService';

function BookRoom() {
  const { roomId } = useParams();
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    await createBooking({ room: roomId, fromDate, toDate, name, address, telephone });
    alert('Booking Successful!');
  };

  return React.createElement(
    'form',
    {
      onSubmit: handleBooking,
      className: 'max-w-md mx-auto p-6 mt-6 border rounded-md shadow-md space-y-4',
    },
    [
      React.createElement(
        'h2',
        { className: 'text-2xl font-bold text-center', key: 'header' },
        'Book Room'
      ),
      React.createElement('input', {
        type: 'text',
        placeholder: 'Your Name',
        className: 'w-full p-2 border rounded',
        value: name,
        onChange: (e) => setName(e.target.value),
        required: true,
        key: 'name',
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'Your Address',
        className: 'w-full p-2 border rounded',
        value: address,
        onChange: (e) => setAddress(e.target.value),
        required: true,
        key: 'address',
      }),
      React.createElement('input', {
        type: 'tel',
        placeholder: 'Telephone Number',
        className: 'w-full p-2 border rounded',
        value: telephone,
        onChange: (e) => setTelephone(e.target.value),
        required: true,
        key: 'telephone',
      }),
      React.createElement('input', {
        type: 'date',
        className: 'w-full p-2 border rounded',
        value: fromDate,
        onChange: (e) => setFromDate(e.target.value),
        required: true,
        key: 'fromDate',
      }),
      React.createElement('input', {
        type: 'date',
        className: 'w-full p-2 border rounded',
        value: toDate,
        onChange: (e) => setToDate(e.target.value),
        required: true,
        key: 'toDate',
      }),
      React.createElement(
        'button',
        {
          className: 'w-full p-2 bg-indigo-500 text-white rounded',
          key: 'submit',
        },
        'Book Now'
      ),
    ]
  );
}

export default BookRoom;
