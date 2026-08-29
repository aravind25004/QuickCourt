import React from 'react';

export default function DoughnutChart({ data = [], title = 'Earnings Breakdown' }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="doughnut-wrapper glass-card">
      <h4 className="chart-title">{title}</h4>

      <div className="doughnut-content flex items-center justify-between gap-md" style={{ marginTop: 16 }}>
        {/* Visual Progress Bars Stack */}
        <div className="progress-stack" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {data.map((item, idx) => (
            <div key={idx} className="progress-item">
              <div className="flex justify-between items-center" style={{ fontSize: '0.82rem', marginBottom: 4 }}>
                <span className="flex items-center gap-sm">
                  <span className="color-dot" style={{ background: item.color || '#10B981' }} />
                  <span style={{ fontWeight: 600, color: '#f8fafc' }}>{item.sport || item.name}</span>
                </span>
                <span style={{ fontWeight: 700, color: item.color || '#34d399' }}>
                  {item.amount ? `₹${item.amount.toLocaleString()}` : `${item.percentage}%`}
                </span>
              </div>

              <div className="progress-track" style={{ width: '100%', height: 8, background: '#1e293b', borderRadius: 4, overflow: 'hidden' }}>
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${item.percentage}%`, 
                    height: '100%', 
                    background: item.color || '#10B981',
                    borderRadius: 4
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .doughnut-wrapper {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .color-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
