import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { User, Building2, ShieldCheck, Sparkles } from 'lucide-react';

export default function RoleSwitcherBar({ activeRole, setActiveRole, setActivePage }) {
  const { user, updateProfile } = useAuth();
  const { showToast } = useToast();

  const handleSwitchRole = (newRole) => {
    setActiveRole(newRole);
    if (user) {
      updateProfile({ role: newRole });
    }

    if (newRole === 'Facility Owner') {
      setActivePage('owner-dashboard');
      showToast('Switched to Facility Owner portal', 'info');
    } else if (newRole === 'Admin') {
      setActivePage('admin-dashboard');
      showToast('Switched to Admin management portal', 'info');
    } else {
      setActivePage('home');
      showToast('Switched to Player / User view', 'info');
    }
  };

  return (
    <div className="role-switcher-banner">
      <div className="container flex items-center justify-between">
        
        <div className="flex items-center gap-sm hide-on-mobile">
          <Sparkles size={14} color="#10B981" />
          <span className="role-banner-label">
            QuickCourt Role Simulator:
          </span>
          <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
            Toggle between roles to test all platform features
          </span>
        </div>

        {/* 3 Role Selection Pills */}
        <div className="role-pills-group flex gap-sm">
          <button
            className={`role-pill-btn ${activeRole === 'Player' || activeRole === 'User' ? 'active' : ''}`}
            onClick={() => handleSwitchRole('Player')}
          >
            <User size={13} />
            <span>Player (User)</span>
          </button>

          <button
            className={`role-pill-btn ${activeRole === 'Facility Owner' ? 'active' : ''}`}
            onClick={() => handleSwitchRole('Facility Owner')}
          >
            <Building2 size={13} />
            <span>Facility Owner</span>
          </button>

          <button
            className={`role-pill-btn ${activeRole === 'Admin' ? 'active' : ''}`}
            onClick={() => handleSwitchRole('Admin')}
          >
            <ShieldCheck size={13} />
            <span>Admin</span>
          </button>
        </div>

      </div>

      <style>{`
        .role-switcher-banner {
          background: #060b17;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          padding: 6px 0;
          font-size: 0.8rem;
          z-index: 120;
          position: relative;
        }

        .role-banner-label {
          font-weight: 700;
          color: #10B981;
        }

        .role-pills-group {
          flex-wrap: wrap;
        }

        .role-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 600;
          color: #94a3b8;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .role-pill-btn:hover {
          color: #f8fafc;
          border-color: rgba(16, 185, 129, 0.3);
        }

        .role-pill-btn.active {
          background: rgba(16, 185, 129, 0.2);
          color: #10B981;
          border-color: #10B981;
          font-weight: 700;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.25);
        }
      `}</style>
    </div>
  );
}
