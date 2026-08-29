import React from 'react';
import { useBooking } from '../context/BookingContext';
import MediaGallery from '../components/venueDetail/MediaGallery';
import OperatingHoursCard from '../components/venueDetail/OperatingHoursCard';
import ReviewsList from '../components/venueDetail/ReviewsList';
import { 
  MapPin, 
  Star, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Info, 
  Users, 
  PackageCheck,
  CheckCircle2
} from 'lucide-react';

export default function VenueDetailPage({ venueId, onBack, onProceedBooking }) {
  const { getVenueById } = useBooking();
  const venue = getVenueById(venueId);

  if (!venue) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#f8fafc', marginBottom: 16 }}>Venue Not Found</h2>
        <button className="btn btn-primary" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to All Venues</span>
        </button>
      </div>
    );
  }

  return (
    <div className="venue-detail-page-wrapper">
      <div className="container">
        
        {/* Back Button */}
        <button className="back-nav-btn flex items-center gap-sm" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Explore Venues</span>
        </button>

        {/* Header Section from SVG: SBR Badminton, 📍 Satellite, Jodhpur Village, ⭐ 4.5 (6) */}
        <div className="venue-detail-header flex items-start justify-between">
          <div>
            <div className="flex items-center gap-sm" style={{ marginBottom: 6 }}>
              <span className={`tag ${venue.venueType === 'indoor' ? 'tag-indoor' : 'tag-outdoor'}`}>
                {venue.venueType === 'indoor' ? '🏢 Indoor Arena' : '🌤️ Outdoor Arena'}
              </span>
              <span className="tag tag-sport">
                {venue.sportIcon} {venue.sportName}
              </span>
            </div>

            <h1 className="venue-main-name">{venue.name}</h1>

            <div className="venue-header-meta flex items-center gap-md">
              <div className="flex items-center gap-sm">
                <MapPin size={15} color="#10B981" />
                <span className="meta-location-text">📍 {venue.area}</span>
              </div>
              
              <div className="rating-pill flex items-center gap-sm">
                <Star size={14} fill="#FBBF24" color="#FBBF24" />
                <span>{venue.rating.toFixed(1)} ({venue.reviewsCount || venue.reviews.length} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content 2-Column Grid */}
        <div className="venue-detail-layout-grid">
          
          {/* Left Main Column: Media Gallery, About, Courts, Specs, Reviews */}
          <div className="venue-main-col flex-col gap-lg">
            
            {/* Media Gallery from SVG */}
            <MediaGallery images={venue.images} venueName={venue.name} />

            {/* Sport & Courts Specification */}
            <div className="details-card glass-card">
              <h3 className="card-section-heading flex items-center gap-sm">
                <span>{venue.sportIcon}</span>
                <span>Available Courts & Specifications</span>
              </h3>
              
              <div className="courts-available-grid">
                {venue.courts.map((court) => (
                  <div key={court.id} className="court-spec-tile">
                    <div className="court-tile-top flex items-center justify-between">
                      <span className="court-tile-name">{court.name}</span>
                      <span className="court-tile-price">₹{court.price}/hr</span>
                    </div>
                    <div className="court-tile-surface flex items-center gap-sm">
                      <CheckCircle2 size={13} color="#10B981" />
                      <span>{court.surface}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Venue from SVG */}
            <div className="details-card glass-card">
              <h3 className="card-section-heading">About Venue</h3>
              <p className="about-venue-text">{venue.about}</p>

              {/* Special Rules & Annotations from SVG */}
              <div className="special-notes-box">
                <div className="notes-header flex items-center gap-sm">
                  <Info size={16} color="#10B981" />
                  <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>Venue Guidelines & Features</span>
                </div>
                <ul className="special-notes-list">
                  {venue.specialNotes?.map((note, idx) => (
                    <li key={idx} className="note-list-item flex items-center gap-sm">
                      <span className="bullet-dot" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities Grid */}
              <div style={{ marginTop: 24 }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 12, color: '#f8fafc' }}>
                  Amenities & Facilities
                </h4>
                <div className="amenities-tags-grid">
                  {venue.amenities?.map((amenity, idx) => (
                    <div key={idx} className="amenity-chip flex items-center gap-sm">
                      <CheckCircle2 size={14} color="#10B981" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Player Reviews & Ratings Section from SVG */}
            <ReviewsList venue={venue} />

          </div>

          {/* Right Action Column: Operating Hours, Address, Map, Book Button */}
          <div className="venue-sidebar-col">
            <OperatingHoursCard 
              venue={venue} 
              onBookNow={() => onProceedBooking(venue.id)} 
            />
          </div>

        </div>

      </div>

      <style>{`
        .venue-detail-page-wrapper {
          padding: 30px 0 60px;
        }

        .back-nav-btn {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 20px;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          display: inline-flex;
        }

        .back-nav-btn:hover {
          color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .venue-detail-header {
          margin-bottom: 28px;
        }

        .venue-main-name {
          font-size: 2.4rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -0.02em;
          margin: 4px 0 8px;
        }

        .venue-header-meta {
          flex-wrap: wrap;
          gap: 16px;
        }

        .meta-location-text {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .venue-detail-layout-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
          align-items: start;
        }

        .details-card {
          padding: 28px;
          border-radius: var(--radius-lg);
        }

        .card-section-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 18px;
        }

        .courts-available-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
        }

        .court-spec-tile {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 14px;
          border-radius: var(--radius-md);
        }

        .court-tile-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .court-tile-price {
          font-size: 0.85rem;
          font-weight: 800;
          color: #34d399;
        }

        .court-tile-surface {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 6px;
        }

        .about-venue-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .special-notes-box {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 18px 20px;
          border-radius: var(--radius-md);
        }

        .special-notes-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 10px;
        }

        .note-list-item {
          font-size: 0.88rem;
          color: #cbd5e1;
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }

        .amenities-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .amenity-chip {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
        }

        @media (max-width: 992px) {
          .venue-detail-layout-grid {
            grid-template-columns: 1fr;
          }
          .venue-main-name {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
