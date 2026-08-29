import React, { useState, useEffect } from 'react';
import { bookingService } from '../../services/bookingService';
import { TIME_SLOTS } from '../../assets/sports-data';
import { useToast } from '../../context/ToastContext';
import Modal from '../common/Modal';
import { Clock, ShieldAlert, Lock, Unlock, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function SlotManagement() {
  const { showToast } = useToast();
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [blockedSlots, setBlockedSlots] = useState([]);
  
  // Modal to block slot
  const [blockingSlot, setBlockingSlot] = useState(null);
  const [reason, setReason] = useState('Ground & Surface Maintenance');

  const loadSlots = () => {
    bookingService.getBlockedSlots('sbr-badminton', selectedDate).then(setBlockedSlots);
  };

  useEffect(() => {
    loadSlots();
  }, [selectedDate]);

  const handleOpenBlock = (slotLabel) => {
    setBlockingSlot(slotLabel);
    setReason('Ground & Surface Maintenance');
  };

  const handleConfirmBlock = async (e) => {
    e.preventDefault();
    if (!blockingSlot) return;

    await bookingService.blockSlot({
      venueId: 'sbr-badminton',
      courtId: 'c1',
      date: selectedDate,
      timeSlot: blockingSlot,
      reason
    });

    showToast(`Time slot ${blockingSlot} blocked for maintenance`, 'info');
    setBlockingSlot(null);
    loadSlots();
  };

  const handleUnblock = async (blockId) => {
    await bookingService.unblockSlot(blockId);
    showToast('Time slot restored to available', 'success');
    loadSlots();
  };

  return (
    <div className="slot-mgmt-wrapper glass-card">
      <div className="mgmt-header flex items-center justify-between">
        <div>
          <h3 className="mgmt-title">Time Slot & Maintenance Manager</h3>
          <p className="mgmt-sub">Block specific court hours for floor cleaning, equipment repairs, or private club tournaments.</p>
        </div>

        <div className="date-picker-box flex items-center gap-sm">
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Schedule Date:</span>
          <input 
            type="date"
            className="form-input"
            style={{ width: 'auto', padding: '6px 12px' }}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      <div className="slot-schedule-table-card glass-card">
        <div className="slots-table-header flex justify-between items-center">
          <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>Time Slot (Court 1)</span>
          <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>Status & Action</span>
        </div>

        <div className="slots-schedule-list flex-col gap-sm">
          {TIME_SLOTS.map((slot) => {
            const block = blockedSlots.find(b => b.timeSlot === slot.label);
            const isBlocked = !!block;

            return (
              <div key={slot.id} className={`slot-row-item flex items-center justify-between ${isBlocked ? 'is-blocked' : ''}`}>
                <div className="flex items-center gap-sm">
                  <Clock size={15} color={isBlocked ? '#EF4444' : '#10B981'} />
                  <span className="slot-row-label">{slot.label}</span>
                  <span className="slot-row-period">({slot.period})</span>
                </div>

                <div className="flex items-center gap-md">
                  {isBlocked ? (
                    <>
                      <span className="blocked-tag flex items-center gap-sm">
                        <Lock size={12} />
                        <span>Blocked: {block.reason}</span>
                      </span>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleUnblock(block.id)}
                        title="Unblock this slot"
                      >
                        <Unlock size={13} />
                        <span>Unblock</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="available-tag flex items-center gap-sm">
                        <CheckCircle2 size={12} color="#10B981" />
                        <span>Open / Available</span>
                      </span>
                      <button 
                        className="btn btn-outline btn-sm block-trigger-btn"
                        onClick={() => handleOpenBlock(slot.label)}
                      >
                        <Lock size={13} />
                        <span>Block Slot</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Block Slot Modal */}
      {blockingSlot && (
        <Modal
          isOpen={!!blockingSlot}
          onClose={() => setBlockingSlot(null)}
          title={`Block Slot (${blockingSlot})`}
        >
          <form onSubmit={handleConfirmBlock} className="flex-col gap-md">
            <div className="alert-block-info flex items-center gap-sm">
              <ShieldAlert size={20} color="#EF4444" />
              <span>Blocking this slot will make it unselectable for players on {selectedDate}.</span>
            </div>

            <div className="form-group">
              <label className="form-label">Maintenance / Block Reason</label>
              <select 
                className="form-select"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                <option value="Ground & Surface Maintenance">Ground & Surface Maintenance</option>
                <option value="Floodlight & Net Repairs">Floodlight & Net Repairs</option>
                <option value="Private League Tournament">Private League Tournament</option>
                <option value="Monsoon / Rain Waterlogging">Monsoon / Rain Issue</option>
              </select>
            </div>

            <div className="flex gap-sm" style={{ marginTop: 12 }}>
              <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setBlockingSlot(null)}>
                Cancel
              </button>
              <button type="submit" className="btn btn-danger" style={{ flex: 1 }}>
                Confirm Block
              </button>
            </div>
          </form>
        </Modal>
      )}

      <style>{`
        .slot-mgmt-wrapper {
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

        .slot-schedule-table-card {
          padding: 20px;
          border-radius: var(--radius-md);
        }

        .slots-table-header {
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 12px;
        }

        .slot-row-item {
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .slot-row-item.is-blocked {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.3);
        }

        .slot-row-label {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--text-main);
        }

        .slot-row-period {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .blocked-tag {
          font-size: 0.78rem;
          color: #f87171;
          font-weight: 600;
        }

        .available-tag {
          font-size: 0.78rem;
          color: #34d399;
          font-weight: 600;
        }

        .alert-block-info {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 12px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: #fca5a5;
        }
      `}</style>
    </div>
  );
}
