import mongoose from "mongoose";
// import slot from "./Slot.js";

// const operatingHourSchema = new mongoose.Schema({
//   isOpen: { type: Boolean, default: true },
//   open: { type: String, default: "06:00" },
//   close: { type: String, default: "22:00" }
// }, { _id: false });

const courtSchema = new mongoose.Schema({
  facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facilities", required: true },
  name: { type: String, required: true, trim: true },
  sport: { type: String, required: true },
  description: { type: String, default: null },
  pricePerHour: { type: Number, required: true, min: 0 },
  date: Date,
  Slots: [{ type: mongoose.Schema.Types.ObjectId, ref: "Slot",required: true}],
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

courtSchema.index({ facility: 1 });
courtSchema.index({ sport: 1 });

export default mongoose.model("Court", courtSchema);