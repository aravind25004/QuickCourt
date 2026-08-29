import mongoose from "mongoose";

const blockedSlotSchema = new mongoose.Schema({
  facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facility", required: true },
  court: { type: mongoose.Schema.Types.ObjectId, ref: "Court", required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  reason: { type: String, default: "Maintenance" },
  blockedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

blockedSlotSchema.index({ court: 1, date: 1 });

export default mongoose.model("BlockedSlot", blockedSlotSchema);