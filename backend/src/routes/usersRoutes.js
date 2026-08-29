import express from "express";
import { getUsers, toggleUserBan } from "../controllers/adminController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Admin required for user management
router.use(requireAuth);
router.use(requireRole("ADMIN"));

router.get("/", getUsers);
router.patch("/ban", toggleUserBan);
router.patch("/:userid/ban", toggleUserBan);
router.post("/:userid/ban", toggleUserBan);

export default router;
