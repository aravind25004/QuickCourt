import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCity } from '../../context/CityContext';
import { useToast } from '../../context/ToastContext';
import { 
  MapPin, 
  ChevronDown, 
  User, 
  LogOut, 
  Calendar, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onNavigateVenue }) {
  const { user, isAuthenticated, logout } = useAuth();
  const { 
    selectedCity, 
    setSelectedCity, 
    cities, 
    currentCityObj, 
    detectLocation, 
    isDetectingLocation 
  } = useCity();
  const { showToast } = useToast();

  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const cityDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const filteredCities = cities.filter(c => 
    !citySearchQuery ||
    c.name.toLowerCase().includes(citySearchQuery.toLowerCase()) ||
    c.state.toLowerCase().includes(citySearchQuery.toLowerCase()) ||
    c.region?.toLowerCase().includes(citySearchQuery.toLowerCase())
  );

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(e.target)) {
        setIsCityMenuOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target)) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    setIsMobileNavOpen(false);
    showToast('Logged out successfully', 'info');
    setActivePage('home');
  };

  const navTo = (page, param = null) => {
    setActivePage(page);
    setIsMobileNavOpen(false);
    setIsProfileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-wrapper">
      <div className="container flex items-center justify-between" style={{ height: '100%' }}>
        
        {/* Brand Logo */}
        <div className="flex items-center gap-md">
          <div 
            onClick={() => navTo('home')} 
            className="brand-logo"
            role="button"
            tabIndex={0}
          >
            <div className="logo-badge">
              <span className="logo-court-icon">⚡</span>
            </div>
            <div className="logo-text-group">
              <span className="logo-title">QUICKCOURT</span>
              <span className="logo-subtitle">LOCAL SPORTS BOOKING</span>
            </div>
          </div>

          {/* Pan-India City Selector Dropdown */}
          <div className="city-selector-wrapper" ref={cityDropdownRef}>
            <button 
              className="city-btn"
              onClick={() => setIsCityMenuOpen(!isCityMenuOpen)}
              aria-expanded={isCityMenuOpen}
              aria-label="Select location"
            >
              <MapPin size={16} className="city-icon" />
              <span className="city-name">{currentCityObj.name}</span>
              <ChevronDown size={14} className={`city-arrow ${isCityMenuOpen ? 'rotate' : ''}`} />
            </button>

            {isCityMenuOpen && (
              <div className="city-dropdown-menu pan-india-city-menu">
                {/* Search & GPS Location Box */}
                <div className="city-search-box">
                  <input
                    type="text"
                    className="form-input city-search-input"
                    placeholder="Search 30+ Indian cities..."
                    value={citySearchQuery}
                    onChange={(e) => setCitySearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>

                {/* GPS Detect Location Button */}
                <button
                  type="button"
                  className="gps-detect-city-btn flex items-center justify-between"
                  onClick={async () => {
                    const res = await detectLocation();
                    if (res.success) {
                      showToast(`Detected location: ${res.location.cityName}!`, 'success');
                      setIsCityMenuOpen(false);
                    } else {
                      showToast(res.error || 'Could not access GPS location', 'error');
                    }
                  }}
                  disabled={isDetectingLocation}
                >
                  <div className="flex items-center gap-sm">
                    <span className="gps-radar-icon">📍</span>
                    <span style={{ fontWeight: 700, color: '#38bdf8' }}>
                      {isDetectingLocation ? 'Detecting GPS...' : 'Use My Current Location'}
                    </span>
                  </div>
                  <span className="gps-badge">GPS</span>
                </button>

                {/* Metro Quick Pills */}
                <div className="metro-pills-row flex flex-wrap gap-xs">
                  {cities.filter(c => c.isMetro).slice(0, 6).map(metro => (
                    <button
                      key={metro.id}
                      type="button"
                      className={`metro-chip ${metro.id === selectedCity ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCity(metro.id);
                        setIsCityMenuOpen(false);
                        setCitySearchQuery('');
                        showToast(`City changed to ${metro.name}`, 'info');
                      }}
                    >
                      {metro.name}
                    </button>
                  ))}
                </div>

                <div className="dropdown-header-label" style={{ marginTop: 8 }}>
                  {citySearchQuery ? 'Matching Cities' : 'All Indian Cities'}
                </div>

                {/* Scrollable Cities List */}
                <div className="cities-scroll-list">
                  {filteredCities.map(city => (
                    <button
                      key={city.id}
                      className={`city-option-item ${city.id === selectedCity ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCity(city.id);
                        setIsCityMenuOpen(false);
                        setCitySearchQuery('');
                        showToast(`City changed to ${city.name}`, 'info');
                      }}
                    >
                      <div className="flex items-center gap-sm">
                        <MapPin size={14} color={city.id === selectedCity ? '#10B981' : '#94A3B8'} />
                        <span style={{ fontWeight: city.id === selectedCity ? 700 : 500 }}>{city.name}</span>
                      </div>
                      <span className="city-state-pill">{city.state}</span>
                    </button>
                  ))}

                  {filteredCities.length === 0 && (
                    <div style={{ padding: '16px 10px', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
                      No city found matching "{citySearchQuery}"
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links flex items-center gap-md">
          <button 
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => navTo('home')}
          >
            Home
          </button>
          
          <button 
            className={`nav-link ${activePage === 'venues' ? 'active' : ''}`}
            onClick={() => navTo('venues')}
          >
            Explore Venues
          </button>

          {/* Role specific quick portal links */}
          {user?.role === 'Facility Owner' && (
            <button 
              className={`nav-link ${activePage === 'owner-dashboard' ? 'active' : ''}`}
              onClick={() => navTo('owner-dashboard')}
            >
              🏢 Owner Portal
            </button>
          )}

          {user?.role === 'Admin' && (
            <button 
              className={`nav-link ${activePage === 'admin-dashboard' ? 'active' : ''}`}
              onClick={() => navTo('admin-dashboard')}
            >
              🛡️ Admin Portal
            </button>
          )}

          <button 
            className="btn btn-primary btn-sm book-cta-btn"
            onClick={() => navTo('venues')}
          >
            <Calendar size={15} />
            <span>Book Court</span>
          </button>

          {/* Auth State / Profile Dropdown */}
          {isAuthenticated ? (
            <div className="profile-dropdown-wrapper" ref={profileDropdownRef}>
              <button 
                className="profile-trigger-btn"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                aria-expanded={isProfileMenuOpen}
              >
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="profile-avatar-img"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'; }}
                />
                <span className="profile-user-name">{user.name}</span>
                <ChevronDown size={14} className={`profile-arrow ${isProfileMenuOpen ? 'rotate' : ''}`} />
              </button>

              {isProfileMenuOpen && (
                <div className="profile-dropdown-menu">
                  <div className="profile-menu-header">
                    <div className="flex items-center gap-sm">
                      <img src={user.avatar} alt="" className="menu-header-avatar" />
                      <div>
                        <div className="menu-header-name">{user.name}</div>
                        <div className="menu-header-role">{user.role || 'Player'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-menu-divider" />

                  <button 
                    className="profile-menu-item"
                    onClick={() => navTo('venues')}
                  >
                    <Calendar size={16} />
                    <span>Book Venue</span>
                  </button>

                  <button 
                    className="profile-menu-item"
                    onClick={() => navTo('profile')}
                  >
                    <User size={16} />
                    <span>My Profile & Bookings</span>
                  </button>

                  {user?.role === 'Facility Owner' && (
                    <button 
                      className="profile-menu-item"
                      onClick={() => navTo('owner-dashboard')}
                    >
                      <Sparkles size={16} color="#06B6D4" />
                      <span style={{ color: '#38bdf8', fontWeight: 600 }}>Facility Owner Portal</span>
                    </button>
                  )}

                  {user?.role === 'Admin' && (
                    <button 
                      className="profile-menu-item"
                      onClick={() => navTo('admin-dashboard')}
                    >
                      <ShieldCheck size={16} color="#F59E0B" />
                      <span style={{ color: '#fbbf24', fontWeight: 600 }}>Admin Platform Portal</span>
                    </button>
                  )}

                  <div className="profile-menu-divider" />

                  <button 
                    className="profile-menu-item menu-item-logout"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-sm">
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => navTo('login')}
              >
                Login
              </button>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => navTo('signup')}
              >
                Sign Up
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-hamburger-btn show-on-mobile"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileNavOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileNavOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header flex items-center justify-between">
              <div className="brand-logo" onClick={() => navTo('home')}>
                <div className="logo-badge">
                  <span className="logo-court-icon">⚡</span>
                </div>
                <span className="logo-title">QUICKCOURT</span>
              </div>
              <button onClick={() => setIsMobileNavOpen(false)} className="modal-close">
                <X size={20} />
              </button>
            </div>

            {/* Mobile User Card */}
            {isAuthenticated ? (
              <div className="mobile-user-card" onClick={() => navTo('profile')}>
                <img src={user.avatar} alt="" className="drawer-user-avatar" />
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc' }}>{user.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#10B981' }}>{user.role} • {user.email}</div>
                </div>
              </div>
            ) : (
              <div className="flex gap-sm" style={{ marginBottom: 20 }}>
                <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => navTo('login')}>
                  Login
                </button>
                <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => navTo('signup')}>
                  Sign Up
                </button>
              </div>
            )}

            <div className="drawer-nav-list flex-col gap-sm">
              <button className="drawer-nav-btn" onClick={() => navTo('home')}>
                Home
              </button>
              <button className="drawer-nav-btn" onClick={() => navTo('venues')}>
                Explore Venues
              </button>
              {isAuthenticated && (
                <button className="drawer-nav-btn" onClick={() => navTo('profile')}>
                  My Profile & Bookings
                </button>
              )}
            </div>

            {isAuthenticated && (
              <button 
                className="btn btn-danger" 
                style={{ marginTop: 24, width: '100%' }}
                onClick={handleLogout}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background: rgba(11, 17, 32, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 100;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
        }

        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .logo-court-icon {
          font-size: 1.2rem;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
          background: linear-gradient(to right, #ffffff, #a7f3d0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-subtitle {
          font-size: 0.65rem;
          font-weight: 700;
          color: #10B981;
          letter-spacing: 0.12em;
        }

        .city-selector-wrapper {
          position: relative;
        }

        .city-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 7px 12px;
          border-radius: var(--radius-full);
          color: var(--text-main);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .city-btn:hover {
          background: rgba(51, 65, 85, 0.8);
          border-color: rgba(16, 185, 129, 0.4);
        }

        .city-icon {
          color: var(--primary);
        }

        .city-arrow {
          transition: transform 0.2s ease;
          color: var(--text-muted);
        }

        .city-arrow.rotate {
          transform: rotate(180deg);
        }

        .city-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 320px;
          background: rgba(15, 23, 42, 0.96);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
          padding: 12px;
          z-index: 110;
          animation: slideUp 0.15s ease forwards;
        }

        .city-search-box {
          margin-bottom: 8px;
        }

        .city-search-input {
          padding: 8px 12px;
          font-size: 0.85rem;
          background: rgba(30, 41, 59, 0.8);
        }

        .gps-detect-city-btn {
          width: 100%;
          padding: 8px 12px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          margin-bottom: 10px;
          text-align: left;
          transition: all 0.2s ease;
        }

        .gps-detect-city-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
        }

        .gps-badge {
          background: #38bdf8;
          color: #0b1120;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 4px;
        }

        .metro-pills-row {
          margin-bottom: 8px;
        }

        .metro-chip {
          font-size: 0.72rem;
          font-weight: 600;
          color: #94a3b8;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 3px 8px;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .metro-chip:hover {
          color: #f8fafc;
          border-color: var(--primary);
        }

        .metro-chip.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
        }

        .cities-scroll-list {
          max-height: 240px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-right: 4px;
        }

        .dropdown-header-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 6px;
        }

        .city-option-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: var(--text-main);
          font-weight: 500;
          text-align: left;
        }

        .city-option-item:hover {
          background: var(--bg-tertiary);
          color: var(--primary);
        }

        .city-option-item.active {
          background: var(--primary-light);
          color: var(--primary);
          font-weight: 700;
        }

        .city-state-pill {
          font-size: 0.7rem;
          color: var(--text-dim);
        }

        .desktop-nav-links {
          display: flex;
        }

        .nav-link {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--text-muted);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }

        .nav-link:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: var(--primary);
          background: var(--primary-light);
        }

        .profile-dropdown-wrapper {
          position: relative;
        }

        .profile-trigger-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 5px 12px 5px 6px;
          border-radius: var(--radius-full);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.88rem;
        }

        .profile-trigger-btn:hover {
          border-color: var(--primary);
        }

        .profile-avatar-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary);
        }

        .profile-arrow.rotate {
          transform: rotate(180deg);
        }

        .profile-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          width: 240px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 8px;
          z-index: 110;
          animation: slideUp 0.15s ease forwards;
        }

        .profile-menu-header {
          padding: 10px;
        }

        .menu-header-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
        }

        .menu-header-name {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .menu-header-role {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }

        .profile-menu-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 6px 0;
        }

        .profile-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .profile-menu-item:hover {
          background: var(--bg-tertiary);
          color: var(--primary);
        }

        .menu-item-logout:hover {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }

        .mobile-hamburger-btn {
          color: var(--text-main);
          padding: 8px;
        }

        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          z-index: 200;
        }

        .mobile-drawer-content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 80%;
          max-width: 320px;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-subtle);
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .drawer-header {
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }

        .mobile-user-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          cursor: pointer;
        }

        .drawer-user-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary);
        }

        .drawer-nav-btn {
          width: 100%;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          background: var(--bg-tertiary);
          color: var(--text-main);
          font-weight: 600;
          font-size: 1rem;
          text-align: left;
        }

        .drawer-nav-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .desktop-nav-links {
            display: none;
          }
          .city-btn .city-name {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
