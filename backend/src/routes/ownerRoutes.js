import express from "express";
import {
  getFacilities,
  getOwnerDashboardStats,
  addCourt,
  updateCourt,
  deleteCourt
} from "../controllers/facilityController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(requireAuth);
router.use(requireRole("OWNER", "ADMIN"));

router.get("/dashboard-stats", getOwnerDashboardStats);
router.get("/facilities", getFacilities);
router.post("/facilities/:id/courts", addCourt);
router.put("/facilities/:id/courts/:courtId", updateCourt);
router.patch("/facilities/:id/courts/:courtId", updateCourt);
router.delete("/facilities/:id/courts/:courtId", deleteCourt);

export default router;
