import express from "express";
import { approveFacility, getAllFacilities, getFacility } from "../controller/adminController.js";

const router = express.Router({ mergeParams: true });

router.get("/",getAllFacilities);
router.get("/:facilityid",getFacility);
router.post("/:facilityid/approve",approveFacility);

export default router;