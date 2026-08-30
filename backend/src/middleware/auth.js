import jwt from "jsonwebtoken";
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET || "quickcourt_super_secret_jwt_key_2026";

/**
 * Protect routes - requires a valid JWT Bearer token
 */
export const protect = async (req, res, next) => {
  let token = null;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.headers["x-auth-token"]) {
    token = req.headers["x-auth-token"];
  }

  // Fallback for dev testing if x-user-id header is sent
  if (!token && req.headers["x-user-id"]) {
    try {
      const devUser = await User.findById(req.headers["x-user-id"]).select("-password");
      if (devUser) {
        req.user = devUser;
        req.userId = devUser._id.toString();
        return next();
      }
    } catch (err) {
      // continue to standard token check
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No authentication token provided."
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.id || decoded.userId || decoded._id;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User associated with token not found."
      });
    }

    if (user.isBanned) {
      return res.status(403).json({
        success: false,
        message: "Your account is suspended."
      });
    }

    req.user = user;
    req.userId = user._id.toString();
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token."
    });
  }
};

export const requireOwner = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: "Authentication required." });
  }
  if (req.user.role !== "OWNER" && req.user.role !== "ADMIN") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Owner privileges required."
    });
  }
  next();
};

export default protect;
