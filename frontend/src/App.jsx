import React, { useState, useEffect } from 'react';
import { CityProvider } from './context/CityContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { ToastProvider } from './context/ToastContext';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import RoleSwitcherBar from './components/common/RoleSwitcherBar';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import VenuesPage from './pages/VenuesPage';
import VenueDetailPage from './pages/VenueDetailPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import OwnerDashboardPage from './pages/OwnerDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function AppContent() {
  const { user } = useAuth();
  const [activeRole, setActiveRole] = useState(user?.role || 'Player');
  const [activePage, setActivePage] = useState('home');
  const [selectedVenueId, setSelectedVenueId] = useState('sbr-badminton');
  const [returnUrl, setReturnUrl] = useState(null);

  // Sync role when user logs in or updates profile
  useEffect(() => {
    if (user?.role && user.role !== activeRole) {
      setActiveRole(user.role);
    }
  }, [user]);

  // Navigate to venue details
  const handleSelectVenue = (venueId) => {
    setSelectedVenueId(venueId);
    setActivePage('venue-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Proceed to court booking
  const handleProceedBooking = (venueId) => {
    setSelectedVenueId(venueId);
    setActivePage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // General page navigation with optional return url
  const handleNavigatePage = (page, returnTarget = null) => {
    if (returnTarget) {
      setReturnUrl(returnTarget);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root-layout">
      
      {/* Interactive Role Switcher Bar */}
      <RoleSwitcherBar 
        activeRole={activeRole} 
        setActiveRole={setActiveRole} 
        setActivePage={(page) => handleNavigatePage(page)}
      />

      {/* Navigation Bar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={(page) => handleNavigatePage(page)}
        onNavigateVenue={handleSelectVenue}
      />

      {/* Main Routed Page Content */}
      <main className="main-content-view">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={(page) => handleNavigatePage(page)}
            onSelectVenue={handleSelectVenue}
          />
        )}

        {activePage === 'login' && (
          <LoginPage 
            setActivePage={(page) => handleNavigatePage(page)}
            returnUrl={returnUrl}
          />
        )}

        {activePage === 'signup' && (
          <SignUpPage 
            setActivePage={(page) => handleNavigatePage(page)}
          />
        )}

        {activePage === 'verify-email' && (
          <VerifyEmailPage 
            setActivePage={(page) => handleNavigatePage(page)}
          />
        )}

        {activePage === 'venues' && (
          <VenuesPage 
            onSelectVenue={handleSelectVenue}
          />
        )}

        {activePage === 'venue-detail' && (
          <VenueDetailPage 
            venueId={selectedVenueId}
            onBack={() => handleNavigatePage('venues')}
            onProceedBooking={handleProceedBooking}
          />
        )}

        {activePage === 'booking' && (
          <BookingPage 
            venueId={selectedVenueId}
            onBack={() => handleNavigatePage('venue-detail')}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {activePage === 'profile' && (
          <ProfilePage 
            setActivePage={(page) => handleNavigatePage(page)}
          />
        )}

        {activePage === 'owner-dashboard' && (
          <OwnerDashboardPage 
            setActivePage={(page) => handleNavigatePage(page)}
          />
        )}

        {activePage === 'admin-dashboard' && (
          <AdminDashboardPage 
            setActivePage={(page) => handleNavigatePage(page)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={(page) => handleNavigatePage(page)} />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <CityProvider>
        <AuthProvider>
          <BookingProvider>
            <AppContent />
          </BookingProvider>
        </AuthProvider>
      </CityProvider>
    </ToastProvider>
  );
}
