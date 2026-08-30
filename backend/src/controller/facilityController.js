import Facility from "../models/Facilities.js";
import Court from "../models/Courts.js";
import Booking from "../models/Bookings.js";

/*
  Facility Owner endpoints

  POST   /api/facility/:facility
  PATCH  /api/facility/:facilityid
  DELETE /api/facility/:facilityid

  GET    /api/facility/court/:courtid
  POST   /api/facility/court/:courtid
  PATCH  /api/facility/court/:courtid
  DELETE /api/facility/court/:courtid

  GET    /api/facility/:facilityid/bookings
*/


// POST /api/facility/:facility
export async function createFacility(req, res) {
  try {
    const facility = await Facility.create({
      owner: req.user._id,
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      amenities: req.body.amenities,
      photos: req.body.photos
    });

    res.status(201).json({
      message: "Facility created successfully",
      facility
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// PATCH /api/facility/:facilityid
export async function updateFacility(req, res) {
  try {
    const facility = await Facility.findByIdAndUpdate(
      req.params.facilityid,
      {
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        amenities: req.body.amenities,
        photos: req.body.photos
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!facility) {
      return res.status(404).json({
        message: "Facility not found"
      });
    }

    res.status(200).json(facility);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// DELETE /api/facility/:facilityid
export async function deleteFacility(req, res) {
  try {
    const facility = await Facility.findByIdAndDelete(
      req.params.facilityid
    );

    if (!facility) {
      return res.status(404).json({
        message: "Facility not found"
      });
    }

    res.status(200).json({
      message: "Facility deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// GET /api/facility/court/:courtid
export async function getCourt(req, res) {
  try {
    const court = await Court.findById(req.params.courtid)
      .populate("facility")
      .populate("Slots");

    if (!court) {
      return res.status(404).json({
        message: "Court not found"
      });
    }

    res.status(200).json(court);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// POST /api/facility/court/:courtid
export async function createCourt(req, res) {
  try {
    const court = await Court.create({
      facility: req.body.facility,
      name: req.body.name,
      sport: req.body.sport,
      description: req.body.description,
      pricePerHour: req.body.pricePerHour,
      date: req.body.date,
      Slots: req.body.Slots
    });

    res.status(201).json({
      message: "Court created successfully",
      court
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// PATCH /api/facility/court/:courtid
export async function updateCourt(req, res) {
  try {
    const court = await Court.findByIdAndUpdate(
      req.params.courtid,
      {
        facility: req.body.facility,
        name: req.body.name,
        sport: req.body.sport,
        description: req.body.description,
        pricePerHour: req.body.pricePerHour,
        date: req.body.date,
        Slots: req.body.Slots
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!court) {
      return res.status(404).json({
        message: "Court not found"
      });
    }

    res.status(200).json(court);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// DELETE /api/facility/court/:courtid
export async function deleteCourt(req, res) {
  try {
    const court = await Court.findByIdAndDelete(
      req.params.courtid
    );

    if (!court) {
      return res.status(404).json({
        message: "Court not found"
      });
    }

    res.status(200).json({
      message: "Court deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// GET /api/facility/:facilityid/bookings
export async function getFacilityBookings(req, res) {
  try {
    const bookings = await Booking.find({
      facility: req.params.facilityid
    })
      .populate("user", "name email")
      .populate("court", "name sport pricePerHour")
      .populate("facility", "name address");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}