import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from './routes/authRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import adminRoutes from './routes/adminRoutes.js';
import adminBookingRoutes from './routes/adminBookingRoutes.js'; // ✅ Only one import
// (Make sure the correct path is ./middleware/errorMiddleware.js)

dotenv.config(); // Load environment variables

const app = express();

// CORS Options
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`❌ CORS Error: Origin '${origin}' is not allowed.`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions)); // Apply CORS
app.use(express.json());    // Parse JSON body
app.use(cookieParser());    // Parse cookies

// Environment Variables
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Hotel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Database connected successfully.");

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/rooms', roomRoutes);
    app.use('/api/bookings', bookingRoutes);
    app.use('/api/admin', adminRoutes);
    app.use('/api/admin', adminBookingRoutes);

    // Error Handling Middleware
    app.use(errorHandler);
    

    // Start Server
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1); // Exit if DB connection fails
  });