import express from "express";
import { getHomeDashboard } from "../controllers/homeController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/home (Auth required)
router.get("/", requireAuth, getHomeDashboard);

export default router;
