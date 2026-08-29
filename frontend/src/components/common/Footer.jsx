import React from 'react';
import { MapPin, Phone, Mail, Award, Shield, Clock, Heart } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="brand-logo" onClick={() => setActivePage('home')}>
              <div className="logo-badge">
                <span className="logo-court-icon">⚡</span>
              </div>
              <div className="logo-text-group">
                <span className="logo-title">QUICKCOURT</span>
                <span className="logo-subtitle">LOCAL SPORTS BOOKING</span>
              </div>
            </div>
            <p className="footer-desc">
              Discover and instantly book the best verified local sports venues, badminton courts, football turfs, cricket boxes, and tennis clubs near you.
            </p>
            <div className="footer-features-badges">
              <div className="feature-pill"><Shield size={13} color="#10B981" /> 100% Verified Courts</div>
              <div className="feature-pill"><Clock size={13} color="#06B6D4" /> Instant Confirmation</div>
              <div className="feature-pill"><Award size={13} color="#F59E0B" /> Best Price Guarantee</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }}>Home</button></li>
              <li><button onClick={() => { setActivePage('venues'); window.scrollTo(0,0); }}>Explore Venues</button></li>
              <li><button onClick={() => { setActivePage('venues'); window.scrollTo(0,0); }}>Book Badmiton</button></li>
              <li><button onClick={() => { setActivePage('venues'); window.scrollTo(0,0); }}>Football Turfs</button></li>
              <li><button onClick={() => { setActivePage('profile'); window.scrollTo(0,0); }}>My Bookings</button></li>
            </ul>
          </div>

          {/* Supported Sports */}
          <div className="footer-col">
            <h4 className="footer-col-title">Sports Categories</h4>
            <ul className="footer-links">
              <li>🏸 Badminton Arenas</li>
              <li>⚽ FIFA Approved Turfs</li>
              <li>🏏 Box Cricket Pitches</li>
              <li>🎾 Clay & Hard Tennis</li>
              <li>🏓 Pickleball & Padel</li>
              <li>🏀 Basketball Courts</li>
            </ul>
          </div>

          {/* Playing Cities */}
          <div className="footer-col">
            <h4 className="footer-col-title">Available Cities</h4>
            <div className="cities-tag-cloud">
              <span className="city-badge">Ahmedabad</span>
              <span className="city-badge">Rajkot</span>
              <span className="city-badge">Surat</span>
              <span className="city-badge">Vadodara</span>
              <span className="city-badge">Mumbai</span>
              <span className="city-badge">Bengaluru</span>
            </div>
            <div className="support-box">
              <div className="support-item flex items-center gap-sm">
                <Phone size={14} color="#10B981" />
                <span>+91 98765 43210 (9AM - 9PM)</span>
              </div>
              <div className="support-item flex items-center gap-sm">
                <Mail size={14} color="#06B6D4" />
                <span>support@quickcourt.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom flex items-center justify-between">
          <p className="copyright-text">
            © {new Date().getFullYear()} QuickCourt Technologies Inc. All rights reserved.
          </p>
          <div className="footer-policy-links flex gap-md">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cancellation Policy</span>
            <span>Court Owner Portal</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: #070c18;
          border-top: 1px solid var(--border-subtle);
          padding: 60px 0 24px;
          margin-top: 80px;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .brand-col .footer-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 16px 0 20px;
          line-height: 1.6;
          max-width: 380px;
        }

        .footer-features-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .footer-col-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 20px;
          position: relative;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 24px;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links li, .footer-links button {
          font-size: 0.88rem;
          color: var(--text-muted);
          text-align: left;
          transition: color 0.2s ease;
        }

        .footer-links button:hover {
          color: var(--primary);
        }

        .cities-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .city-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          padding: 3px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .support-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(15, 23, 42, 0.6);
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .support-item {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .footer-bottom {
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.82rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-policy-links span {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .footer-policy-links span:hover {
          color: var(--text-main);
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
