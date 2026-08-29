import express from "express";
import {
  getCurrentUser,
  updateCurrentUser,
  getMyBookings,
  getBookingById,
  cancelBooking
} from "../controllers/userController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

// All user routes require authentication
router.use(requireAuth);

router.get("/me", getCurrentUser);
router.patch("/me", updateCurrentUser);

router.get("/mybookings", getMyBookings);
router.get("/mybookings/:bookingid", getBookingById);
router.patch("/mybookings/:bookingid/cancel", cancelBooking);

export default router;
