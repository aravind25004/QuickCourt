import mongoose from "mongoose";

const sportSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  icon: { type: String, default: null },
  description: { type: String, default: null },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

sportSchema.index({ slug: 1 }, { unique: true });

export default mongoose.model("Sport", sportSchema);