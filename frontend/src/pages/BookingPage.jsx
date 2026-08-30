import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';
import { useToast } from '../context/ToastContext';
import TimeSlotGrid from '../components/booking/TimeSlotGrid';
import PaymentModal from '../components/booking/PaymentModal';
import { RENTAL_EQUIPMENTS } from '../assets/sports-data';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Star, 
  ArrowLeft, 
  Users, 
  PackageCheck, 
  ShieldCheck, 
  AlertCircle,
  CreditCard,
  CheckCircle2,
  Info
} from 'lucide-react';

export default function BookingPage({ venueId, onBack, onNavigatePage }) {
  const { user, isAuthenticated } = useAuth();
  const { getVenueById, createBooking } = useBooking();
  const { showToast } = useToast();

  const venue = getVenueById(venueId);

  // Redirection rule from SVG: "If not logged in first redirect to the login"
  useEffect(() => {
    if (!isAuthenticated) {
      showToast('Please log in to reserve a court slot', 'info');
      onNavigatePage('login', 'booking');
    }
  }, [isAuthenticated, onNavigatePage, showToast]);

  // Booking Form State
  const [selectedCourtId, setSelectedCourtId] = useState(venue?.courts[0]?.id || 'c1');
  
  // Date Picker with rule: "The selected date must be today or later"
  const todayDateStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayDateStr);
  const [dateError, setDateError] = useState('');

  // Start Time Slot
  const [selectedSlot, setSelectedSlot] = useState('5:00 PM - 6:00 PM');
  
  // Duration: 1hr, 2hr, 3hr
  const [durationHours, setDurationHours] = useState(1);

  // Extra Players: "For more than 2 players Rs. 50 extra per person"
  const [extraPlayers, setExtraPlayers] = useState(0);

  // Equipment Rentals: "Equipment available on rent"
  const [selectedEquipments, setSelectedEquipments] = useState([]);

  // Payment Modal State
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  if (!venue) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Venue not found</h2>
        <button className="btn btn-primary" onClick={onBack}>Back to Venues</button>
      </div>
    );
  }

  const selectedCourt = venue.courts.find(c => c.id === selectedCourtId) || venue.courts[0];

  // Validate date (must be today or later)
  const handleDateChange = (e) => {
    const val = e.target.value;
    if (val < todayDateStr) {
      setDateError('The selected date must be today or later');
      showToast('The selected date must be today or later', 'error');
      setSelectedDate(todayDateStr);
    } else {
      setDateError('');
      setSelectedDate(val);
    }
  };

  // Toggle Equipment Rental
  const toggleEquipment = (eqId) => {
    setSelectedEquipments(prev => 
      prev.includes(eqId) ? prev.filter(id => id !== eqId) : [...prev, eqId]
    );
  };

  // Price Calculation Breakdown
  const courtBaseRate = selectedCourt ? selectedCourt.price : venue.pricePerHour;
  const courtCost = courtBaseRate * durationHours;
  const extraPlayersCost = extraPlayers * 50 * durationHours;
  const equipmentCost = selectedEquipments.reduce((acc, id) => {
    const eq = RENTAL_EQUIPMENTS.find(item => item.id === id);
    return acc + (eq ? eq.price : 0);
  }, 0);
  const totalAmount = courtCost + extraPlayersCost + equipmentCost;

  // Format Date for receipt
  const formattedDate = new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleContinueToPayment = () => {
    if (!selectedSlot) {
      showToast('Please select an available time slot', 'error');
      return;
    }
    setIsPaymentModalOpen(true);
  };

  const handleBookingConfirmed = () => {
    const newBooking = createBooking({
      venueId: venue.id,
      venueName: venue.name,
      sport: venue.sport,
      sportIcon: venue.sportIcon,
      courtId: selectedCourt.id,
      courtName: selectedCourt.name,
      date: selectedDate,
      formattedDate,
      timeSlot: selectedSlot,
      location: venue.area + ', ' + venue.city.toUpperCase(),
      amount: totalAmount,
      extraPlayers,
      rentalEquipments: selectedEquipments.map(id => RENTAL_EQUIPMENTS.find(e => e.id === id)?.name)
    });

    return newBooking;
  };

  return (
    <div className="booking-page-wrapper">
      <div className="container">
        
        {/* Back navigation */}
        <button className="back-nav-btn flex items-center gap-sm" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Venue Details</span>
        </button>

        {/* Screen Title from SVG: Court Booking / Venue Booking Page */}
        <div className="booking-page-title-row">
          <div className="flex items-center gap-sm">
            <span className="screen-tag-badge">SCREEN 8</span>
            <h1 className="booking-title-main">Court Booking</h1>
          </div>
          <p className="booking-title-sub">
            Reserve your court slot and equipment at <strong>{venue.name}</strong>
          </p>
        </div>

        {/* Venue Summary Banner from SVG: 📍 Satellite, Jodhpur Village ⭐ 4.5 (6) */}
        <div className="venue-summary-banner glass-card flex items-center justify-between">
          <div className="flex items-center gap-md">
            <img 
              src={venue.images[0]} 
              alt="" 
              className="summary-venue-thumb"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=150&q=80'; }}
            />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>{venue.name}</h3>
              <div className="flex items-center gap-md" style={{ marginTop: 4 }}>
                <span className="flex items-center gap-sm" style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  <MapPin size={14} color="#10B981" />
                  <span>📍 {venue.area}</span>
                </span>
                <span className="rating-pill flex items-center gap-sm">
                  <Star size={13} fill="#FBBF24" color="#FBBF24" />
                  <span>{venue.rating.toFixed(1)} ({venue.reviewsCount || venue.reviews.length})</span>
                </span>
              </div>
            </div>
          </div>

          <div className="summary-base-rate hide-on-mobile">
            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Starting Rate</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#34d399' }}>₹{venue.pricePerHour}/hr</div>
          </div>
        </div>

        {/* Booking Form Layout */}
        <div className="booking-layout-grid">
          
          {/* Left Form Column */}
          <div className="booking-form-col flex-col gap-lg">
            
            {/* Step 1: Court Selector */}
            <div className="booking-section-card glass-card">
              <h3 className="section-step-title flex items-center gap-sm">
                <span className="step-num">1</span>
                <span>Select Court</span>
              </h3>

              <div className="courts-selection-grid">
                {venue.courts.map((court) => (
                  <button
                    key={court.id}
                    type="button"
                    className={`court-select-tile ${selectedCourtId === court.id ? 'selected' : ''}`}
                    onClick={() => setSelectedCourtId(court.id)}
                  >
                    <div className="flex justify-between items-center" style={{ marginBottom: 6 }}>
                      <span className="court-name-label">{court.name}</span>
                      <span className="court-rate-label">₹{court.price}/hr</span>
                    </div>
                    <div className="court-spec-sub flex items-center gap-sm">
                      <CheckCircle2 size={12} color="#10B981" />
                      <span>{court.surface}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date Picker (with "The selected date must be today or later" rule) */}
            <div className="booking-section-card glass-card">
              <h3 className="section-step-title flex items-center gap-sm">
                <span className="step-num">2</span>
                <span>Choose Booking Date</span>
              </h3>

              <div className="form-group" style={{ maxWidth: '320px', margin: 0 }}>
                <label className="form-label">Playing Date</label>
                <div className="form-control-wrapper">
                  <input 
                    type="date"
                    min={todayDateStr}
                    className={`form-input date-input ${dateError ? 'has-error' : ''}`}
                    value={selectedDate}
                    onChange={handleDateChange}
                    required
                  />
                </div>
                {dateError ? (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    <span>{dateError}</span>
                  </div>
                ) : (
                  <span className="form-hint">Selected: {formattedDate}</span>
                )}
              </div>
            </div>

            {/* Step 3: Start Time Slots Grid (with future & unavailable slot rules) */}
            <div className="booking-section-card glass-card">
              <h3 className="section-step-title flex items-center gap-sm">
                <span className="step-num">3</span>
                <span>Start Time & Slot</span>
              </h3>

              <TimeSlotGrid 
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                selectedDate={selectedDate}
                bookedSlots={['10:00 AM - 11:00 AM', '6:00 PM - 7:00 PM']} // mock booked slots for demonstration
              />
            </div>

            {/* Step 4: Duration & Add-ons */}
            <div className="booking-section-card glass-card">
              <h3 className="section-step-title flex items-center gap-sm">
                <span className="step-num">4</span>
                <span>Duration & Add-ons</span>
              </h3>

              {/* Duration Buttons */}
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">Playing Duration</label>
                <div className="duration-buttons-row flex gap-sm">
                  {[1, 2, 3].map((hr) => (
                    <button
                      key={hr}
                      type="button"
                      className={`duration-btn ${durationHours === hr ? 'selected' : ''}`}
                      onClick={() => setDurationHours(hr)}
                    >
                      <Clock size={14} />
                      <span>{hr} Hour{hr > 1 ? 's' : ''}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra Players rule: "For more than 2 players Rs. 50 extra per person" */}
              <div className="extra-players-box flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>Extra Players</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    +₹50 per extra person (beyond 2 standard players)
                  </div>
                </div>
                <div className="stepper-controls flex items-center gap-sm">
                  <button 
                    type="button" 
                    className="stepper-btn"
                    onClick={() => setExtraPlayers(Math.max(0, extraPlayers - 1))}
                  >
                    -
                  </button>
                  <span className="stepper-val">{extraPlayers}</span>
                  <button 
                    type="button" 
                    className="stepper-btn"
                    onClick={() => setExtraPlayers(extraPlayers + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Equipment Rentals: "Equipment available on rent" */}
              <div style={{ marginTop: 20 }}>
                <label className="form-label">Rental Gear & Equipment</label>
                <div className="equipment-rentals-grid">
                  {RENTAL_EQUIPMENTS.map((eq) => {
                    const isChecked = selectedEquipments.includes(eq.id);
                    return (
                      <button
                        key={eq.id}
                        type="button"
                        className={`equipment-tile ${isChecked ? 'selected' : ''}`}
                        onClick={() => toggleEquipment(eq.id)}
                      >
                        <div className="flex items-center gap-sm">
                          <span style={{ fontSize: '1.2rem' }}>{eq.icon}</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{eq.name}</span>
                        </div>
                        <span className="eq-price-tag">+₹{eq.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Right Price Summary Sticky Column */}
          <div className="booking-summary-col">
            <div className="price-breakdown-card glass-card">
              <h3 className="breakdown-title">Booking Summary</h3>

              <div className="breakdown-rows-list flex-col gap-sm">
                <div className="breakdown-row">
                  <span className="breakdown-label">Venue</span>
                  <span className="breakdown-val">{venue.name}</span>
                </div>

                <div className="breakdown-row">
                  <span className="breakdown-label">Court</span>
                  <span className="breakdown-val">{selectedCourt.name}</span>
                </div>

                <div className="breakdown-row">
                  <span className="breakdown-label">Date</span>
                  <span className="breakdown-val">{formattedDate}</span>
                </div>

                <div className="breakdown-row">
                  <span className="breakdown-label">Time Slot</span>
                  <span className="breakdown-val" style={{ color: '#34d399' }}>{selectedSlot}</span>
                </div>

                <div className="breakdown-row">
                  <span className="breakdown-label">Duration</span>
                  <span className="breakdown-val">{durationHours} hr ({courtCost} INR)</span>
                </div>

                {extraPlayers > 0 && (
                  <div className="breakdown-row">
                    <span className="breakdown-label">Extra Players ({extraPlayers}x)</span>
                    <span className="breakdown-val">+₹{extraPlayersCost}</span>
                  </div>
                )}

                {selectedEquipments.length > 0 && (
                  <div className="breakdown-row">
                    <span className="breakdown-label">Equipment Add-ons</span>
                    <span className="breakdown-val">+₹{equipmentCost}</span>
                  </div>
                )}

                <div className="breakdown-divider" />

                {/* Total */}
                <div className="breakdown-row total-row">
                  <span className="total-label">Total Payable</span>
                  <span className="total-val">₹{totalAmount}.00</span>
                </div>
              </div>

              {/* Exact CTA from SVG: Continue to Payment – ₹1200.00 */}
              <button 
                className="btn btn-primary btn-lg continue-pay-btn"
                onClick={handleContinueToPayment}
              >
                <CreditCard size={18} />
                <span>Continue to Payment – ₹{totalAmount}.00</span>
              </button>

              <div className="safe-guarantee flex items-center justify-center gap-sm">
                <ShieldCheck size={15} color="#10B981" />
                <span>100% Refundable up to 2 hours before match</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Interactive Payment Gateway Simulation Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={(page) => {
          setIsPaymentModalOpen(false);
          if (page) onNavigatePage(page);
        }}
        bookingDetails={{
          venueName: venue.name,
          courtName: selectedCourt.name,
          courtId: selectedCourt.id,
          formattedDate,
          bookingDate: selectedDate,
          timeSlot: selectedSlot,
          amount: totalAmount,
          location: venue.area
        }}
        onBookingSuccess={handleBookingConfirmed}
      />

      <style>{`
        .booking-page-wrapper {
          padding: 30px 0 60px;
        }

        .screen-tag-badge {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.72rem;
          font-weight: 800;
        }

        .booking-title-main {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--text-main);
        }

        .booking-title-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 24px;
        }

        .venue-summary-banner {
          padding: 18px 24px;
          border-radius: var(--radius-lg);
          margin-bottom: 32px;
        }

        .summary-venue-thumb {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          object-fit: cover;
          border: 2px solid var(--border-subtle);
        }

        .booking-layout-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
          align-items: start;
        }

        .booking-section-card {
          padding: 24px;
          border-radius: var(--radius-lg);
        }

        .section-step-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 18px;
        }

        .step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--primary);
          color: #ffffff;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .courts-selection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
        }

        .court-select-tile {
          padding: 14px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          text-align: left;
          color: var(--text-main);
          transition: all 0.2s ease;
        }

        .court-select-tile:hover {
          border-color: rgba(16, 185, 129, 0.4);
          background: var(--bg-card-hover);
        }

        .court-select-tile.selected {
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.15);
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.2);
        }

        .court-name-label {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .court-rate-label {
          font-size: 0.85rem;
          font-weight: 800;
          color: #34d399;
        }

        .court-spec-sub {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .duration-buttons-row {
          flex-wrap: wrap;
        }

        .duration-btn {
          padding: 10px 18px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .duration-btn.selected {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
        }

        .extra-players-box {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 14px 18px;
          border-radius: var(--radius-md);
        }

        .stepper-controls {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 4px;
          border-radius: var(--radius-md);
        }

        .stepper-btn {
          width: 30px;
          height: 30px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-main);
          font-size: 1.1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stepper-btn:hover {
          background: var(--primary);
        }

        .stepper-val {
          font-weight: 800;
          font-size: 1rem;
          min-width: 24px;
          text-align: center;
        }

        .equipment-rentals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
        }

        .equipment-tile {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
        }

        .equipment-tile.selected {
          background: rgba(16, 185, 129, 0.15);
          border-color: var(--primary);
        }

        .eq-price-tag {
          font-size: 0.8rem;
          font-weight: 700;
          color: #34d399;
        }

        .price-breakdown-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          position: sticky;
          top: 96px;
        }

        .breakdown-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .breakdown-rows-list {
          display: flex;
          flex-direction: column;
        }

        .breakdown-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
        }

        .breakdown-label {
          color: var(--text-muted);
        }

        .breakdown-val {
          font-weight: 600;
          color: var(--text-main);
        }

        .breakdown-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 10px 0;
        }

        .total-row {
          font-size: 1.1rem;
        }

        .total-label {
          font-weight: 800;
          color: #f8fafc;
        }

        .total-val {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 900;
          color: #34d399;
        }

        .continue-pay-btn {
          width: 100%;
          margin: 20px 0 12px;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .safe-guarantee {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        @media (max-width: 992px) {
          .booking-layout-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
