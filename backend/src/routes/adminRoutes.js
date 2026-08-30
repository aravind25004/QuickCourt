import express from "express";
import { approveFacility, getAllFacilities, getFacility } from "../controller/adminController";

const router = express.Router({ mergeParams: true });

router.get("/",getAllFacilities);
router.get("/:facilityid",getFacility);
router.post("/:facilityid/approve",approveFacility);