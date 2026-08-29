import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import LineBarChart from '../common/Charts/LineBarChart';
import DoughnutChart from '../common/Charts/DoughnutChart';
import { 
  Users, 
  Building2, 
  Calendar, 
  Grid, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function AdminDashboard({ onNavigateTab }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    adminService.getDashboardStats().then(setStats);
  }, []);

  if (!stats) return <div style={{ padding: 40, textAlign: 'center' }}>Loading system analytics...</div>;

  return (
    <div className="admin-dashboard-view flex-col gap-lg">
      
      {/* Global Stat KPI Cards */}
      <div className="admin-kpi-grid">
        
        {/* KPI 1: Total Users */}
        <div className="kpi-card glass-card">
          <div className="flex justify-between items-start">
            <div>
              <span className="kpi-label">Total Players (Users)</span>
              <h3 className="kpi-value">{stats.totalUsers}</h3>
            </div>
            <div className="kpi-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>
              <Users size={22} />
            </div>
          </div>
          <div className="kpi-sub flex items-center gap-sm" style={{ color: '#34d399' }}>
            <TrendingUp size={13} />
            <span>+32% MoM growth</span>
          </div>
        </div>

        {/* KPI 2: Total Facility Owners */}
        <div className="kpi-card glass-card">
          <div className="flex justify-between items-start">
            <div>
              <span className="kpi-label">Facility Owners</span>
              <h3 className="kpi-value">{stats.totalOwners}</h3>
            </div>
            <div className="kpi-icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06B6D4' }}>
              <Building2 size={22} />
            </div>
          </div>
          <div className="kpi-sub flex items-center gap-sm" style={{ color: '#38bdf8' }}>
            <span>Verified arena partners</span>
          </div>
        </div>

        {/* KPI 3: Total Bookings */}
        <div className="kpi-card glass-card">
          <div className="flex justify-between items-start">
            <div>
              <span className="kpi-label">Total Bookings</span>
              <h3 className="kpi-value">{stats.totalBookings}</h3>
            </div>
            <div className="kpi-icon-box" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
              <Calendar size={22} />
            </div>
          </div>
          <div className="kpi-sub flex items-center gap-sm" style={{ color: '#fbbf24' }}>
            <span>Matches facilitated</span>
          </div>
        </div>

        {/* KPI 4: Pending Approvals */}
        <div 
          className="kpi-card glass-card pointer-kpi"
          onClick={() => onNavigateTab('approvals')}
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="kpi-label">Pending Approvals</span>
              <h3 className="kpi-value" style={{ color: stats.pendingApprovalsCount > 0 ? '#F59E0B' : '#10B981' }}>
                {stats.pendingApprovalsCount}
              </h3>
            </div>
            <div className="kpi-icon-box" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
              <AlertCircle size={22} />
            </div>
          </div>
          <div className="kpi-sub flex items-center gap-sm" style={{ color: '#F59E0B' }}>
            <span>Click to review submissions &rarr;</span>
          </div>
        </div>

      </div>

      {/* Global Charts Main Grid */}
      <div className="charts-main-grid">
        
        <div className="chart-col-span-2">
          <LineBarChart 
            data={stats.userTrends.map(t => ({ month: t.month, bookings: t.players }))}
            title="User Registration Trends (Monthly Growth)"
            valuePrefix=""
            height={260}
          />
        </div>

        <div className="chart-col">
          <DoughnutChart 
            data={stats.mostActiveSports}
            title="Most Active Sports Distribution"
          />
        </div>

      </div>

      {/* Revenue Simulation Chart */}
      <div>
        <LineBarChart 
          data={stats.monthlyRevenue.map(r => ({ month: r.month, bookings: r.revenue }))}
          title="Platform Gross Booking Volume (INR ₹)"
          valuePrefix="₹"
          height={240}
        />
      </div>

      <style>{`
        .admin-kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .pointer-kpi {
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pointer-kpi:hover {
          transform: translateY(-2px);
          border-color: rgba(245, 158, 11, 0.5);
        }
      `}</style>
    </div>
  );
}
