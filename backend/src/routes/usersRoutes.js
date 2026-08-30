import express from "express";
import { banUser, getAllActiveUsers, getBookingHistory } from "../controller/usersController";

const router = express.Router({ mergeParams: true });

router.get("/",getAllActiveUsers);
router.patch("/ban",banUser);
router.get("/mybookings",getBookingHistory);
