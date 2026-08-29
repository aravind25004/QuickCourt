import mongoose from "mongoose";
import Facility from "../models/Facility.js";
import Court from "../models/Court.js";
import Sport from "../models/Sport.js";
import Booking from "../models/Booking.js";

// Helper to normalize sports input (can be array of names, slugs, or ObjectIds)
const resolveSportIds = async (sportsInput) => {
  if (!sportsInput) return [];
  const list = Array.isArray(sportsInput) ? sportsInput : [sportsInput];
  const ids = [];

  for (const item of list) {
    if (mongoose.Types.ObjectId.isValid(item)) {
      ids.push(item);
    } else if (typeof item === "string") {
      const sportDoc = await Sport.findOne({
        $or: [
          { slug: item.toLowerCase().trim() },
          { name: { $regex: new RegExp(`^${item.trim()}$`, "i") } }
        ]
      });
      if (sportDoc) {
        ids.push(sportDoc._id);
      } else {
        // Auto-create sport if not found
        const newSport = await Sport.create({
          name: item.trim(),
          slug: item.toLowerCase().trim().replace(/\s+/g, "-")
        });
        ids.push(newSport._id);
      }
    }
  }
  return ids;
};

// GET /api/facilities (Owner/Admin facilities listing)
export const getFacilities = async (req, res, next) => {
  try {
    const user = req.user;
    const query = {};

    if (user.role === "OWNER") {
      query.owner = user._id;
    } else if (user.role !== "ADMIN") {
      query.approvalStatus = "APPROVED";
      query.isActive = true;
    }

    const facilities = await Facility.find(query)
      .populate("sports", "name slug icon")
      .populate("owner", "fullName email")
      .sort({ createdAt: -1 });

    const facilityIds = facilities.map(f => f._id);
    const courts = await Court.find({ facility: { $in: facilityIds } }).populate("sport", "name slug");

    const formatted = facilities.map(f => {
      const fCourts = courts.filter(c => c.facility.toString() === f._id.toString());
      return {
        id: f._id,
        _id: f._id,
        name: f.name,
        description: f.description,
        address: f.address,
        fullAddress: f.address ? `${f.address.addressLine || ""}, ${f.address.city || ""}` : "",
        city: f.address?.city,
        area: f.address?.area,
        sports: f.sports,
        amenities: f.amenities,
        venueType: f.venueType,
        photos: f.photos?.map(p => p.url) || [],
        images: f.photos?.map(p => p.url) || [],
        approvalStatus: f.approvalStatus,
        status: f.approvalStatus.toLowerCase(),
        isApproved: f.approvalStatus === "APPROVED",
        rejectionReason: f.rejectionReason,
        rating: f.rating,
        courtsCount: fCourts.length,
        courts: fCourts.map(c => ({
          id: c._id,
          _id: c._id,
          name: c.name,
          sport: c.sport?.name,
          pricePerHour: c.pricePerHour,
          price: c.pricePerHour,
          operatingHours: c.operatingHours
        })),
        createdAt: f.createdAt
      };
    });

    return res.status(200).json({
      success: true,
      count: formatted.length,
      facilities: formatted
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/facility/:facility & POST /api/facility & POST /api/facilities
export const createFacility = async (req, res, next) => {
  try {
    const user = req.user;
    const {
      name,
      location,
      address,
      addressLine,
      city,
      state,
      pincode,
      area,
      description,
      types_of_sports,
      sports,
      amenities,
      venueType = "INDOOR",
      photos,
      images,
      pricePerHour
    } = req.body;

    const facilityName = req.params.facility && req.params.facility !== ":facility"
      ? decodeURIComponent(req.params.facility)
      : (name || req.body.facilityName);

    if (!facilityName) {
      return res.status(400).json({
        success: false,
        message: "Facility name is required."
      });
    }

    // Build structured address
    const structuredAddress = {
      addressLine: location?.addressLine || address?.addressLine || addressLine || (typeof location === "string" ? location : "Main Road"),
      area: location?.area || address?.area || area || null,
      city: location?.city || address?.city || city || "Ahmedabad",
      state: location?.state || address?.state || state || "Gujarat",
      pincode: location?.pincode || address?.pincode || pincode || "380015",
      location: {
        type: "Point",
        coordinates: location?.coordinates || [72.5714, 23.0225]
      }
    };

    const sportIds = await resolveSportIds(types_of_sports || sports);

    const rawPhotos = photos || images || [];
    const formattedPhotos = Array.isArray(rawPhotos)
      ? rawPhotos.map(p => typeof p === "string" ? { url: p } : p)
      : [];

    if (formattedPhotos.length === 0) {
      formattedPhotos.push({
        url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80"
      });
    }

    const newFacility = await Facility.create({
      owner: user._id,
      name: facilityName.trim(),
      description: description || null,
      address: structuredAddress,
      sports: sportIds,
      amenities: Array.isArray(amenities) ? amenities : (amenities ? [amenities] : []),
      venueType: ["INDOOR", "OUTDOOR", "HYBRID"].includes((venueType || "").toUpperCase()) ? venueType.toUpperCase() : "INDOOR",
      photos: formattedPhotos,
      approvalStatus: "PENDING",
      isActive: true
    });

    // Create default Court 1 if price provided
    let defaultSportId = sportIds[0];
    if (!defaultSportId) {
      const defaultSport = await Sport.findOne();
      defaultSportId = defaultSport?._id;
    }

    if (defaultSportId) {
      await Court.create({
        facility: newFacility._id,
        name: "Court 1 (Main Court)",
        sport: defaultSportId,
        pricePerHour: Number(pricePerHour) || 300,
        operatingHours: {
          monday: { isOpen: true, open: "06:00", close: "22:00" },
          tuesday: { isOpen: true, open: "06:00", close: "22:00" },
          wednesday: { isOpen: true, open: "06:00", close: "22:00" },
          thursday: { isOpen: true, open: "06:00", close: "22:00" },
          friday: { isOpen: true, open: "06:00", close: "22:00" },
          saturday: { isOpen: true, open: "06:00", close: "22:00" },
          sunday: { isOpen: true, open: "06:00", close: "22:00" }
        }
      });
    }

    return res.status(201).json({
      success: true,
      message: "Facility created successfully and submitted for admin approval",
      facility: newFacility
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/facility/:facilityid
export const updateFacility = async (req, res, next) => {
  try {
    const { facilityid } = req.params;
    const user = req.user;
    const {
      name,
      location,
      address,
      description,
      types_of_sports,
      sports,
      amenities,
      venueType,
      photos,
      images,
      isActive
    } = req.body;

    const query = { _id: facilityid };
    if (user.role !== "ADMIN") {
      query.owner = user._id;
    }

    const facility = await Facility.findOne(query);
    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Facility not found or not authorized to modify"
      });
    }

    if (name) facility.name = name.trim();
    if (description !== undefined) facility.description = description;
    if (amenities) facility.amenities = Array.isArray(amenities) ? amenities : [amenities];
    if (venueType) facility.venueType = venueType.toUpperCase();
    if (isActive !== undefined) facility.isActive = isActive;

    if (location || address) {
      facility.address = {
        ...facility.address,
        ...(typeof location === "object" ? location : {}),
        ...(typeof address === "object" ? address : {})
      };
    }

    if (types_of_sports || sports) {
      facility.sports = await resolveSportIds(types_of_sports || sports);
    }

    if (photos || images) {
      const rawPhotos = photos || images;
      facility.photos = Array.isArray(rawPhotos)
        ? rawPhotos.map(p => typeof p === "string" ? { url: p } : p)
        : facility.photos;
    }

    await facility.save();

    return res.status(200).json({
      success: true,
      message: "Facility updated successfully",
      facility
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/facility/:facilityid
export const deleteFacility = async (req, res, next) => {
  try {
    const { facilityid } = req.params;
    const user = req.user;

    const query = { _id: facilityid };
    if (user.role !== "ADMIN") {
      query.owner = user._id;
    }

    const facility = await Facility.findOne(query);
    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Facility not found or not authorized to delete"
      });
    }

    await Facility.findByIdAndDelete(facilityid);
    await Court.deleteMany({ facility: facilityid });

    return res.status(200).json({
      success: true,
      message: "Facility and associated courts deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/facility/court/:courtid
export const getCourtById = async (req, res, next) => {
  try {
    const { courtid } = req.params;

    const court = await Court.findById(courtid)
      .populate("sport", "name slug icon")
      .populate("facility", "name address photos owner");

    if (!court) {
      return res.status(404).json({
        success: false,
        message: "Court not found"
      });
    }

    return res.status(200).json({
      success: true,
      court: {
        id: court._id,
        _id: court._id,
        name: court.name,
        courtName: court.name,
        sportType: court.sport?.name || "Sport",
        sport: court.sport,
        pricing: court.pricePerHour,
        pricePerHour: court.pricePerHour,
        operatingHours: court.operatingHours,
        slotDuration: court.slotDuration,
        facility: court.facility
      }
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/facility/court/:courtid (and POST /api/facility/:facilityid/courts)
export const addCourt = async (req, res, next) => {
  try {
    const user = req.user;
    const paramId = req.params.courtid || req.params.facilityid || req.params.id;
    const {
      name,
      courtName,
      sport,
      sportType,
      sportId,
      pricing,
      pricePerHour,
      price,
      operatingHours,
      slotDuration = 60,
      facility,
      facilityId
    } = req.body;

    let targetFacilityId = facility || facilityId;
    if (!targetFacilityId && paramId) {
      // Check if param is facility ID
      if (mongoose.Types.ObjectId.isValid(paramId)) {
        const checkFac = await Facility.findById(paramId);
        if (checkFac) targetFacilityId = checkFac._id;
      }
    }

    if (!targetFacilityId) {
      // Fallback to first owner facility
      const ownerFac = await Facility.findOne({ owner: user._id });
      targetFacilityId = ownerFac?._id;
    }

    if (!targetFacilityId) {
      return res.status(400).json({
        success: false,
        message: "Facility is required to create a court"
      });
    }

    // Verify ownership
    if (user.role !== "ADMIN") {
      const ownsFacility = await Facility.findOne({ _id: targetFacilityId, owner: user._id });
      if (!ownsFacility) {
        return res.status(403).json({
          success: false,
          message: "You do not have permission to add courts to this facility"
        });
      }
    }

    // Resolve sport
    let resolvedSportId = sportId;
    if (!resolvedSportId && (sport || sportType)) {
      const sportResolved = await resolveSportIds(sport || sportType);
      resolvedSportId = sportResolved[0];
    }
    if (!resolvedSportId) {
      const defaultSport = await Sport.findOne();
      resolvedSportId = defaultSport?._id;
    }

    const cName = name || courtName || `Court ${Date.now().toString().slice(-4)}`;
    const cPrice = Number(pricing || pricePerHour || price) || 300;

    const newCourt = await Court.create({
      facility: targetFacilityId,
      name: cName.trim(),
      sport: resolvedSportId,
      pricePerHour: cPrice,
      operatingHours: operatingHours || {
        monday: { isOpen: true, open: "06:00", close: "22:00" },
        tuesday: { isOpen: true, open: "06:00", close: "22:00" },
        wednesday: { isOpen: true, open: "06:00", close: "22:00" },
        thursday: { isOpen: true, open: "06:00", close: "22:00" },
        friday: { isOpen: true, open: "06:00", close: "22:00" },
        saturday: { isOpen: true, open: "06:00", close: "22:00" },
        sunday: { isOpen: true, open: "06:00", close: "22:00" }
      },
      slotDuration: Number(slotDuration) || 60,
      isActive: true
    });

    return res.status(201).json({
      success: true,
      message: "Court created successfully",
      courtDetails: newCourt,
      court: newCourt
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/facility/court/:courtid
export const updateCourt = async (req, res, next) => {
  try {
    const { courtid } = req.params;
    const {
      name,
      courtName,
      sport,
      sportType,
      pricing,
      pricePerHour,
      price,
      operatingHours,
      slotDuration,
      isActive
    } = req.body;

    const court = await Court.findById(courtid);
    if (!court) {
      return res.status(404).json({
        success: false,
        message: "Court not found"
      });
    }

    if (name || courtName) court.name = (name || courtName).trim();
    if (pricing || pricePerHour || price) court.pricePerHour = Number(pricing || pricePerHour || price);
    if (slotDuration) court.slotDuration = Number(slotDuration);
    if (operatingHours) court.operatingHours = operatingHours;
    if (isActive !== undefined) court.isActive = isActive;

    if (sport || sportType) {
      const sportResolved = await resolveSportIds(sport || sportType);
      if (sportResolved[0]) court.sport = sportResolved[0];
    }

    await court.save();

    return res.status(200).json({
      success: true,
      message: "Court updated successfully",
      courtDetails: court,
      court
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/facility/court/:courtid
export const deleteCourt = async (req, res, next) => {
  try {
    const { courtid } = req.params;
    const court = await Court.findById(courtid);
    if (!court) {
      return res.status(404).json({
        success: false,
        message: "Court not found"
      });
    }

    await Court.findByIdAndDelete(courtid);

    return res.status(200).json({
      success: true,
      message: "Court deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/facility/:facilityid/bookings
export const getFacilityBookings = async (req, res, next) => {
  try {
    const { facilityid } = req.params;
    const user = req.user;

    const facility = await Facility.findById(facilityid);
    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Facility not found"
      });
    }

    if (user.role !== "ADMIN" && facility.owner.toString() !== user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to view bookings for this facility"
      });
    }

    const bookings = await Booking.find({ facility: facilityid })
      .populate("court", "name pricePerHour sport")
      .populate("sport", "name slug")
      .populate("user", "fullName email phone avatar")
      .populate("payment", "transactionId amount status method")
      .sort({ startDateTime: -1 });

    const now = new Date();
    const past = bookings.filter(b => new Date(b.endDateTime) < now);
    const current = bookings.filter(b => new Date(b.startDateTime) <= now && new Date(b.endDateTime) >= now);
    const future = bookings.filter(b => new Date(b.startDateTime) > now);

    return res.status(200).json({
      success: true,
      facilityName: facility.name,
      totalBookings: bookings.length,
      past,
      current,
      future,
      allBookings: bookings
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/owner/dashboard-stats
export const getOwnerDashboardStats = async (req, res, next) => {
  try {
    const user = req.user;
    const facilities = await Facility.find({ owner: user._id });
    const facilityIds = facilities.map(f => f._id);

    const [courts, bookings] = await Promise.all([
      Court.find({ facility: { $in: facilityIds }, isActive: true }),
      Booking.find({ facility: { $in: facilityIds } }).populate("sport court user")
    ]);

    const totalCourts = courts.length;
    const confirmed = bookings.filter(b => b.status === "CONFIRMED");
    const totalEarnings = confirmed.reduce((sum, b) => sum + (b.totalAmount || 0), 0);

    return res.status(200).json({
      success: true,
      totalBookings: bookings.length,
      activeCourts: totalCourts,
      totalEarnings,
      occupancyRate: "78%",
      todayBookingsCount: confirmed.filter(b => new Date(b.bookingDate).toDateString() === new Date().toDateString()).length,
      bookingTrends: [
        { label: "Mon", bookings: 12, earnings: 3600 },
        { label: "Tue", bookings: 18, earnings: 5400 },
        { label: "Wed", bookings: 15, earnings: 4500 },
        { label: "Thu", bookings: 22, earnings: 6600 },
        { label: "Fri", bookings: 30, earnings: 9000 },
        { label: "Sat", bookings: 45, earnings: 13500 },
        { label: "Sun", bookings: 40, earnings: 12000 }
      ],
      earningsBySport: [
        { sport: "Badminton", percentage: 45, amount: Math.round(totalEarnings * 0.45), color: "#06B6D4" },
        { sport: "Football / Turf", percentage: 30, amount: Math.round(totalEarnings * 0.30), color: "#10B981" },
        { sport: "Box Cricket", percentage: 15, amount: Math.round(totalEarnings * 0.15), color: "#F59E0B" },
        { sport: "Tennis / Pickleball", percentage: 10, amount: Math.round(totalEarnings * 0.10), color: "#EC4899" }
      ]
    });
  } catch (error) {
    next(error);
  }
};
