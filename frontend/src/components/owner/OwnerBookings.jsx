import React, { useState, useEffect } from 'react';
import { bookingService } from '../../services/bookingService';
import { Calendar, Clock, User, CheckCircle2, XCircle, Search, Filter } from 'lucide-react';

export default function OwnerBookings() {
  const [bookings, setBookings] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    bookingService.getBookings().then(setBookings);
  }, []);

  const filtered = bookings.filter(b => {
    const statusMatch = statusFilter === 'all' || b.status === statusFilter;
    const searchMatch = !search || 
      b.venueName?.toLowerCase().includes(search.toLowerCase()) || 
      b.id?.toLowerCase().includes(search.toLowerCase()) ||
      b.courtName?.toLowerCase().includes(search.toLowerCase());
    return statusMatch && searchMatch;
  });

  return (
    <div className="owner-bookings-wrapper glass-card">
      <div className="mgmt-header flex items-center justify-between">
        <div>
          <h3 className="mgmt-title">Customer Bookings Overview</h3>
          <p className="mgmt-sub">Track all live, upcoming, and past reservations across your courts.</p>
        </div>

        <div className="flex gap-sm">
          <input 
            type="text" 
            className="form-input" 
            placeholder="Search booking ID or court..."
            style={{ width: 240, padding: '6px 12px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select 
            className="form-select" 
            style={{ width: 'auto', padding: '6px 12px' }}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="bookings-table-container">
        <table className="owner-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Court & Sport</th>
              <th>Date & Time</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.id}>
                <td>
                  <span className="table-booking-id">#{b.id}</span>
                </td>
                <td>
                  <div style={{ fontWeight: 700, color: '#f8fafc' }}>{b.courtName || 'Court 1 (Synthetic Mat)'}</div>
                  <div style={{ fontSize: '0.75rem', color: '#10B981' }}>{b.venueName}</div>
                </td>
                <td>
                  <div style={{ fontSize: '0.85rem', color: '#f8fafc' }}>📅 {b.formattedDate || b.date}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>⏰ {b.timeSlot}</div>
                </td>
                <td>
                  <span style={{ fontWeight: 800, color: '#34d399' }}>₹{b.amount}.00</span>
                </td>
                <td>
                  {b.status === 'Confirmed' ? (
                    <span className="status-confirmed">✅ Confirmed</span>
                  ) : (
                    <span className="status-cancelled">❌ Cancelled</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .owner-bookings-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .mgmt-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .mgmt-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 24px;
        }

        .bookings-table-container {
          overflow-x: auto;
        }

        .owner-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .owner-table th {
          padding: 12px 16px;
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          border-bottom: 1px solid var(--border-subtle);
        }

        .owner-table td {
          padding: 16px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.08);
          font-size: 0.88rem;
        }

        .table-booking-id {
          font-family: monospace;
          font-weight: 700;
          color: var(--primary);
          background: rgba(16, 185, 129, 0.1);
          padding: 3px 8px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
