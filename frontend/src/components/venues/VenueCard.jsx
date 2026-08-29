import React from 'react';
import { MapPin, Star, Clock, Zap } from 'lucide-react';
import { useCity } from '../../context/CityContext';

export default function VenueCard({ venue, onViewDetails, onQuickBook }) {
  const { getDistanceToVenue } = useCity();
  const distanceKm = getDistanceToVenue(venue);
  return (
    <div className="venue-card-wrapper glass-card">
      {/* Venue Media Header */}
      <div className="venue-media-box">
        <img 
          src={venue.images[0]} 
          alt={venue.name} 
          className="venue-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80';
          }}
        />
        
        {/* Floating Badges */}
        <div className="media-overlay-badges">
          <span className={`tag ${venue.venueType === 'indoor' ? 'tag-indoor' : 'tag-outdoor'}`}>
            {venue.venueType === 'indoor' ? '🏢 Indoor' : '🌤️ Outdoor'}
          </span>
          <span className="tag tag-sport">
            {venue.sportIcon} {venue.sportName}
          </span>
        </div>

        {/* Rating Overlay */}
        <div className="media-rating-badge">
          <Star size={13} fill="#FBBF24" color="#FBBF24" />
          <span>{venue.rating.toFixed(1)}</span>
          <span className="reviews-count">({venue.reviewsCount || venue.reviews.length})</span>
        </div>
      </div>

      {/* Venue Content Details */}
      <div className="venue-card-body">
        
        {/* Feature Tags from SVG */}
        <div className="feature-tags-row">
          {venue.isTopRated && (
            <span className="tag tag-toprated">
              ⭐ Top Rated
            </span>
          )}
          {venue.isBudget && (
            <span className="tag tag-budget">
              ₹ Budget
            </span>
          )}
        </div>

        {/* Venue Title & Location */}
        <h3 className="venue-title" onClick={() => onViewDetails(venue.id)}>
          {venue.name}
        </h3>

        <div className="venue-location flex items-center justify-between">
          <div className="flex items-center gap-sm" style={{ overflow: 'hidden' }}>
            <MapPin size={14} className="location-pin" />
            <span className="location-text">{venue.area}</span>
          </div>

          {distanceKm !== null && (
            <span className="distance-badge flex items-center gap-xs">
              <span>📍</span>
              <span>{distanceKm} km away</span>
            </span>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="venue-footer-row flex items-center justify-between">
          <div className="price-box">
            <span className="price-currency">₹</span>
            <span className="price-amount">{venue.pricePerHour}</span>
            <span className="price-unit">per hour</span>
          </div>

          <button 
            className="btn btn-primary btn-sm view-details-btn"
            onClick={() => onViewDetails(venue.id)}
          >
            View Details
          </button>
        </div>

      </div>

      <style>{`
        .venue-card-wrapper {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .venue-card-wrapper:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 14px 30px -8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(16, 185, 129, 0.15);
        }

        .venue-media-box {
          position: relative;
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: #1e293b;
        }

        .venue-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .venue-card-wrapper:hover .venue-card-img {
          transform: scale(1.06);
        }

        .media-overlay-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .media-rating-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(8px);
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          color: #fbbf24;
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .reviews-count {
          color: var(--text-dim);
          font-weight: 500;
          font-size: 0.75rem;
        }

        .venue-card-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .feature-tags-row {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
        }

        .venue-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .venue-title:hover {
          color: var(--primary);
        }

        .venue-location {
          font-size: 0.84rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .location-pin {
          color: var(--primary);
          flex-shrink: 0;
        }

        .location-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .distance-badge {
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: var(--radius-full);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .venue-footer-row {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .price-box {
          display: flex;
          align-items: baseline;
          gap: 3px;
        }

        .price-currency {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary);
        }

        .price-amount {
          font-family: var(--font-heading);
          font-size: 1.28rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .price-unit {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-left: 2px;
        }

        .view-details-btn {
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
}
