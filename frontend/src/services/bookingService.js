import { apiClient } from './api';
import { INITIAL_BOOKINGS } from '../assets/sports-data';

const BOOKINGS_STORAGE_KEY = 'quickcourt_user_bookings';
const BLOCKED_SLOTS_STORAGE_KEY = 'quickcourt_blocked_slots';

function getStoredBookings() {
  const saved = localStorage.getItem(BOOKINGS_STORAGE_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return INITIAL_BOOKINGS;
}

function setStoredBookings(bookings) {
  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
}

function getStoredBlockedSlots() {
  const saved = localStorage.getItem(BLOCKED_SLOTS_STORAGE_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return [
    { id: 'blk-1', venueId: 'sbr-badminton', courtId: 'c1', date: new Date().toISOString().split('T')[0], timeSlot: '11:00 AM - 12:00 PM', reason: 'Floor Maintenance' }
  ];
}

function setStoredBlockedSlots(slots) {
  localStorage.setItem(BLOCKED_SLOTS_STORAGE_KEY, JSON.stringify(slots));
}

export const bookingService = {
  // GET /api/bookings
  async getBookings(filters = {}) {
    const live = await apiClient('/bookings', { params: filters });
    if (live) return live;

    let list = getStoredBookings();
    if (filters.userId) {
      list = list.filter(b => b.userId === filters.userId || !b.userId); // fallback for initial mock
    }
    if (filters.status) {
      list = list.filter(b => b.status === filters.status);
    }
    return list;
  },

  // POST /api/bookings
  async createBooking(bookingData) {
    const live = await apiClient('/bookings', { method: 'POST', data: bookingData });
    if (live) return live;

    const bookings = getStoredBookings();
    const newBooking = {
      id: 'QC-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000),
      ...bookingData,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      canCancel: true,
      cancellationReason: null
    };

    bookings.unshift(newBooking);
    setStoredBookings(bookings);
    return newBooking;
  },

  // POST /api/bookings/:id/cancel
  async cancelBooking(bookingId, reason = 'Cancelled by user') {
    const live = await apiClient(`/bookings/${bookingId}/cancel`, { method: 'POST', data: { reason } });
    if (live) return live;

    const bookings = getStoredBookings();
    const updated = bookings.map(b => {
      if (b.id !== bookingId) return b;
      return {
        ...b,
        status: 'Cancelled',
        canCancel: false,
        cancellationReason: reason
      };
    });
    setStoredBookings(updated);
    return { success: true, bookingId };
  },

  // GET /api/courts/:courtId/blocked-slots
  async getBlockedSlots(venueId, date) {
    const live = await apiClient(`/venues/${venueId}/blocked-slots`, { params: { date } });
    if (live) return live;

    const blocked = getStoredBlockedSlots();
    return blocked.filter(b => (!venueId || b.venueId === venueId) && (!date || b.date === date));
  },

  // POST /api/courts/:courtId/block-slot
  async blockSlot(blockData) {
    const live = await apiClient('/courts/block-slot', { method: 'POST', data: blockData });
    if (live) return live;

    const blocked = getStoredBlockedSlots();
    const newBlock = {
      id: `blk-${Date.now()}`,
      ...blockData
    };
    blocked.push(newBlock);
    setStoredBlockedSlots(blocked);
    return newBlock;
  },

  // DELETE /api/courts/unblock-slot/:id
  async unblockSlot(blockId) {
    const live = await apiClient(`/courts/unblock-slot/${blockId}`, { method: 'DELETE' });
    if (live) return live;

    const blocked = getStoredBlockedSlots();
    const filtered = blocked.filter(b => b.id !== blockId);
    setStoredBlockedSlots(filtered);
    return { success: true };
  }
};
