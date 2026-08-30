import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facilities", required: true },
  court: { type: mongoose.Schema.Types.ObjectId, ref: "Court", required: true },
  bookingDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  pricePerHour: { type: Number, required: true, min: 0 },
  totalAmount: { type: Number, required: true, min: 0 },
  status: {
    type: String,
    enum: ["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"],
    default: "PENDING"
  },
  cancellationReason: { type: String, default: null },
  cancelledAt: { type: Date, default: null },
  cancelledBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment", default: null },
  razorpayOrderId: { type: String, default: null },
  razorpayPaymentId: { type: String, default: null },
  razorpaySignature: { type: String, default: null }
}, { timestamps: true });


bookingSchema.index({ user: 1 });
bookingSchema.index({ facility: 1 });
bookingSchema.index({ court: 1, bookingDate: 1 });
bookingSchema.index({ startDateTime: 1 });
bookingSchema.index({ status: 1 });

export default mongoose.model("Bookings", bookingSchema);