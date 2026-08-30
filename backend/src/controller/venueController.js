import Facility from "../models/Facilities.js";
import Court from "../models/Courts.js";
import Booking from "../models/Bookings.js";

/*
  Venue endpoints

  GET    /api/venues
  GET    /api/venues?offset=&limit=
  GET    /api/venues/:venuename
  GET    /api/venues/venue?sport_type=&price=&rating=

  POST   /api/venues/:venuename/book

  GET    /api/venues/booking
  POST   /api/venues/booking
*/


// GET /api/venues
export async function getVenues(req, res) {
  try {
    const venues = await Facility.find({
      isActive: true,
      approvalStatus: "APPROVED"
    });

    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// GET /api/venues?offset=&limit=
export async function getPaginatedVenues(req, res) {
  try {
    const offset = Number(req.query.offset) || 0;
    const limit = Number(req.query.limit) || 10;

    const filter = {
      isActive: true,
      approvalStatus: "APPROVED"
    };

    const venues = await Facility.find(filter)
      .skip(offset)
      .limit(limit);

    const total = await Facility.countDocuments(filter);

    res.status(200).json({
      total,
      offset,
      limit,
      venues
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// GET /api/venues/:venuename
export async function getVenueByName(req, res) {
  try {
    const venue = await Facility.findOne({
      name: req.params.venuename,
      isActive: true,
      approvalStatus: "APPROVED"
    });

    if (!venue) {
      return res.status(404).json({
        message: "Venue not found"
      });
    }

    const courts = await Court.find({
      facility: venue._id,
      isActive: true
    });

    // Sports are derived from Court.sport
    const sports = [
      ...new Set(
        courts.map((court) => court.sport)
      )
    ];

    res.status(200).json({
      name: venue.name,
      description: venue.description,
      address: venue.address,
      sports,
      amenities: venue.amenities,
      photos: venue.photos,
      rating: venue.rating,
      courts
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// GET /api/venues/venue?sport_type=&price=&rating=
export async function filterVenues(req, res) {
  try {
    const {
      sport_type,
      price,
      rating
    } = req.query;

    const facilityFilter = {
      isActive: true,
      approvalStatus: "APPROVED"
    };

    // Filter by facility rating
    if (rating !== undefined) {
      const ratingValue = Number(rating);

      if (
        Number.isNaN(ratingValue) ||
        ratingValue < 0 ||
        ratingValue > 5
      ) {
        return res.status(400).json({
          message: "rating must be between 0 and 5"
        });
      }

      facilityFilter["rating.average"] = {
        $gte: ratingValue
      };
    }

    // Filter through Court fields
    if (sport_type || price !== undefined) {
      const courtFilter = {
        isActive: true
      };

      if (sport_type) {
        courtFilter.sport = sport_type;
      }

      if (price !== undefined) {
        const priceValue = Number(price);

        if (
          Number.isNaN(priceValue) ||
          priceValue < 0
        ) {
          return res.status(400).json({
            message: "price must be a non-negative number"
          });
        }

        courtFilter.pricePerHour = {
          $lte: priceValue
        };
      }

      const matchingCourts = await Court.find(courtFilter)
        .select("facility");

      const facilityIds = [
        ...new Set(
          matchingCourts.map((court) => court.facility)
        )
      ];

      facilityFilter._id = {
        $in: facilityIds
      };
    }

    const venues = await Facility.find(facilityFilter);

    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// POST /api/venues/:venuename/book
export async function checkVenueBookingAuth(req, res) {
  try {

    // TODO: Authentication is handled by auth middleware

    const venue = await Facility.findOne({
      name: req.params.venuename,
      isActive: true,
      approvalStatus: "APPROVED"
    });

    if (!venue) {
      return res.status(404).json({
        message: "Venue not found"
      });
    }

    res.status(200).json({
      message: "Authenticated. Proceed to booking page.",
      venue
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// GET /api/venues/booking
export async function getBookingAvailability(req, res) {
  try {
    const { venueName } = req.query;

    if (!venueName) {
      return res.status(400).json({
        message: "venueName is required"
      });
    }

    const venue = await Facility.findOne({
      name: venueName,
      isActive: true,
      approvalStatus: "APPROVED"
    });

    if (!venue) {
      return res.status(404).json({
        message: "Venue not found"
      });
    }

    const courts = await Court.find({
      facility: venue._id,
      isActive: true
    }).populate("Slots");

    const bookings = await Booking.find({
      facility: venue._id,
      status: "CONFIRMED"
    });

    res.status(200).json({
      venue: venue.name,
      courts,
      bookings
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


// POST /api/venues/booking
export async function createBooking(req, res) {
  try {
    const {
      venueName,
      timeSlot,
      court,
      price,
      bookingDate
    } = req.body;

    if (
      !venueName ||
      !timeSlot ||
      !court ||
      price === undefined ||
      !bookingDate
    ) {
      return res.status(400).json({
        message:
          "venueName, timeSlot, court, price and bookingDate are required"
      });
    }

    const priceValue = Number(price);

    if (
      Number.isNaN(priceValue) ||
      priceValue < 0
    ) {
      return res.status(400).json({
        message: "price must be a non-negative number"
      });
    }

    const venue = await Facility.findOne({
      name: venueName,
      isActive: true,
      approvalStatus: "APPROVED"
    });

    if (!venue) {
      return res.status(404).json({
        message: "Venue not found"
      });
    }

    const selectedCourt = await Court.findOne({
      _id: court,
      facility: venue._id,
      isActive: true
    });

    if (!selectedCourt) {
      return res.status(404).json({
        message: "Court not found for this venue"
      });
    }

    // Check whether the selected court/time is already booked
    const existingBooking = await Booking.findOne({
      court: selectedCourt._id,
      bookingDate: new Date(bookingDate),
      startTime: timeSlot,
      status: "CONFIRMED"
    });

    if (existingBooking) {
      return res.status(409).json({
        message: "Court is already booked for this time slot"
      });
    }

    /*
      TODO: Payment integration

      1. Create payment request
      2. Redirect user to payment page
      3. Confirm booking only after successful payment
    */

    const booking = await Booking.create({
      user: req.user._id,
      facility: venue._id,
      court: selectedCourt._id,
      bookingDate: new Date(bookingDate),
      startTime: timeSlot,
      pricePerHour: selectedCourt.pricePerHour,
      totalAmount: priceValue
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}