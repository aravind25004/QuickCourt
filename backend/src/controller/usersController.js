import User from "../models/User";
import Bookings from "../models/Bookings";

export async function getAllActiveUsers(req,res) {
    const users = await User.find();
    return res.status(200).json({users});
}

export async function banUser(req,res) {
    const userid = req.params.userid;
    const user = await User.findOne(userid);
    const ban = user.isBanned;
    if(ban==false){
        user.isBanned = true;
    }
    else{
        res.status(400).json({message:"User already banned"});
    }
    await user.save();
}

export async function getBookingHistory(req,res) {
    const userid = req.params.userid;
    const bookings = await Bookings.find({user:userid});
    if(!bookings){
        return res.status(404).json({message:"No bookings found"});
    }
    return res.status(200).json(bookings);
}
