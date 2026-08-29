import React from 'react';
import { TIME_SLOTS } from '../../assets/sports-data';
import { Clock, Sun, Sunset, Moon, Sunrise, AlertCircle } from 'lucide-react';

export default function TimeSlotGrid({
  selectedSlot,
  setSelectedSlot,
  selectedDate,
  bookedSlots = []
}) {
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const isToday = selectedDate === todayStr;
  const currentHour = now.getHours();

  // Helper to test if slot is past for today
  const isSlotInPast = (slotTime) => {
    if (!isToday) return false;
    const [slotH] = slotTime.split(':').map(Number);
    return slotH <= currentHour;
  };

  // Group slots by period
  const periods = [
    { name: 'Morning', icon: <Sunrise size={15} color="#06B6D4" />, slots: TIME_SLOTS.filter(s => s.period === 'Morning') },
    { name: 'Afternoon', icon: <Sun size={15} color="#F59E0B" />, slots: TIME_SLOTS.filter(s => s.period === 'Afternoon') },
    { name: 'Evening', icon: <Sunset size={15} color="#F97316" />, slots: TIME_SLOTS.filter(s => s.period === 'Evening') },
    { name: 'Night', icon: <Moon size={15} color="#A855F7" />, slots: TIME_SLOTS.filter(s => s.period === 'Night') }
  ];

  return (
    <div className="slot-grid-wrapper flex-col gap-md">
      
      {/* Time Slot Annotations from SVG */}
      <div className="slot-rules-banner flex items-center gap-sm">
        <AlertCircle size={15} color="#06B6D4" />
        <span>Unavailable time slots are disabled and cannot be selected. Start time must be in the future.</span>
      </div>

      {periods.map(period => (
        <div key={period.name} className="period-slot-group">
          <div className="period-title flex items-center gap-sm">
            {period.icon}
            <span>{period.name}</span>
          </div>

          <div className="slots-buttons-grid">
            {period.slots.map(slot => {
              const inPast = isSlotInPast(slot.time);
              const isBooked = bookedSlots.includes(slot.label) || bookedSlots.includes(slot.time);
              const isDisabled = inPast || isBooked;
              const isSelected = selectedSlot === slot.label;

              return (
                <button
                  key={slot.id}
                  type="button"
                  disabled={isDisabled}
                  className={`slot-chip-btn ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''} ${inPast ? 'past' : ''}`}
                  onClick={() => setSelectedSlot(slot.label)}
                >
                  <Clock size={12} className="slot-clock-icon" />
                  <span className="slot-time-text">{slot.label}</span>
                  {isBooked && <span className="slot-status-badge">Booked</span>}
                  {inPast && !isBooked && <span className="slot-status-badge">Past</span>}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <style>{`
        .slot-grid-wrapper {
          display: flex;
          flex-direction: column;
        }

        .slot-rules-banner {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: #67e8f9;
        }

        .period-slot-group {
          background: rgba(15, 23, 42, 0.45);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 14px 16px;
        }

        .period-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 12px;
        }

        .slots-buttons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 10px;
        }

        .slot-chip-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .slot-chip-btn:hover:not(:disabled) {
          background: var(--bg-card-hover);
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-1px);
        }

        .slot-chip-btn.selected {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.25) 100%);
          border-color: var(--primary);
          color: #ffffff;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
        }

        .slot-chip-btn:disabled {
          background: rgba(15, 23, 42, 0.3);
          border-color: rgba(255, 255, 255, 0.05);
          color: #475569;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .slot-clock-icon {
          color: var(--primary);
        }

        .slot-chip-btn:disabled .slot-clock-icon {
          color: #475569;
        }

        .slot-status-badge {
          font-size: 0.65rem;
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          padding: 1px 6px;
          border-radius: 4px;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .slot-chip-btn.past .slot-status-badge {
          background: rgba(100, 116, 139, 0.2);
          color: #94a3b8;
          border-color: rgba(100, 116, 139, 0.3);
        }
      `}</style>
    </div>
  );
}
