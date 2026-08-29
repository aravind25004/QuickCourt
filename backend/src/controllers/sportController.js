import Sport from "../models/Sport.js";

const DEFAULT_SPORTS = [
  { name: "Badminton", slug: "badminton", icon: "🏸", description: "Indoor wooden and synthetic courts" },
  { name: "Football / Turf", slug: "football", icon: "⚽", description: "5-a-side, 7-a-side FIFA approved turf" },
  { name: "Box Cricket", slug: "cricket", icon: "🏏", description: "Enclosed turf box cricket pitches" },
  { name: "Tennis", slug: "tennis", icon: "🎾", description: "Clay and hard tennis courts" },
  { name: "Pickleball", slug: "pickleball", icon: "🏓", description: "Fastest growing paddle sport court" },
  { name: "Basketball", slug: "basketball", icon: "🏀", description: "Full court hardwood & outdoor acrylic" },
  { name: "Table Tennis", slug: "table-tennis", icon: "🏓", description: "ITTF standard tables with lighting" },
  { name: "Squash", slug: "squash", icon: "🏸", description: "Glass-backed squash courts" }
];

// GET /api/sports
export const getSports = async (req, res, next) => {
  try {
    let sports = await Sport.find({ isActive: true }).sort({ name: 1 });

    if (sports.length === 0) {
      // Auto seed initial sports
      sports = await Sport.insertMany(DEFAULT_SPORTS);
    }

    return res.status(200).json({
      success: true,
      count: sports.length,
      sports
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/sports
export const createSport = async (req, res, next) => {
  try {
    const { name, slug, icon, description } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: "Sport name is required" });
    }

    const sportSlug = (slug || name).toLowerCase().trim().replace(/\s+/g, "-");
    const sport = await Sport.create({
      name: name.trim(),
      slug: sportSlug,
      icon: icon || "🏅",
      description: description || null,
      isActive: true
    });

    return res.status(201).json({
      success: true,
      message: "Sport created successfully",
      sport
    });
  } catch (error) {
    next(error);
  }
};
