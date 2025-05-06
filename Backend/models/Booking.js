import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  status: { type: String, default: 'booked' },
  name: { type: String, required: true },
  address: { type: String, required: true },
  telephone: { type: String, required: true },
});

export default mongoose.model('Booking', bookingSchema);
