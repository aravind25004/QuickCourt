import React, { useState } from 'react';
import AdminDashboard from '../components/admin/AdminDashboard';
import FacilityApprovals from '../components/admin/FacilityApprovals';
import UserManagement from '../components/admin/UserManagement';
import ReportsModeration from '../components/admin/ReportsModeration';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Building2, 
  Users, 
  Flag, 
  Sparkles
} from 'lucide-react';

export default function AdminDashboardPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'approvals', 'users', 'reports'

  return (
    <div className="admin-portal-page">
      <div className="container">
        
        {/* Top Header Banner */}
        <div className="admin-portal-header glass-card flex items-center justify-between">
          <div>
            <div className="flex items-center gap-sm">
              <span className="admin-portal-tag">SYSTEM ADMINISTRATOR</span>
              <span className="admin-status-indicator">● Superadmin Root Mode</span>
            </div>
            <h1 className="portal-heading">Platform Administration</h1>
            <p className="portal-sub">Oversee multi-city turf facilities, approve pending registrations, and moderate accounts.</p>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="admin-tab-nav-bar flex gap-sm">
          <button 
            className={`admin-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={15} />
            <span>Platform Overview</span>
          </button>

          <button 
            className={`admin-tab-btn ${activeTab === 'approvals' ? 'active' : ''}`}
            onClick={() => setActiveTab('approvals')}
          >
            <Building2 size={15} />
            <span>Facility Approvals</span>
          </button>

          <button 
            className={`admin-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <Users size={15} />
            <span>User Management</span>
          </button>

          <button 
            className={`admin-tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <Flag size={15} />
            <span>Reports & Moderation</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="admin-content-area" style={{ marginTop: 24 }}>
          {activeTab === 'overview' && <AdminDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'approvals' && <FacilityApprovals />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'reports' && <ReportsModeration />}
        </div>

      </div>

      <style>{`
        .admin-portal-page {
          padding: 30px 0 60px;
        }

        .admin-portal-header {
          padding: 24px 32px;
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
        }

        .admin-portal-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: #F59E0B;
          background: rgba(245, 158, 11, 0.15);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.06em;
        }

        .admin-status-indicator {
          font-size: 0.78rem;
          color: #10B981;
          font-weight: 600;
        }

        .portal-heading {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-main);
          margin: 6px 0 4px;
        }

        .portal-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .admin-tab-nav-bar {
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .admin-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.88rem;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .admin-tab-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-main);
        }

        .admin-tab-btn.active {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
          border-color: #F59E0B;
          color: #fbbf24;
          font-weight: 700;
          box-shadow: 0 0 12px rgba(245, 158, 11, 0.25);
        }
      `}</style>
    </div>
  );
}
