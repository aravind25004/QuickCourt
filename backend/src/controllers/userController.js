import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Booking from "../models/Booking.js";
import Payment from "../models/Payment.js";
import Notification from "../models/Notification.js";

// GET /api/user/me
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        _id: user._id,
        fullName: user.fullName,
        name: user.fullName,
        email: user.email,
        avatar: user.avatar,
        phone: user.phone,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        isActive: user.isActive,
        isBanned: user.isBanned,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/user/me
export const updateCurrentUser = async (req, res, next) => {
  try {
    const { fullName, name, email, avatar, phone, password, oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const nextName = fullName || name;
    if (nextName) user.fullName = nextName.trim();
    if (avatar !== undefined) user.avatar = avatar;
    if (phone !== undefined) user.phone = phone;

    if (email && email.toLowerCase().trim() !== user.email) {
      const normalizedEmail = email.toLowerCase().trim();
      const existing = await User.findOne({ email: normalizedEmail, _id: { $ne: user._id } });
      if (existing) {
        return res.status(409).json({
          success: false,
          message: "Email is already taken by another account."
        });
      }
      user.email = normalizedEmail;
    }

    const passwordToSet = newPassword || password;
    if (passwordToSet) {
      if (oldPassword) {
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
          return res.status(400).json({
            success: false,
            message: "Current password does not match."
          });
        }
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(passwordToSet, salt);
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: user._id,
        _id: user._id,
        fullName: user.fullName,
        name: user.fullName,
        email: user.email,
        avatar: user.avatar,
        phone: user.phone,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/user/mybookings?date=&status=
export const getMyBookings = async (req, res, next) => {
  try {
    const { date, status } = req.query;
    const user = req.user;
    const query = {};

    // If regular user or owner, filter by user; if admin, can view all bookings if requested
    if (user.role !== "ADMIN") {
      query.user = user._id;
    }

    if (status) {
      query.status = status.toUpperCase();
    }

    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      query.bookingDate = { $gte: startOfDay, $lte: endOfDay };
    }

    const bookings = await Booking.find(query)
      .populate("facility", "name address photos description venueType")
      .populate("court", "name pricePerHour sport")
      .populate("sport", "name slug icon")
      .populate("user", "fullName email phone avatar")
      .populate("payment", "transactionId amount method status")
      .sort({ createdAt: -1 });

    const formattedBookings = bookings.map(b => {
      const isPast = new Date(b.endDateTime) < new Date();
      const canCancel = b.status === "CONFIRMED" && !isPast;

      return {
        id: b._id,
        _id: b._id,
        bookingNumber: b.bookingNumber,
        venueName: b.facility?.name || "Facility",
        facilityId: b.facility?._id,
        facility: b.facility,
        sportType: b.sport?.name || "Sport",
        sport: b.sport,
        courtName: b.court?.name || "Court",
        court: b.court,
        date: b.bookingDate,
        bookingDate: b.bookingDate,
        startTime: b.startTime,
        endTime: b.endTime,
        startDateTime: b.startDateTime,
        endDateTime: b.endDateTime,
        duration: b.duration,
        pricePerHour: b.pricePerHour,
        subtotal: b.subtotal,
        taxes: b.taxes,
        totalAmount: b.totalAmount,
        amount: b.totalAmount,
        status: b.status,
        action: canCancel ? "CANCEL" : "VIEW",
        canCancel,
        cancellationReason: b.cancellationReason,
        payment: b.payment,
        customer: b.user ? {
          id: b.user._id,
          name: b.user.fullName,
          email: b.user.email,
          phone: b.user.phone
        } : null,
        createdAt: b.createdAt
      };
    });

    return res.status(200).json({
      success: true,
      count: formattedBookings.length,
      bookings: formattedBookings
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/user/mybookings/:bookingid
export const getBookingById = async (req, res, next) => {
  try {
    const { bookingid } = req.params;
    const user = req.user;

    const query = { _id: bookingid };
    if (user.role !== "ADMIN") {
      query.user = user._id;
    }

    const b = await Booking.findOne(query)
      .populate("facility", "name address photos description venueType owner")
      .populate("court", "name pricePerHour sport operatingHours")
      .populate("sport", "name slug icon")
      .populate("user", "fullName email phone avatar")
      .populate("payment", "transactionId amount method status paidAt");

    if (!b) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    const isPast = new Date(b.endDateTime) < new Date();
    const canCancel = b.status === "CONFIRMED" && !isPast;

    return res.status(200).json({
      success: true,
      booking: {
        id: b._id,
        _id: b._id,
        bookingNumber: b.bookingNumber,
        venueName: b.facility?.name || "Facility",
        facility: b.facility,
        sportType: b.sport?.name || "Sport",
        sport: b.sport,
        courtName: b.court?.name || "Court",
        court: b.court,
        date: b.bookingDate,
        bookingDate: b.bookingDate,
        startTime: b.startTime,
        endTime: b.endTime,
        startDateTime: b.startDateTime,
        endDateTime: b.endDateTime,
        duration: b.duration,
        pricePerHour: b.pricePerHour,
        subtotal: b.subtotal,
        taxes: b.taxes,
        totalAmount: b.totalAmount,
        status: b.status,
        action: canCancel ? "CANCEL" : "VIEW",
        canCancel,
        cancellationReason: b.cancellationReason,
        cancelledAt: b.cancelledAt,
        payment: b.payment,
        customer: b.user ? {
          id: b.user._id,
          name: b.user.fullName,
          email: b.user.email,
          phone: b.user.phone
        } : null,
        createdAt: b.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/user/mybookings/:bookingid/cancel & POST /api/bookings/:id/cancel
export const cancelBooking = async (req, res, next) => {
  try {
    const bookingId = req.params.bookingid || req.params.id;
    const { reason } = req.body;
    const user = req.user;

    const query = { _id: bookingId };
    if (user.role !== "ADMIN") {
      query.user = user._id;
    }

    const booking = await Booking.findOne(query).populate("facility court");
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    if (booking.status === "CANCELLED") {
      return res.status(400).json({
        success: false,
        message: "Booking is already cancelled"
      });
    }

    booking.status = "CANCELLED";
    booking.cancellationReason = reason || "Cancelled by user";
    booking.cancelledAt = new Date();
    booking.cancelledBy = user._id;
    await booking.save();

    // Update payment status to REFUNDED if payment exists
    if (booking.payment) {
      await Payment.findByIdAndUpdate(booking.payment, { status: "REFUNDED" });
    }

    // Create notification
    await Notification.create({
      recipient: booking.user,
      type: "BOOKING_CANCELLED",
      title: "Booking Cancelled",
      message: `Your booking #${booking.bookingNumber} for ${booking.facility?.name || "Court"} has been cancelled.`,
      referenceType: "Booking",
      referenceId: booking._id
    });

    return res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      bookingId: booking._id,
      status: "CANCELLED"
    });
  } catch (error) {
    next(error);
  }
};
