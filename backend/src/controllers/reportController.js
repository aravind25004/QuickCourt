import Report from "../models/Report.js";

// GET /api/reports & GET /api/admin/reports
export const getReports = async (req, res, next) => {
  try {
    const { status } = req.query;
    const query = {};
    if (status) query.status = status.toUpperCase();

    const reports = await Report.find(query)
      .populate("reportedBy", "fullName email")
      .populate("reviewedBy", "fullName email")
      .sort({ createdAt: -1 });

    const formatted = reports.map(r => ({
      id: r._id,
      _id: r._id,
      type: r.targetType,
      targetType: r.targetType,
      targetId: r.targetId,
      reason: r.reason,
      description: r.description,
      status: (r.status || "PENDING").toLowerCase(),
      rawStatus: r.status,
      reportedBy: r.reportedBy?.fullName || "User",
      date: r.createdAt?.toISOString().split("T")[0],
      createdAt: r.createdAt,
      adminComment: r.adminComment
    }));

    return res.status(200).json({
      success: true,
      count: formatted.length,
      reports: formatted
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/reports
export const createReport = async (req, res, next) => {
  try {
    const user = req.user;
    const { targetType, targetId, reason, description } = req.body;

    const report = await Report.create({
      reportedBy: user._id,
      targetType: ["USER", "FACILITY", "REVIEW", "MATCH"].includes((targetType || "").toUpperCase()) ? targetType.toUpperCase() : "FACILITY",
      targetId: targetId || user._id,
      reason: ["FAKE_INFORMATION", "INAPPROPRIATE_CONTENT", "FRAUD", "ABUSE", "OTHER"].includes((reason || "").toUpperCase()) ? reason.toUpperCase() : "OTHER",
      description: description || null,
      status: "PENDING"
    });

    return res.status(201).json({
      success: true,
      message: "Report submitted successfully",
      report
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/reports/:id/resolve & POST /api/admin/reports/:id/resolve
export const resolveReport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { resolution, adminComment } = req.body;
    const admin = req.user;

    const report = await Report.findByIdAndUpdate(
      id,
      {
        status: "RESOLVED",
        reviewedBy: admin._id,
        adminComment: resolution || adminComment || "Resolved by Admin"
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Report resolved successfully",
      report
    });
  } catch (error) {
    next(error);
  }
};
