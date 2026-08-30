import express from "express";
import { getActiveBookings, getBooking, profile, updateProfile } from "../controller/userController";

const router = express.Router();

router.get("/mybookings",getActiveBookings);
router.get("/mybookings/:bookingid",getBooking);
router.get("/me",profile);
router.patch("/me",updateProfile);

export default router;
