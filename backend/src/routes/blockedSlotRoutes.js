import express from "express";
import { getBlockedSlots, blockSlot, unblockSlot } from "../controllers/blockedSlotController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/blocked-slots", requireAuth, getBlockedSlots);
router.post("/block-slot", requireAuth, requireRole("OWNER", "ADMIN"), blockSlot);
router.delete("/unblock-slot/:id", requireAuth, requireRole("OWNER", "ADMIN"), unblockSlot);

export default router;
