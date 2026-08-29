import mongoose from "mongoose";

const slot = new mongoose.Schema({
    startTime:{
        type: Int16Array,
        min: 1,
        max: 24,
        required: true
    },
    bookedStatus:{
        type: Boolean,
        default:false
    }
})

const slotModel = mongoose.model("Slot",slot);