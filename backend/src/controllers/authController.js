import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";

// POST /api/auth/register
export const register = async (req, res, next) => {
  try {
    const { email, password, fullName, name, avatar, role, phone } = req.body;

    const actualName = fullName || name;
    if (!email || !password || !actualName) {
      return res.status(400).json({
        success: false,
        message: "Email, password, and full name are required."
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists."
      });
    }

    // Role mapping
    let normalizedRole = "USER";
    if (role) {
      const upperRole = role.toUpperCase();
      if (["USER", "OWNER", "ADMIN"].includes(upperRole)) {
        normalizedRole = upperRole;
      } else if (upperRole === "PLAYER") {
        normalizedRole = "USER";
      } else if (upperRole === "FACILITY OWNER") {
        normalizedRole = "OWNER";
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName: actualName.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      avatar: avatar || null,
      phone: phone || null,
      role: normalizedRole,
      isEmailVerified: true,
      isActive: true,
      isBanned: false,
      lastLoginAt: new Date()
    });

    const token = generateToken({
      userId: newUser._id,
      email: newUser.email,
      role: newUser.role
    });

    const userResponse = {
      _id: newUser._id,
      id: newUser._id,
      fullName: newUser.fullName,
      name: newUser.fullName,
      email: newUser.email,
      avatar: newUser.avatar,
      phone: newUser.phone,
      role: newUser.role,
      isEmailVerified: newUser.isEmailVerified,
      createdAt: newUser.createdAt
    };

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      status: "SUCCESS",
      user: userResponse,
      token
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/auth/login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required."
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    if (user.isBanned) {
      return res.status(403).json({
        success: false,
        message: "Your account has been suspended. Please contact support."
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account is deactivated."
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    user.lastLoginAt = new Date();
    await user.save();

    const token = generateToken({
      userId: user._id,
      email: user.email,
      role: user.role
    });

    const userResponse = {
      _id: user._id,
      id: user._id,
      fullName: user.fullName,
      name: user.fullName,
      email: user.email,
      avatar: user.avatar,
      phone: user.phone,
      role: user.role,
      isEmailVerified: user.isEmailVerified,
      createdAt: user.createdAt
    };

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: userResponse,
      token
    });
  } catch (error) {
    next(error);
  }
};
