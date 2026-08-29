import express from "express";
import {
  getFacilities,
  createFacility,
  updateFacility,
  deleteFacility,
  getCourtById,
  addCourt,
  updateCourt,
  deleteCourt,
  getFacilityBookings
} from "../controllers/facilityController.js";
import { requireAuth, optionalAuth } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Public / Authenticated facility listing
router.get("/", optionalAuth, getFacilities);

// Court endpoints (/api/facility/court/...)
router.get("/court/:courtid", optionalAuth, getCourtById);
router.post("/court/:courtid", requireAuth, requireRole("OWNER", "ADMIN"), addCourt);
router.post("/court", requireAuth, requireRole("OWNER", "ADMIN"), addCourt);
router.patch("/court/:courtid", requireAuth, requireRole("OWNER", "ADMIN"), updateCourt);
router.put("/court/:courtid", requireAuth, requireRole("OWNER", "ADMIN"), updateCourt);
router.delete("/court/:courtid", requireAuth, requireRole("OWNER", "ADMIN"), deleteCourt);

// Specific facility bookings
router.get("/:facilityid/bookings", requireAuth, requireRole("OWNER", "ADMIN"), getFacilityBookings);

// Facility creation and mutations
router.post("/:facility", requireAuth, requireRole("OWNER", "ADMIN"), createFacility);
router.post("/", requireAuth, requireRole("OWNER", "ADMIN"), createFacility);
router.patch("/:facilityid", requireAuth, requireRole("OWNER", "ADMIN"), updateFacility);
router.put("/:facilityid", requireAuth, requireRole("OWNER", "ADMIN"), updateFacility);
router.delete("/:facilityid", requireAuth, requireRole("OWNER", "ADMIN"), deleteFacility);

export default router;
