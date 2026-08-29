import { apiClient } from './api';
import { INITIAL_VENUES, DATASET_VERSION } from '../assets/sports-data';

const VENUES_STORAGE_KEY = 'quickcourt_venues_data_v2';
const VERSION_KEY = 'quickcourt_dataset_ver';

function getStoredVenues() {
  const savedVer = localStorage.getItem(VERSION_KEY);
  if (savedVer === DATASET_VERSION) {
    const saved = localStorage.getItem(VENUES_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
  }
  localStorage.setItem(VERSION_KEY, DATASET_VERSION);
  localStorage.setItem(VENUES_STORAGE_KEY, JSON.stringify(INITIAL_VENUES));
  return INITIAL_VENUES;
}

function setStoredVenues(venues) {
  localStorage.setItem(VENUES_STORAGE_KEY, JSON.stringify(venues));
}

export const venueService = {
  // GET /api/venues
  async getVenues(filters = {}) {
    const live = await apiClient('/venues', { params: filters });
    if (live) return live;

    const venues = getStoredVenues();
    // Return approved venues by default for players
    return venues.filter(v => v.status !== 'pending' && v.status !== 'rejected');
  },

  // GET /api/venues/:id
  async getVenueById(id) {
    const live = await apiClient(`/venues/${id}`);
    if (live) return live;

    const venues = getStoredVenues();
    return venues.find(v => v.id === id) || null;
  },

  // POST /api/venues
  async createVenue(venueData) {
    const live = await apiClient('/venues', { method: 'POST', data: venueData });
    if (live) return live;

    const venues = getStoredVenues();
    const newVenue = {
      ...venueData,
      id: venueData.id || `venue-${Date.now()}`,
      status: venueData.status || 'approved', // 'approved' or 'pending'
      rating: venueData.rating || 5.0,
      reviewsCount: venueData.reviewsCount || 0,
      reviews: venueData.reviews || [],
      courts: venueData.courts || [
        { id: 'c1', name: 'Court 1 (Main Mat)', surface: 'Synthetic Mat', price: venueData.pricePerHour || 300 }
      ],
      images: venueData.images?.length > 0 ? venueData.images : [
        'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80'
      ]
    };

    venues.push(newVenue);
    setStoredVenues(venues);
    return newVenue;
  },

  // PUT /api/venues/:id
  async updateVenue(id, updateData) {
    const live = await apiClient(`/venues/${id}`, { method: 'PUT', data: updateData });
    if (live) return live;

    const venues = getStoredVenues();
    const updated = venues.map(v => v.id === id ? { ...v, ...updateData } : v);
    setStoredVenues(updated);
    return updated.find(v => v.id === id);
  },

  // DELETE /api/venues/:id
  async deleteVenue(id) {
    const live = await apiClient(`/venues/${id}`, { method: 'DELETE' });
    if (live) return live;

    const venues = getStoredVenues();
    const filtered = venues.filter(v => v.id !== id);
    setStoredVenues(filtered);
    return { success: true };
  },

  // POST /api/venues/:id/reviews
  async addReview(venueId, reviewData) {
    const live = await apiClient(`/venues/${venueId}/reviews`, { method: 'POST', data: reviewData });
    if (live) return live;

    const venues = getStoredVenues();
    const now = new Date();
    const newReview = {
      id: `rev-${Date.now()}`,
      userName: reviewData.userName || 'Anonymous Player',
      userAvatar: reviewData.userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: parseFloat(reviewData.rating) || 5,
      date: now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      time: now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
      comment: reviewData.comment
    };

    const updated = venues.map(v => {
      if (v.id !== venueId) return v;
      const reviews = [newReview, ...(v.reviews || [])];
      const avg = +(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
      return {
        ...v,
        rating: avg,
        reviewsCount: reviews.length,
        reviews
      };
    });

    setStoredVenues(updated);
    return newReview;
  }
};
