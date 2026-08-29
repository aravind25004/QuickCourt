import React from 'react';
import { Clock, MapPin, ExternalLink, Calendar, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { useCity } from '../../context/CityContext';

export default function OperatingHoursCard({ venue, onBookNow }) {
  const { getDistanceToVenue } = useCity();
  const distanceKm = getDistanceToVenue(venue);
  const mapSearchUrl = `https://www.google.com/maps/dir/?api=1&destination=${venue.coordinates?.lat || 23.0225},${venue.coordinates?.lng || 72.5714}&destination_place_id=${encodeURIComponent(venue.name)}`;

  return (
    <div className="action-sidebar-card glass-card">
      
      {/* Price & Primary CTA */}
      <div className="cta-price-header">
        <div className="cta-price-tag">
          <span className="cta-currency">₹</span>
          <span className="cta-price-val">{venue.pricePerHour}</span>
          <span className="cta-price-unit">/ hour</span>
        </div>
        <div className="instant-badge flex items-center gap-sm">
          <Sparkles size={13} color="#10B981" />
          <span>Instant Slots</span>
        </div>
      </div>

      <button className="btn btn-primary btn-lg book-venue-main-btn" onClick={onBookNow}>
        <Calendar size={18} />
        <span>🟩 Book This Venue</span>
      </button>

      <div className="divider-line" />

      {/* Operating Hours */}
      <div className="info-block">
        <div className="info-block-header flex items-center gap-sm">
          <Clock size={16} color="#06B6D4" />
          <h4 className="info-block-title">🕒 Operating Hours</h4>
        </div>
        <div className="info-block-content">
          <div className="hours-highlight">{venue.operatingHours || '7:00 AM - 11:00 PM'}</div>
          <span className="open-days-note">Monday - Sunday (7 Days Open)</span>
        </div>
      </div>

      <div className="divider-line" />

      {/* Address & Distance */}
      <div className="info-block">
        <div className="info-block-header flex items-center justify-between">
          <div className="flex items-center gap-sm">
            <MapPin size={16} color="#F59E0B" />
            <h4 className="info-block-title">📍 Address</h4>
          </div>
          {distanceKm !== null && (
            <span className="distance-badge-detail flex items-center gap-xs">
              <span>📍 {distanceKm} km from you</span>
            </span>
          )}
        </div>
        <div className="info-block-content">
          <p className="address-text">{venue.fullAddress || venue.area}</p>
        </div>
      </div>

      {/* Location Map Preview */}
      <div className="info-block">
        <div className="info-block-header flex items-center justify-between" style={{ marginBottom: 10 }}>
          <h4 className="info-block-title">Location Map</h4>
          <a 
            href={mapSearchUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="directions-link flex items-center gap-sm"
          >
            <span>Google Maps Directions</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="map-embed-box">
          {/* Stylized Interactive Map Canvas Mock */}
          <div className="map-mock-bg">
            <div className="map-grid-lines" />
            <div className="map-road road-1" />
            <div className="map-road road-2" />
            <div className="map-road road-3" />
            <div className="map-pin-pulse">
              <MapPin size={28} color="#EF4444" fill="#EF4444" />
              <div className="pulse-ring" />
            </div>
            <div className="map-pin-label">{venue.name}</div>
          </div>
        </div>
      </div>

      <style>{`
        .action-sidebar-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 96px;
        }

        .cta-price-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cta-price-tag {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .cta-currency {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--primary);
        }

        .cta-price-val {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 900;
          color: var(--text-main);
        }

        .cta-price-unit {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-left: 4px;
        }

        .instant-badge {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          color: #34d399;
        }

        .book-venue-main-btn {
          width: 100%;
          font-size: 1.05rem;
          padding: 15px;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .divider-line {
          height: 1px;
          background: var(--border-subtle);
          margin: 4px 0;
        }

        .info-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .info-block-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .hours-highlight {
          font-size: 1.05rem;
          font-weight: 700;
          color: #22d3ee;
        }

        .open-days-note {
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .address-text {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .distance-badge-detail {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38bdf8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .directions-link {
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 600;
        }

        .directions-link:hover {
          text-decoration: underline;
        }

        .map-embed-box {
          width: 100%;
          height: 140px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          position: relative;
        }

        .map-mock-bg {
          width: 100%;
          height: 100%;
          background: #0f172a;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .map-grid-lines {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .map-road {
          position: absolute;
          background: rgba(100, 116, 139, 0.25);
        }

        .road-1 { top: 40%; left: 0; right: 0; height: 12px; transform: rotate(-5deg); }
        .road-2 { top: 0; bottom: 0; left: 45%; width: 14px; transform: rotate(15deg); }
        .road-3 { top: 70%; left: 0; right: 0; height: 8px; }

        .map-pin-pulse {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-ring {
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.35);
          animation: mapPulse 2s infinite;
          z-index: -1;
        }

        .map-pin-label {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid var(--border-subtle);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 700;
          color: #f8fafc;
          white-space: nowrap;
          z-index: 2;
        }

        @keyframes mapPulse {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
