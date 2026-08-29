import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: {
    type: String,
    enum: [
      "BOOKING_CONFIRMED",
      "BOOKING_CANCELLED",
      "BOOKING_COMPLETED",
      "FACILITY_APPROVED",
      "FACILITY_REJECTED",
      "MATCH_JOINED",
      "MATCH_CANCELLED",
      "SYSTEM"
    ],
    required: true
  },
  title: { type: String, required: true },
  message: { type: String, required: true },
  referenceType: { type: String, default: null },
  referenceId: { type: mongoose.Schema.Types.ObjectId, default: null },
  isRead: { type: Boolean, default: false }
}, { timestamps: true });

notificationSchema.index({ recipient: 1, isRead: 1 });
notificationSchema.index({ createdAt: -1 });

export default mongoose.model("Notification", notificationSchema);