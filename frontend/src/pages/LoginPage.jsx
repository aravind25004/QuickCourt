import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import ForgotPasswordModal from '../components/common/ForgotPasswordModal';
import { Eye, EyeOff, Mail, Lock, LogIn, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LoginPage({ setActivePage, returnUrl }) {
  const { login } = useAuth();
  const { showToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Please enter your email');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }

    setLoading(true);
    const res = login(email, password);
    setLoading(false);

    if (res.success) {
      showToast(`Welcome back, ${res.user.name}!`, 'success');
      if (returnUrl) {
        setActivePage(returnUrl);
      } else {
        setActivePage('home');
      }
      window.scrollTo(0, 0);
    } else {
      if (res.errorField === 'email') {
        setEmailError(res.message);
      } else if (res.errorField === 'password') {
        setPasswordError(res.message);
      } else {
        showToast(res.message, 'error');
      }
    }
  };

  const fillDemoAccount = () => {
    setEmail('mitchell.admin@quickcourt.com');
    setPassword('Password@123');
    setEmailError('');
    setPasswordError('');
    showToast('Loaded demo credentials for Mitchell Admin', 'info');
  };

  return (
    <div className="auth-page-container">
      <div className="auth-split-card glass-card">
        
        {/* Left Visual Column (Hidden on Mobile as per SVG note: "In mobile view, hide the image section; all other elements and layout should remain unchanged.") */}
        <div className="auth-visual-col hide-on-mobile">
          <img 
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80" 
            alt="Basketball Court Game" 
            className="auth-hero-img"
          />
          <div className="auth-visual-overlay">
            <div className="auth-quote-box">
              <span className="quote-badge">⚡ INSTANT BOOKING</span>
              <h3 className="quote-heading">"The easiest way to book badminton & football courts in seconds."</h3>
              <p className="quote-author">Over 15,000+ local sports matches played this month</p>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="auth-form-col">
          
          {/* Logo & Screen Title from SVG */}
          <div className="auth-form-header">
            <div className="brand-logo" onClick={() => setActivePage('home')}>
              <div className="logo-badge">
                <span className="logo-court-icon">⚡</span>
              </div>
              <span className="logo-title">QUICKCOURT</span>
            </div>
            
            {/* Screen Title from SVG */}
            <h2 className="auth-heading">LOGIN</h2>
            <p className="auth-subtext">Access your court bookings, team matches, and profile.</p>
          </div>

          {/* Quick Demo Pill */}
          <button 
            type="button" 
            className="demo-account-pill flex items-center justify-between"
            onClick={fillDemoAccount}
          >
            <div className="flex items-center gap-sm">
              <Sparkles size={14} color="#10B981" />
              <span>Click to auto-fill Mitchell Admin credentials</span>
            </div>
            <span className="demo-pill-badge">Fill</span>
          </button>

          <form onSubmit={handleSubmit} className="auth-main-form">
            
            {/* Field 1: Email from SVG */}
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="form-control-wrapper">
                <input 
                  type="email"
                  className={`form-input ${emailError ? 'has-error' : ''}`}
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                  required
                />
              </div>
              {emailError && (
                <div className="form-error">
                  <AlertCircle size={14} />
                  <span>{emailError}</span>
                </div>
              )}
            </div>

            {/* Field 2: Password with Eye toggle 👁 from SVG */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="form-control-wrapper">
                <input 
                  type={showPassword ? "text" : "password"}
                  className={`form-input ${passwordError ? 'has-error' : ''}`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                  required
                />
                <button 
                  type="button" 
                  className="input-icon-btn" 
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Password Error & Rule requirement from SVG */}
              {passwordError ? (
                <div className="form-error">
                  <AlertCircle size={14} />
                  <span>{passwordError}</span>
                </div>
              ) : (
                <span className="form-hint">
                  Use 8–20 characters with uppercase, number, and symbol (@, #)
                </span>
              )}
            </div>

            {/* Forgot Password Link from SVG */}
            <div className="flex justify-end" style={{ marginBottom: 20 }}>
              <button 
                type="button" 
                className="forgot-pass-link"
                onClick={() => setIsForgotModalOpen(true)}
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              className="btn btn-primary btn-lg auth-submit-btn"
              disabled={loading}
            >
              <LogIn size={18} />
              <span>{loading ? 'Logging in...' : 'Login'}</span>
            </button>

            {/* Sign Up Redirect link from SVG */}
            <div className="auth-switch-prompt flex items-center justify-center gap-sm">
              <span>Don't have an account?</span>
              <button 
                type="button" 
                className="auth-switch-link"
                onClick={() => { setActivePage('signup'); window.scrollTo(0, 0); }}
              >
                Sign up
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* Forgot Password Modal from SVG */}
      <ForgotPasswordModal 
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
      />

      <style>{`
        .auth-page-container {
          min-height: calc(100vh - var(--header-height) - 100px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .auth-split-card {
          width: 100%;
          max-width: 960px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: rgba(15, 23, 42, 0.85);
        }

        .auth-visual-col {
          position: relative;
          background: #1e293b;
          overflow: hidden;
          min-height: 520px;
        }

        .auth-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .auth-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 17, 32, 0.95) 0%, rgba(11, 17, 32, 0.3) 100%);
          display: flex;
          align-items: flex-end;
          padding: 40px;
        }

        .quote-badge {
          font-size: 0.72rem;
          font-weight: 800;
          color: #10B981;
          background: rgba(16, 185, 129, 0.15);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          letter-spacing: 0.08em;
          display: inline-block;
          margin-bottom: 12px;
        }

        .quote-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #f8fafc;
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .quote-author {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .auth-form-col {
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .auth-form-header {
          margin-bottom: 24px;
        }

        .auth-heading {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: 0.04em;
          margin: 16px 0 4px;
        }

        .auth-subtext {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .demo-account-pill {
          width: 100%;
          background: rgba(16, 185, 129, 0.1);
          border: 1px dashed rgba(16, 185, 129, 0.4);
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.78rem;
          color: #34d399;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: left;
        }

        .demo-account-pill:hover {
          background: rgba(16, 185, 129, 0.18);
        }

        .demo-pill-badge {
          background: var(--primary);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
        }

        .forgot-pass-link {
          font-size: 0.82rem;
          color: var(--primary);
          font-weight: 600;
        }

        .forgot-pass-link:hover {
          text-decoration: underline;
        }

        .auth-submit-btn {
          width: 100%;
          margin-bottom: 20px;
        }

        .auth-switch-prompt {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .auth-switch-link {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.9rem;
        }

        .auth-switch-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .auth-split-card {
            grid-template-columns: 1fr;
          }
          .auth-form-col {
            padding: 30px 24px;
          }
        }
      `}</style>
    </div>
  );
}
