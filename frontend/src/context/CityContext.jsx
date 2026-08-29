import React, { createContext, useContext, useState, useEffect } from 'react';
import { CITIES } from '../assets/sports-data';
import { detectUserLocation, calculateDistanceKm, findNearestCity } from '../services/locationService';
import { useToast } from './ToastContext';

const CityContext = createContext();

export function CityProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState(() => {
    const saved = localStorage.getItem('quickcourt_city');
    return saved || 'ahmedabad';
  });

  const [userLocation, setUserLocation] = useState(() => {
    const savedLoc = localStorage.getItem('quickcourt_user_gps');
    if (savedLoc) {
      try { return JSON.parse(savedLoc); } catch (e) {}
    }
    return null; // { lat, lng, cityId, cityName }
  });

  const [isDetectingLocation, setIsDetectingLocation] = useState(false);

  useEffect(() => {
    localStorage.setItem('quickcourt_city', selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    if (userLocation) {
      localStorage.setItem('quickcourt_user_gps', JSON.stringify(userLocation));
    }
  }, [userLocation]);

  const currentCityObj = CITIES.find(c => c.id === selectedCity) || CITIES[0];

  // Detect user's real GPS location using browser geolocation
  const handleDetectLocation = async (silent = false) => {
    setIsDetectingLocation(true);
    try {
      const loc = await detectUserLocation();
      const locData = {
        lat: loc.lat,
        lng: loc.lng,
        cityId: loc.nearestCity.id,
        cityName: loc.nearestCity.name,
        distanceKm: loc.distanceToNearestCityKm
      };

      setUserLocation(locData);
      setSelectedCity(loc.nearestCity.id);
      setIsDetectingLocation(false);
      return { success: true, location: locData };
    } catch (err) {
      setIsDetectingLocation(false);
      return { success: false, error: err.message };
    }
  };

  // Helper to calculate distance from user to a venue
  const getDistanceToVenue = (venue) => {
    if (!userLocation || !venue.coordinates) return null;
    return calculateDistanceKm(
      userLocation.lat,
      userLocation.lng,
      venue.coordinates.lat,
      venue.coordinates.lng
    );
  };

  return (
    <CityContext.Provider 
      value={{ 
        selectedCity, 
        setSelectedCity, 
        currentCityObj, 
        cities: CITIES,
        userLocation,
        isDetectingLocation,
        detectLocation: handleDetectLocation,
        getDistanceToVenue
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
}
