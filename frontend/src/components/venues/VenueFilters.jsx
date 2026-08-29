import React from 'react';
import { SPORTS_CATEGORIES } from '../../assets/sports-data';
import { Search, Filter, RotateCcw, Star } from 'lucide-react';

export default function VenueFilters({
  searchTerm,
  setSearchTerm,
  selectedSport,
  setSelectedSport,
  maxPrice,
  setMaxPrice,
  venueType,
  setVenueType,
  minRating,
  setMinRating,
  onResetFilters
}) {
  return (
    <aside className="filters-sidebar glass-card">
      <div className="filters-header flex items-center justify-between">
        <div className="flex items-center gap-sm">
          <Filter size={18} color="#10B981" />
          <h3 className="filters-heading">Filter Venues</h3>
        </div>
        <button 
          onClick={onResetFilters} 
          className="reset-btn flex items-center gap-sm"
          title="Reset all filters"
        >
          <RotateCcw size={13} />
          <span>Reset</span>
        </button>
      </div>

      {/* Filter 1: Search by venue name */}
      <div className="filter-section">
        <label className="filter-label">Search by venue name</label>
        <div className="search-input-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="filter-search-input"
            placeholder="e.g. SBR Badminton..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filter 2: Filter by sport type */}
      <div className="filter-section">
        <label className="filter-label">Filter by sport type</label>
        <select 
          className="filter-select"
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
        >
          {SPORTS_CATEGORIES.map(sport => (
            <option key={sport.id} value={sport.id}>
              {sport.icon} {sport.name}
            </option>
          ))}
        </select>
      </div>

      {/* Filter 3: Price range (per hour) */}
      <div className="filter-section">
        <div className="flex justify-between items-center" style={{ marginBottom: 8 }}>
          <label className="filter-label" style={{ margin: 0 }}>Price range (per hour)</label>
          <span className="price-tag-value">Up to ₹{maxPrice}</span>
        </div>
        <input 
          type="range"
          min="100"
          max="2000"
          step="50"
          className="price-slider"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <div className="flex justify-between" style={{ fontSize: '0.75rem', color: '#64748b', marginTop: 4 }}>
          <span>₹100/hr</span>
          <span>₹2000/hr</span>
        </div>
      </div>

      {/* Filter 4: Choose Venue Type */}
      <div className="filter-section">
        <label className="filter-label">Choose Venue Type</label>
        <div className="venue-type-options flex-col gap-sm">
          <label className="radio-label">
            <input 
              type="radio" 
              name="venueType" 
              checked={venueType === 'all'} 
              onChange={() => setVenueType('all')} 
            />
            <span>All Types</span>
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="venueType" 
              checked={venueType === 'indoor'} 
              onChange={() => setVenueType('indoor')} 
            />
            <span>🏢 Indoor</span>
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="venueType" 
              checked={venueType === 'outdoor'} 
              onChange={() => setVenueType('outdoor')} 
            />
            <span>🌤️ Outdoor</span>
          </label>
        </div>
      </div>

      {/* Filter 5: Rating */}
      <div className="filter-section">
        <label className="filter-label">⭐ Rating</label>
        <div className="rating-options flex-col gap-sm">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="checkbox-label">
              <input 
                type="radio" 
                name="minRating" 
                checked={minRating === rating} 
                onChange={() => setMinRating(minRating === rating ? 0 : rating)} 
              />
              <span className="flex items-center gap-sm">
                <span className="flex">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </span>
                <span>{rating} stars & up</span>
              </span>
            </label>
          ))}
          <label className="checkbox-label">
            <input 
              type="radio" 
              name="minRating" 
              checked={minRating === 0} 
              onChange={() => setMinRating(0)} 
            />
            <span>Any Rating</span>
          </label>
        </div>
      </div>

      <style>{`
        .filters-sidebar {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 22px;
          position: sticky;
          top: 96px;
        }

        .filters-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .reset-btn {
          font-size: 0.78rem;
          color: var(--text-dim);
          font-weight: 600;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
        }

        .reset-btn:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .filter-section {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 18px;
        }

        .filter-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .filter-label {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 10px;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-dim);
        }

        .filter-search-input {
          width: 100%;
          padding: 10px 12px 10px 36px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
        }

        .filter-search-input:focus {
          border-color: var(--primary);
        }

        .filter-select {
          width: 100%;
          padding: 10px 12px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 500;
        }

        .price-tag-value {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .price-slider {
          width: 100%;
          height: 6px;
          border-radius: 4px;
          background: #334155;
          outline: none;
          accent-color: var(--primary);
          cursor: pointer;
        }

        .radio-label, .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          cursor: pointer;
          user-select: none;
          transition: color 0.15s ease;
        }

        .radio-label:hover, .checkbox-label:hover {
          color: var(--text-main);
        }

        .radio-label input, .checkbox-label input {
          accent-color: var(--primary);
          cursor: pointer;
        }
      `}</style>
    </aside>
  );
}
