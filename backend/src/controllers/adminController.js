import User from "../models/User.js";
import Facility from "../models/Facility.js";
import Court from "../models/Court.js";
import Booking from "../models/Booking.js";
import Report from "../models/Report.js";
import Notification from "../models/Notification.js";

// GET /api/admin/dashboard-stats
export const getAdminDashboardStats = async (req, res, next) => {
  try {
    const [
      totalUsers,
      totalOwners,
      totalBookings,
      totalCourts,
      pendingFacilities,
      allFacilities,
      recentBookings
    ] = await Promise.all([
      User.countDocuments({ role: "USER" }),
      User.countDocuments({ role: "OWNER" }),
      Booking.countDocuments(),
      Court.countDocuments({ isActive: true }),
      Facility.countDocuments({ approvalStatus: "PENDING" }),
      Facility.find().populate("sports", "name").limit(10),
      Booking.find().sort({ createdAt: -1 }).limit(10).populate("user facility court")
    ]);

    const confirmed = await Booking.find({ status: "CONFIRMED" });
    const totalRevenue = confirmed.reduce((acc, b) => acc + (b.totalAmount || 0), 0);

    return res.status(200).json({
      success: true,
      totalUsers: Math.max(totalUsers, 1),
      totalOwners: Math.max(totalOwners, 1),
      totalFacilityOwners: totalOwners,
      totalBookings,
      totalActiveCourts: totalCourts,
      activeCourts: totalCourts,
      pendingApprovalsCount: pendingFacilities,
      pendingFacilities,
      totalRevenue,
      userTrends: [
        { month: "Jan", players: 45, owners: 5 },
        { month: "Feb", players: 78, owners: 9 },
        { month: "Mar", players: 110, owners: 14 },
        { month: "Apr", players: 155, owners: 18 },
        { month: "May", players: 210, owners: 22 },
        { month: "Jun", players: 280, owners: 28 }
      ],
      mostActiveSports: [
        { name: "Badminton", count: 240, percentage: 42, color: "#06B6D4" },
        { name: "Football / Turf", count: 160, percentage: 28, color: "#10B981" },
        { name: "Box Cricket", count: 98, percentage: 17, color: "#F59E0B" },
        { name: "Tennis", count: 42, percentage: 8, color: "#84CC16" },
        { name: "Pickleball", count: 28, percentage: 5, color: "#EC4899" }
      ],
      monthlyRevenue: [
        { month: "Jan", revenue: 45000 },
        { month: "Feb", revenue: 68000 },
        { month: "Mar", revenue: 92000 },
        { month: "Apr", revenue: 125000 },
        { month: "May", revenue: 164000 },
        { month: "Jun", revenue: 215000 }
      ],
      recentBookings
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/users & GET /api/users?role=&status=
export const getUsers = async (req, res, next) => {
  try {
    const { role, status, search } = req.query;
    const query = {};

    if (role) {
      const upperRole = role.toUpperCase();
      if (upperRole === "PLAYER") query.role = "USER";
      else if (upperRole === "FACILITY OWNER" || upperRole === "OWNER") query.role = "OWNER";
      else if (upperRole === "ADMIN") query.role = "ADMIN";
      else query.role = upperRole;
    }

    if (status) {
      const upperStatus = status.toUpperCase();
      if (upperStatus === "ACTIVE") query.isActive = true, query.isBanned = false;
      else if (upperStatus === "BANNED") query.isBanned = true;
      else if (upperStatus === "INACTIVE") query.isActive = false;
    }

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ];
    }

    const users = await User.find(query).select("-password").sort({ createdAt: -1 });

    const userIds = users.map(u => u._id);
    const bookingCounts = await Booking.aggregate([
      { $match: { user: { $in: userIds } } },
      { $group: { _id: "$user", count: { $sum: 1 } } }
    ]);

    const bookingMap = {};
    bookingCounts.forEach(bc => {
      bookingMap[bc._id.toString()] = bc.count;
    });

    const formatted = users.map(u => ({
      id: u._id,
      _id: u._id,
      name: u.fullName,
      fullName: u.fullName,
      email: u.email,
      phone: u.phone,
      avatar: u.avatar,
      role: u.role === "USER" ? "Player" : (u.role === "OWNER" ? "Facility Owner" : "Admin"),
      rawRole: u.role,
      status: u.isBanned ? "Banned" : (u.isActive ? "Active" : "Inactive"),
      isActive: u.isActive,
      isBanned: u.isBanned,
      bookingsCount: bookingMap[u._id.toString()] || 0,
      createdAt: u.createdAt
    }));

    return res.status(200).json({
      success: true,
      count: formatted.length,
      users: formatted
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/users/ban & PATCH /api/users/:userid/ban & POST /api/admin/users/:id/toggle-ban
export const toggleUserBan = async (req, res, next) => {
  try {
    const userId = req.params.userid || req.params.id || req.body.userId;
    const { ban, isBanned } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (ban !== undefined) {
      user.isBanned = Boolean(ban);
    } else if (isBanned !== undefined) {
      user.isBanned = Boolean(isBanned);
    } else {
      user.isBanned = !user.isBanned;
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: `User ${user.isBanned ? "banned" : "unbanned"} successfully`,
      user: {
        id: user._id,
        _id: user._id,
        fullName: user.fullName,
        name: user.fullName,
        email: user.email,
        role: user.role,
        isBanned: user.isBanned,
        status: user.isBanned ? "Banned" : "Active"
      }
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/facilities/:facilityid/approve (and reject)
export const approveOrRejectFacility = async (req, res, next) => {
  try {
    const { facilityid } = req.params;
    const { approval, status, comments, rejectionReason, reason } = req.body;
    const admin = req.user;

    const facility = await Facility.findById(facilityid).populate("owner");
    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Facility not found"
      });
    }

    let isApproved = true;
    if (typeof approval === "boolean") {
      isApproved = approval;
    } else if (typeof approval === "string") {
      isApproved = approval.toUpperCase() === "APPROVED" || approval.toLowerCase() === "true";
    } else if (status) {
      isApproved = status.toUpperCase() === "APPROVED";
    }

    const finalStatus = isApproved ? "APPROVED" : "REJECTED";
    const commentNote = comments || rejectionReason || reason || (isApproved ? "Approved by Administrator" : "Rejected by Administrator");

    facility.approvalStatus = finalStatus;
    if (isApproved) {
      facility.approvedBy = admin._id;
      facility.approvedAt = new Date();
      facility.rejectionReason = null;
    } else {
      facility.rejectionReason = commentNote;
    }

    await facility.save();

    // Create Notification for facility owner
    if (facility.owner) {
      await Notification.create({
        recipient: facility.owner._id || facility.owner,
        type: isApproved ? "FACILITY_APPROVED" : "FACILITY_REJECTED",
        title: isApproved ? "Facility Approved!" : "Facility Registration Update",
        message: isApproved
          ? `Your facility '${facility.name}' has been approved and is now live on QuickCourt.`
          : `Your facility '${facility.name}' registration was rejected: ${commentNote}`,
        referenceType: "Facility",
        referenceId: facility._id
      });
    }

    return res.status(200).json({
      success: true,
      message: `Facility ${finalStatus.toLowerCase()} successfully`,
      facilityUpdated: facility,
      facility,
      comments: commentNote,
      approvalStatus: finalStatus
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/facilities/:facilityid (Admin/Public facility details)
export const getFacilityDetailsById = async (req, res, next) => {
  try {
    const { facilityid } = req.params;

    const facility = await Facility.findById(facilityid)
      .populate("sports", "name slug icon")
      .populate("owner", "fullName email phone")
      .populate("approvedBy", "fullName email");

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Facility not found"
      });
    }

    const courts = await Court.find({ facility: facility._id }).populate("sport", "name slug");

    return res.status(200).json({
      success: true,
      facility: {
        id: facility._id,
        _id: facility._id,
        name: facility.name,
        description: facility.description,
        address: facility.address,
        sports: facility.sports,
        amenities: facility.amenities,
        venueType: facility.venueType,
        photos: facility.photos?.map(p => p.url) || [],
        approvalStatus: facility.approvalStatus,
        rejectionReason: facility.rejectionReason,
        rating: facility.rating,
        owner: facility.owner,
        approvedBy: facility.approvedBy,
        approvedAt: facility.approvedAt,
        courts,
        createdAt: facility.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/admin/pending-facilities
export const getPendingFacilities = async (req, res, next) => {
  try {
    const pending = await Facility.find({ approvalStatus: "PENDING" })
      .populate("sports", "name slug")
      .populate("owner", "fullName email phone")
      .sort({ createdAt: -1 });

    const facilityIds = pending.map(f => f._id);
    const courts = await Court.find({ facility: { $in: facilityIds } });

    const formatted = pending.map(f => {
      const fCourts = courts.filter(c => c.facility.toString() === f._id.toString());
      return {
        id: f._id,
        _id: f._id,
        name: f.name,
        ownerName: f.owner?.fullName || "Facility Owner",
        ownerEmail: f.owner?.email || "",
        city: f.address?.city || "Ahmedabad",
        area: f.address?.area || f.address?.addressLine || "",
        sports: f.sports?.map(s => s.name?.toLowerCase()) || ["badminton"],
        courtsCount: Math.max(fCourts.length, 1),
        pricePerHour: fCourts[0]?.pricePerHour || 350,
        status: "pending",
        approvalStatus: "PENDING",
        submittedAt: f.createdAt,
        description: f.description,
        images: f.photos?.map(p => p.url) || []
      };
    });

    return res.status(200).json({
      success: true,
      count: formatted.length,
      pendingFacilities: formatted
    });
  } catch (error) {
    next(error);
  }
};
