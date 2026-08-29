import express from "express";
import { getReports, createReport, resolveReport } from "../controllers/reportController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(requireAuth);

router.get("/", requireRole("ADMIN"), getReports);
router.post("/", createReport);
router.post("/:id/resolve", requireRole("ADMIN"), resolveReport);
router.patch("/:id/resolve", requireRole("ADMIN"), resolveReport);

export default router;
