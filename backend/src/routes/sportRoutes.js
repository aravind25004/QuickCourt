import express from "express";
import { getSports, createSport } from "../controllers/sportController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getSports);
router.post("/", requireAuth, requireRole("ADMIN"), createSport);

export default router;
