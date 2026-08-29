import React, { useState, useEffect } from 'react';
import { ownerService } from '../../services/ownerService';
import LineBarChart from '../common/Charts/LineBarChart';
import DoughnutChart from '../common/Charts/DoughnutChart';
import HeatmapChart from '../common/Charts/HeatmapChart';
import { 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Grid, 
  Clock, 
  Award,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function OwnerDashboard({ onNavigateTab }) {
  const [stats, setStats] = useState(null);
  const [trendView, setTrendView] = useState('weekly');

  useEffect(() => {
    ownerService.getDashboardStats().then(setStats);
  }, []);

  if (!stats) return <div style={{ padding: 40, textAlign: 'center' }}>Loading dashboard analytics...</div>;

  return (
    <div className="owner-dashboard-view flex-col gap-lg">
      
      {/* Welcome & KPI Banner */}
      <div className="owner-kpi-grid">
        
        {/* KPI 1: Total Bookings */}
        <div className="kpi-card glass-card">
          <div className="flex justify-between items-start">
            <div>
              <span className="kpi-label">Total Bookings</span>
              <h3 className="kpi-value">{stats.totalBookings}</h3>
            </div>
            <div className="kpi-icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06B6D4' }}>
              <Calendar size={22} />
            </div>
          </div>
          <div className="kpi-sub flex items-center gap-sm" style={{ color: '#34d399' }}>
            <TrendingUp size={13} />
            <span>+18% from last week</span>
          </div>
        </div>

        {/* KPI 2: Active Courts */}
        <div className="kpi-card glass-card">
          <div className="flex justify-between items-start">
            <div>
              <span className="kpi-label">Active Courts</span>
              <h3 className="kpi-value">{stats.activeCourts}</h3>
            </div>
            <div className="kpi-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>
              <Grid size={22} />
            </div>
          </div>
          <div className="kpi-sub flex items-center gap-sm" style={{ color: '#38bdf8' }}>
            <span>100% Operational status</span>
          </div>
        </div>

        {/* KPI 3: Earnings Simulated */}
        <div className="kpi-card glass-card">
          <div className="flex justify-between items-start">
            <div>
              <span className="kpi-label">Simulated Earnings</span>
              <h3 className="kpi-value">₹{stats.totalEarnings.toLocaleString()}</h3>
            </div>
            <div className="kpi-icon-box" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
              <DollarSign size={22} />
            </div>
          </div>
          <div className="kpi-sub flex items-center gap-sm" style={{ color: '#fbbf24' }}>
            <span>Real-time settled payouts</span>
          </div>
        </div>

        {/* KPI 4: Today's Occupancy */}
        <div className="kpi-card glass-card">
          <div className="flex justify-between items-start">
            <div>
              <span className="kpi-label">Slot Occupancy Rate</span>
              <h3 className="kpi-value">{stats.occupancyRate}</h3>
            </div>
            <div className="kpi-icon-box" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#EC4899' }}>
              <Clock size={22} />
            </div>
          </div>
          <div className="kpi-sub flex items-center gap-sm" style={{ color: '#f472b6' }}>
            <span>Peak evening slots booked</span>
          </div>
        </div>

      </div>

      {/* Analytics Charts Grid */}
      <div className="charts-main-grid">
        
        {/* Chart 1: Booking Trends */}
        <div className="chart-col-span-2">
          <LineBarChart 
            data={stats.bookingTrends}
            title="Daily & Weekly Booking Trends"
            valuePrefix="₹"
            height={260}
          />
        </div>

        {/* Chart 2: Earnings Summary by Sport */}
        <div className="chart-col">
          <DoughnutChart 
            data={stats.earningsBySport}
            title="Revenue Contribution by Sport"
          />
        </div>

      </div>

      {/* Second Row: Peak Booking Hours Heatmap & Quick Action Shortcuts */}
      <div className="charts-secondary-grid">
        
        <div className="chart-col" style={{ flex: 1 }}>
          <HeatmapChart 
            data={stats.peakHours}
            title="Peak Booking Hours & Court Load"
          />
        </div>

        {/* Quick Management Shortcuts */}
        <div className="shortcuts-card glass-card flex-col justify-between" style={{ flex: 1 }}>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', marginBottom: 6 }}>
              Quick Facility Actions
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: 18 }}>
              Manage court pricing, block slots for ground maintenance, or update facility photos.
            </p>

            <div className="shortcuts-buttons-list flex-col gap-sm">
              <button 
                className="shortcut-btn flex items-center justify-between"
                onClick={() => onNavigateTab('slots')}
              >
                <div className="flex items-center gap-sm">
                  <Clock size={16} color="#06B6D4" />
                  <span>Block Slots for Maintenance</span>
                </div>
                <ArrowUpRight size={15} />
              </button>

              <button 
                className="shortcut-btn flex items-center justify-between"
                onClick={() => onNavigateTab('courts')}
              >
                <div className="flex items-center gap-sm">
                  <Grid size={16} color="#10B981" />
                  <span>Add or Edit Court Pricing</span>
                </div>
                <ArrowUpRight size={15} />
              </button>

              <button 
                className="shortcut-btn flex items-center justify-between"
                onClick={() => onNavigateTab('facility')}
              >
                <div className="flex items-center gap-sm">
                  <Sparkles size={16} color="#F59E0B" />
                  <span>Update Amenities & Photos</span>
                </div>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          <div className="portal-help-note flex items-center gap-sm" style={{ marginTop: 18 }}>
            <Award size={16} color="#10B981" />
            <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
              QuickCourt Partner Facility Badge Active
            </span>
          </div>
        </div>

      </div>

      <style>{`
        .owner-kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .kpi-card {
          padding: 20px;
          border-radius: var(--radius-lg);
        }

        .kpi-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .kpi-value {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-main);
          margin-top: 4px;
        }

        .kpi-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kpi-sub {
          font-size: 0.76rem;
          font-weight: 600;
          margin-top: 12px;
        }

        .charts-main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .charts-secondary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .shortcuts-card {
          padding: 24px;
          border-radius: var(--radius-lg);
        }

        .shortcut-btn {
          padding: 12px 16px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .shortcut-btn:hover {
          background: var(--bg-card-hover);
          border-color: rgba(16, 185, 129, 0.4);
          color: var(--primary);
        }

        .portal-help-note {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 10px 14px;
          border-radius: var(--radius-md);
        }

        @media (max-width: 900px) {
          .charts-main-grid, .charts-secondary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
