import Razorpay from "razorpay";
import crypto from "crypto";
import Booking from "../models/Bookings.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});


/**
 * POST /api/payment/create-order
 *
 * Creates a Razorpay order.
 * Returns order details needed by the frontend to open Razorpay Checkout.
 *
 * Body: { venueName, timeSlot, court, price, bookingDate }
 */
export async function createOrder(req, res) {
  try {
    const { venueName, timeSlot, court, price, bookingDate } = req.body;

    // ── Validate required fields ──
    if (!venueName || !timeSlot || price === undefined || !bookingDate) {
      return res.status(400).json({
        message: "venueName, timeSlot, price and bookingDate are required"
      });
    }

    const priceValue = Number(price);
    if (Number.isNaN(priceValue) || priceValue <= 0) {
      return res.status(400).json({
        message: "price must be a positive number"
      });
    }

    // ── Create Razorpay order (amount in paise) ──
    const amountInPaise = Math.round(priceValue * 100);

    const razorpayOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: {
        venueName,
        court: court || "N/A",
        timeSlot,
        bookingDate
      }
    });

    res.status(201).json({
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: error.message });
  }
}


/**
 * POST /api/payment/verify
 *
 * Verifies Razorpay payment signature using HMAC SHA256.
 *
 * Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 */
export async function verifyPayment(req, res) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        message: "razorpay_order_id, razorpay_payment_id and razorpay_signature are required"
      });
    }

    // ── Verify HMAC SHA256 signature (per Razorpay docs) ──
    // generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret)
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        message: "Payment verification failed. Invalid signature."
      });
    }

    // ── Signature valid ──
    res.status(200).json({
      message: "Payment verified successfully",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    res.status(500).json({ message: error.message });
  }
}
