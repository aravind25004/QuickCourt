import React, { useState } from 'react';

export default function LineBarChart({ data = [], title = 'Trends', valuePrefix = '', height = 220 }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!data || data.length === 0) return null;

  const values = data.map(d => d.bookings ?? d.revenue ?? d.players ?? 0);
  const maxVal = Math.max(...values, 10);
  const chartHeight = height - 60;
  const barWidth = Math.max(24, Math.min(48, 500 / data.length - 12));

  return (
    <div className="chart-wrapper glass-card">
      <div className="chart-header flex justify-between items-center">
        <h4 className="chart-title">{title}</h4>
        {hoveredIdx !== null && (
          <span className="chart-tooltip-badge">
            {data[hoveredIdx].label || data[hoveredIdx].month}: <strong>{valuePrefix}{values[hoveredIdx]}</strong>
          </span>
        )}
      </div>

      <div className="chart-body" style={{ height: `${chartHeight}px` }}>
        <div className="chart-bars-row flex items-end justify-between" style={{ height: '100%', gap: 8 }}>
          {data.map((item, idx) => {
            const val = values[idx];
            const barHeightPct = Math.round((val / maxVal) * 100);
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                className="bar-col flex-col items-center"
                style={{ flex: 1, height: '100%', justifyContent: 'flex-end' }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div
                  className={`bar-fill ${isHovered ? 'hovered' : ''}`}
                  style={{
                    height: `${barHeightPct}%`,
                    width: `${barWidth}px`,
                    background: isHovered 
                      ? 'linear-gradient(180deg, #34D399 0%, #10B981 100%)' 
                      : 'linear-gradient(180deg, rgba(16, 185, 129, 0.8) 0%, rgba(6, 182, 212, 0.6) 100%)',
                    borderRadius: '6px 6px 0 0',
                    transition: 'all 0.25s ease'
                  }}
                />
                <span className="bar-label">{item.label || item.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .chart-wrapper {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .chart-tooltip-badge {
          font-size: 0.8rem;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .chart-body {
          margin-top: 16px;
          position: relative;
        }

        .bar-col {
          cursor: pointer;
        }

        .bar-fill.hovered {
          transform: scaleY(1.04);
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.5);
        }

        .bar-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 600;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}
