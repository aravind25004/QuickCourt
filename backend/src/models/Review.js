import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facility", required: true },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true, unique: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, default: null, trim: true },
  isVisible: { type: Boolean, default: true }
}, { timestamps: true });

reviewSchema.index({ facility: 1 });
reviewSchema.index({ user: 1 });
reviewSchema.index({ booking: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema);