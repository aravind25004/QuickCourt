import BlockedSlot from "../models/BlockedSlot.js";
import Court from "../models/Court.js";
import Facility from "../models/Facility.js";

// GET /api/venues/:venueId/blocked-slots & GET /api/courts/blocked-slots
export const getBlockedSlots = async (req, res, next) => {
  try {
    const { venueId, facilityId, courtId, date } = req.query;
    const vId = req.params.venueId || venueId || facilityId;

    const query = {};
    if (vId) query.facility = vId;
    if (courtId) query.court = courtId;
    if (date) {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      const dEnd = new Date(date);
      dEnd.setHours(23, 59, 59, 999);
      query.date = { $gte: d, $lte: dEnd };
    }

    const slots = await BlockedSlot.find(query)
      .populate("court", "name")
      .populate("facility", "name")
      .sort({ date: 1 });

    const formatted = slots.map(s => ({
      id: s._id,
      _id: s._id,
      venueId: s.facility?._id || s.facility,
      facilityId: s.facility?._id || s.facility,
      courtId: s.court?._id || s.court,
      courtName: s.court?.name || "Court",
      date: s.date?.toISOString().split("T")[0],
      startTime: s.startTime,
      endTime: s.endTime,
      timeSlot: `${s.startTime} - ${s.endTime}`,
      reason: s.reason
    }));

    return res.status(200).json({
      success: true,
      count: formatted.length,
      blockedSlots: formatted
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/courts/block-slot
export const blockSlot = async (req, res, next) => {
  try {
    const user = req.user;
    const {
      venueId,
      facilityId,
      courtId,
      date,
      startTime,
      endTime,
      timeSlot,
      reason
    } = req.body;

    let targetCourtId = courtId;
    let targetFacilityId = facilityId || venueId;

    if (targetCourtId) {
      const court = await Court.findById(targetCourtId);
      if (court) targetFacilityId = court.facility;
    } else if (targetFacilityId) {
      const firstCourt = await Court.findOne({ facility: targetFacilityId });
      targetCourtId = firstCourt?._id;
    }

    if (!targetCourtId || !targetFacilityId) {
      return res.status(400).json({
        success: false,
        message: "Court and Facility are required to block a slot"
      });
    }

    const targetDate = date ? new Date(date) : new Date();
    targetDate.setHours(0, 0, 0, 0);

    let start = startTime || "10:00";
    let end = endTime || "11:00";
    if (timeSlot) {
      const parts = timeSlot.split("-");
      if (parts.length === 2) {
        start = parts[0].trim();
        end = parts[1].trim();
      }
    }

    const blocked = await BlockedSlot.create({
      facility: targetFacilityId,
      court: targetCourtId,
      date: targetDate,
      startTime: start,
      endTime: end,
      reason: reason || "Maintenance",
      blockedBy: user._id
    });

    return res.status(201).json({
      success: true,
      message: "Slot blocked successfully",
      blockedSlot: {
        id: blocked._id,
        _id: blocked._id,
        venueId: targetFacilityId,
        courtId: targetCourtId,
        date: targetDate.toISOString().split("T")[0],
        timeSlot: `${start} - ${end}`,
        reason: blocked.reason
      }
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/courts/unblock-slot/:id
export const unblockSlot = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BlockedSlot.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Slot unblocked successfully"
    });
  } catch (error) {
    next(error);
  }
};
