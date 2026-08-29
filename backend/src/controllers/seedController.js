import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Sport from "../models/Sport.js";
import Facility from "../models/Facility.js";
import Court from "../models/Court.js";
import Booking from "../models/Booking.js";
import Payment from "../models/Payment.js";
import Review from "../models/Review.js";

export const seedDatabase = async (req, res, next) => {
  try {
    const defaultPassword = "Password@123";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(defaultPassword, salt);

    // 1. Seed Sports
    const sportsData = [
      { name: "Badminton", slug: "badminton", icon: "🏸", description: "Indoor wooden and synthetic courts" },
      { name: "Football / Turf", slug: "football", icon: "⚽", description: "5-a-side, 7-a-side FIFA approved turf" },
      { name: "Box Cricket", slug: "cricket", icon: "🏏", description: "Enclosed turf box cricket pitches" },
      { name: "Tennis", slug: "tennis", icon: "🎾", description: "Clay and hard tennis courts" },
      { name: "Pickleball", slug: "pickleball", icon: "🏓", description: "Fastest growing paddle sport court" },
      { name: "Basketball", slug: "basketball", icon: "🏀", description: "Full court hardwood & outdoor acrylic" }
    ];

    const sports = [];
    for (const s of sportsData) {
      let existing = await Sport.findOne({ slug: s.slug });
      if (!existing) {
        existing = await Sport.create(s);
      }
      sports.push(existing);
    }

    const badminton = sports.find(s => s.slug === "badminton") || sports[0];
    const football = sports.find(s => s.slug === "football") || sports[0];
    const cricket = sports.find(s => s.slug === "cricket") || sports[0];

    // 2. Seed Users
    const usersData = [
      {
        fullName: "Mitchell Admin",
        email: "mitchell.admin@quickcourt.com",
        password: hashedPassword,
        role: "ADMIN",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
        phone: "+91 98765 43210",
        isEmailVerified: true
      },
      {
        fullName: "Devendra Patel",
        email: "devendra.sbr@gmail.com",
        password: hashedPassword,
        role: "OWNER",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80",
        phone: "+91 98250 12345",
        isEmailVerified: true
      },
      {
        fullName: "Rohan Sharma",
        email: "rohan.sharma@example.com",
        password: hashedPassword,
        role: "USER",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80",
        phone: "+91 99090 99090",
        isEmailVerified: true
      }
    ];

    const users = {};
    for (const u of usersData) {
      let user = await User.findOne({ email: u.email });
      if (!user) {
        user = await User.create(u);
      }
      users[u.email] = user;
    }

    const owner = users["devendra.sbr@gmail.com"];
    const player = users["rohan.sharma@example.com"];
    const admin = users["mitchell.admin@quickcourt.com"];

    // 3. Seed Facilities
    const facilitiesData = [
      {
        name: "SBR Sports Arena",
        description: "Premier multi-sport arena on Sindhu Bhavan Road featuring 6 synthetic BWF-approved badminton courts, locker rooms, pro equipment rentals, and rooftop cafe.",
        address: {
          addressLine: "Near Taj Skyline, Sindhu Bhavan Marg, Bodakdev",
          area: "Sindhu Bhavan Road, Bodakdev",
          city: "Ahmedabad",
          state: "Gujarat",
          pincode: "380054",
          location: { type: "Point", coordinates: [72.5085, 23.0378] }
        },
        sports: [badminton._id],
        amenities: ["Free Parking", "Air Conditioned", "Changing Rooms", "Cafeteria", "Pro Shop", "Drinking Water"],
        venueType: "INDOOR",
        photos: [
          { url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80" },
          { url: "https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80" }
        ],
        approvalStatus: "APPROVED",
        approvedBy: admin._id,
        approvedAt: new Date(),
        rating: { average: 4.9, count: 128 },
        owner: owner._id
      },
      {
        name: "Champions Box Cricket Arena",
        description: "State of the art floodlit box cricket with high rebound net perimeter, professional turf pitch, live commentary sound system, and lounge.",
        address: {
          addressLine: "Behind YMCA Club, SG Highway",
          area: "SG Highway, Makarba",
          city: "Ahmedabad",
          state: "Gujarat",
          pincode: "380051",
          location: { type: "Point", coordinates: [72.4965, 22.9968] }
        },
        sports: [cricket._id, football._id],
        amenities: ["Floodlights", "Dugout Seating", "Live Stream Cameras", "Refreshments", "Parking"],
        venueType: "OUTDOOR",
        photos: [
          { url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80" }
        ],
        approvalStatus: "APPROVED",
        approvedBy: admin._id,
        approvedAt: new Date(),
        rating: { average: 4.8, count: 94 },
        owner: owner._id
      },
      {
        name: "Skyline Football Turf",
        description: "FIFA 2-star certified 7-a-side artificial turf football pitch with international standard LED floodlights and coaching academy.",
        address: {
          addressLine: "Near Iscon Cross Road, Satellite",
          area: "Satellite, Ambli Road",
          city: "Ahmedabad",
          state: "Gujarat",
          pincode: "380015",
          location: { type: "Point", coordinates: [72.5185, 23.0255] }
        },
        sports: [football._id],
        amenities: ["FIFA Grade Turf", "Spectator Stand", "Showers", "First Aid", "Lockers"],
        venueType: "OUTDOOR",
        photos: [
          { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80" }
        ],
        approvalStatus: "PENDING",
        rating: { average: 4.7, count: 65 },
        owner: owner._id
      }
    ];

    const facilities = [];
    for (const fd of facilitiesData) {
      let fac = await Facility.findOne({ name: fd.name });
      if (!fac) {
        fac = await Facility.create(fd);
      }
      facilities.push(fac);
    }

    // 4. Seed Courts for facilities
    const sbrArena = facilities[0];
    const championsArena = facilities[1];

    const courtsData = [
      {
        facility: sbrArena._id,
        name: "Court 1 (Main Court)",
        sport: badminton._id,
        pricePerHour: 350,
        slotDuration: 60
      },
      {
        facility: sbrArena._id,
        name: "Court 2 (Synthetic)",
        sport: badminton._id,
        pricePerHour: 350,
        slotDuration: 60
      },
      {
        facility: championsArena._id,
        name: "Pitch A (Main Turf)",
        sport: cricket._id,
        pricePerHour: 600,
        slotDuration: 60
      }
    ];

    const courts = [];
    for (const cd of courtsData) {
      let c = await Court.findOne({ facility: cd.facility, name: cd.name });
      if (!c) {
        c = await Court.create(cd);
      }
      courts.push(c);
    }

    // 5. Seed Sample Booking & Payment
    const existingBooking = await Booking.findOne({ user: player._id });
    if (!existingBooking && courts[0]) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const booking = await Booking.create({
        bookingNumber: "QC-2026-104928",
        user: player._id,
        facility: sbrArena._id,
        court: courts[0]._id,
        sport: badminton._id,
        bookingDate: today,
        startTime: "07:00 AM - 08:00 AM",
        endTime: "08:00 AM",
        startDateTime: new Date(today.getTime() + 7 * 3600000),
        endDateTime: new Date(today.getTime() + 8 * 3600000),
        duration: 1,
        pricePerHour: 350,
        subtotal: 350,
        taxes: 63,
        totalAmount: 413,
        status: "CONFIRMED"
      });

      const payment = await Payment.create({
        booking: booking._id,
        user: player._id,
        transactionId: "TXN-8492019482",
        amount: 413,
        currency: "INR",
        method: "UPI",
        status: "SUCCESS",
        paidAt: new Date()
      });

      booking.payment = payment._id;
      await booking.save();

      // Seed Review
      await Review.create({
        user: player._id,
        facility: sbrArena._id,
        booking: booking._id,
        rating: 5,
        comment: "Excellent wooden court grip and great air conditioning! Best place in Ahmedabad."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Database seeded successfully with initial sports, users, facilities, and courts!",
      credentials: {
        admin: { email: "mitchell.admin@quickcourt.com", password: defaultPassword, role: "ADMIN" },
        owner: { email: "devendra.sbr@gmail.com", password: defaultPassword, role: "OWNER" },
        player: { email: "rohan.sharma@example.com", password: defaultPassword, role: "USER" }
      }
    });
  } catch (error) {
    next(error);
  }
};
