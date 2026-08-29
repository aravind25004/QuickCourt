import React, { useState } from 'react';
import Modal from '../common/Modal';
import confetti from 'canvas-confetti';
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
  Sparkles
} from 'lucide-react';

export default function PaymentModal({
  isOpen,
  onClose,
  bookingDetails,
  onBookingSuccess
}) {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

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

  const handlePay = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const confirmed = onBookingSuccess();
      setConfirmedBooking(confirmed);
      triggerConfetti();
    }, 1200);
  };

  const handleFinish = (targetPage = 'profile') => {
    setConfirmedBooking(null);
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

          {/* Payment Method Selector */}
          <div className="payment-methods-grid">
            <button
              type="button"
              className={`method-tile ${paymentMethod === 'upi' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('upi')}
            >
              <Smartphone size={20} className="method-icon" />
              <span>Instant UPI / QR</span>
              <span className="method-sub">GPay, PhonePe, Paytm</span>
            </button>

            <button
              type="button"
              className={`method-tile ${paymentMethod === 'card' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <CreditCard size={20} className="method-icon" />
              <span>Debit / Credit Card</span>
              <span className="method-sub">Visa, MasterCard, RuPay</span>
            </button>

            <button
              type="button"
              className={`method-tile ${paymentMethod === 'netbanking' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('netbanking')}
            >
              <Building size={20} className="method-icon" />
              <span>Net Banking</span>
              <span className="method-sub">HDFC, ICICI, SBI, Axis</span>
            </button>

            <button
              type="button"
              className={`method-tile ${paymentMethod === 'venue' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('venue')}
            >
              <Sparkles size={20} className="method-icon" />
              <span>Pay at Venue</span>
              <span className="method-sub">Cash / UPI on arrival</span>
            </button>
          </div>

          {/* Method Specific Inputs */}
          {paymentMethod === 'upi' && (
            <div className="upi-details-box flex-col items-center">
              <div className="qr-code-placeholder flex-col items-center justify-center">
                <QrCode size={96} color="#10B981" />
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: 6 }}>
                  Scan & Pay ₹{bookingDetails?.amount} using any UPI App
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', margin: '8px 0' }}>or enter UPI ID</div>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. yourname@oksbi" 
                defaultValue="mitchell@okhdfcbank"
              />
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="card-details-box flex-col gap-sm">
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Card Number</label>
                <input type="text" className="form-input" placeholder="4532 •••• •••• 8842" defaultValue="4532 9081 2234 8842" />
              </div>
              <div className="flex gap-sm">
                <div className="form-group" style={{ flex: 1, margin: 0 }}>
                  <label className="form-label">Expiry</label>
                  <input type="text" className="form-input" placeholder="MM/YY" defaultValue="08/28" />
                </div>
                <div className="form-group" style={{ flex: 1, margin: 0 }}>
                  <label className="form-label">CVV</label>
                  <input type="password" className="form-input" placeholder="123" defaultValue="789" />
                </div>
              </div>
            </div>
          )}

          <div className="security-notice flex items-center gap-sm">
            <ShieldCheck size={16} color="#10B981" />
            <span>256-Bit SSL Encrypted & Protected by QuickCourt Buyer Shield</span>
          </div>

          {/* Pay Button matching SVG "Continue to Payment – ₹..." */}
          <button 
            type="button" 
            className="btn btn-primary btn-lg pay-submit-btn"
            disabled={isProcessing}
            onClick={handlePay}
          >
            {isProcessing ? 'Processing Payment...' : `Confirm & Pay – ₹${bookingDetails?.amount}.00`}
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

        .method-tile:hover {
          background: var(--bg-card-hover);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .method-tile.selected {
          background: rgba(16, 185, 129, 0.15);
          border-color: var(--primary);
          color: #ffffff;
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

        .upi-details-box {
          background: rgba(15, 23, 42, 0.5);
          border: 1px dashed var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 16px;
        }

        .qr-code-placeholder {
          background: rgba(255, 255, 255, 0.05);
          padding: 16px;
          border-radius: var(--radius-md);
        }

        .card-details-box {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 16px;
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
