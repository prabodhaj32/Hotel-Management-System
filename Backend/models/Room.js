// import mongoose from 'mongoose';

// const roomSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   type: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String },
//   capacity: { type: Number, required: true },
//   images: [String],
//   available: { type: Boolean, default: true },
// });

// export default mongoose.model('Room', roomSchema);
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }], // Array of image URLs
}, { timestamps: true });

export default mongoose.model('Room', roomSchema);

