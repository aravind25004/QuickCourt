import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Camera, Eye, EyeOff, Lock, User, Mail, Save, AlertCircle } from 'lucide-react';

export default function EditProfileTab() {
  const { user, updateProfile } = useAuth();
  const { showToast } = useToast();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [avatarError, setAvatarError] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  // Profile Image Upload with <1MB check as in SVG
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 1 MB = 1024 * 1024 bytes = 1,048,576 bytes
    if (file.size > 1024 * 1024) {
      setAvatarError('Oops! The image is too large. Please upload an image smaller than 1 MB');
      showToast('Oops! The image is too large. Please upload an image smaller than 1 MB', 'error');
      return;
    }

    setAvatarError('');
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
      showToast('Profile picture preview updated', 'info');
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setPasswordError('');
    setEmailError('');

    if (newPassword) {
      if (newPassword !== confirmPassword) {
        setPasswordError('New passwords do not match');
        return;
      }
    }

    setLoading(true);
    const res = updateProfile({
      name,
      email,
      avatar,
      oldPassword: oldPassword || undefined,
      newPassword: newPassword || undefined
    });
    setLoading(false);

    if (res.success) {
      showToast('Profile changes saved successfully!', 'success');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      if (res.errorField === 'oldPassword' || res.errorField === 'newPassword') {
        setPasswordError(res.message);
      } else if (res.errorField === 'email') {
        setEmailError(res.message);
      }
      showToast(res.message, 'error');
    }
  };

  return (
    <div className="edit-profile-card glass-card">
      <h3 className="tab-title">Edit Profile Information</h3>
      <p className="tab-subtitle">Update your personal account information and manage your password security.</p>

      <form onSubmit={handleSave} className="edit-profile-form">
        
        {/* Profile Picture Upload */}
        <div className="profile-pic-section flex items-center gap-lg">
          <div className="avatar-preview-box">
            <img 
              src={avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80'} 
              alt="Avatar" 
              className="avatar-img"
            />
            <label className="avatar-upload-badge" title="Change picture">
              <Camera size={14} color="#ffffff" />
              <input 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={handleAvatarChange} 
              />
            </label>
          </div>

          <div className="avatar-instructions">
            <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>Profile Picture</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Upload JPG, PNG or WebP. <strong>Max size: 1 MB</strong>
            </div>
            {avatarError && (
              <div className="form-error" style={{ marginTop: 6 }}>
                <AlertCircle size={14} />
                <span>{avatarError}</span>
              </div>
            )}
          </div>
        </div>

        <div className="form-grid-2">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="form-control-wrapper">
              <input 
                type="text" 
                className="form-input" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <div className="form-control-wrapper">
              <input 
                type="email" 
                className={`form-input ${emailError ? 'has-error' : ''}`} 
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
        </div>

        {/* Change Password Section */}
        <div className="password-update-section">
          <div className="flex items-center gap-sm" style={{ marginBottom: 16 }}>
            <Lock size={16} color="#10B981" />
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>Change Password (Optional)</h4>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Old Password</label>
              <div className="form-control-wrapper">
                <input 
                  type={showOldPass ? "text" : "password"} 
                  className="form-input" 
                  placeholder="Enter current password"
                  value={oldPassword} 
                  onChange={(e) => setOldPassword(e.target.value)} 
                />
                <button 
                  type="button" 
                  className="input-icon-btn" 
                  onClick={() => setShowOldPass(!showOldPass)}
                  aria-label="Toggle password visibility"
                >
                  {showOldPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">New Password</label>
              <div className="form-control-wrapper">
                <input 
                  type={showNewPass ? "text" : "password"} 
                  className="form-input" 
                  placeholder="8-20 chars, 1 uppercase, 1 number, 1 symbol"
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                />
                <button 
                  type="button" 
                  className="input-icon-btn" 
                  onClick={() => setShowNewPass(!showNewPass)}
                  aria-label="Toggle password visibility"
                >
                  {showNewPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          {newPassword && (
            <div className="form-group">
              <label className="form-label">Confirm New Password</label>
              <div className="form-control-wrapper">
                <input 
                  type={showNewPass ? "text" : "password"} 
                  className="form-input" 
                  placeholder="Re-enter new password"
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                />
              </div>
            </div>
          )}

          {passwordError && (
            <div className="form-error" style={{ marginBottom: 16 }}>
              <AlertCircle size={14} />
              <span>{passwordError}</span>
            </div>
          )}
        </div>

        {/* Submit */}
        <div style={{ marginTop: 24 }}>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            <Save size={16} />
            <span>{loading ? 'Saving Changes...' : 'Save Profile Changes'}</span>
          </button>
        </div>

      </form>

      <style>{`
        .edit-profile-card {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .tab-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .tab-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 28px;
        }

        .profile-pic-section {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 20px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        .avatar-preview-box {
          position: relative;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          border: 3px solid var(--primary);
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
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2px solid var(--bg-secondary);
          transition: transform 0.2s ease;
        }

        .avatar-upload-badge:hover {
          transform: scale(1.1);
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .password-update-section {
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid var(--border-subtle);
          padding: 20px;
          border-radius: var(--radius-md);
          margin-top: 12px;
        }

        @media (max-width: 650px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
          .edit-profile-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
