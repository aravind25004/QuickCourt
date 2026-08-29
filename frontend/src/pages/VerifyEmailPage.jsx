import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import Modal from '../components/common/Modal';
import { KeyRound, Mail, RefreshCw, Edit3, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function VerifyEmailPage({ setActivePage }) {
  const { pendingSignup, verifyEmailOtp, updatePendingEmail } = useAuth();
  const { showToast } = useToast();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isEditEmailModalOpen, setIsEditEmailModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const inputRefs = useRef([]);

  const userEmail = pendingSignup?.email || 'mitchell.player@example.com';

  // Countdown timer for Resend OTP
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Handle single digit input
  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace navigation
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Paste of full OTP
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      inputRefs.current[5]?.focus();
      showToast('Pasted 6-digit code', 'info');
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length !== 6) {
      showToast('Please enter all 6 digits of the code', 'error');
      return;
    }

    setLoading(true);
    const res = verifyEmailOtp(code);
    setLoading(false);

    if (res.success) {
      showToast('Email verified successfully! Welcome to QuickCourt.', 'success');
      setActivePage('home');
      window.scrollTo(0, 0);
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleResendOtp = () => {
    if (!canResend) return;
    setTimer(30);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    showToast(`New verification code sent to ${userEmail}! (Demo Code: 123456)`, 'success');
  };

  const handleSaveEditedEmail = (e) => {
    e.preventDefault();
    if (!newEmail || !newEmail.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    const res = updatePendingEmail(newEmail);
    if (res.success) {
      showToast(`Email updated to ${newEmail}. New code sent!`, 'success');
      setIsEditEmailModalOpen(false);
      setTimer(30);
      setCanResend(false);
    } else {
      showToast(res.message, 'error');
    }
  };

  return (
    <div className="auth-page-container">
      <div className="verify-card glass-card">
        
        {/* Brand Header */}
        <div className="verify-header-logo flex-col items-center">
          <div className="brand-logo" onClick={() => setActivePage('home')}>
            <div className="logo-badge">
              <span className="logo-court-icon">⚡</span>
            </div>
            <span className="logo-title">QUICKCOURT</span>
          </div>

          {/* Exact Screen Title from SVG: 🔐 VERIFY YOUR EMAIL */}
          <h2 className="verify-heading">🔐 VERIFY YOUR EMAIL</h2>
          
          {/* Exact Description from SVG */}
          <p className="verify-desc">
            We’ve sent a code to your email: <br />
            <strong className="user-email-highlight">{userEmail}</strong>
          </p>

          <div className="demo-hint-box">
            💡 Quick Demo Tip: Enter <strong>123456</strong> or any 6 digits to verify instantly!
          </div>
        </div>

        {/* 6-Box OTP Form */}
        <form onSubmit={handleVerify} className="otp-form-box flex-col items-center">
          
          <div className="otp-inputs-grid" onPaste={handlePaste}>
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                className={`otp-digit-input ${digit ? 'filled' : ''}`}
                value={digit}
                ref={(el) => (inputRefs.current[idx] = el)}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                autoFocus={idx === 0}
              />
            ))}
          </div>

          {/* Verify & Continue Button from SVG */}
          <button 
            type="submit" 
            className="btn btn-primary btn-lg verify-cta-btn"
            disabled={loading || otp.join('').length < 6}
          >
            <span>{loading ? 'Verifying...' : 'Verify & Continue'}</span>
            <ArrowRight size={18} />
          </button>

          {/* Resend OTP Row from SVG: Didn’t receive the code? Resend OTP */}
          <div className="verify-footer-action flex items-center gap-sm">
            <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Didn’t receive the code?</span>
            {canResend ? (
              <button 
                type="button" 
                className="resend-action-btn"
                onClick={handleResendOtp}
              >
                Resend OTP
              </button>
            ) : (
              <span className="timer-text">Resend in {timer}s</span>
            )}
          </div>

          {/* Edit Email Row from SVG: Wrong email? Edit Email */}
          <div className="verify-footer-action flex items-center gap-sm" style={{ marginTop: 8 }}>
            <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Wrong email?</span>
            <button 
              type="button" 
              className="edit-email-action-btn"
              onClick={() => {
                setNewEmail(userEmail);
                setIsEditEmailModalOpen(true);
              }}
            >
              Edit Email
            </button>
          </div>

        </form>

      </div>

      {/* Edit Email Modal from SVG */}
      <Modal
        isOpen={isEditEmailModalOpen}
        onClose={() => setIsEditEmailModalOpen(false)}
        title="Edit Email Address"
      >
        <form onSubmit={handleSaveEditedEmail}>
          <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: 18 }}>
            Change your email address. We will re-send a fresh 6-digit OTP code immediately.
          </p>

          <div className="form-group">
            <label className="form-label">New Email Address</label>
            <input 
              type="email"
              className="form-input"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="flex gap-sm" style={{ marginTop: 20 }}>
            <button 
              type="button" 
              className="btn btn-secondary" 
              style={{ flex: 1 }} 
              onClick={() => setIsEditEmailModalOpen(false)}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ flex: 1 }}
            >
              Update & Resend Code
            </button>
          </div>
        </form>
      </Modal>

      <style>{`
        .verify-card {
          width: 100%;
          max-width: 480px;
          padding: 44px 36px;
          border-radius: var(--radius-lg);
          text-align: center;
        }

        .verify-header-logo {
          margin-bottom: 28px;
        }

        .verify-heading {
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: 0.04em;
          margin: 16px 0 8px;
        }

        .verify-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .user-email-highlight {
          color: #34d399;
          font-size: 1rem;
        }

        .demo-hint-box {
          background: rgba(16, 185, 129, 0.1);
          border: 1px dashed rgba(16, 185, 129, 0.35);
          padding: 8px 12px;
          border-radius: var(--radius-md);
          font-size: 0.78rem;
          color: #a7f3d0;
          margin-top: 14px;
        }

        .otp-inputs-grid {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 28px;
        }

        .otp-digit-input {
          width: 52px;
          height: 60px;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.8);
          border: 2px solid var(--border-subtle);
          color: #f8fafc;
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          text-align: center;
          transition: all 0.2s ease;
        }

        .otp-digit-input:focus {
          border-color: var(--primary);
          background: rgba(15, 23, 42, 0.95);
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.3);
          transform: scale(1.05);
        }

        .otp-digit-input.filled {
          border-color: rgba(16, 185, 129, 0.5);
        }

        .verify-cta-btn {
          width: 100%;
          margin-bottom: 24px;
        }

        .resend-action-btn, .edit-email-action-btn {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.88rem;
        }

        .resend-action-btn:hover, .edit-email-action-btn:hover {
          text-decoration: underline;
        }

        .timer-text {
          font-size: 0.82rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        @media (max-width: 480px) {
          .otp-digit-input {
            width: 42px;
            height: 50px;
            font-size: 1.3rem;
          }
          .verify-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}
