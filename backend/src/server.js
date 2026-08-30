import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import adminRoutes from "./routes/adminRoutes.js"
import facilityRoutes from "./routes/facilityRoutes.js"
import usersRoute from "./routes/usersRoutes.js"
import userRoute from "./routes/userRoutes.js"
import venueRoutes from "./routes/venueRoutes.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const envCandidates = [
//   path.resolve(__dirname, "..", ".env"),
//   path.resolve(__dirname, "..", "..", ".env"),
//   path.resolve(process.cwd(), ".env"),
// ];

// for (const envPath of envCandidates) {
//   dotenv.config({ path: envPath });
//   if (process.env.PORT || process.env.MONGODB_URI) {
//     break;
//   }
// }

const app = express();

app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/facilities",adminRoutes);
app.use("/api/users",usersRoute)
app.use("/api/facility", facilityRoutes);
app.use("/api/user",userRoute);
app.use("/api/venues", venueRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined. Create a .env file in the project root with your MongoDB connection string.");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Atlas connected");

    app.listen(PORT, () => {
      console.log(`QuickCourt server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();