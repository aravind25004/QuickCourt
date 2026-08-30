import express from "express";

import {
  getVenues,
  getPaginatedVenues,
  getVenueByName,
  filterVenues,
  checkVenueBookingAuth,
  getBookingAvailability,
  createBooking
} from "../controller/venueController.js";

const router = express.Router();

// TODO: Add authentication middleware
// Example:
// import authMiddleware from "../middleware/authMiddleware.js";


// GET /api/venues
// TODO: add auth middleware
router.get(
  "/",
  getVenues
);


// GET /api/venues?offset=&limit=
router.get(
  "/",
  getPaginatedVenues
);


// GET /api/venues/venue?sport_type=&price=&rating=
router.get(
  "/venue",
  filterVenues
);


// GET /api/venues/booking
router.get(
  "/booking",
  getBookingAvailability
);


// POST /api/venues/booking
router.post(
  "/booking",
  createBooking
);


// POST /api/venues/:venuename/book
router.post(
  "/:venuename/book",
  checkVenueBookingAuth
);


// GET /api/venues/:venuename
router.get(
  "/:venuename",
  getVenueByName
);


export default router;