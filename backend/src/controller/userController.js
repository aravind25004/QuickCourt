import express from "express";
import Bookings from "../models/Bookings.js";
import User from "../models/User.js";

export async function getActiveBookings(req,res) {
    const userid = req.userId;
    const date = req.query.date;
    const status = req.query.status || "CONFIRMED";
    const query = {};
    query["user"] = userid;
    if(date){
        query["bookingDate"] = date;
    }
    query["status"] = status
    const activeBookings = await Bookings.find(query);
    return res.status(200).json(activeBookings);

}

export async function getBooking(req,res) {
    const userid = req.userId;
    const bookingid = req.params.bookingid;
    const booking = Bookings.findOne({_id:bookingid,user:userid});
    return res.status(200).json(booking);
}

export async function profile(req,res){
    const userid = req.userId;
    const user = await User.findById(userid);

    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    return res.status(200).json(user);
    
}

export async function updateProfile(req,res) {
    const userid = req.userId;
    const name = req.body.name;
    const email = req.body.email;
    
    if(!name && !email){
        return res.status(400).json({message:"Please provide name or email"});
    }
    const update = {}
    if(name){
        update.name = name;
    }
    if(email){
        update.email = email;
    }
    const updatedUser = await User.findByIdAndUpdate(userid,update);
    return res.status(200).json({updatedUser});


    
}