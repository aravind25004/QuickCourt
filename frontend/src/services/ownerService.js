import { apiClient } from './api';
import { venueService } from './venueService';
import { bookingService } from './bookingService';

export const ownerService = {
  // GET /api/owner/dashboard-stats
  async getDashboardStats(ownerId = 'owner-1') {
    const live = await apiClient('/owner/dashboard-stats', { params: { ownerId } });
    if (live) return live;

    const venues = await venueService.getVenues();
    const bookings = await bookingService.getBookings();

    const totalCourts = venues.reduce((acc, v) => acc + (v.courts?.length || 1), 0);
    const confirmedBookings = bookings.filter(b => b.status === 'Confirmed');
    const totalEarnings = confirmedBookings.reduce((acc, b) => acc + (b.amount || 300), 0);

    return {
      totalBookings: bookings.length,
      activeCourts: totalCourts,
      totalEarnings: totalEarnings,
      occupancyRate: '78%',
      todayBookingsCount: confirmedBookings.length,
      bookingTrends: [
        { label: 'Mon', bookings: 12, earnings: 3600 },
        { label: 'Tue', bookings: 18, earnings: 5400 },
        { label: 'Wed', bookings: 15, earnings: 4500 },
        { label: 'Thu', bookings: 22, earnings: 6600 },
        { label: 'Fri', bookings: 30, earnings: 9000 },
        { label: 'Sat', bookings: 45, earnings: 13500 },
        { label: 'Sun', bookings: 40, earnings: 12000 }
      ],
      earningsBySport: [
        { sport: 'Badminton', percentage: 45, amount: Math.round(totalEarnings * 0.45), color: '#06B6D4' },
        { sport: 'Football / Turf', percentage: 30, amount: Math.round(totalEarnings * 0.30), color: '#10B981' },
        { sport: 'Box Cricket', percentage: 15, amount: Math.round(totalEarnings * 0.15), color: '#F59E0B' },
        { sport: 'Tennis / Pickleball', percentage: 10, amount: Math.round(totalEarnings * 0.10), color: '#EC4899' }
      ],
      peakHours: [
        { hour: '6 AM - 9 AM', occupancy: '65%', intensity: 0.65 },
        { hour: '9 AM - 12 PM', occupancy: '40%', intensity: 0.40 },
        { hour: '12 PM - 4 PM', occupancy: '25%', intensity: 0.25 },
        { hour: '4 PM - 7 PM', occupancy: '92%', intensity: 0.92 },
        { hour: '7 PM - 10 PM', occupancy: '98%', intensity: 0.98 },
        { hour: '10 PM - 12 AM', occupancy: '70%', intensity: 0.70 }
      ]
    };
  },

  // GET /api/owner/facilities
  async getOwnerFacilities(ownerId = 'owner-1') {
    const live = await apiClient('/owner/facilities', { params: { ownerId } });
    if (live) return Array.isArray(live) ? live : (live.facilities || live);

    const venues = await venueService.getVenues();
    return venues;
  },

  // POST /api/owner/facilities/:id/courts
  async addCourt(venueId, courtData) {
    const live = await apiClient(`/owner/facilities/${venueId}/courts`, { method: 'POST', data: courtData });
    if (live) return live;

    const venue = await venueService.getVenueById(venueId);
    if (!venue) throw new Error('Venue not found');

    const newCourt = {
      id: `c-${Date.now()}`,
      name: courtData.name,
      surface: courtData.surface || 'Synthetic Mat',
      price: Number(courtData.price) || 300,
      sport: courtData.sport || venue.sport
    };

    const updatedCourts = [...(venue.courts || []), newCourt];
    await venueService.updateVenue(venueId, { courts: updatedCourts });
    return newCourt;
  },

  // PUT /api/owner/facilities/:id/courts/:courtId
  async updateCourt(venueId, courtId, courtData) {
    const live = await apiClient(`/owner/facilities/${venueId}/courts/${courtId}`, { method: 'PUT', data: courtData });
    if (live) return live;

    const venue = await venueService.getVenueById(venueId);
    if (!venue) throw new Error('Venue not found');

    const updatedCourts = (venue.courts || []).map(c => 
      c.id === courtId ? { ...c, ...courtData } : c
    );
    await venueService.updateVenue(venueId, { courts: updatedCourts });
    return { success: true };
  },

  // DELETE /api/owner/facilities/:id/courts/:courtId
  async deleteCourt(venueId, courtId) {
    const live = await apiClient(`/owner/facilities/${venueId}/courts/${courtId}`, { method: 'DELETE' });
    if (live) return live;

    const venue = await venueService.getVenueById(venueId);
    if (!venue) throw new Error('Venue not found');

    const filteredCourts = (venue.courts || []).filter(c => c.id !== courtId);
    await venueService.updateVenue(venueId, { courts: filteredCourts });
    return { success: true };
  }
};
