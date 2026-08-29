import mongoose from "mongoose";

const matchParticipantSchema = new mongoose.Schema({
  match: { type: mongoose.Schema.Types.ObjectId, ref: "Match", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["JOINED", "LEFT", "REMOVED"],
    default: "JOINED"
  },
  joinedAt: { type: Date, default: Date.now }
}, { timestamps: true });

matchParticipantSchema.index({ match: 1, user: 1 }, { unique: true });
matchParticipantSchema.index({ user: 1 });

export default mongoose.model("MatchParticipant", matchParticipantSchema);