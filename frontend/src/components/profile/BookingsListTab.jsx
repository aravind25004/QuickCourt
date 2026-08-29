import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { useToast } from '../../context/ToastContext';
import WriteReviewModal from '../common/WriteReviewModal';
import Modal from '../common/Modal';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Star, 
  Trash2,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function BookingsListTab({ onExploreVenues }) {
  const { bookings, cancelBooking } = useBooking();
  const { showToast } = useToast();

  const [filterTab, setFilterTab] = useState('all'); // 'all' or 'cancelled'
  const [selectedReviewVenue, setSelectedReviewVenue] = useState(null);
  const [cancellingBooking, setCancellingBooking] = useState(null);
  const [cancelReason, setCancelReason] = useState('Change of plans');

  const filteredBookings = bookings.filter(b => {
    if (filterTab === 'cancelled') return b.status === 'Cancelled';
    return true;
  });

  const handleConfirmCancel = () => {
    if (!cancellingBooking) return;
    cancelBooking(cancellingBooking.id, cancelReason);
    showToast(`Booking #${cancellingBooking.id} cancelled. 100% refund initiated.`, 'info');
    setCancellingBooking(null);
  };

  return (
    <div className="bookings-tab-wrapper">
      
      {/* Sub Tabs from SVG: All Bookings / Cancelled */}
      <div className="bookings-nav-tabs flex items-center justify-between">
        <div className="tabs-pill-group flex gap-sm">
          <button
            className={`booking-tab-btn ${filterTab === 'all' ? 'active' : ''}`}
            onClick={() => setFilterTab('all')}
          >
            All Bookings ({bookings.length})
          </button>
          <button
            className={`booking-tab-btn ${filterTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setFilterTab('cancelled')}
          >
            Cancelled ({bookings.filter(b => b.status === 'Cancelled').length})
          </button>
        </div>

        <button className="btn btn-outline btn-sm" onClick={onExploreVenues}>
          + Book New Court
        </button>
      </div>

      {/* Bookings List Cards */}
      {filteredBookings.length === 0 ? (
        <div className="empty-bookings-box glass-card flex-col items-center justify-center">
          <Calendar size={48} color="#64748B" />
          <h4 style={{ fontSize: '1.2rem', marginTop: 12, color: '#f8fafc' }}>No bookings found</h4>
          <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: '6px 0 18px' }}>
            {filterTab === 'cancelled' 
              ? 'You have no cancelled court bookings.' 
              : 'You have not reserved any sports venues yet.'}
          </p>
          <button className="btn btn-primary" onClick={onExploreVenues}>
            Browse Sports Arenas
          </button>
        </div>
      ) : (
        <div className="bookings-cards-grid flex-col gap-md">
          {filteredBookings.map((b) => (
            <div key={b.id} className="booking-item-card glass-card">
              
              <div className="booking-item-main flex justify-between items-start">
                <div>
                  
                  {/* Sport & Court Title from SVG */}
                  <h4 className="booking-venue-title flex items-center gap-sm">
                    <span>{b.sportIcon || '🏸'}</span>
                    <span>{b.venueName}</span>
                    <span className="booking-sport-tag">({b.sport ? b.sport.toUpperCase() : 'BADMINTON'})</span>
                  </h4>

                  {/* Date & Time from SVG: 📅 18 June 2025 ⏰ 5:00 PM - 6:00 PM */}
                  <div className="booking-meta-line flex items-center gap-md">
                    <span className="flex items-center gap-sm">
                      <span>📅 {b.formattedDate || b.date}</span>
                    </span>
                    <span className="flex items-center gap-sm">
                      <span>⏰ {b.timeSlot}</span>
                    </span>
                  </div>

                  {/* Location from SVG: 📍 Rajkot, Gujarat */}
                  <div className="booking-meta-location flex items-center gap-sm">
                    <span>📍 {b.location}</span>
                  </div>

                  {/* Status: ✅ Confirmed / ❌ Cancelled */}
                  <div className="booking-status-row flex items-center gap-sm">
                    {b.status === 'Confirmed' ? (
                      <span className="status-confirmed">
                        Status: ✅ Confirmed
                      </span>
                    ) : (
                      <span className="status-cancelled">
                        Status: ❌ Cancelled
                      </span>
                    )}

                    <span className="booking-id-tag">ID: #{b.id}</span>
                  </div>

                </div>

                {/* Amount Paid */}
                <div className="booking-cost-box">
                  <div className="cost-tag">₹{b.amount}.00</div>
                  <div className="cost-sub">Paid via UPI</div>
                </div>

              </div>

              {/* Action Buttons Row from SVG: [Cancel Booking] [Write Review] or "No cancel booking" */}
              <div className="booking-actions-row flex items-center justify-between">
                <div>
                  {b.canCancel && b.status === 'Confirmed' ? (
                    <button 
                      className="btn btn-danger btn-sm cancel-booking-btn"
                      onClick={() => setCancellingBooking(b)}
                    >
                      [Cancel Booking]
                    </button>
                  ) : (
                    <span className="no-cancel-badge flex items-center gap-sm" title="Past booking or already cancelled">
                      <HelpCircle size={13} />
                      <span>No cancel booking</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-sm">
                  <button 
                    className="btn btn-outline btn-sm write-rev-btn"
                    onClick={() => setSelectedReviewVenue({ id: b.venueId, name: b.venueName })}
                  >
                    <Star size={14} color="#FBBF24" />
                    <span>[Write Review]</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Review Modal */}
      {selectedReviewVenue && (
        <WriteReviewModal
          isOpen={!!selectedReviewVenue}
          onClose={() => setSelectedReviewVenue(null)}
          venueId={selectedReviewVenue.id}
          venueName={selectedReviewVenue.name}
        />
      )}

      {/* Cancel Booking Confirmation Modal */}
      {cancellingBooking && (
        <Modal
          isOpen={!!cancellingBooking}
          onClose={() => setCancellingBooking(null)}
          title="Confirm Booking Cancellation"
        >
          <div className="flex-col gap-md">
            <div className="cancel-warning-box flex items-center gap-sm">
              <AlertTriangle size={20} color="#F59E0B" />
              <span>Are you sure you want to cancel booking <strong>#{cancellingBooking.id}</strong>?</span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Venue: <strong>{cancellingBooking.venueName}</strong><br />
              Slot: <strong>{cancellingBooking.formattedDate} ({cancellingBooking.timeSlot})</strong><br />
              Refund Amount: <strong style={{ color: '#10B981' }}>₹{cancellingBooking.amount}.00</strong> (100% full refund to original payment method).
            </p>

            <div className="form-group">
              <label className="form-label">Reason for Cancellation</label>
              <select 
                className="form-select"
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
              >
                <option value="Change of plans">Change of plans</option>
                <option value="Player unavailable">Player / Team unavailable</option>
                <option value="Weather / rain issue">Weather / rain concern</option>
                <option value="Booked wrong venue/slot">Booked wrong venue or slot</option>
              </select>
            </div>

            <div className="flex gap-sm" style={{ marginTop: 12 }}>
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ flex: 1 }} 
                onClick={() => setCancellingBooking(null)}
              >
                Keep Booking
              </button>
              <button 
                type="button" 
                className="btn btn-danger" 
                style={{ flex: 1 }} 
                onClick={handleConfirmCancel}
              >
                Confirm Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      <style>{`
        .bookings-nav-tabs {
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .booking-tab-btn {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .booking-tab-btn:hover {
          color: var(--text-main);
          background: rgba(51, 65, 85, 0.7);
        }

        .booking-tab-btn.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
        }

        .empty-bookings-box {
          padding: 60px 20px;
          text-align: center;
          border-radius: var(--radius-lg);
        }

        .booking-item-card {
          padding: 22px;
          border-radius: var(--radius-lg);
          transition: border-color 0.2s ease;
        }

        .booking-item-card:hover {
          border-color: rgba(148, 163, 184, 0.3);
        }

        .booking-venue-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .booking-sport-tag {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }

        .booking-meta-line {
          font-size: 0.85rem;
          color: #cbd5e1;
          margin-bottom: 4px;
          flex-wrap: wrap;
        }

        .booking-meta-location {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .booking-status-row {
          margin-top: 6px;
        }

        .booking-id-tag {
          font-size: 0.75rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.05);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .booking-cost-box {
          text-align: right;
        }

        .cost-tag {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: #34d399;
        }

        .cost-sub {
          font-size: 0.72rem;
          color: var(--text-dim);
        }

        .booking-actions-row {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 10px;
        }

        .no-cancel-badge {
          font-size: 0.78rem;
          color: #64748b;
          background: rgba(100, 116, 139, 0.12);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(100, 116, 139, 0.2);
        }

        .cancel-warning-box {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 12px;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          color: #fde68a;
        }
      `}</style>
    </div>
  );
}
