import mongoose from "mongoose";

const facilitySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true, trim: true },
  description: { type: String, default: null },
  address: {
    addressLine: { type: String, required: true },
    area: { type: String, default: null },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [0, 0] }
    }
  },
  amenities: [{ type: String, trim: true }],
  photos: [{
    url: { type: String, required: true },
    publicId: { type: String, default: null }
  }],
  approvalStatus: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING"
  },
  rejectionReason: { type: String, default: null },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  approvedAt: { type: Date, default: null },
  rating: {
    average: { type: Number, default: 0, min: 0, max: 5 },
    count: { type: Number, default: 0, min: 0 }
  },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

facilitySchema.index({ owner: 1 });
facilitySchema.index({ approvalStatus: 1 });
facilitySchema.index({ sports: 1 });
facilitySchema.index({ venueType: 1 });
facilitySchema.index({ "address.city": 1 });
facilitySchema.index({ "address.location": "2dsphere" });

export default mongoose.model("Facilities", facilitySchema);