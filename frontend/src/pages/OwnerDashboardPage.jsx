import React, { useState } from 'react';
import OwnerDashboard from '../components/owner/OwnerDashboard';
import FacilityManagement from '../components/owner/FacilityManagement';
import CourtManagement from '../components/owner/CourtManagement';
import SlotManagement from '../components/owner/SlotManagement';
import OwnerBookings from '../components/owner/OwnerBookings';
import { 
  LayoutDashboard, 
  Building2, 
  Grid, 
  Clock, 
  Calendar, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function OwnerDashboardPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'facility', 'courts', 'slots', 'bookings'

  return (
    <div className="owner-portal-page">
      <div className="container">
        
        {/* Top Header Banner */}
        <div className="owner-portal-header glass-card flex items-center justify-between">
          <div>
            <div className="flex items-center gap-sm">
              <span className="owner-portal-tag">FACILITY OWNER PORTAL</span>
              <span className="facility-live-indicator">● SBR Badminton Arena (Active)</span>
            </div>
            <h1 className="portal-heading">Facility Partner Dashboard</h1>
            <p className="portal-sub">Manage courts, monitor real-time revenue, and schedule slot maintenance.</p>
          </div>

          <button 
            className="btn btn-secondary hide-on-mobile"
            onClick={() => setActivePage('venue-detail')}
          >
            <span>View Public Listing</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Tab Navigation Menu */}
        <div className="owner-tab-nav-bar flex gap-sm">
          <button 
            className={`owner-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={15} />
            <span>Dashboard & KPIs</span>
          </button>

          <button 
            className={`owner-tab-btn ${activeTab === 'facility' ? 'active' : ''}`}
            onClick={() => setActiveTab('facility')}
          >
            <Building2 size={15} />
            <span>Facility Details</span>
          </button>

          <button 
            className={`owner-tab-btn ${activeTab === 'courts' ? 'active' : ''}`}
            onClick={() => setActiveTab('courts')}
          >
            <Grid size={15} />
            <span>Court Management</span>
          </button>

          <button 
            className={`owner-tab-btn ${activeTab === 'slots' ? 'active' : ''}`}
            onClick={() => setActiveTab('slots')}
          >
            <Clock size={15} />
            <span>Time Slots & Maintenance</span>
          </button>

          <button 
            className={`owner-tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <Calendar size={15} />
            <span>Customer Bookings</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="owner-content-area" style={{ marginTop: 24 }}>
          {activeTab === 'dashboard' && <OwnerDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'facility' && <FacilityManagement />}
          {activeTab === 'courts' && <CourtManagement />}
          {activeTab === 'slots' && <SlotManagement />}
          {activeTab === 'bookings' && <OwnerBookings />}
        </div>

      </div>

      <style>{`
        .owner-portal-page {
          padding: 30px 0 60px;
        }

        .owner-portal-header {
          padding: 24px 32px;
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
        }

        .owner-portal-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: #06B6D4;
          background: rgba(6, 182, 212, 0.15);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.06em;
        }

        .facility-live-indicator {
          font-size: 0.78rem;
          color: #34d399;
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

        .owner-tab-nav-bar {
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .owner-tab-btn {
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

        .owner-tab-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-main);
        }

        .owner-tab-btn.active {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
          border-color: #06B6D4;
          color: #38bdf8;
          font-weight: 700;
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.25);
        }
      `}</style>
    </div>
  );
}
