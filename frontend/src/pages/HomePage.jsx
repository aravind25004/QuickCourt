import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { useCity } from '../context/CityContext';
import { SPORTS_CATEGORIES } from '../assets/sports-data';
import VenueCard from '../components/venues/VenueCard';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Flame,
  Award,
  Users,
  CheckCircle2
} from 'lucide-react';

export default function HomePage({ setActivePage, onSelectVenue }) {
  const { venues } = useBooking();
  const { 
    selectedCity, 
    currentCityObj, 
    cities, 
    setSelectedCity, 
    detectLocation, 
    isDetectingLocation 
  } = useCity();
  const [selectedSportTab, setSelectedSportTab] = useState('all');

  // Filter venues by city and sport
  const cityVenues = venues.filter(v => v.city === selectedCity);
  const displayVenues = (cityVenues.length > 0 ? cityVenues : venues).filter(v => {
    if (selectedSportTab === 'all') return true;
    return v.sport === selectedSportTab;
  });

  return (
    <div className="home-page-wrapper">
      
      {/* Hero Section from SVG: FIND PLAYERS & VENUES NEARBY */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-grid flex items-center justify-between">
            
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-badge flex items-center gap-sm">
                <Flame size={15} color="#10B981" />
                <span>#1 LOCAL SPORTS VENUE BOOKING</span>
              </div>

              {/* Exact Text from SVG */}
              <h1 className="hero-title">
                FIND PLAYERS & VENUES <span className="highlight-text">NEARBY</span>
              </h1>

              <p className="hero-subtitle">
                Seamlessly explore sports venues and play with sports enthusiasts just like you!
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-group flex items-center gap-md">
                <button 
                  className="btn btn-primary btn-lg book-venues-cta"
                  onClick={() => { setActivePage('venues'); window.scrollTo(0, 0); }}
                >
                  <Calendar size={18} />
                  <span>Book Venues</span>
                </button>

                <button 
                  className="btn btn-secondary btn-lg explore-cta"
                  onClick={() => { setActivePage('venues'); window.scrollTo(0, 0); }}
                >
                  <span>Explore Sports</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Pan-India Cities & GPS Detector */}
              <div className="hero-city-pills flex flex-wrap items-center gap-sm" style={{ marginTop: 24 }}>
                <button
                  type="button"
                  className="gps-hero-pill-btn flex items-center gap-sm"
                  onClick={async () => {
                    const res = await detectLocation();
                    if (res.success) {
                      // located
                    }
                  }}
                  disabled={isDetectingLocation}
                >
                  <span>📍</span>
                  <span>{isDetectingLocation ? 'Detecting GPS...' : 'Use My Current Location'}</span>
                </button>

                <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Top Metros:</span>
                {cities.filter(c => c.isMetro).slice(0, 6).map(c => (
                  <button
                    key={c.id}
                    className={`city-pill-btn ${c.id === selectedCity ? 'active' : ''}`}
                    onClick={() => setSelectedCity(c.id)}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Hero Image / Illustration */}
            <div className="hero-visual-box hide-on-mobile">
              <div className="hero-image-card">
                <img 
                  src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80" 
                  alt="Sports Arena Action"
                  className="hero-main-img"
                />
                
                {/* Floating Stat Card */}
                <div className="floating-stat-card stat-card-1">
                  <div className="stat-icon-circle">
                    <ShieldCheck size={20} color="#10B981" />
                  </div>
                  <div>
                    <div className="stat-title">100% Verified</div>
                    <div className="stat-sub">Synthetic & Turf Courts</div>
                  </div>
                </div>

                <div className="floating-stat-card stat-card-2">
                  <div className="stat-icon-circle" style={{ background: 'rgba(6, 182, 212, 0.15)' }}>
                    <Sparkles size={20} color="#06B6D4" />
                  </div>
                  <div>
                    <div className="stat-title">Instant Slots</div>
                    <div className="stat-sub">Real-Time Confirmation</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sports Categories Pills */}
      <section className="sports-categories-section">
        <div className="container">
          <div className="section-header-row flex items-center justify-between">
            <div>
              <h2 className="section-main-heading">Explore by Sport</h2>
              <p className="section-sub-heading">Select your favorite sport to find nearby courts</p>
            </div>
            <button 
              className="see-all-link flex items-center gap-sm"
              onClick={() => { setActivePage('venues'); window.scrollTo(0, 0); }}
            >
              <span>See all venues</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="sports-pills-row">
            {SPORTS_CATEGORIES.map(sport => (
              <button
                key={sport.id}
                className={`sport-pill-item ${selectedSportTab === sport.id ? 'active' : ''}`}
                onClick={() => setSelectedSportTab(sport.id)}
              >
                <span className="sport-icon">{sport.icon}</span>
                <span className="sport-name">{sport.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues Section from SVG */}
      <section className="featured-venues-section">
        <div className="container">
          <div className="section-header-row flex items-center justify-between">
            <div>
              <div className="flex items-center gap-sm" style={{ marginBottom: 4 }}>
                <MapPin size={16} color="#10B981" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {currentCityObj.name} Sports Venues
                </span>
              </div>
              <h2 className="section-main-heading">Popular Venues in {currentCityObj.name}</h2>
            </div>

            {/* Exact Link from SVG: See all venues > */}
            <button 
              className="see-all-link flex items-center gap-sm"
              onClick={() => { setActivePage('venues'); window.scrollTo(0, 0); }}
            >
              <span>See all venues &gt;</span>
            </button>
          </div>

          {/* Venues Grid */}
          <div className="venues-cards-grid">
            {displayVenues.slice(0, 4).map(venue => (
              <VenueCard 
                key={venue.id} 
                venue={venue} 
                onViewDetails={(id) => onSelectVenue(id)}
              />
            ))}
          </div>

          {displayVenues.length === 0 && (
            <div className="empty-city-venues glass-card flex-col items-center justify-center">
              <Calendar size={40} color="#64748B" />
              <h4 style={{ fontSize: '1.1rem', marginTop: 12, color: '#f8fafc' }}>
                No {selectedSportTab !== 'all' ? selectedSportTab : ''} venues found in {currentCityObj.name}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '4px 0 16px' }}>
                Try switching city or viewing all sports arenas.
              </p>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedSportTab('all')}
              >
                View All Venues
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Why Choose QuickCourt Banner */}
      <section className="why-quickcourt-section">
        <div className="container">
          <div className="why-banner-card glass-card flex items-center justify-between">
            <div className="why-text-col">
              <h3 className="why-title">Are you a Sports Facility Owner?</h3>
              <p className="why-desc">
                List your badminton courts, football turfs, cricket arenas, or swimming pools on QuickCourt to reach thousands of active local players daily.
              </p>
              <div className="why-benefits-grid flex gap-md">
                <div className="benefit-item flex items-center gap-sm">
                  <CheckCircle2 size={16} color="#10B981" />
                  <span>Real-time slot manager</span>
                </div>
                <div className="benefit-item flex items-center gap-sm">
                  <CheckCircle2 size={16} color="#10B981" />
                  <span>Zero upfront charges</span>
                </div>
                <div className="benefit-item flex items-center gap-sm">
                  <CheckCircle2 size={16} color="#10B981" />
                  <span>Direct UPI settlements</span>
                </div>
              </div>
            </div>

            <button 
              className="btn btn-primary btn-lg"
              onClick={() => { setActivePage('signup'); window.scrollTo(0, 0); }}
            >
              Register Your Venue
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .home-page-wrapper {
          padding-bottom: 40px;
        }

        .hero-section {
          padding: 60px 0 40px;
          position: relative;
        }

        .hero-title {
          font-size: 3.2rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 16px 0;
        }

        .highlight-text {
          background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 32px;
          max-width: 520px;
          line-height: 1.6;
        }

        .hero-badge {
          display: inline-flex;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: #34d399;
          letter-spacing: 0.05em;
        }

        .hero-city-pills {
          flex-wrap: wrap;
        }

        .city-pill-btn {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .city-pill-btn:hover {
          color: var(--text-main);
          border-color: var(--primary);
        }

        .city-pill-btn.active {
          background: var(--primary-light);
          color: var(--primary);
          border-color: var(--primary);
        }

        .hero-image-card {
          position: relative;
          width: 480px;
          height: 420px;
          border-radius: var(--radius-lg);
          overflow: visible;
        }

        .hero-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7);
        }

        .floating-stat-card {
          position: absolute;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-lg);
        }

        .stat-card-1 {
          top: -20px;
          left: -30px;
        }

        .stat-card-2 {
          bottom: -20px;
          right: -20px;
        }

        .stat-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-title {
          font-size: 0.9rem;
          font-weight: 800;
          color: #f8fafc;
        }

        .stat-sub {
          font-size: 0.72rem;
          color: var(--text-dim);
        }

        .sports-categories-section, .featured-venues-section, .why-quickcourt-section {
          padding: 40px 0;
        }

        .section-header-row {
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .section-main-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .section-sub-heading {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .see-all-link {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--primary);
          transition: transform 0.2s ease;
        }

        .see-all-link:hover {
          transform: translateX(4px);
        }

        .sports-pills-row {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 12px;
        }

        .sport-pill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.92rem;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .sport-pill-item:hover {
          background: var(--bg-card-hover);
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
        }

        .sport-pill-item.active {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: #ffffff;
          border-color: #10B981;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
        }

        .venues-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .empty-city-venues {
          padding: 50px 20px;
          text-align: center;
          border-radius: var(--radius-lg);
          margin-top: 20px;
        }

        .why-banner-card {
          padding: 36px 40px;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(16, 185, 129, 0.2);
          flex-wrap: wrap;
          gap: 24px;
        }

        .why-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .why-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .benefit-item {
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .gps-hero-pill-btn {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #38bdf8;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .gps-hero-pill-btn:hover {
          background: rgba(56, 189, 248, 0.25);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.3);
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-image-card {
            width: 380px;
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-section {
            padding: 30px 0 20px;
          }
          .why-banner-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
