import mongoose from "mongoose";

const operatingHourSchema = new mongoose.Schema({
  isOpen: { type: Boolean, default: true },
  open: { type: String, default: "06:00" },
  close: { type: String, default: "22:00" }
}, { _id: false });

const courtSchema = new mongoose.Schema({
  facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facility", required: true },
  name: { type: String, required: true, trim: true },
  sport: { type: mongoose.Schema.Types.ObjectId, ref: "Sport", required: true },
  description: { type: String, default: null },
  pricePerHour: { type: Number, required: true, min: 0 },
  operatingHours: {
    monday: { type: operatingHourSchema, default: () => ({}) },
    tuesday: { type: operatingHourSchema, default: () => ({}) },
    wednesday: { type: operatingHourSchema, default: () => ({}) },
    thursday: { type: operatingHourSchema, default: () => ({}) },
    friday: { type: operatingHourSchema, default: () => ({}) },
    saturday: { type: operatingHourSchema, default: () => ({}) },
    sunday: { type: operatingHourSchema, default: () => ({}) }
  },
  slotDuration: { type: Number, default: 60, min: 15 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

courtSchema.index({ facility: 1 });
courtSchema.index({ sport: 1 });

export default mongoose.model("Court", courtSchema);