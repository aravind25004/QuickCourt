import { apiClient } from './api';
import { venueService } from './venueService';
import { bookingService } from './bookingService';

const USERS_STORAGE_KEY = 'quickcourt_registered_users';
const REPORTS_STORAGE_KEY = 'quickcourt_moderation_reports';
const PENDING_FACILITIES_KEY = 'quickcourt_pending_facilities';

const INITIAL_PENDING_FACILITIES = [
  {
    id: 'pending-1',
    name: 'Smash Point Badminton Club',
    ownerName: 'Vikas Shah',
    ownerEmail: 'vikas.shah@smashpoint.com',
    city: 'Ahmedabad',
    area: 'Prahlad Nagar, Corporate Road',
    sports: ['badminton'],
    courtsCount: 4,
    pricePerHour: 350,
    status: 'pending',
    submittedAt: '2025-06-25T14:30:00Z',
    description: 'New 4-court wooden badminton arena with premium Yonex equipment and shower facilities.',
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'pending-2',
    name: 'Thunderbolt Box Cricket Turf',
    ownerName: 'Jayesh Patel',
    ownerEmail: 'jayesh@thunderbolt.in',
    city: 'Surat',
    area: 'Adajan, Pal Road',
    sports: ['cricket', 'football'],
    courtsCount: 2,
    pricePerHour: 700,
    status: 'pending',
    submittedAt: '2025-06-27T09:15:00Z',
    description: 'High-roof box cricket and mini turf football ground with 4K floodlights and livestream cameras.',
    images: [
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const INITIAL_REPORTS = [
  {
    id: 'rep-1',
    type: 'Venue Issue',
    targetName: 'Champions Box Cricket Arena',
    reportedBy: 'Rajiv Malhotra',
    reason: 'Lighting failure on pitch 2 during scheduled evening match.',
    date: '2025-06-20',
    status: 'open'
  },
  {
    id: 'rep-2',
    type: 'User Conduct',
    targetName: 'Player: Aman Verma',
    reportedBy: 'Skyline Arena Owner',
    reason: 'Repeated late arrival and damaged racket rental equipment.',
    date: '2025-06-22',
    status: 'open'
  }
];

function getStoredUsers() {
  const saved = localStorage.getItem(USERS_STORAGE_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return [
    { id: 'usr-1', name: 'Mitchell Admin', email: 'mitchell.admin@quickcourt.com', role: 'Admin', status: 'Active', bookingsCount: 3, createdAt: '2024-01-15' },
    { id: 'usr-2', name: 'Rohan Sharma (Player)', email: 'rohan.sharma@example.com', role: 'Player', status: 'Active', bookingsCount: 7, createdAt: '2024-03-20' },
    { id: 'usr-3', name: 'Devendra Patel (Owner)', email: 'devendra.sbr@gmail.com', role: 'Facility Owner', status: 'Active', bookingsCount: 42, createdAt: '2024-02-10' },
    { id: 'usr-4', name: 'Kunal Singhania', email: 'kunal.singh@yahoo.com', role: 'Player', status: 'Banned', bookingsCount: 1, createdAt: '2024-05-18' }
  ];
}

function setStoredUsers(users) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function getStoredPending() {
  const saved = localStorage.getItem(PENDING_FACILITIES_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return INITIAL_PENDING_FACILITIES;
}

function setStoredPending(pending) {
  localStorage.setItem(PENDING_FACILITIES_KEY, JSON.stringify(pending));
}

function getStoredReports() {
  const saved = localStorage.getItem(REPORTS_STORAGE_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return INITIAL_REPORTS;
}

function setStoredReports(reports) {
  localStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(reports));
}

export const adminService = {
  // GET /api/admin/dashboard-stats
  async getDashboardStats() {
    const live = await apiClient('/admin/dashboard-stats');
    if (live) return live;

    const users = getStoredUsers();
    const venues = await venueService.getVenues();
    const bookings = await bookingService.getBookings();
    const pending = getStoredPending();

    const totalUsers = users.filter(u => u.role === 'Player').length;
    const totalOwners = users.filter(u => u.role === 'Facility Owner').length;
    const totalCourts = venues.reduce((acc, v) => acc + (v.courts?.length || 1), 0);

    return {
      totalUsers: Math.max(totalUsers, 128),
      totalOwners: Math.max(totalOwners, 24),
      totalBookings: Math.max(bookings.length, 560),
      totalActiveCourts: totalCourts,
      pendingApprovalsCount: pending.length,
      userTrends: [
        { month: 'Jan', players: 45, owners: 5 },
        { month: 'Feb', players: 78, owners: 9 },
        { month: 'Mar', players: 110, owners: 14 },
        { month: 'Apr', players: 155, owners: 18 },
        { month: 'May', players: 210, owners: 22 },
        { month: 'Jun', players: 280, owners: 28 }
      ],
      mostActiveSports: [
        { name: 'Badminton', count: 240, percentage: 42, color: '#06B6D4' },
        { name: 'Football / Turf', count: 160, percentage: 28, color: '#10B981' },
        { name: 'Box Cricket', count: 98, percentage: 17, color: '#F59E0B' },
        { name: 'Tennis', count: 42, percentage: 8, color: '#84CC16' },
        { name: 'Pickleball', count: 28, percentage: 5, color: '#EC4899' }
      ],
      monthlyRevenue: [
        { month: 'Jan', revenue: 45000 },
        { month: 'Feb', revenue: 68000 },
        { month: 'Mar', revenue: 92000 },
        { month: 'Apr', revenue: 125000 },
        { month: 'May', revenue: 164000 },
        { month: 'Jun', revenue: 215000 }
      ]
    };
  },

  // GET /api/admin/pending-facilities
  async getPendingFacilities() {
    const live = await apiClient('/admin/pending-facilities');
    if (live) return live;

    return getStoredPending();
  },

  // POST /api/admin/facilities/:id/approve
  async approveFacility(facilityId, comments = '') {
    const live = await apiClient(`/admin/facilities/${facilityId}/approve`, { method: 'POST', data: { comments } });
    if (live) return live;

    const pending = getStoredPending();
    const target = pending.find(p => p.id === facilityId);
    if (target) {
      // Add to live venues
      await venueService.createVenue({
        id: `venue-${Date.now()}`,
        name: target.name,
        city: target.city.toLowerCase(),
        area: target.area,
        fullAddress: `${target.area}, ${target.city}`,
        rating: 5.0,
        reviewsCount: 1,
        pricePerHour: target.pricePerHour,
        sport: target.sports[0] || 'badminton',
        sportName: 'Badminton',
        sportIcon: '🏸',
        venueType: 'indoor',
        isTopRated: true,
        isBudget: true,
        about: target.description,
        images: target.images,
        operatingHours: '6:00 AM - 11:00 PM',
        courts: [
          { id: 'c1', name: 'Court 1 (Main Court)', surface: 'Synthetic BWF Mat', price: target.pricePerHour }
        ]
      });

      // Remove from pending
      setStoredPending(pending.filter(p => p.id !== facilityId));
    }
    return { success: true };
  },

  // POST /api/admin/facilities/:id/reject
  async rejectFacility(facilityId, reason = '') {
    const live = await apiClient(`/admin/facilities/${facilityId}/reject`, { method: 'POST', data: { reason } });
    if (live) return live;

    const pending = getStoredPending();
    setStoredPending(pending.filter(p => p.id !== facilityId));
    return { success: true };
  },

  // GET /api/admin/users
  async getAllUsers() {
    const live = await apiClient('/admin/users');
    if (live) return live;

    return getStoredUsers();
  },

  // POST /api/admin/users/:id/toggle-ban
  async toggleUserBan(userId) {
    const live = await apiClient(`/admin/users/${userId}/toggle-ban`, { method: 'POST' });
    if (live) return live;

    const users = getStoredUsers();
    const updated = users.map(u => {
      if (u.id !== userId) return u;
      return {
        ...u,
        status: u.status === 'Active' ? 'Banned' : 'Active'
      };
    });
    setStoredUsers(updated);
    return updated.find(u => u.id === userId);
  },

  // GET /api/admin/reports
  async getReports() {
    const live = await apiClient('/admin/reports');
    if (live) return live;

    return getStoredReports();
  },

  // POST /api/admin/reports/:id/resolve
  async resolveReport(reportId, resolution = 'resolved') {
    const live = await apiClient(`/admin/reports/${reportId}/resolve`, { method: 'POST', data: { resolution } });
    if (live) return live;

    const reports = getStoredReports();
    const updated = reports.map(r => r.id === reportId ? { ...r, status: 'resolved', resolution } : r);
    setStoredReports(updated);
    return { success: true };
  }
};
