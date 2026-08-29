import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  bookingNumber: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facility", required: true },
  court: { type: mongoose.Schema.Types.ObjectId, ref: "Court", required: true },
  sport: { type: mongoose.Schema.Types.ObjectId, ref: "Sport", required: true },
  bookingDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  duration: { type: Number, required: true, min: 1 },
  pricePerHour: { type: Number, required: true, min: 0 },
  subtotal: { type: Number, required: true, min: 0 },
  taxes: { type: Number, default: 0, min: 0 },
  totalAmount: { type: Number, required: true, min: 0 },
  status: {
    type: String,
    enum: ["CONFIRMED", "CANCELLED", "COMPLETED"],
    default: "CONFIRMED"
  },
  cancellationReason: { type: String, default: null },
  cancelledAt: { type: Date, default: null },
  cancelledBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment", default: null }
}, { timestamps: true });

bookingSchema.index({ user: 1 });
bookingSchema.index({ facility: 1 });
bookingSchema.index({ court: 1, bookingDate: 1 });
bookingSchema.index({ startDateTime: 1 });
bookingSchema.index({ status: 1 });

export default mongoose.model("Booking", bookingSchema);