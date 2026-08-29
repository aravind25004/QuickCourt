// Geolocation & Distance Calculation Service for Pan-India Sports Venues
import { PAN_INDIA_CITIES } from '../assets/sports-data';

// Haversine formula to compute great-circle distance between two GPS coordinates in kilometers
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;

  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance * 10) / 10; // 1 decimal place
}

// Find closest city in India based on GPS coordinates
export function findNearestCity(lat, lng) {
  let nearestCity = PAN_INDIA_CITIES[0];
  let minDistance = Infinity;

  for (const city of PAN_INDIA_CITIES) {
    if (city.lat && city.lng) {
      const dist = calculateDistanceKm(lat, lng, city.lat, city.lng);
      if (dist < minDistance) {
        minDistance = dist;
        nearestCity = city;
      }
    }
  }

  return {
    city: nearestCity,
    distanceKm: minDistance
  };
}

// Detect live user location via browser GPS API
export function detectUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const nearest = findNearestCity(latitude, longitude);

        resolve({
          lat: latitude,
          lng: longitude,
          accuracy,
          nearestCity: nearest.city,
          distanceToNearestCityKm: nearest.distanceKm
        });
      },
      (error) => {
        let errorMsg = 'Failed to detect location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMsg = 'Location permission denied by user';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMsg = 'Location information is unavailable';
            break;
          case error.TIMEOUT:
            errorMsg = 'Location request timed out';
            break;
          default:
            errorMsg = error.message;
        }
        reject(new Error(errorMsg));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  });
}
