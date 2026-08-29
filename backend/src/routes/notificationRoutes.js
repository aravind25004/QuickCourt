import express from "express";
import { getNotifications, markNotificationAsRead } from "../controllers/notificationController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(requireAuth);
router.get("/", getNotifications);
router.patch("/:id/read", markNotificationAsRead);

export default router;
