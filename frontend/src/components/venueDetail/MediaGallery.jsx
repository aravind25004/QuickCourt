import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function MediaGallery({ images, venueName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="media-gallery-wrapper">
      {/* Main Image Stage */}
      <div className="gallery-main-stage">
        <img 
          src={images[currentIndex]} 
          alt={`${venueName} preview ${currentIndex + 1}`} 
          className="gallery-active-img"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80';
          }}
        />

        {/* Carousel Arrows */}
        {images.length > 1 && (
          <>
            <button 
              className="gallery-nav-arrow arrow-left" 
              onClick={prevSlide}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="gallery-nav-arrow arrow-right" 
              onClick={nextSlide}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="gallery-badge-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="gallery-thumbnails-row flex gap-sm">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`thumbnail-btn ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <img src={img} alt="" className="thumb-img" />
            </button>
          ))}
        </div>
      )}

      <style>{`
        .media-gallery-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gallery-main-stage {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #1e293b;
          border: 1px solid var(--border-subtle);
        }

        .gallery-active-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }

        .gallery-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .gallery-nav-arrow:hover {
          background: rgba(16, 185, 129, 0.85);
          transform: translateY(-50%) scale(1.08);
        }

        .arrow-left { left: 16px; }
        .arrow-right { right: 16px; }

        .gallery-badge-counter {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          color: #f8fafc;
          border: 1px solid var(--border-subtle);
        }

        .gallery-thumbnails-row {
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .thumbnail-btn {
          width: 80px;
          height: 56px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 2px solid transparent;
          opacity: 0.6;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .thumbnail-btn:hover {
          opacity: 0.9;
        }

        .thumbnail-btn.active {
          border-color: var(--primary);
          opacity: 1;
          transform: scale(1.04);
        }

        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .gallery-main-stage {
            height: 260px;
          }
        }
      `}</style>
    </div>
  );
}
