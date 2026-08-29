import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import { bookingService } from '../../services/bookingService';
import { useToast } from '../../context/ToastContext';
import Modal from '../common/Modal';
import { 
  Users, 
  Search, 
  Filter, 
  ShieldAlert, 
  ShieldCheck, 
  Ban, 
  CheckCircle2, 
  Calendar,
  Eye
} from 'lucide-react';

export default function UserManagement() {
  const { showToast } = useToast();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Booking history modal for selected user
  const [selectedUserForHistory, setSelectedUserForHistory] = useState(null);
  const [userBookings, setUserBookings] = useState([]);

  const loadUsers = () => {
    adminService.getAllUsers().then(setUsers);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleToggleBan = async (user) => {
    const action = user.status === 'Active' ? 'ban' : 'unban';
    if (confirm(`Are you sure you want to ${action} ${user.name}?`)) {
      await adminService.toggleUserBan(user.id);
      showToast(`User ${user.name} is now ${user.status === 'Active' ? 'Banned' : 'Active'}`, 'info');
      loadUsers();
    }
  };

  const handleViewHistory = async (user) => {
    setSelectedUserForHistory(user);
    const allBookings = await bookingService.getBookings();
    setUserBookings(allBookings);
  };

  const filteredUsers = users.filter(u => {
    const matchSearch = !search || 
      u.name.toLowerCase().includes(search.toLowerCase()) || 
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    const matchStatus = statusFilter === 'all' || u.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  return (
    <div className="user-mgmt-wrapper glass-card">
      <div className="mgmt-header flex items-center justify-between">
        <div>
          <h3 className="mgmt-title">User & Account Moderation</h3>
          <p className="mgmt-sub">Manage player profiles, facility partner accounts, ban status, and booking history logs.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="user-filter-bar flex gap-sm" style={{ marginBottom: 20 }}>
        <div style={{ flex: 1 }}>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Search by user name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select 
          className="form-select" 
          style={{ width: 'auto' }}
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="Player">Players (Users)</option>
          <option value="Facility Owner">Facility Owners</option>
          <option value="Admin">Admins</option>
        </select>

        <select 
          className="form-select" 
          style={{ width: 'auto' }}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Banned">Banned</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="table-responsive-box">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User / Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Registered</th>
              <th>Activity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u.id}>
                <td>
                  <div style={{ fontWeight: 700, color: '#f8fafc' }}>{u.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{u.email}</div>
                </td>
                <td>
                  <span className={`role-badge ${u.role === 'Admin' ? 'badge-admin' : u.role === 'Facility Owner' ? 'badge-owner' : 'badge-player'}`}>
                    {u.role}
                  </span>
                </td>
                <td>
                  {u.status === 'Active' ? (
                    <span className="status-confirmed">● Active</span>
                  ) : (
                    <span className="status-cancelled">● Banned</span>
                  )}
                </td>
                <td>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{u.createdAt}</span>
                </td>
                <td>
                  <button 
                    className="btn btn-secondary btn-sm flex items-center gap-sm"
                    onClick={() => handleViewHistory(u)}
                  >
                    <Calendar size={13} />
                    <span>{u.bookingsCount || 3} Bookings</span>
                  </button>
                </td>
                <td>
                  {u.role !== 'Admin' ? (
                    <button 
                      className={`btn btn-sm ${u.status === 'Active' ? 'btn-danger' : 'btn-primary'}`}
                      onClick={() => handleToggleBan(u)}
                    >
                      {u.status === 'Active' ? 'Ban User' : 'Unban'}
                    </button>
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>System Root</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Booking History Modal */}
      {selectedUserForHistory && (
        <Modal
          isOpen={!!selectedUserForHistory}
          onClose={() => setSelectedUserForHistory(null)}
          title={`Booking History – ${selectedUserForHistory.name}`}
        >
          <div className="flex-col gap-sm">
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: 12 }}>
              Account: <strong>{selectedUserForHistory.email}</strong> | Role: <strong>{selectedUserForHistory.role}</strong>
            </p>

            {userBookings.slice(0, 4).map((b) => (
              <div key={b.id} className="history-booking-row flex items-center justify-between">
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>{b.venueName}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{b.courtName} • {b.formattedDate || b.date} ({b.timeSlot})</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800, color: '#34d399', fontSize: '0.9rem' }}>₹{b.amount}.00</div>
                  <span style={{ fontSize: '0.72rem', color: b.status === 'Confirmed' ? '#34d399' : '#f87171' }}>
                    {b.status}
                  </span>
                </div>
              </div>
            ))}

            <button 
              className="btn btn-secondary" 
              style={{ marginTop: 16 }}
              onClick={() => setSelectedUserForHistory(null)}
            >
              Close
            </button>
          </div>
        </Modal>
      )}

      <style>{`
        .user-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .table-responsive-box {
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .admin-table th {
          padding: 12px 16px;
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          border-bottom: 1px solid var(--border-subtle);
        }

        .admin-table td {
          padding: 16px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.08);
          font-size: 0.88rem;
        }

        .role-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-full);
        }

        .badge-player {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
        }

        .badge-owner {
          background: rgba(6, 182, 212, 0.15);
          color: #06B6D4;
        }

        .badge-admin {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
        }

        .history-booking-row {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 12px 16px;
          border-radius: var(--radius-md);
        }
      `}</style>
    </div>
  );
}
