import React, { useState, useMemo } from 'react';
import { useBooking } from '../context/BookingContext';
import { useCity } from '../context/CityContext';
import VenueCard from '../components/venues/VenueCard';
import VenueFilters from '../components/venues/VenueFilters';
import GoogleVenueMap from '../components/common/GoogleVenueMap';
import { 
  Search, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  SlidersHorizontal, 
  X,
  Calendar,
  Map as MapIcon,
  LayoutGrid,
  Locate,
  Navigation
} from 'lucide-react';

export default function VenuesPage({ onSelectVenue }) {
  const { venues } = useBooking();
  const { 
    selectedCity, 
    currentCityObj, 
    userLocation, 
    detectLocation, 
    isDetectingLocation,
    getDistanceToVenue 
  } = useCity();

  // View Mode: 'grid' or 'map'
  const [viewMode, setViewMode] = useState('grid');

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('all');
  const [maxPrice, setMaxPrice] = useState(2000);
  const [venueType, setVenueType] = useState('all'); // 'all', 'indoor', 'outdoor'
  const [minRating, setMinRating] = useState(0);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mobile Filter Drawer State
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Reset Filters handler
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedSport('all');
    setMaxPrice(2000);
    setVenueType('all');
    setMinRating(0);
    setCurrentPage(1);
  };

  // Filter logic
  const filteredVenues = useMemo(() => {
    return venues.filter((v) => {
      const cityMatches = v.city === selectedCity;
      const nameMatches = !searchTerm || 
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.area.toLowerCase().includes(searchTerm.toLowerCase());
      const sportMatches = selectedSport === 'all' || v.sport === selectedSport;
      const priceMatches = v.pricePerHour <= maxPrice;
      const typeMatches = venueType === 'all' || v.venueType === venueType;
      const ratingMatches = minRating === 0 || v.rating >= minRating;

      return (cityMatches || !selectedCity) && nameMatches && sportMatches && priceMatches && typeMatches && ratingMatches;
    });
  }, [venues, selectedCity, searchTerm, selectedSport, maxPrice, venueType, minRating]);

  // Fallback if city has no matching venues: search across all cities
  const effectiveVenues = useMemo(() => {
    if (filteredVenues.length > 0) return filteredVenues;
    return venues.filter((v) => {
      const nameMatches = !searchTerm || v.name.toLowerCase().includes(searchTerm.toLowerCase()) || v.area.toLowerCase().includes(searchTerm.toLowerCase());
      const sportMatches = selectedSport === 'all' || v.sport === selectedSport;
      const priceMatches = v.pricePerHour <= maxPrice;
      const typeMatches = venueType === 'all' || v.venueType === venueType;
      const ratingMatches = minRating === 0 || v.rating >= minRating;
      return nameMatches && sportMatches && priceMatches && typeMatches && ratingMatches;
    });
  }, [filteredVenues, venues, searchTerm, selectedSport, maxPrice, venueType, minRating]);

  // Pagination calculation
  const totalPages = Math.ceil(effectiveVenues.length / itemsPerPage) || 1;
  const paginatedVenues = effectiveVenues.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="venues-page-wrapper">
      <div className="container">
        
        {/* Breadcrumb Header with Live Location Trigger */}
        <div className="venues-page-header flex items-start justify-between">
          <div>
            <div className="flex items-center gap-sm" style={{ marginBottom: 6 }}>
              <MapPin size={16} color="#10B981" />
              <span className="city-breadcrumb-tag">
                SPORTS IN {currentCityObj.name.toUpperCase()}, {currentCityObj.state?.toUpperCase()}
              </span>
            </div>

            <h1 className="venues-header-title">
              Sports Venues in {currentCityObj.name}: Discover & Book Courts
            </h1>
            <p className="venues-header-sub">
              Showing {effectiveVenues.length} available courts and verified turf facilities
            </p>
          </div>

          {/* View Mode Toggle Bar (Grid vs Live Map) */}
          <div className="view-mode-toggle-group flex items-center gap-sm hide-on-mobile">
            <button
              type="button"
              className={`view-mode-btn flex items-center gap-sm ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid size={15} />
              <span>Grid Cards</span>
            </button>

            <button
              type="button"
              className={`view-mode-btn flex items-center gap-sm ${viewMode === 'map' ? 'active' : ''}`}
              onClick={() => setViewMode('map')}
            >
              <MapIcon size={15} />
              <span>Google Maps View</span>
            </button>
          </div>
        </div>

        {/* Live GPS Proximity Banner if location detected */}
        {userLocation && (
          <div className="live-gps-info-bar glass-card flex items-center justify-between">
            <div className="flex items-center gap-sm">
              <span className="gps-live-dot" />
              <span style={{ fontSize: '0.85rem', color: '#f8fafc' }}>
                Your GPS Location: <strong>{userLocation.cityName}</strong> (±{Math.round(userLocation.distanceKm)} km from city center)
              </span>
            </div>

            <button
              type="button"
              className="refresh-gps-btn flex items-center gap-sm"
              onClick={() => detectLocation()}
              disabled={isDetectingLocation}
            >
              <Locate size={13} color="#38bdf8" />
              <span>{isDetectingLocation ? 'Updating...' : 'Update GPS'}</span>
            </button>
          </div>
        )}

        {/* Mobile View Toggle Bar */}
        <div className="mobile-view-toggle-bar show-on-mobile flex gap-sm" style={{ marginBottom: 16 }}>
          <button 
            className="btn btn-secondary flex items-center justify-between"
            style={{ flex: 1 }}
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <span className="flex items-center gap-sm">
              <SlidersHorizontal size={15} color="#10B981" />
              <span>Filters</span>
            </span>
            <span className="filter-count-badge">
              {(selectedSport !== 'all' ? 1 : 0) + (venueType !== 'all' ? 1 : 0) + (minRating > 0 ? 1 : 0) + (searchTerm ? 1 : 0)}
            </span>
          </button>

          <button
            className={`btn btn-secondary flex items-center gap-sm ${viewMode === 'map' ? 'btn-primary' : ''}`}
            onClick={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
          >
            {viewMode === 'grid' ? <MapIcon size={16} /> : <LayoutGrid size={16} />}
            <span>{viewMode === 'grid' ? 'Map View' : 'Grid View'}</span>
          </button>
        </div>

        {/* Main Content Layout */}
        {viewMode === 'map' ? (
          /* Interactive Google Maps View Mode */
          <div className="map-view-fullscreen-container" style={{ marginTop: 12 }}>
            <GoogleVenueMap
              venues={effectiveVenues}
              onSelectVenue={(id) => onSelectVenue(id)}
              height="600px"
            />
          </div>
        ) : (
          /* Standard Grid Layout (Sidebar + Venue Grid) */
          <div className="venues-layout-grid">
            
            {/* Desktop Filter Sidebar */}
            <div className="desktop-filters-col hide-on-mobile">
              <VenueFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedSport={selectedSport}
                setSelectedSport={setSelectedSport}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                venueType={venueType}
                setVenueType={setVenueType}
                minRating={minRating}
                setMinRating={setMinRating}
                onResetFilters={handleResetFilters}
              />
            </div>

            {/* Venues Grid Column */}
            <div className="venues-grid-col">
              
              {paginatedVenues.length === 0 ? (
                <div className="no-venues-box glass-card flex-col items-center justify-center">
                  <Calendar size={48} color="#64748B" />
                  <h3 style={{ fontSize: '1.25rem', marginTop: 16, color: '#f8fafc' }}>No matching sports venues found</h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '8px 0 20px', maxWidth: '420px', textAlign: 'center' }}>
                    We couldn't find any courts matching your active filter criteria in {currentCityObj.name}. Try expanding your search or price range.
                  </p>
                  <button className="btn btn-primary" onClick={handleResetFilters}>
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="venues-cards-grid-main">
                    {paginatedVenues.map((venue) => (
                      <VenueCard
                        key={venue.id}
                        venue={venue}
                        onViewDetails={(id) => onSelectVenue(id)}
                      />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="pagination-bar flex items-center justify-center gap-sm">
                      <button
                        className="pagination-arrow-btn"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        aria-label="Previous page"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            className={`pagination-num-btn ${currentPage === pageNum ? 'active' : ''}`}
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum}
                          </button>
                        );
                      })}

                      <button
                        className="pagination-arrow-btn"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        aria-label="Next page"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </>
              )}

            </div>

          </div>
        )}

      </div>

      {/* Mobile Filters Drawer Modal */}
      {isMobileFiltersOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileFiltersOpen(false)}>
          <div className="mobile-drawer-content filters-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header flex items-center justify-between">
              <div className="flex items-center gap-sm">
                <SlidersHorizontal size={18} color="#10B981" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Filter Venues</h3>
              </div>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="modal-close">
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', paddingRight: 4 }}>
              <VenueFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedSport={selectedSport}
                setSelectedSport={setSelectedSport}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                venueType={venueType}
                setVenueType={setVenueType}
                minRating={minRating}
                setMinRating={setMinRating}
                onResetFilters={handleResetFilters}
              />
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: 16 }}
              onClick={() => setIsMobileFiltersOpen(false)}
            >
              Show {effectiveVenues.length} Results
            </button>
          </div>
        </div>
      )}

      <style>{`
        .venues-page-wrapper {
          padding: 40px 0 60px;
        }

        .venues-page-header {
          margin-bottom: 24px;
        }

        .city-breadcrumb-tag {
          font-size: 0.78rem;
          font-weight: 800;
          color: #10B981;
          letter-spacing: 0.08em;
        }

        .venues-header-title {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .venues-header-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .view-mode-toggle-group {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 4px;
          border-radius: var(--radius-md);
        }

        .view-mode-btn {
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .view-mode-btn.active {
          background: var(--primary);
          color: #ffffff;
          box-shadow: 0 2px 10px rgba(16, 185, 129, 0.4);
        }

        .live-gps-info-bar {
          padding: 10px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .gps-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
          display: inline-block;
        }

        .refresh-gps-btn {
          font-size: 0.78rem;
          font-weight: 700;
          color: #38bdf8;
        }

        .venues-layout-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 32px;
          align-items: start;
        }

        .venues-cards-grid-main {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .no-venues-box {
          padding: 60px 20px;
          border-radius: var(--radius-lg);
        }

        .pagination-bar {
          margin-top: 40px;
        }

        .pagination-arrow-btn, .pagination-num-btn {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .pagination-arrow-btn:hover:not(:disabled), .pagination-num-btn:hover {
          background: var(--bg-card-hover);
          border-color: var(--primary);
          color: var(--primary);
        }

        .pagination-num-btn.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
        }

        .pagination-arrow-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .mobile-filter-trigger-bar {
          margin-bottom: 20px;
        }

        .filter-count-badge {
          background: var(--primary);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .filters-drawer {
          width: 85%;
          max-width: 360px;
        }

        @media (max-width: 900px) {
          .venues-layout-grid {
            grid-template-columns: 1fr;
          }
          .venues-header-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
}
