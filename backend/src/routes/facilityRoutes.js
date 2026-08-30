import express from "express";

import {
  createFacility,
  updateFacility,
  deleteFacility,
  getCourt,
  createCourt,
  updateCourt,
  deleteCourt,
  getFacilityBookings
} from "../controllers/facilityController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Facility
router.post("/:facility", authMiddleware, createFacility);
router.patch("/:facilityid", authMiddleware, updateFacility);
router.delete("/:facilityid", authMiddleware, deleteFacility);

// Court
router.get("/court/:courtid", authMiddleware, getCourt);
router.post("/court/:courtid", authMiddleware, createCourt);
router.patch("/court/:courtid", authMiddleware, updateCourt);
router.delete("/court/:courtid", authMiddleware, deleteCourt);

// Bookings
router.get(
  "/:facilityid/bookings",
  authMiddleware,
  getFacilityBookings
);

export default router;