import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facility", required: true },
  sport: { type: mongoose.Schema.Types.ObjectId, ref: "Sport", required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: null },
  matchDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  maxPlayers: { type: Number, required: true, min: 2 },
  currentPlayers: { type: Number, default: 1, min: 0 },
  skillLevel: {
    type: String,
    enum: ["BEGINNER", "INTERMEDIATE", "ADVANCED", "ANY"],
    default: "ANY"
  },
  status: {
    type: String,
    enum: ["OPEN", "FULL", "STARTED", "COMPLETED", "CANCELLED"],
    default: "OPEN"
  }
}, { timestamps: true });

matchSchema.index({ sport: 1 });
matchSchema.index({ facility: 1 });
matchSchema.index({ matchDate: 1 });
matchSchema.index({ status: 1 });

export default mongoose.model("Match", matchSchema);