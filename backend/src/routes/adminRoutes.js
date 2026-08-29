import express from "express";
import {
  getAdminDashboardStats,
  getUsers,
  toggleUserBan,
  approveOrRejectFacility,
  getFacilityDetailsById,
  getPendingFacilities
} from "../controllers/adminController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(requireAuth);
router.use(requireRole("ADMIN"));

router.get("/dashboard-stats", getAdminDashboardStats);
router.get("/pending-facilities", getPendingFacilities);
router.get("/users", getUsers);
router.post("/users/:id/toggle-ban", toggleUserBan);
router.patch("/users/:id/toggle-ban", toggleUserBan);

router.post("/facilities/:id/approve", approveOrRejectFacility);
router.post("/facilities/:id/reject", (req, res, next) => {
  req.body.approval = false;
  return approveOrRejectFacility(req, res, next);
});
router.get("/facilities/:facilityid", getFacilityDetailsById);

export default router;
