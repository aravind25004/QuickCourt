import React, { useState } from 'react';
import Modal from '../common/Modal';
import confetti from 'canvas-confetti';
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  openRazorpayCheckout
} from '../../services/paymentService';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { 
  CreditCard, 
  Smartphone, 
  Building, 
  CheckCircle2, 
  QrCode, 
  Calendar, 
  Download, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Loader2
} from 'lucide-react';

export default function PaymentModal({
  isOpen,
  onClose,
  bookingDetails,
  onBookingSuccess
}) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [paymentError, setPaymentError] = useState(null);

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }
  };

  const handlePay = async () => {
    setIsProcessing(true);
    setPaymentError(null);

    try {
      // Step 1: Create Razorpay order via backend
      const orderData = await createRazorpayOrder({
        venueName: bookingDetails?.venueName,
        timeSlot: bookingDetails?.timeSlot,
        court: bookingDetails?.courtId,
        price: bookingDetails?.amount,
        bookingDate: bookingDetails?.bookingDate
      });

      // Step 2: Open Razorpay Checkout popup
      const paymentResponse = await openRazorpayCheckout({
        keyId: orderData.keyId,
        orderId: orderData.orderId,
        amount: orderData.amount,
        currency: orderData.currency,
        venueName: bookingDetails?.venueName,
        user: {
          name: user?.name || user?.username || '',
          email: user?.email || '',
          phone: user?.phone || ''
        }
      });

      // Step 3: Verify payment signature on backend
      const verifyResult = await verifyRazorpayPayment({
        razorpay_order_id: paymentResponse.razorpay_order_id,
        razorpay_payment_id: paymentResponse.razorpay_payment_id,
        razorpay_signature: paymentResponse.razorpay_signature
      });

      // Payment verified — create local booking record and show confirmation
      const confirmed = onBookingSuccess();
      setConfirmedBooking(confirmed);
      triggerConfetti();
      showToast('Payment successful! Your court is reserved.', 'success');
    } catch (error) {
      const errorMsg = error.message || 'Payment failed. Please try again.';
      setPaymentError(errorMsg);

      if (error.message !== 'Payment cancelled by user') {
        showToast(errorMsg, 'error');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFinish = (targetPage = 'profile') => {
    setConfirmedBooking(null);
    setPaymentError(null);
    onClose(targetPage);
  };

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => confirmedBooking ? handleFinish('profile') : onClose()}
      title={confirmedBooking ? "🎉 Booking Confirmed!" : "Complete Payment"}
      maxWidth="560px"
    >
      {confirmedBooking ? (
        <div className="confirmation-screen flex-col items-center">
          
          <div className="success-icon-circle">
            <CheckCircle2 size={44} color="#10B981" />
          </div>

          <h3 className="confirmation-title">Court Reserved Successfully!</h3>
          <p className="confirmation-subtitle">
            Your booking ID is <strong style={{ color: '#10B981' }}>#{confirmedBooking.id}</strong>. A confirmation SMS & email has been sent.
          </p>

          {/* Receipt Summary Card */}
          <div className="receipt-card glass-card">
            <div className="receipt-row">
              <span className="receipt-label">Venue</span>
              <span className="receipt-val">{confirmedBooking.venueName}</span>
            </div>
            <div className="receipt-row">
              <span className="receipt-label">Court</span>
              <span className="receipt-val">{confirmedBooking.courtName}</span>
            </div>
            <div className="receipt-row">
              <span className="receipt-label">Date & Time</span>
              <span className="receipt-val">{confirmedBooking.formattedDate} • {confirmedBooking.timeSlot}</span>
            </div>
            <div className="receipt-row">
              <span className="receipt-label">Location</span>
              <span className="receipt-val">{confirmedBooking.location}</span>
            </div>
            <div className="receipt-divider" />
            <div className="receipt-row receipt-total-row">
              <span className="receipt-label" style={{ fontWeight: 700, color: '#f8fafc' }}>Total Paid</span>
              <span className="receipt-total-amount">₹{confirmedBooking.amount}.00</span>
            </div>
          </div>

          {/* Actions */}
          <div className="confirmation-actions flex gap-sm" style={{ width: '100%', marginTop: 24 }}>
            <button 
              className="btn btn-secondary" 
              style={{ flex: 1 }}
              onClick={() => {
                alert(`Receipt #${confirmedBooking.id} downloaded.`);
              }}
            >
              <Download size={16} />
              <span>Download Receipt</span>
            </button>

            <button 
              className="btn btn-primary" 
              style={{ flex: 1 }}
              onClick={() => handleFinish('profile')}
            >
              <span>View My Bookings</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      ) : (
        <div className="payment-form-wrapper flex-col gap-md">
          
          {/* Order Summary Pill */}
          <div className="order-summary-box flex items-center justify-between">
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                {bookingDetails?.venueName}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                {bookingDetails?.formattedDate} • {bookingDetails?.timeSlot}
              </div>
            </div>
            <div className="order-total-pill">
              ₹{bookingDetails?.amount}.00
            </div>
          </div>

          {/* Razorpay handles payment method selection in its own popup */}
          <div className="razorpay-info-box flex-col items-center gap-sm">
            <ShieldCheck size={32} color="#10B981" />
            <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Secure Payment via Razorpay
            </p>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, textAlign: 'center' }}>
              You'll be redirected to Razorpay's secure checkout to complete your payment via UPI, Card, Net Banking, or Wallet.
            </p>
          </div>

          {/* Payment Method Preview Icons */}
          <div className="payment-methods-grid">
            <div className="method-tile selected">
              <Smartphone size={20} className="method-icon" />
              <span>UPI / QR</span>
              <span className="method-sub">GPay, PhonePe, Paytm</span>
            </div>

            <div className="method-tile selected">
              <CreditCard size={20} className="method-icon" />
              <span>Debit / Credit Card</span>
              <span className="method-sub">Visa, MasterCard, RuPay</span>
            </div>

            <div className="method-tile selected">
              <Building size={20} className="method-icon" />
              <span>Net Banking</span>
              <span className="method-sub">HDFC, ICICI, SBI, Axis</span>
            </div>

            <div className="method-tile selected">
              <Sparkles size={20} className="method-icon" />
              <span>Wallets</span>
              <span className="method-sub">Paytm, Freecharge, Jio</span>
            </div>
          </div>

          {/* Error Display */}
          {paymentError && (
            <div className="payment-error-box">
              <span>⚠️ {paymentError}</span>
              <button 
                type="button" 
                className="dismiss-error-btn"
                onClick={() => setPaymentError(null)}
              >
                ✕
              </button>
            </div>
          )}

          <div className="security-notice flex items-center gap-sm">
            <ShieldCheck size={16} color="#10B981" />
            <span>256-Bit SSL Encrypted & Protected by Razorpay Buyer Shield</span>
          </div>

          {/* Pay Button — opens Razorpay Checkout */}
          <button 
            type="button" 
            className="btn btn-primary btn-lg pay-submit-btn"
            disabled={isProcessing}
            onClick={handlePay}
          >
            {isProcessing ? (
              <>
                <Loader2 size={18} className="spin-icon" />
                <span>Processing Payment...</span>
              </>
            ) : (
              <>
                <CreditCard size={18} />
                <span>Confirm & Pay – ₹{bookingDetails?.amount}.00</span>
              </>
            )}
          </button>

        </div>
      )}

      <style>{`
        .order-summary-box {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 14px 18px;
          border-radius: var(--radius-md);
        }

        .order-total-pill {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #34d399;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .razorpay-info-box {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
        }

        .payment-methods-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .method-tile {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 14px;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 700;
          text-align: left;
          transition: all 0.2s ease;
        }

        .method-tile.selected {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.25);
        }

        .method-icon {
          color: var(--primary);
          margin-bottom: 6px;
        }

        .method-sub {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-dim);
          margin-top: 2px;
        }

        .payment-error-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .dismiss-error-btn {
          background: none;
          border: none;
          color: #fca5a5;
          font-size: 1rem;
          cursor: pointer;
          padding: 0 4px;
        }

        .security-notice {
          font-size: 0.78rem;
          color: var(--text-dim);
          justify-content: center;
        }

        .pay-submit-btn {
          width: 100%;
          font-size: 1.1rem;
          padding: 16px;
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .confirmation-screen {
          text-align: center;
          padding: 10px 0;
        }

        .success-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .confirmation-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #f8fafc;
          margin-bottom: 6px;
        }

        .confirmation-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .receipt-card {
          width: 100%;
          padding: 18px;
          background: rgba(15, 23, 42, 0.7);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
        }

        .receipt-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .receipt-label {
          color: var(--text-muted);
        }

        .receipt-val {
          font-weight: 600;
          color: var(--text-main);
        }

        .receipt-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 4px 0;
        }

        .receipt-total-amount {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #34d399;
        }
      `}</style>
    </Modal>
  );
}
