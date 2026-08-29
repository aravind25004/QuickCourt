import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import { useToast } from '../../context/ToastContext';
import Modal from '../common/Modal';
import { 
  Building2, 
  CheckCircle2, 
  XCircle, 
  MapPin, 
  Clock, 
  DollarSign, 
  Eye, 
  Sparkles,
  Info
} from 'lucide-react';

export default function FacilityApprovals() {
  const { showToast } = useToast();
  const [pendingList, setPendingList] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [comments, setComments] = useState('');
  const [actionType, setActionType] = useState(null); // 'approve' or 'reject'

  const loadData = () => {
    adminService.getPendingFacilities().then(setPendingList);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenAction = (facility, type) => {
    setSelectedFacility(facility);
    setActionType(type);
    setComments(type === 'approve' ? 'Facility verified and approved for live bookings.' : 'Incomplete documentation or unclear photos.');
  };

  const handleConfirmAction = async (e) => {
    e.preventDefault();
    if (!selectedFacility) return;

    if (actionType === 'approve') {
      await adminService.approveFacility(selectedFacility.id, comments);
      showToast(`Approved "${selectedFacility.name}" and added to live venues!`, 'success');
    } else {
      await adminService.rejectFacility(selectedFacility.id, comments);
      showToast(`Rejected registration for "${selectedFacility.name}".`, 'info');
    }

    setSelectedFacility(null);
    setActionType(null);
    loadData();
  };

  return (
    <div className="approvals-mgmt-wrapper glass-card">
      <div className="mgmt-header flex items-center justify-between">
        <div>
          <h3 className="mgmt-title">Facility Registration Approvals</h3>
          <p className="mgmt-sub">Review new facility owner submissions, inspect turf flooring, and approve for public bookings.</p>
        </div>

        <span className="pending-counter-tag">
          {pendingList.length} Pending Review
        </span>
      </div>

      {pendingList.length === 0 ? (
        <div className="empty-approvals-box flex-col items-center justify-center">
          <CheckCircle2 size={48} color="#10B981" />
          <h4 style={{ color: '#f8fafc', marginTop: 14 }}>All Facility Requests Reviewed!</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: 4 }}>
            There are currently no pending facility owner registrations waiting for admin approval.
          </p>
        </div>
      ) : (
        <div className="pending-cards-grid">
          {pendingList.map((facility) => (
            <div key={facility.id} className="pending-item-card glass-card">
              <div className="pending-card-image-wrap">
                <img 
                  src={facility.images[0]} 
                  alt={facility.name} 
                  className="pending-card-img" 
                />
                <span className="pending-status-badge">PENDING REVIEW</span>
              </div>

              <div className="pending-card-body">
                <h4 className="pending-facility-name">{facility.name}</h4>
                
                <div className="pending-meta-row flex items-center gap-sm">
                  <MapPin size={13} color="#10B981" />
                  <span>{facility.area}, {facility.city}</span>
                </div>

                <div className="pending-meta-row flex items-center gap-sm" style={{ marginTop: 4 }}>
                  <Building2 size={13} color="#06B6D4" />
                  <span>Owner: {facility.ownerName} ({facility.ownerEmail})</span>
                </div>

                <p className="pending-desc-snippet">{facility.description}</p>

                <div className="pending-specs-pills flex items-center gap-sm">
                  <span className="spec-pill">{facility.courtsCount} Courts</span>
                  <span className="spec-pill">₹{facility.pricePerHour}/hr</span>
                </div>

                <div className="pending-actions-row flex gap-sm" style={{ marginTop: 16 }}>
                  <button 
                    className="btn btn-primary btn-sm flex items-center justify-center gap-sm"
                    style={{ flex: 1 }}
                    onClick={() => handleOpenAction(facility, 'approve')}
                  >
                    <CheckCircle2 size={14} />
                    <span>Approve</span>
                  </button>

                  <button 
                    className="btn btn-danger btn-sm flex items-center justify-center gap-sm"
                    style={{ flex: 1 }}
                    onClick={() => handleOpenAction(facility, 'reject')}
                  >
                    <XCircle size={14} />
                    <span>Reject</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* Decision Modal */}
      {selectedFacility && actionType && (
        <Modal
          isOpen={!!selectedFacility}
          onClose={() => { setSelectedFacility(null); setActionType(null); }}
          title={actionType === 'approve' ? `Approve "${selectedFacility.name}"` : `Reject "${selectedFacility.name}"`}
        >
          <form onSubmit={handleConfirmAction} className="flex-col gap-md">
            <div className="decision-preview-box">
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>{selectedFacility.name}</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>📍 {selectedFacility.area}, {selectedFacility.city}</div>
            </div>

            <div className="form-group">
              <label className="form-label">
                {actionType === 'approve' ? 'Approval Comments (Optional for Owner)' : 'Reason for Rejection'}
              </label>
              <textarea 
                className="form-textarea"
                rows={3}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required={actionType === 'reject'}
              />
            </div>

            <div className="flex gap-sm" style={{ marginTop: 12 }}>
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ flex: 1 }} 
                onClick={() => { setSelectedFacility(null); setActionType(null); }}
              >
                Cancel
              </button>
              
              <button 
                type="submit" 
                className={`btn ${actionType === 'approve' ? 'btn-primary' : 'btn-danger'}`}
                style={{ flex: 1 }}
              >
                {actionType === 'approve' ? 'Confirm Approval' : 'Confirm Rejection'}
              </button>
            </div>
          </form>
        </Modal>
      )}

      <style>{`
        .approvals-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .pending-counter-tag {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 800;
        }

        .empty-approvals-box {
          padding: 60px 20px;
          text-align: center;
        }

        .pending-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .pending-item-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: rgba(15, 23, 42, 0.6);
        }

        .pending-card-image-wrap {
          position: relative;
          height: 160px;
        }

        .pending-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pending-status-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(245, 158, 11, 0.9);
          color: #0b1120;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .pending-card-body {
          padding: 20px;
        }

        .pending-facility-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #f8fafc;
          margin-bottom: 6px;
        }

        .pending-meta-row {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .pending-desc-snippet {
          font-size: 0.82rem;
          color: var(--text-dim);
          line-height: 1.5;
          margin: 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .spec-pill {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          color: #34d399;
        }

        .decision-preview-box {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 12px 16px;
          border-radius: var(--radius-md);
        }
      `}</style>
    </div>
  );
}
