import React, { useState } from 'react';
import Modal from './Modal';
import { useAuth } from '../../context/AuthContext';
import { useBooking } from '../../context/BookingContext';
import { useToast } from '../../context/ToastContext';
import { Star, MessageSquare } from 'lucide-react';

export default function WriteReviewModal({ isOpen, onClose, venueId, venueName }) {
  const { user } = useAuth();
  const { addReview } = useBooking();
  const { showToast } = useToast();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      showToast('Please enter your review feedback', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      addReview(venueId, {
        userName: user?.name || 'Mitchell Admin',
        userAvatar: user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        rating,
        comment: comment.trim()
      });
      setLoading(false);
      showToast('Thank you! Your review has been posted.', 'success');
      setComment('');
      setRating(5);
      onClose();
    }, 600);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Write a Review for ${venueName || 'Venue'}`}>
      <form onSubmit={handleSubmit}>
        
        {/* Star Selection */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: 10 }}>
            Tap stars to rate your playing experience
          </div>
          <div className="flex justify-center gap-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                style={{
                  color: star <= (hoverRating || rating) ? '#FBBF24' : '#475569',
                  padding: 4,
                  transform: star <= (hoverRating || rating) ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.15s ease, color 0.15s ease'
                }}
                aria-label={`${star} star`}
              >
                <Star size={32} fill={star <= (hoverRating || rating) ? '#FBBF24' : 'none'} />
              </button>
            ))}
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FBBF24', marginTop: 8 }}>
            {rating === 5 && '⭐⭐⭐⭐⭐ Exceptional (5.0)'}
            {rating === 4 && '⭐⭐⭐⭐ Very Good (4.0)'}
            {rating === 3 && '⭐⭐⭐ Good / Average (3.0)'}
            {rating === 2 && '⭐⭐ Below Expectations (2.0)'}
            {rating === 1 && '⭐ Poor Experience (1.0)'}
          </div>
        </div>

        {/* Comment Textarea */}
        <div className="form-group">
          <label className="form-label">Your Playing Experience & Feedback</label>
          <textarea
            className="form-textarea"
            rows={4}
            placeholder="Tell other sports enthusiasts about the court turf, grip, lighting, amenities, and staff hospitality..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-sm" style={{ marginTop: 24 }}>
          <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" style={{ flex: 1 }} disabled={loading}>
            <MessageSquare size={16} />
            <span>{loading ? 'Submitting...' : 'Post Review'}</span>
          </button>
        </div>

      </form>
    </Modal>
  );
}
