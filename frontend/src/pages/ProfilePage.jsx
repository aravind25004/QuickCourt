import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';
import EditProfileTab from '../components/profile/EditProfileTab';
import BookingsListTab from '../components/profile/BookingsListTab';
import { 
  User, 
  Calendar, 
  ShieldCheck, 
  MapPin, 
  LogOut, 
  Trophy,
  Award
} from 'lucide-react';

export default function ProfilePage({ setActivePage }) {
  const { user, logout } = useAuth();
  const { bookings } = useBooking();
  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' or 'editProfile'

  if (!user) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#f8fafc', marginBottom: 16 }}>Please log in to view your profile</h2>
        <button className="btn btn-primary" onClick={() => setActivePage('login')}>
          Go to Login
        </button>
      </div>
    );
  }

  const confirmedCount = bookings.filter(b => b.status === 'Confirmed').length;

  return (
    <div className="profile-page-wrapper">
      <div className="container">
        
        {/* User Hero Banner */}
        <div className="profile-banner-card glass-card flex items-center justify-between">
          <div className="flex items-center gap-md">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="banner-avatar-img"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80'; }}
            />
            <div>
              <div className="flex items-center gap-sm">
                <h1 className="banner-user-name">{user.name}</h1>
                <span className="banner-role-tag">{user.role || 'Player'}</span>
              </div>
              <p className="banner-user-email">{user.email}</p>
              <div className="banner-stats-pills flex items-center gap-sm" style={{ marginTop: 6 }}>
                <span className="stat-badge flex items-center gap-sm">
                  <Trophy size={13} color="#10B981" />
                  <span>{confirmedCount} Active Bookings</span>
                </span>
                <span className="stat-badge flex items-center gap-sm">
                  <Award size={13} color="#F59E0B" />
                  <span>Member since {user.memberSince || 'June 2025'}</span>
                </span>
              </div>
            </div>
          </div>

          <button 
            className="btn btn-secondary hide-on-mobile"
            onClick={() => { setActivePage('venues'); window.scrollTo(0, 0); }}
          >
            <Calendar size={16} />
            <span>Book a Venue</span>
          </button>
        </div>

        {/* Profile Content 2-Column Layout */}
        <div className="profile-layout-grid">
          
          {/* Left Navigation Sidebar from SVG */}
          <aside className="profile-sidebar-card glass-card">
            <div className="sidebar-section-title">Dashboard Menu</div>
            
            <div className="sidebar-nav-list flex-col gap-sm">
              <button
                className={`profile-nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
                onClick={() => setActiveTab('bookings')}
              >
                <Calendar size={16} />
                <span>All Bookings</span>
              </button>

              <button
                className={`profile-nav-item ${activeTab === 'editProfile' ? 'active' : ''}`}
                onClick={() => setActiveTab('editProfile')}
              >
                <User size={16} />
                <span>Edit Profile</span>
              </button>
            </div>

            <div className="sidebar-divider" />

            <button 
              className="profile-nav-item logout-nav-item"
              onClick={() => {
                logout();
                setActivePage('home');
              }}
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </aside>

          {/* Right Content Tab */}
          <main className="profile-tab-content">
            {activeTab === 'bookings' && (
              <BookingsListTab onExploreVenues={() => setActivePage('venues')} />
            )}
            {activeTab === 'editProfile' && (
              <EditProfileTab />
            )}
          </main>

        </div>

      </div>

      <style>{`
        .profile-page-wrapper {
          padding: 30px 0 60px;
        }

        .profile-banner-card {
          padding: 28px 32px;
          border-radius: var(--radius-lg);
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .banner-avatar-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--primary);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
        }

        .banner-user-name {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .banner-role-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 2px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .banner-user-email {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .banner-stats-pills {
          flex-wrap: wrap;
        }

        .stat-badge {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(30, 41, 59, 0.6);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
        }

        .profile-layout-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
          align-items: start;
        }

        .profile-sidebar-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          position: sticky;
          top: 96px;
        }

        .sidebar-section-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          padding-left: 8px;
        }

        .profile-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-muted);
          text-align: left;
          transition: all 0.2s ease;
        }

        .profile-nav-item:hover {
          background: var(--bg-card-hover);
          color: var(--text-main);
        }

        .profile-nav-item.active {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.35);
          font-weight: 700;
        }

        .sidebar-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 12px 0;
        }

        .logout-nav-item:hover {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }

        @media (max-width: 860px) {
          .profile-layout-grid {
            grid-template-columns: 1fr;
          }
          .profile-banner-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
