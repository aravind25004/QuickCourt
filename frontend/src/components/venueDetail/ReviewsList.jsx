import React, { useState } from 'react';
import { Star, MessageSquarePlus, User, Calendar, ThumbsUp } from 'lucide-react';
import WriteReviewModal from '../common/WriteReviewModal';

export default function ReviewsList({ venue }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  const reviews = venue.reviews || [];
  const hasMore = visibleCount < reviews.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, reviews.length));
  };

  return (
    <div className="reviews-section-wrapper glass-card">
      
      {/* Reviews Header */}
      <div className="reviews-section-header flex items-center justify-between">
        <div>
          <h3 className="section-title">Player Reviews & Ratings</h3>
          <div className="reviews-summary-line flex items-center gap-sm">
            <div className="overall-rating-pill flex items-center gap-sm">
              <Star size={16} fill="#FBBF24" color="#FBBF24" />
              <span className="rating-num">{venue.rating.toFixed(1)}</span>
            </div>
            <span className="reviews-total-text">Based on {venue.reviewsCount || reviews.length} player verified experiences</span>
          </div>
        </div>

        <button 
          className="btn btn-outline btn-sm write-review-trigger-btn"
          onClick={() => setIsWriteModalOpen(true)}
        >
          <MessageSquarePlus size={15} />
          <span>Write Review</span>
        </button>
      </div>

      {/* Reviews List */}
      <div className="reviews-list-container flex-col gap-md">
        {reviews.slice(0, visibleCount).map((rev) => (
          <div key={rev.id} className="review-card">
            
            {/* Header: User, Stars, Date & Time */}
            <div className="review-card-header flex items-center justify-between">
              <div className="review-user-info flex items-center gap-sm">
                <img 
                  src={rev.userAvatar} 
                  alt={rev.userName} 
                  className="review-user-avatar"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'; }}
                />
                <div>
                  <div className="review-user-name">{rev.userName}</div>
                  <div className="review-stars-row flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={13} 
                        fill={i < Math.floor(rev.rating) ? '#FBBF24' : 'none'} 
                        color={i < Math.floor(rev.rating) ? '#FBBF24' : '#475569'} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Exact format from SVG: 📅 10 June 2025, 5:30 PM */}
              <div className="review-datetime-badge flex items-center gap-sm">
                <span>📅 {rev.date}{rev.time ? `, ${rev.time}` : ''}</span>
              </div>
            </div>

            {/* Review Comment Body */}
            <p className="review-comment-text">
              "{rev.comment}"
            </p>

          </div>
        ))}
      </div>

      {/* Load More Button from SVG */}
      {hasMore && (
        <div className="load-more-wrapper flex justify-center" style={{ marginTop: 20 }}>
          <button className="btn btn-secondary btn-sm load-more-btn" onClick={handleLoadMore}>
            [Load more reviews]
          </button>
        </div>
      )}

      {/* Write Review Modal */}
      <WriteReviewModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        venueId={venue.id}
        venueName={venue.name}
      />

      <style>{`
        .reviews-section-wrapper {
          padding: 28px;
          border-radius: var(--radius-lg);
          margin-top: 32px;
        }

        .reviews-section-header {
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .overall-rating-pill {
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          color: #fbbf24;
          font-weight: 800;
          font-size: 0.95rem;
        }

        .reviews-total-text {
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .reviews-list-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 18px 20px;
          transition: border-color 0.2s ease;
        }

        .review-card:hover {
          border-color: rgba(148, 163, 184, 0.3);
        }

        .review-card-header {
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .review-user-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--border-subtle);
        }

        .review-user-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .review-stars-row {
          gap: 2px;
          margin-top: 2px;
        }

        .review-datetime-badge {
          font-size: 0.8rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .review-comment-text {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-style: italic;
        }

        .load-more-btn {
          font-weight: 600;
          padding: 10px 24px;
        }
      `}</style>
    </div>
  );
}
