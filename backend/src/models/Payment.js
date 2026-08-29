import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  transactionId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true, min: 0 },
  currency: { type: String, default: "INR" },
  method: {
    type: String,
    enum: ["CARD", "UPI", "NET_BANKING", "MOCK"],
    default: "MOCK"
  },
  status: {
    type: String,
    enum: ["PENDING", "SUCCESS", "FAILED", "REFUNDED"],
    default: "PENDING"
  },
  paidAt: { type: Date, default: null }
}, { timestamps: true });

paymentSchema.index({ transactionId: 1 }, { unique: true });
paymentSchema.index({ booking: 1 }, { unique: true });
paymentSchema.index({ user: 1 });

export default mongoose.model("Payment", paymentSchema);