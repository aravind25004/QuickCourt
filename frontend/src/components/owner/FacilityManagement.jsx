import React, { useState, useEffect } from 'react';
import { venueService } from '../../services/venueService';
import { useToast } from '../../context/ToastContext';
import { Building2, MapPin, Sparkles, Image, Plus, Trash2, Save, CheckCircle2 } from 'lucide-react';

export default function FacilityManagement() {
  const { showToast } = useToast();
  const [venue, setVenue] = useState(null);
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [about, setAbout] = useState('');
  const [operatingHours, setOperatingHours] = useState('7:00 AM - 11:00 PM');
  const [amenityInput, setAmenityInput] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    venueService.getVenueById('sbr-badminton').then(v => {
      if (v) {
        setVenue(v);
        setName(v.name);
        setArea(v.area);
        setFullAddress(v.fullAddress || '');
        setAbout(v.about || '');
        setOperatingHours(v.operatingHours || '7:00 AM - 11:00 PM');
        setAmenities(v.amenities || []);
        setImages(v.images || []);
      }
    });
  }, []);

  const handleAddAmenity = () => {
    if (amenityInput.trim() && !amenities.includes(amenityInput.trim())) {
      setAmenities([...amenities, amenityInput.trim()]);
      setAmenityInput('');
    }
  };

  const handleRemoveAmenity = (item) => {
    setAmenities(amenities.filter(a => a !== item));
  };

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setImages([...images, newImageUrl.trim()]);
      setNewImageUrl('');
      showToast('Photo added to gallery preview', 'info');
    }
  };

  const handleRemoveImage = (idx) => {
    setImages(images.filter((_, i) => i !== idx));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    await venueService.updateVenue(venue?.id || 'sbr-badminton', {
      name,
      area,
      fullAddress,
      about,
      operatingHours,
      amenities,
      images
    });
    setLoading(false);
    showToast('Facility details saved successfully!', 'success');
  };

  if (!venue) return <div style={{ padding: 40, textAlign: 'center' }}>Loading facility details...</div>;

  return (
    <div className="facility-mgmt-wrapper glass-card">
      <div className="mgmt-header flex items-center justify-between">
        <div>
          <h3 className="mgmt-title">Facility Profile & Details</h3>
          <p className="mgmt-sub">Manage your venue branding, address, amenities, and player photo gallery.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="facility-form flex-col gap-lg">
        
        {/* Basic Info */}
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Facility / Arena Name</label>
            <input 
              type="text" 
              className="form-input" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Operating Hours</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. 7:00 AM - 11:00 PM"
              value={operatingHours} 
              onChange={(e) => setOperatingHours(e.target.value)} 
              required 
            />
          </div>
        </div>

        {/* Location & Address */}
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Short Area / Landmark</label>
            <input 
              type="text" 
              className="form-input" 
              value={area} 
              onChange={(e) => setArea(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Full Street Address</label>
            <input 
              type="text" 
              className="form-input" 
              value={fullAddress} 
              onChange={(e) => setFullAddress(e.target.value)} 
              required 
            />
          </div>
        </div>

        {/* About Description */}
        <div className="form-group">
          <label className="form-label">About Venue (Specifications, Flooring, Amenities Description)</label>
          <textarea 
            className="form-textarea" 
            rows={4}
            value={about} 
            onChange={(e) => setAbout(e.target.value)} 
            required 
          />
        </div>

        {/* Amenities Manager */}
        <div className="amenities-mgmt-box">
          <label className="form-label">Amenities & Player Offerings</label>
          <div className="flex gap-sm" style={{ marginBottom: 12 }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Air Conditioning, Locker Rooms, Drinking Water..."
              value={amenityInput}
              onChange={(e) => setAmenityInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddAmenity())}
            />
            <button type="button" className="btn btn-secondary" onClick={handleAddAmenity}>
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>

          <div className="amenities-chips-list flex flex-wrap gap-sm">
            {amenities.map((item, idx) => (
              <span key={idx} className="amenity-edit-chip flex items-center gap-sm">
                <CheckCircle2 size={13} color="#10B981" />
                <span>{item}</span>
                <button type="button" className="chip-delete-btn" onClick={() => handleRemoveAmenity(item)}>
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Photo Gallery Manager */}
        <div className="gallery-mgmt-box">
          <label className="form-label">Venue Photos (Upload / Paste image URLs)</label>
          
          <div className="flex gap-sm" style={{ marginBottom: 16 }}>
            <input 
              type="url" 
              className="form-input" 
              placeholder="Paste photo URL (https://images.unsplash.com/...)"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
            />
            <button type="button" className="btn btn-secondary" onClick={handleAddImage}>
              <Plus size={16} />
              <span>Add Photo</span>
            </button>
          </div>

          <div className="gallery-thumbs-grid">
            {images.map((img, idx) => (
              <div key={idx} className="gallery-thumb-item">
                <img src={img} alt="" className="thumb-preview-img" />
                <button 
                  type="button" 
                  className="delete-photo-btn"
                  onClick={() => handleRemoveImage(idx)}
                  title="Remove photo"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div style={{ marginTop: 12 }}>
          <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
            <Save size={18} />
            <span>{loading ? 'Saving Changes...' : 'Save Facility Details'}</span>
          </button>
        </div>

      </form>

      <style>{`
        .facility-mgmt-wrapper {
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

        .amenities-mgmt-box, .gallery-mgmt-box {
          background: rgba(15, 23, 42, 0.45);
          border: 1px solid var(--border-subtle);
          padding: 20px;
          border-radius: var(--radius-md);
        }

        .amenity-edit-chip {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .chip-delete-btn {
          color: #ef4444;
          font-size: 1rem;
          line-height: 1;
          margin-left: 4px;
        }

        .gallery-thumbs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
        }

        .gallery-thumb-item {
          position: relative;
          height: 90px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }

        .thumb-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .delete-photo-btn {
          position: absolute;
          top: 6px;
          right: 6px;
          background: rgba(239, 68, 68, 0.85);
          color: #ffffff;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
