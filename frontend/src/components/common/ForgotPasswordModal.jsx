import React, { useState } from 'react';
import Modal from './Modal';
import { useToast } from '../../context/ToastContext';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export default function ForgotPasswordModal({ isOpen, onClose }) {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
      showToast(`Password reset link sent to ${email}`, 'success');
    }, 800);
  };

  const handleReset = () => {
    setIsSent(false);
    setEmail('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title="Reset Your Password">
      {isSent ? (
        <div style={{ textAlign: 'center', padding: '10px 0' }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <CheckCircle2 size={32} color="#10B981" />
          </div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: 8, color: '#f8fafc' }}>Reset Link Sent!</h4>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: 24, lineHeight: 1.5 }}>
            We’ve sent a secure password reset link to <strong style={{ color: '#10B981' }}>{email}</strong>. 
            Please check your inbox or spam folder.
          </p>
          <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleReset}>
            Back to Login
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: 20, lineHeight: 1.5 }}>
            Enter your registered email address and we'll send you an instant link to securely reset your password.
          </p>

          <div className="form-group">
            <label className="form-label">Registered Email</label>
            <div className="form-control-wrapper">
              <input 
                type="email"
                className="form-input"
                placeholder="e.g. mitchell@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
          </div>

          <div className="flex gap-sm" style={{ marginTop: 24 }}>
            <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }} disabled={loading}>
              <Send size={15} />
              <span>{loading ? 'Sending...' : 'Send Reset Link'}</span>
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
