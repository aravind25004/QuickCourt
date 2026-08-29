import mongoose from "mongoose";
import Facility from "../models/Facility.js";
import Court from "../models/Court.js";
import Sport from "../models/Sport.js";
import Booking from "../models/Booking.js";
import BlockedSlot from "../models/BlockedSlot.js";
import Payment from "../models/Payment.js";
import Review from "../models/Review.js";
import Notification from "../models/Notification.js";

// Helper to format facility output matching frontend and spec expectations
const formatFacility = (f, courts = [], reviews = []) => {
  const minPrice = courts.length > 0
    ? Math.min(...courts.map(c => c.pricePerHour || 300))
    : 300;

  return {
    id: f._id,
    _id: f._id,
    name: f.name,
    description: f.description,
    about: f.description,
    address: f.address,
    fullAddress: f.address ? `${f.address.addressLine || ""}, ${f.address.area || ""}, ${f.address.city || ""}`.replace(/^, |, $/g, "") : "",
    city: f.address?.city || "",
    area: f.address?.area || "",
    sports: f.sports || [],
    amenities: f.amenities || [],
    venueType: (f.venueType || "INDOOR").toLowerCase(),
    photos: f.photos?.map(p => p.url) || [],
    images: f.photos?.map(p => p.url) || [],
    rating: f.rating?.average || 0,
    reviewsCount: f.rating?.count || reviews.length,
    reviews: reviews.map(r => ({
      id: r._id,
      userName: r.user?.fullName || "Anonymous Player",
      userAvatar: r.user?.avatar || null,
      rating: r.rating,
      comment: r.comment,
      createdAt: r.createdAt
    })),
    pricePerHour: minPrice,
    courts: courts.map(c => ({
      id: c._id,
      _id: c._id,
      name: c.name,
      sport: c.sport,
      pricePerHour: c.pricePerHour,
      price: c.pricePerHour,
      slotDuration: c.slotDuration,
      operatingHours: c.operatingHours
    })),
    approvalStatus: f.approvalStatus,
    status: (f.approvalStatus || "PENDING").toLowerCase(),
    owner: f.owner,
    isActive: f.isActive,
    createdAt: f.createdAt
  };
};

// GET /api/venues & GET /api/venues?offset=&limit=
export const getVenues = async (req, res, next) => {
  try {
    const {
      offset = 0,
      limit = 20,
      page,
      sport_type,
      price,
      venue_type,
      rating,
      city,
      search,
      status
    } = req.query;

    const query = {};

    // For public players: only show approved & active venues
    const user = req.user;
    if (!user || user.role === "USER") {
      query.approvalStatus = "APPROVED";
      query.isActive = true;
    } else if (status) {
      query.approvalStatus = status.toUpperCase();
    }

    if (city) {
      query["address.city"] = { $regex: new RegExp(`^${city}$`, "i") };
    }

    if (venue_type) {
      query.venueType = venue_type.toUpperCase();
    }

    if (rating) {
      query["rating.average"] = { $gte: parseFloat(rating) };
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { "address.area": { $regex: search, $options: "i" } },
        { "address.city": { $regex: search, $options: "i" } }
      ];
    }

    // Filter by sport if given
    if (sport_type) {
      const sportDoc = await Sport.findOne({
        $or: [
          { slug: sport_type.toLowerCase() },
          { name: { $regex: sport_type, $options: "i" } }
        ]
      });
      if (sportDoc) {
        query.sports = sportDoc._id;
      }
    }

    const skipCount = page ? (parseInt(page) - 1) * parseInt(limit) : parseInt(offset);
    const takeCount = parseInt(limit);

    const [facilities, total] = await Promise.all([
      Facility.find(query)
        .populate("sports", "name slug icon")
        .populate("owner", "fullName email")
        .skip(skipCount)
        .limit(takeCount)
        .sort({ createdAt: -1 }),
      Facility.countDocuments(query)
    ]);

    const facilityIds = facilities.map(f => f._id);
    const allCourts = await Court.find({ facility: { $in: facilityIds }, isActive: true }).populate("sport", "name slug icon");

    let formatted = facilities.map(f => {
      const courts = allCourts.filter(c => c.facility.toString() === f._id.toString());
      return formatFacility(f, courts);
    });

    // Optional price filter
    if (price) {
      const maxPrice = parseFloat(price);
      formatted = formatted.filter(f => f.pricePerHour <= maxPrice);
    }

    return res.status(200).json({
      success: true,
      total,
      offset: skipCount,
      limit: takeCount,
      count: formatted.length,
      venues: formatted
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/venues/venue?sport_type=&price=&venue_type=&rating=
export const filterVenues = async (req, res, next) => {
  return getVenues(req, res, next);
};

// GET /api/venues/:venuename
export const getVenueByNameOrId = async (req, res, next) => {
  try {
    const { venuename } = req.params;

    let facility = null;
    if (mongoose.Types.ObjectId.isValid(venuename)) {
      facility = await Facility.findById(venuename)
        .populate("sports", "name slug icon")
        .populate("owner", "fullName email phone");
    }

    if (!facility) {
      const regexName = venuename.replace(/-/g, ".*");
      facility = await Facility.findOne({
        name: { $regex: new RegExp(regexName, "i") }
      })
        .populate("sports", "name slug icon")
        .populate("owner", "fullName email phone");
    }

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: `Venue '${venuename}' not found`
      });
    }

    const [courts, reviews] = await Promise.all([
      Court.find({ facility: facility._id, isActive: true }).populate("sport", "name slug icon"),
      Review.find({ facility: facility._id, isVisible: true }).populate("user", "fullName avatar").sort({ createdAt: -1 })
    ]);

    const formatted = formatFacility(facility, courts, reviews);

    return res.status(200).json({
      success: true,
      venue: formatted,
      name: formatted.name,
      desc: formatted.description,
      description: formatted.description,
      address: formatted.address,
      sports: formatted.sports,
      amenities: formatted.amenities,
      about: formatted.about,
      photos: formatted.photos,
      reviews: formatted.reviews,
      courts: formatted.courts,
      rating: formatted.rating
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/venues/:venuename/book
export const checkAuthAndInitiateBooking = async (req, res, next) => {
  try {
    const { venuename } = req.params;
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required to book a venue",
        redirect: "/login"
      });
    }

    let facility = null;
    if (mongoose.Types.ObjectId.isValid(venuename)) {
      facility = await Facility.findById(venuename);
    } else {
      const regexName = venuename.replace(/-/g, ".*");
      facility = await Facility.findOne({ name: { $regex: new RegExp(regexName, "i") } });
    }

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Venue not found"
      });
    }

    const courts = await Court.find({ facility: facility._id, isActive: true }).populate("sport", "name slug");

    return res.status(200).json({
      success: true,
      authenticated: true,
      message: "Authorized for booking",
      user: {
        id: user._id,
        name: user.fullName,
        email: user.email
      },
      venue: {
        id: facility._id,
        name: facility.name,
        address: facility.address
      },
      courts,
      redirect: `/booking/${facility._id}`
    });
  } catch (error) {
    next(error);
  }
};

// Standard slot intervals
const DEFAULT_TIME_SLOTS = [
  { startTime: "06:00", endTime: "07:00", label: "06:00 AM - 07:00 AM" },
  { startTime: "07:00", endTime: "08:00", label: "07:00 AM - 08:00 AM" },
  { startTime: "08:00", endTime: "09:00", label: "08:00 AM - 09:00 AM" },
  { startTime: "09:00", endTime: "10:00", label: "09:00 AM - 10:00 AM" },
  { startTime: "10:00", endTime: "11:00", label: "10:00 AM - 11:00 AM" },
  { startTime: "11:00", endTime: "12:00", label: "11:00 AM - 12:00 PM" },
  { startTime: "12:00", endTime: "13:00", label: "12:00 PM - 01:00 PM" },
  { startTime: "13:00", endTime: "14:00", label: "01:00 PM - 02:00 PM" },
  { startTime: "14:00", endTime: "15:00", label: "02:00 PM - 03:00 PM" },
  { startTime: "15:00", endTime: "16:00", label: "03:00 PM - 04:00 PM" },
  { startTime: "16:00", endTime: "17:00", label: "04:00 PM - 05:00 PM" },
  { startTime: "17:00", endTime: "18:00", label: "05:00 PM - 06:00 PM" },
  { startTime: "18:00", endTime: "19:00", label: "06:00 PM - 07:00 PM" },
  { startTime: "19:00", endTime: "20:00", label: "07:00 PM - 08:00 PM" },
  { startTime: "20:00", endTime: "21:00", label: "08:00 PM - 09:00 PM" },
  { startTime: "21:00", endTime: "22:00", label: "09:00 PM - 10:00 PM" }
];

// GET /api/venues/booking
export const getVenueBookingAvailability = async (req, res, next) => {
  try {
    const { venue_name, venuename, venueId, date, courtId } = req.query;

    const targetVenue = venue_name || venuename || venueId;
    if (!targetVenue) {
      return res.status(400).json({
        success: false,
        message: "Venue identifier (venue_name or venueId) is required."
      });
    }

    let facility = null;
    if (mongoose.Types.ObjectId.isValid(targetVenue)) {
      facility = await Facility.findById(targetVenue);
    } else {
      const regexName = targetVenue.replace(/-/g, ".*");
      facility = await Facility.findOne({ name: { $regex: new RegExp(regexName, "i") } });
    }

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Venue not found"
      });
    }

    const courtQuery = { facility: facility._id, isActive: true };
    if (courtId && mongoose.Types.ObjectId.isValid(courtId)) {
      courtQuery._id = courtId;
    }

    const courts = await Court.find(courtQuery).populate("sport", "name slug icon");

    const targetDate = date ? new Date(date) : new Date();
    const startOfDay = new Date(targetDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(targetDate);
    endOfDay.setHours(23, 59, 59, 999);

    const courtIds = courts.map(c => c._id);

    const [existingBookings, blockedSlots] = await Promise.all([
      Booking.find({
        facility: facility._id,
        court: { $in: courtIds },
        bookingDate: { $gte: startOfDay, $lte: endOfDay },
        status: "CONFIRMED"
      }),
      BlockedSlot.find({
        facility: facility._id,
        court: { $in: courtIds },
        date: { $gte: startOfDay, $lte: endOfDay }
      })
    ]);

    // Calculate slot availability
    const slotsAvailability = DEFAULT_TIME_SLOTS.map(slot => {
      const availableCourts = courts.filter(court => {
        const isBooked = existingBookings.some(b =>
          b.court.toString() === court._id.toString() &&
          (b.startTime === slot.startTime || b.startTime === slot.label)
        );
        const isBlocked = blockedSlots.some(blk =>
          blk.court.toString() === court._id.toString() &&
          (blk.startTime === slot.startTime || blk.startTime === slot.label)
        );
        return !isBooked && !isBlocked;
      });

      return {
        slot: slot.label,
        startTime: slot.startTime,
        endTime: slot.endTime,
        isAvailable: availableCourts.length > 0,
        availableCourtsCount: availableCourts.length,
        availableCourts: availableCourts.map(c => ({
          id: c._id,
          name: c.name,
          sport: c.sport?.name,
          pricePerHour: c.pricePerHour
        })),
        price: availableCourts[0]?.pricePerHour || (courts[0]?.pricePerHour || 300)
      };
    });

    return res.status(200).json({
      success: true,
      venueName: facility.name,
      facilityId: facility._id,
      date: startOfDay.toISOString().split("T")[0],
      availableCourts: courts.map(c => ({
        id: c._id,
        name: c.name,
        sport: c.sport?.name,
        pricePerHour: c.pricePerHour
      })),
      timeSlotsAvailability: slotsAvailability,
      price: courts[0]?.pricePerHour || 300
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/venues/booking (and /api/bookings)
export const createBooking = async (req, res, next) => {
  try {
    const user = req.user;
    const {
      venue_name,
      venuename,
      venueId,
      facilityId,
      time_slot,
      timeSlot,
      slot,
      court,
      courtId,
      courtName,
      price,
      amount,
      date,
      bookingDate,
      duration = 1,
      paymentMethod = "MOCK"
    } = req.body;

    // Resolve Facility
    let facility = null;
    const targetFacilityId = facilityId || venueId;
    if (targetFacilityId && mongoose.Types.ObjectId.isValid(targetFacilityId)) {
      facility = await Facility.findById(targetFacilityId);
    } else {
      const vName = venue_name || venuename;
      if (vName) {
        const regexName = vName.replace(/-/g, ".*");
        facility = await Facility.findOne({ name: { $regex: new RegExp(regexName, "i") } });
      }
    }

    if (!facility) {
      return res.status(400).json({
        success: false,
        message: "Facility / Venue is required and could not be resolved."
      });
    }

    // Resolve Court
    let targetCourt = null;
    const resolvedCourtId = courtId || (mongoose.Types.ObjectId.isValid(court) ? court : null);
    if (resolvedCourtId) {
      targetCourt = await Court.findById(resolvedCourtId).populate("sport");
    } else if (courtName || court) {
      const cName = courtName || court;
      targetCourt = await Court.findOne({
        facility: facility._id,
        name: { $regex: new RegExp(cName, "i") }
      }).populate("sport");
    }

    if (!targetCourt) {
      targetCourt = await Court.findOne({ facility: facility._id, isActive: true }).populate("sport");
    }

    if (!targetCourt) {
      return res.status(400).json({
        success: false,
        message: "No active court found for this venue."
      });
    }

    // Resolve Sport
    let sportId = targetCourt.sport?._id || targetCourt.sport;
    if (!sportId && facility.sports?.length > 0) {
      sportId = facility.sports[0];
    }
    if (!sportId) {
      const defaultSport = await Sport.findOne();
      sportId = defaultSport?._id;
    }

    // Parse date & time slot
    const targetDate = date || bookingDate || new Date().toISOString().split("T")[0];
    const bDate = new Date(targetDate);
    bDate.setHours(0, 0, 0, 0);

    const rawSlot = time_slot || timeSlot || slot || "06:00 AM - 07:00 AM";
    let startTime = "06:00";
    let endTime = "07:00";

    const slotMatch = rawSlot.match(/(\d{1,2}:\d{2}\s*(?:AM|PM)?)\s*-\s*(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i);
    if (slotMatch) {
      startTime = slotMatch[1].trim();
      endTime = slotMatch[2].trim();
    } else {
      startTime = rawSlot;
    }

    const startDateTime = new Date(bDate);
    const endDateTime = new Date(bDate);
    endDateTime.setHours(endDateTime.getHours() + (Number(duration) || 1));

    // Pricing calculation
    const pricePerHour = Number(price) || targetCourt.pricePerHour || 300;
    const dur = Number(duration) || 1;
    const subtotal = Number(amount) || (pricePerHour * dur);
    const taxes = +(subtotal * 0.18).toFixed(2);
    const totalAmount = subtotal + taxes;

    // Check for double booking
    const conflict = await Booking.findOne({
      court: targetCourt._id,
      bookingDate: bDate,
      startTime,
      status: "CONFIRMED"
    });

    if (conflict) {
      return res.status(409).json({
        success: false,
        message: `Court '${targetCourt.name}' is already booked for this time slot on this date.`
      });
    }

    // Generate unique booking number
    const bookingNumber = `QC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const newBooking = await Booking.create({
      bookingNumber,
      user: user._id,
      facility: facility._id,
      court: targetCourt._id,
      sport: sportId,
      bookingDate: bDate,
      startTime: rawSlot,
      endTime,
      startDateTime,
      endDateTime,
      duration: dur,
      pricePerHour,
      subtotal,
      taxes,
      totalAmount,
      status: "CONFIRMED"
    });

    // Create Payment record
    const transactionId = `TXN-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const payment = await Payment.create({
      booking: newBooking._id,
      user: user._id,
      transactionId,
      amount: totalAmount,
      currency: "INR",
      method: ["CARD", "UPI", "NET_BANKING", "MOCK"].includes(paymentMethod.toUpperCase()) ? paymentMethod.toUpperCase() : "MOCK",
      status: "SUCCESS",
      paidAt: new Date()
    });

    newBooking.payment = payment._id;
    await newBooking.save();

    // Create In-App Notification
    await Notification.create({
      recipient: user._id,
      type: "BOOKING_CONFIRMED",
      title: "Booking Confirmed!",
      message: `Your booking #${bookingNumber} for ${targetCourt.name} at ${facility.name} is confirmed.`,
      referenceType: "Booking",
      referenceId: newBooking._id
    });

    return res.status(201).json({
      success: true,
      message: "Booking confirmed successfully",
      paymentStatus: "SUCCESS",
      transactionId,
      bookingNumber,
      booking: {
        id: newBooking._id,
        _id: newBooking._id,
        bookingNumber: newBooking.bookingNumber,
        venueName: facility.name,
        courtName: targetCourt.name,
        date: targetDate,
        timeSlot: rawSlot,
        totalAmount,
        status: newBooking.status,
        payment: {
          transactionId,
          amount: totalAmount,
          status: "SUCCESS"
        }
      },
      paymentRedirectionUrl: `/booking-success?bookingId=${newBooking._id}`,
      redirectionToBookingsPage: "/bookings"
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/venues/:id/reviews
export const addVenueReview = async (req, res, next) => {
  try {
    const venueId = req.params.id || req.params.venuename;
    const { rating, comment, bookingId } = req.body;
    const user = req.user;

    let facility = null;
    if (mongoose.Types.ObjectId.isValid(venueId)) {
      facility = await Facility.findById(venueId);
    } else {
      facility = await Facility.findOne({ name: { $regex: new RegExp(venueId.replace(/-/g, ".*"), "i") } });
    }

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Venue not found"
      });
    }

    let bId = bookingId;
    if (!bId) {
      // Find a confirmed booking by this user for this venue
      const lastBooking = await Booking.findOne({ user: user._id, facility: facility._id });
      bId = lastBooking?._id || new mongoose.Types.ObjectId();
    }

    const review = await Review.create({
      user: user._id,
      facility: facility._id,
      booking: bId,
      rating: Math.min(5, Math.max(1, Number(rating) || 5)),
      comment: comment || null,
      isVisible: true
    });

    // Recalculate facility average rating
    const allReviews = await Review.find({ facility: facility._id, isVisible: true });
    const count = allReviews.length;
    const average = +(allReviews.reduce((sum, r) => sum + r.rating, 0) / count).toFixed(1);

    facility.rating = { average, count };
    await facility.save();

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      review: {
        id: review._id,
        userName: user.fullName,
        rating: review.rating,
        comment: review.comment,
        date: review.createdAt
      },
      facilityRating: facility.rating
    });
  } catch (error) {
    next(error);
  }
};
