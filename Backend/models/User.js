import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { 
      type: String, 
      required: true, 
      trim: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true,
      trim: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    isAdmin: { 
      type: Boolean, 
      default: false 
    }
  },
  { timestamps: true } // This automatically adds createdAt and updatedAt fields
);

export default mongoose.model('User', userSchema);
