import React, { useState, useEffect } from 'react';
import { venueService } from '../../services/venueService';
import { ownerService } from '../../services/ownerService';
import { useToast } from '../../context/ToastContext';
import Modal from '../common/Modal';
import { Grid, Plus, Edit2, Trash2, CheckCircle2, DollarSign } from 'lucide-react';

export default function CourtManagement() {
  const { showToast } = useToast();
  const [venue, setVenue] = useState(null);
  const [courts, setCourts] = useState([]);
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourt, setEditingCourt] = useState(null);
  const [courtName, setCourtName] = useState('');
  const [surface, setSurface] = useState('Synthetic BWF Mat');
  const [price, setPrice] = useState(250);
  const [sport, setSport] = useState('badminton');

  const loadData = () => {
    venueService.getVenueById('sbr-badminton').then(v => {
      if (v) {
        setVenue(v);
        setCourts(v.courts || []);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenAdd = () => {
    setEditingCourt(null);
    setCourtName(`Court ${courts.length + 1}`);
    setSurface('Synthetic BWF Mat');
    setPrice(250);
    setSport(venue?.sport || 'badminton');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (court) => {
    setEditingCourt(court);
    setCourtName(court.name);
    setSurface(court.surface);
    setPrice(court.price);
    setSport(court.sport || venue?.sport || 'badminton');
    setIsModalOpen(true);
  };

  const handleDelete = async (courtId) => {
    if (confirm('Are you sure you want to delete this court?')) {
      await ownerService.deleteCourt(venue.id, courtId);
      showToast('Court removed', 'info');
      loadData();
    }
  };

  const handleSaveCourt = async (e) => {
    e.preventDefault();
    if (editingCourt) {
      await ownerService.updateCourt(venue.id, editingCourt.id, {
        name: courtName,
        surface,
        price: Number(price),
        sport
      });
      showToast('Court updated successfully', 'success');
    } else {
      await ownerService.addCourt(venue.id, {
        name: courtName,
        surface,
        price: Number(price),
        sport
      });
      showToast('New court added to venue', 'success');
    }
    setIsModalOpen(false);
    loadData();
  };

  return (
    <div className="court-mgmt-wrapper glass-card">
      <div className="mgmt-header flex items-center justify-between">
        <div>
          <h3 className="mgmt-title">Court & Pitch Management</h3>
          <p className="mgmt-sub">Add, customize surface specifications, and set hourly pricing for individual courts.</p>
        </div>

        <button className="btn btn-primary btn-sm flex items-center gap-sm" onClick={handleOpenAdd}>
          <Plus size={16} />
          <span>Add New Court</span>
        </button>
      </div>

      <div className="courts-grid-cards">
        {courts.map((court) => (
          <div key={court.id} className="court-card-item glass-card">
            <div className="court-card-header flex justify-between items-start">
              <div>
                <span className="court-sport-badge">{court.sport ? court.sport.toUpperCase() : 'BADMINTON'}</span>
                <h4 className="court-item-title">{court.name}</h4>
              </div>
              <div className="court-item-price">
                ₹{court.price} <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>/hr</span>
              </div>
            </div>

            <div className="court-item-surface flex items-center gap-sm">
              <CheckCircle2 size={14} color="#10B981" />
              <span>{court.surface}</span>
            </div>

            <div className="court-actions-row flex items-center justify-end gap-sm" style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => handleOpenEdit(court)}
                title="Edit Court"
              >
                <Edit2 size={14} />
                <span>Edit</span>
              </button>
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(court.id)}
                title="Delete Court"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingCourt ? 'Edit Court Details' : 'Add New Court'}
      >
        <form onSubmit={handleSaveCourt} className="flex-col gap-md">
          <div className="form-group">
            <label className="form-label">Court / Pitch Name</label>
            <input 
              type="text" 
              className="form-input" 
              value={courtName} 
              onChange={(e) => setCourtName(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Surface Material / Specifications</label>
            <select 
              className="form-select"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
            >
              <option value="Synthetic BWF Mat">Synthetic BWF Mat (Badminton)</option>
              <option value="Wooden Teak Court">Wooden Teak Court (Badminton/Basketball)</option>
              <option value="FIFA Certified Astro Turf">FIFA Certified Astro Turf (Football)</option>
              <option value="Box Cricket Astro Mat">Box Cricket Astro Mat (Cricket)</option>
              <option value="DecoTurf Multi-layer">DecoTurf Multi-layer (Tennis)</option>
              <option value="European Red Clay">European Red Clay (Tennis)</option>
              <option value="8-layer Cushion Acrylic">8-layer Cushion Acrylic (Pickleball)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Pricing Per Hour (₹)</label>
            <input 
              type="number" 
              min="50"
              max="5000"
              step="50"
              className="form-input" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              required 
            />
          </div>

          <div className="flex gap-sm" style={{ marginTop: 16 }}>
            <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
              Save Court
            </button>
          </div>
        </form>
      </Modal>

      <style>{`
        .court-mgmt-wrapper {
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

        .courts-grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .court-card-item {
          padding: 20px;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.6);
        }

        .court-sport-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: 0.06em;
        }

        .court-item-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #f8fafc;
          margin-top: 2px;
        }

        .court-item-price {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #34d399;
        }

        .court-item-surface {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}
