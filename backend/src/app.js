import express from "express";
import cors from "cors";

// Route Imports
import authRoutes from "./routes/authRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import venueRoutes from "./routes/venueRoutes.js";
import facilityRoutes from "./routes/facilityRoutes.js";
import ownerRoutes from "./routes/ownerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import sportRoutes from "./routes/sportRoutes.js";
import blockedSlotRoutes from "./routes/blockedSlotRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import seedRoutes from "./routes/seedRoutes.js";

// Middleware
import { errorHandler } from "./middleware/errorHandler.js";
import { requireAuth, optionalAuth } from "./middleware/authMiddleware.js";
import {
  createBooking,
  getVenues
} from "./controllers/venueController.js";
import {
  getMyBookings,
  getBookingById,
  cancelBooking
} from "./controllers/userController.js";

const app = express();

// Global Middlewares
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"]
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Root health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "QuickCourt API is running smoothly",
    version: "1.0.0",
    documentation: "/api/health"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "QuickCourt Backend REST API"
  });
});

// Mount Specification & Integration Routes
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/user", userRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/venues", venueRoutes);
app.use("/api/facilities", facilityRoutes);
app.use("/api/facility", facilityRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/sports", sportRoutes);
app.use("/api/courts", blockedSlotRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/seed", seedRoutes);

// Direct /api/bookings compatibility routes for frontend services
const bookingRouter = express.Router();
bookingRouter.get("/", requireAuth, getMyBookings);
bookingRouter.post("/", requireAuth, createBooking);
bookingRouter.get("/:id", requireAuth, getBookingById);
bookingRouter.post("/:id/cancel", requireAuth, cancelBooking);
bookingRouter.patch("/:id/cancel", requireAuth, cancelBooking);
app.use("/api/bookings", bookingRouter);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`
  });
});

// Global Error Handler
app.use(errorHandler);

export default app;