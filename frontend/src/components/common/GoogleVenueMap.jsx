import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Star, Compass, ArrowRight, ExternalLink, Locate } from 'lucide-react';
import { useCity } from '../../context/CityContext';

export default function GoogleVenueMap({ 
  venues = [], 
  selectedVenue = null, 
  onSelectVenue, 
  height = '520px' 
}) {
  const { currentCityObj, userLocation, detectLocation, isDetectingLocation } = useCity();
  const [activeVenue, setActiveVenue] = useState(selectedVenue || venues[0] || null);
  const [zoomLevel, setZoomLevel] = useState(13);

  useEffect(() => {
    if (selectedVenue) {
      setActiveVenue(selectedVenue);
    } else if (venues.length > 0 && !activeVenue) {
      setActiveVenue(venues[0]);
    }
  }, [selectedVenue, venues]);

  // Center coordinate based on active venue, city, or user GPS
  const centerLat = activeVenue?.coordinates?.lat || currentCityObj?.lat || 23.0225;
  const centerLng = activeVenue?.coordinates?.lng || currentCityObj?.lng || 72.5714;

  const handleOpenGoogleMapsDirections = (venue) => {
    if (!venue?.coordinates) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${venue.coordinates.lat},${venue.coordinates.lng}&destination_place_id=${encodeURIComponent(venue.name)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="google-venue-map-container glass-card" style={{ height }}>
      
      {/* Top Map Action Bar */}
      <div className="map-action-bar flex items-center justify-between">
        <div className="flex items-center gap-sm">
          <MapPin size={16} color="#10B981" />
          <span className="map-city-heading">
            Live Sports Map – {currentCityObj.name}, {currentCityObj.state}
          </span>
          <span className="map-venues-count">({venues.length} Arenas)</span>
        </div>

        <div className="flex items-center gap-sm">
          <button 
            type="button" 
            className="btn btn-secondary btn-sm flex items-center gap-sm"
            onClick={() => detectLocation()}
            disabled={isDetectingLocation}
          >
            <Locate size={14} color="#38bdf8" />
            <span>{isDetectingLocation ? 'Locating...' : 'My Location'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Map Visual Stage */}
      <div className="map-visual-stage">
        
        {/* Dynamic Map Canvas with Grid Gridlines & Satellite / Terrain Texture */}
        <div className="interactive-map-canvas">
          <div className="map-grid-overlay" />

          {/* User Live Location Marker if GPS detected */}
          {userLocation && (
            <div 
              className="user-gps-pulse-marker"
              style={{
                top: '55%',
                left: '42%'
              }}
              title="You are here"
            >
              <div className="pulse-ring" />
              <div className="user-dot" />
              <div className="user-marker-label">You are here</div>
            </div>
          )}

          {/* Venue Interactive Markers */}
          {venues.map((venue, idx) => {
            const isSelected = activeVenue?.id === venue.id;
            // Spread markers visually across the map area relative to city center
            const offsetX = 50 + (idx % 3 === 0 ? -25 : idx % 3 === 1 ? 18 : 32) + (idx * 4);
            const offsetY = 45 + (idx % 2 === 0 ? -18 : 22) + (idx * 3);

            return (
              <div
                key={venue.id}
                className={`venue-map-pin ${isSelected ? 'selected' : ''}`}
                style={{
                  top: `${Math.min(85, Math.max(15, offsetY))}%`,
                  left: `${Math.min(85, Math.max(15, offsetX))}%`
                }}
                onClick={() => setActiveVenue(venue)}
              >
                <div className="pin-badge flex items-center gap-sm">
                  <span className="pin-icon">{venue.sportIcon || '🏸'}</span>
                  <span className="pin-price">₹{venue.pricePerHour}</span>
                </div>
                <div className="pin-triangle" />
              </div>
            );
          })}

          {/* Map Controls */}
          <div className="map-zoom-controls flex-col">
            <button className="zoom-btn" onClick={() => setZoomLevel(z => Math.min(18, z + 1))}>+</button>
            <button className="zoom-btn" onClick={() => setZoomLevel(z => Math.max(10, z - 1))}>−</button>
          </div>

          <div className="map-watermark flex items-center gap-sm">
            <Compass size={12} color="#94a3b8" />
            <span>Google Maps Platform GPS Grounded</span>
          </div>
        </div>

        {/* Selected Venue Floating Details Card */}
        {activeVenue && (
          <div className="floating-venue-info-card glass-card">
            <div className="flex items-start justify-between gap-md">
              <div className="flex items-center gap-md">
                <img 
                  src={activeVenue.images?.[0] || 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=150&q=80'} 
                  alt="" 
                  className="venue-card-thumb"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=150&q=80'; }}
                />
                <div>
                  <div className="flex items-center gap-sm">
                    <span className="floating-sport-tag">{activeVenue.sportIcon} {activeVenue.sportName}</span>
                    <span className="rating-pill flex items-center gap-sm">
                      <Star size={11} fill="#FBBF24" color="#FBBF24" />
                      <span>{activeVenue.rating?.toFixed(1)}</span>
                    </span>
                  </div>

                  <h4 className="floating-venue-title">{activeVenue.name}</h4>
                  <p className="floating-venue-area">📍 {activeVenue.area}</p>
                </div>
              </div>

              <div className="floating-venue-rate text-right">
                <div className="rate-num">₹{activeVenue.pricePerHour}</div>
                <div className="rate-label">per hour</div>
              </div>
            </div>

            <div className="floating-card-actions flex items-center gap-sm" style={{ marginTop: 12 }}>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm flex items-center gap-sm"
                style={{ flex: 1 }}
                onClick={() => handleOpenGoogleMapsDirections(activeVenue)}
              >
                <Navigation size={13} color="#38bdf8" />
                <span>Get Directions</span>
                <ExternalLink size={11} />
              </button>

              <button 
                type="button" 
                className="btn btn-primary btn-sm flex items-center gap-sm"
                style={{ flex: 1.2 }}
                onClick={() => onSelectVenue?.(activeVenue.id)}
              >
                <span>Book Court Now</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .google-venue-map-container {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0b1329;
        }

        .map-action-bar {
          padding: 12px 18px;
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 10;
        }

        .map-city-heading {
          font-size: 0.88rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .map-venues-count {
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 600;
        }

        .map-visual-stage {
          position: relative;
          flex: 1;
          overflow: hidden;
        }

        .interactive-map-canvas {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
            linear-gradient(135deg, #090e1a 0%, #0f172a 100%);
          overflow: hidden;
        }

        .map-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .venue-map-pin {
          position: absolute;
          transform: translate(-50%, -100%);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 20;
        }

        .venue-map-pin:hover {
          transform: translate(-50%, -115%) scale(1.1);
          z-index: 30;
        }

        .venue-map-pin.selected {
          transform: translate(-50%, -120%) scale(1.15);
          z-index: 40;
        }

        .pin-badge {
          background: #0f172a;
          border: 2px solid var(--primary);
          padding: 4px 8px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
        }

        .venue-map-pin.selected .pin-badge {
          background: var(--primary);
          color: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
        }

        .venue-map-pin.selected .pin-price {
          color: #ffffff;
        }

        .pin-price {
          font-size: 0.72rem;
          font-weight: 800;
          color: #34d399;
        }

        .pin-triangle {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid var(--primary);
          margin: 0 auto;
        }

        .user-gps-pulse-marker {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 15;
        }

        .user-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #38bdf8;
          border: 2px solid #ffffff;
          box-shadow: 0 0 12px #38bdf8;
        }

        .pulse-ring {
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid rgba(56, 189, 248, 0.6);
          animation: pulseAnim 2s infinite;
        }

        .user-marker-label {
          margin-top: 4px;
          background: rgba(15, 23, 42, 0.85);
          color: #38bdf8;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          white-space: nowrap;
        }

        @keyframes pulseAnim {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .map-zoom-controls {
          position: absolute;
          right: 16px;
          top: 16px;
          gap: 4px;
          z-index: 25;
        }

        .zoom-btn {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid var(--border-subtle);
          color: #ffffff;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .zoom-btn:hover {
          background: var(--bg-card-hover);
          color: var(--primary);
        }

        .map-watermark {
          position: absolute;
          bottom: 12px;
          left: 16px;
          font-size: 0.7rem;
          color: var(--text-dim);
          background: rgba(11, 17, 32, 0.7);
          padding: 4px 8px;
          border-radius: 4px;
        }

        .floating-venue-info-card {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          max-width: 480px;
          margin: 0 auto;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(16px);
          z-index: 50;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(16, 185, 129, 0.4);
          animation: slideUp 0.2s ease forwards;
        }

        .venue-card-thumb {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          border: 1px solid var(--border-subtle);
        }

        .floating-sport-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--primary);
        }

        .floating-venue-title {
          font-size: 1rem;
          font-weight: 800;
          color: #f8fafc;
          margin: 2px 0;
        }

        .floating-venue-area {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .floating-venue-rate .rate-num {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 900;
          color: #34d399;
        }

        .floating-venue-rate .rate-label {
          font-size: 0.68rem;
          color: var(--text-dim);
        }
      `}</style>
    </div>
  );
}
