import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  targetType: {
    type: String,
    enum: ["USER", "FACILITY", "REVIEW", "MATCH"],
    required: true
  },
  targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
  reason: {
    type: String,
    enum: ["FAKE_INFORMATION", "INAPPROPRIATE_CONTENT", "FRAUD", "ABUSE", "OTHER"],
    required: true
  },
  description: { type: String, default: null },
  status: {
    type: String,
    enum: ["PENDING", "UNDER_REVIEW", "RESOLVED", "DISMISSED"],
    default: "PENDING"
  },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  adminComment: { type: String, default: null }
}, { timestamps: true });

reportSchema.index({ status: 1 });
reportSchema.index({ targetType: 1, targetId: 1 });
reportSchema.index({ reportedBy: 1 });

export default mongoose.model("Report", reportSchema);