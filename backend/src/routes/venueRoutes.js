import express from "express";
import {
  getVenues,
  filterVenues,
  getVenueByNameOrId,
  checkAuthAndInitiateBooking,
  getVenueBookingAvailability,
  createBooking,
  addVenueReview
} from "../controllers/venueController.js";
import { requireAuth, optionalAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Specific routes before param routes
router.get("/venue", optionalAuth, filterVenues);
router.get("/booking", requireAuth, getVenueBookingAvailability);
router.post("/booking", requireAuth, createBooking);

router.get("/", optionalAuth, getVenues);
router.get("/:venuename", optionalAuth, getVenueByNameOrId);
router.post("/:venuename/book", requireAuth, checkAuthAndInitiateBooking);
router.post("/:id/reviews", requireAuth, addVenueReview);

export default router;
