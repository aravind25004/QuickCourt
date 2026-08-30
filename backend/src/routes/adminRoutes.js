import express from "express";

const router = express.Router({ mergeParams: true });

router.get("/",getAllFacilities);
router.get("/:facilityid");
router.post("/:facilityid/approve");