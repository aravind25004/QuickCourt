
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
//middleware
dotenv.config();

export async function signup(req,res) {
    console.log(req.body);
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"name or email or password was not provided"});
    }
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(409).json({message:"User already exists. Login"});
    }
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUND);
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    try{
        const user = await User.create({name,email,password: hashedPassword});
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});

        return res.status(201).json({message:"User created successfully.",token});
    }catch(err){
        return res.status(400).send(err.msg);
    }
    
    

}

export async function login(req,res) {
    const {email,password} = req.body;
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return res.status(404).json({message:"Invalid email or password"});
    }

    const passwordMatches = await bcrypt.compare(password,user.password);
    if(!passwordMatches){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});

    return res.status(200).json({message:"Logged in successfully!",token});
    
}

// export async function me(req,res) {
//     const userid = req.userid;
//     console.log(userid)
//     const user = await User.findById(userid);
//     return res.status(200).json({user});   
// }