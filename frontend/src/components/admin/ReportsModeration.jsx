import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import { useToast } from '../../context/ToastContext';
import { ShieldAlert, CheckCircle2, AlertTriangle, MessageSquare, Flag } from 'lucide-react';

export default function ReportsModeration() {
  const { showToast } = useToast();
  const [reports, setReports] = useState([]);

  const loadReports = () => {
    adminService.getReports().then(setReports);
  };

  useEffect(() => {
    loadReports();
  }, []);

  const handleResolve = async (reportId, action) => {
    await adminService.resolveReport(reportId, action);
    showToast(`Report marked as ${action}`, 'success');
    loadReports();
  };

  return (
    <div className="reports-mgmt-wrapper glass-card">
      <div className="mgmt-header flex items-center justify-between">
        <div>
          <h3 className="mgmt-title">Reports & Platform Moderation</h3>
          <p className="mgmt-sub">Investigate player disputes, damaged gear complaints, and facility violations.</p>
        </div>
      </div>

      <div className="reports-list-cards flex-col gap-md">
        {reports.map((r) => (
          <div key={r.id} className="report-card-item glass-card">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-sm">
                <span className="report-type-badge flex items-center gap-sm">
                  <Flag size={12} color="#EF4444" />
                  <span>{r.type}</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Reported on {r.date}</span>
              </div>

              <span className={`status-pill ${r.status === 'open' ? 'status-open' : 'status-resolved'}`}>
                {r.status === 'open' ? '⚠️ Open Investigation' : '✅ Resolved'}
              </span>
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc' }}>
                Subject: <span style={{ color: '#38bdf8' }}>{r.targetName}</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: 2 }}>
                Reported by: <strong>{r.reportedBy}</strong>
              </div>
              <p className="report-reason-text">"{r.reason}"</p>
            </div>

            {r.status === 'open' && (
              <div className="report-actions-row flex justify-end gap-sm" style={{ marginTop: 16 }}>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleResolve(r.id, 'dismissed')}
                >
                  Dismiss Report
                </button>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleResolve(r.id, 'warned')}
                >
                  Issue Official Warning
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .reports-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .report-card-item {
          padding: 20px;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.6);
        }

        .report-type-badge {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .status-open {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
        }

        .status-resolved {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
        }

        .status-pill {
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
        }

        .report-reason-text {
          font-size: 0.88rem;
          color: #e2e8f0;
          font-style: italic;
          background: rgba(30, 41, 59, 0.5);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
