import User from "../models/User.js";
import Facility from "../models/Facility.js";
import Court from "../models/Court.js";
import Booking from "../models/Booking.js";

// GET /api/home (Role-aware dashboard)
export const getHomeDashboard = async (req, res, next) => {
  try {
    const user = req.user;
    const role = (user?.role || "USER").toUpperCase();

    if (role === "ADMIN") {
      const [totalUsers, totalOwners, totalBookings, totalCourts, pendingFacilities] = await Promise.all([
        User.countDocuments({ role: "USER" }),
        User.countDocuments({ role: "OWNER" }),
        Booking.countDocuments(),
        Court.countDocuments({ isActive: true }),
        Facility.countDocuments({ approvalStatus: "PENDING" })
      ]);

      const confirmedBookings = await Booking.find({ status: "CONFIRMED" }).select("totalAmount");
      const totalRevenue = confirmedBookings.reduce((sum, b) => sum + (b.totalAmount || 0), 0);

      return res.status(200).json({
        success: true,
        role: "ADMIN",
        totalUsers,
        totalFacilityOwners: totalOwners,
        facilityOwners: totalOwners,
        totalBookings,
        bookings: totalBookings,
        activeCourts: totalCourts,
        pendingFacilities,
        totalRevenue,
        user: {
          id: user._id,
          name: user.fullName,
          email: user.email,
          role: user.role
        }
      });
    }

    if (role === "OWNER") {
      // Find all facilities owned by this user
      const facilities = await Facility.find({ owner: user._id });
      const facilityIds = facilities.map(f => f._id);

      const [courts, bookings] = await Promise.all([
        Court.find({ facility: { $in: facilityIds }, isActive: true }),
        Booking.find({ facility: { $in: facilityIds } })
          .populate("court", "name")
          .populate("user", "fullName email phone")
          .populate("sport", "name")
          .sort({ createdAt: -1 })
      ]);

      const activeCourts = courts.length;
      const totalBookings = bookings.length;
      const confirmedBookings = bookings.filter(b => b.status === "CONFIRMED");
      const earnings = confirmedBookings.reduce((sum, b) => sum + (b.totalAmount || 0), 0);

      const bookingDatesAndTimes = bookings.map(b => ({
        bookingId: b._id,
        bookingNumber: b.bookingNumber,
        courtName: b.court?.name || "Court",
        sport: b.sport?.name || "Sport",
        date: b.bookingDate,
        startTime: b.startTime,
        endTime: b.endTime,
        status: b.status,
        amount: b.totalAmount,
        customerName: b.user?.fullName || "Guest"
      }));

      return res.status(200).json({
        success: true,
        role: "OWNER",
        totalBookings,
        activeCourts,
        earnings,
        totalEarnings: earnings,
        bookingDates: bookingDatesAndTimes,
        bookingDatesAndTimes,
        facilitiesCount: facilities.length,
        user: {
          id: user._id,
          name: user.fullName,
          email: user.email,
          role: user.role
        }
      });
    }

    // Default: Regular USER / Player
    const [myBookings, featuredVenues] = await Promise.all([
      Booking.find({ user: user._id })
        .populate("facility", "name address photos")
        .populate("court", "name")
        .populate("sport", "name")
        .sort({ startDateTime: -1 })
        .limit(5),
      Facility.find({ approvalStatus: "APPROVED", isActive: true })
        .populate("sports", "name slug")
        .limit(6)
    ]);

    const activeBookingsCount = await Booking.countDocuments({
      user: user._id,
      status: "CONFIRMED",
      endDateTime: { $gte: new Date() }
    });

    return res.status(200).json({
      success: true,
      role: "USER",
      user: {
        id: user._id,
        fullName: user.fullName,
        name: user.fullName,
        email: user.email,
        avatar: user.avatar,
        phone: user.phone,
        role: user.role
      },
      activeBookingsCount,
      recentBookings: myBookings,
      featuredVenues
    });
  } catch (error) {
    next(error);
  }
};
