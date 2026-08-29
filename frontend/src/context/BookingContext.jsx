import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_VENUES, INITIAL_BOOKINGS, DATASET_VERSION } from '../assets/sports-data';

const BookingContext = createContext();

const VENUES_KEY = 'quickcourt_venues_data_v2';
const BOOKINGS_KEY = 'quickcourt_user_bookings_v2';
const VERSION_KEY = 'quickcourt_dataset_ver';

export function BookingProvider({ children }) {
  const [venues, setVenues] = useState(() => {
    const savedVer = localStorage.getItem(VERSION_KEY);
    if (savedVer === DATASET_VERSION) {
      const saved = localStorage.getItem(VENUES_KEY);
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    localStorage.setItem(VERSION_KEY, DATASET_VERSION);
    return INITIAL_VENUES;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem(BOOKINGS_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return INITIAL_BOOKINGS;
  });

  useEffect(() => {
    localStorage.setItem(VENUES_KEY, JSON.stringify(venues));
  }, [venues]);

  useEffect(() => {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  }, [bookings]);

  // Get single venue by ID
  const getVenueById = (venueId) => {
    return venues.find(v => v.id === venueId);
  };

  // Add review to venue
  const addReview = (venueId, { userName, userAvatar, rating, comment }) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    const newReview = {
      id: 'rev-' + Date.now(),
      userName: userName || 'Anonymous Player',
      userAvatar: userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: parseFloat(rating) || 5,
      date: formattedDate,
      time: formattedTime,
      comment: comment.trim()
    };

    setVenues(prev => prev.map(v => {
      if (v.id !== venueId) return v;
      const updatedReviews = [newReview, ...v.reviews];
      const newAvgRating = +(updatedReviews.reduce((acc, r) => acc + r.rating, 0) / updatedReviews.length).toFixed(1);
      return {
        ...v,
        rating: newAvgRating,
        reviewsCount: updatedReviews.length,
        reviews: updatedReviews
      };
    }));

    return newReview;
  };

  // Check if a specific slot on date and court is already booked
  const isSlotBooked = (venueId, courtId, dateStr, slotTime) => {
    return bookings.some(b => 
      b.venueId === venueId && 
      b.courtId === courtId &&
      b.date === dateStr && 
      b.timeSlot?.includes(slotTime) &&
      b.status === 'Confirmed'
    );
  };

  // Create new court booking
  const createBooking = (bookingData) => {
    const bookingId = 'QC-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    
    const newBooking = {
      id: bookingId,
      venueId: bookingData.venueId,
      venueName: bookingData.venueName,
      sport: bookingData.sport,
      sportIcon: bookingData.sportIcon || '🏸',
      courtId: bookingData.courtId,
      courtName: bookingData.courtName,
      date: bookingData.date, // YYYY-MM-DD
      formattedDate: bookingData.formattedDate,
      timeSlot: bookingData.timeSlot,
      location: bookingData.location,
      status: 'Confirmed',
      amount: bookingData.amount,
      extraPlayers: bookingData.extraPlayers || 0,
      rentalEquipments: bookingData.rentalEquipments || [],
      createdAt: new Date().toISOString(),
      canCancel: true,
      cancellationReason: null
    };

    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  // Cancel booking
  const cancelBooking = (bookingId, reason = 'Cancelled by user') => {
    setBookings(prev => prev.map(b => {
      if (b.id !== bookingId) return b;
      return {
        ...b,
        status: 'Cancelled',
        canCancel: false,
        cancellationReason: reason
      };
    }));
    return { success: true };
  };

  return (
    <BookingContext.Provider
      value={{
        venues,
        bookings,
        getVenueById,
        addReview,
        isSlotBooked,
        createBooking,
        cancelBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
