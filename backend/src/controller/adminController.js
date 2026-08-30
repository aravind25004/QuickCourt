import mongoose from "mongoose";
import Facilities from "../models/Facilities";

export async function getAllFacilities(req,res) {
    const facilities = await Facilities.find();
    return res.status(200).json(facilities);
}

export async function approveFacility(req,res) {
    const facilityid = req.params.facilityid;
    const approve = req.params.approval;
    const comments = req.params.comments || "";
    const facility = await Facilities.findById(facilityid);
    if(!facility){
        return res.status(404).json({message:"facility not found"})
    }
    if(approve.toLowerCase()!=="approved" && approve.toLowerCase()!=="rejected"){
        return res.status(400).json({message:"Provide valid approval"});
    }
    const approvalStatus = facility.approvalStatus;
    if(approvalStatus!=="PENDING"){
        return res.status(400).json({message:"cannot approve or reject"});
    }
    facility.approvalStatus = approve.toUpperCase();
    facility.rejectionReason = comments;
    facility.approvedBy = req.userid;
    facility.approvedAt = new Date(); 
    
    await facility.save();
    return res.status(200).json({message:"Status Updated",facility});
}

export async function getFacility(req,res) {
    const facilityid = req.params.facilityid;
    const facility = await Facilities.findById(facilityid);
    if(!facility){
        return res.status(404).json({message:"facility not found"})
    }
    return res.status(200).json(facility);
}


