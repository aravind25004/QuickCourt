import React, { useState } from 'react';
import { useAuth, validatePassword } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { 
  Camera, 
  Eye, 
  EyeOff, 
  UserPlus, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export default function SignUpPage({ setActivePage }) {
  const { startSignUp } = useAuth();
  const { showToast } = useToast();

  const [role, setRole] = useState('Player'); // 'Player' or 'Facility Owner'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarError, setAvatarError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');
  const [loading, setLoading] = useState(false);

  // Profile Image Upload with <1MB check matching SVG annotation
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      setAvatarError('Oops! The image is too large. Please upload an image smaller than 1 MB');
      showToast('Oops! The image is too large. Please upload an image smaller than 1 MB', 'error');
      return;
    }

    setAvatarError('');
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
      showToast('Profile image uploaded', 'info');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setConfirmPassError('');

    // Check name
    if (!name.trim()) {
      showToast('Please enter your full name', 'error');
      return;
    }

    // Check password rules from SVG
    const passCheck = validatePassword(password);
    if (!passCheck.isValid) {
      setPasswordError(passCheck.message);
      return;
    }

    // Check confirm password
    if (password !== confirmPassword) {
      setConfirmPassError('Passwords do not match');
      return;
    }

    setLoading(true);
    const res = startSignUp({
      name,
      email,
      role,
      avatar,
      password
    });
    setLoading(false);

    if (res.success) {
      showToast('Verification code sent to your email!', 'success');
      setActivePage('verify-email');
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

  return (
    <div className="auth-page-container">
      <div className="auth-split-card glass-card">
        
        {/* Left Visual Column (Hidden on Mobile) */}
        <div className="auth-visual-col hide-on-mobile">
          <img 
            src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=80" 
            alt="Badminton Arena" 
            className="auth-hero-img"
          />
          <div className="auth-visual-overlay">
            <div className="auth-quote-box">
              <span className="quote-badge">🏸 JOIN THE COMMUNITY</span>
              <h3 className="quote-heading">"Find nearby games, book courts with friends, and join local tournaments."</h3>
              <p className="quote-author">Join 50,000+ players across India on QuickCourt</p>
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
            <h2 className="auth-heading">SIGN UP</h2>
            <p className="auth-subtext">Create your player or facility owner account.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-main-form">
            
            {/* Field: Profile Picture from SVG */}
            <div className="profile-pic-uploader flex items-center gap-md">
              <div className="avatar-preview-box">
                <img 
                  src={avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'} 
                  alt="Profile" 
                  className="avatar-img" 
                />
                <label className="avatar-upload-badge" title="Upload Photo">
                  <Camera size={13} color="#ffffff" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    style={{ display: 'none' }} 
                    onChange={handleAvatarUpload}
                  />
                </label>
              </div>

              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                  Profile Picture (Optional)
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  Upload image smaller than 1 MB
                </div>
                {avatarError && (
                  <div className="form-error" style={{ marginTop: 4 }}>
                    <AlertCircle size={13} />
                    <span>{avatarError}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Field: Sign up as (Dropdown with Player / Facility Owner) from SVG */}
            <div className="form-group">
              <label className="form-label">Sign up as</label>
              <div className="form-control-wrapper">
                <select 
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Player">Player (Find & Book Courts)</option>
                  <option value="Facility Owner">Facility Owner (List & Manage Venues)</option>
                </select>
              </div>
            </div>

            {/* Field: Full Name from SVG */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="form-control-wrapper">
                <input 
                  type="text"
                  className="form-input"
                  placeholder="e.g. Mitchell Admin"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Field: Email with uniqueness check from SVG */}
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

            {/* Field: Password with 👁 and 8-20 rule from SVG */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="form-control-wrapper">
                <input 
                  type={showPassword ? "text" : "password"}
                  className={`form-input ${passwordError ? 'has-error' : ''}`}
                  placeholder="Create a strong password"
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

              {passwordError ? (
                <div className="form-error">
                  <AlertCircle size={14} />
                  <span>{passwordError}</span>
                </div>
              ) : (
                <span className="form-hint">
                  Use 8–20 characters with at least one uppercase letter, one number, and one special symbol like @ or #
                </span>
              )}
            </div>

            {/* Field: Confirm Password from SVG */}
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="form-control-wrapper">
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  className={`form-input ${confirmPassError ? 'has-error' : ''}`}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setConfirmPassError(''); }}
                  required
                />
                <button 
                  type="button" 
                  className="input-icon-btn" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {confirmPassError && (
                <div className="form-error">
                  <AlertCircle size={14} />
                  <span>{confirmPassError}</span>
                </div>
              )}
            </div>

            {/* Sign Up Button from SVG */}
            <button 
              type="submit" 
              className="btn btn-primary btn-lg auth-submit-btn"
              disabled={loading}
              style={{ marginTop: 12 }}
            >
              <UserPlus size={18} />
              <span>{loading ? 'Creating Account...' : 'Sign Up'}</span>
            </button>

            {/* Already have an account? Log in from SVG */}
            <div className="auth-switch-prompt flex items-center justify-center gap-sm">
              <span>Already have an account?</span>
              <button 
                type="button" 
                className="auth-switch-link"
                onClick={() => { setActivePage('login'); window.scrollTo(0, 0); }}
              >
                Log in
              </button>
            </div>

          </form>

        </div>

      </div>

      <style>{`
        .profile-pic-uploader {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 18px;
        }

        .avatar-preview-box {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid var(--primary);
          flex-shrink: 0;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .avatar-upload-badge {
          position: absolute;
          bottom: -2px;
          right: -2px;
          background: var(--primary);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2px solid var(--bg-secondary);
        }
      `}</style>
    </div>
  );
}
