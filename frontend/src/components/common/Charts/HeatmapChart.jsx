import React from 'react';
import { Flame } from 'lucide-react';

export default function HeatmapChart({ data = [], title = 'Peak Booking Hours' }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="heatmap-wrapper glass-card">
      <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
        <h4 className="chart-title flex items-center gap-sm">
          <Flame size={16} color="#F97316" />
          <span>{title}</span>
        </h4>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Real-time court load</span>
      </div>

      <div className="heatmap-grid flex-col gap-sm">
        {data.map((item, idx) => {
          const intensity = item.intensity || 0.5;
          // Gradient from green (low) to amber (medium) to bright orange/coral (peak)
          const heatColor = intensity > 0.8 
            ? 'rgba(239, 68, 68, 0.85)' 
            : intensity > 0.5 
              ? 'rgba(245, 158, 11, 0.8)' 
              : 'rgba(16, 185, 129, 0.75)';

          return (
            <div key={idx} className="heatmap-row flex items-center justify-between">
              <span className="heat-time-label">{item.hour}</span>
              
              <div className="heat-bar-track" style={{ flex: 1, margin: '0 12px' }}>
                <div 
                  className="heat-bar-fill" 
                  style={{ 
                    width: `${Math.round(intensity * 100)}%`, 
                    background: heatColor,
                    height: 8,
                    borderRadius: 4
                  }} 
                />
              </div>

              <span className="heat-pct-badge" style={{ color: heatColor, fontWeight: 700 }}>
                {item.occupancy}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        .heatmap-wrapper {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .heatmap-row {
          padding: 6px 0;
          font-size: 0.82rem;
        }

        .heat-time-label {
          width: 110px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .heat-bar-track {
          background: #1e293b;
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .heat-pct-badge {
          width: 44px;
          text-align: right;
          font-size: 0.82rem;
        }
      `}</style>
    </div>
  );
}
