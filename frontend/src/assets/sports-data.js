// Real-World Sports Venues & Pan-India Cities Dataset for QuickCourt
// Covers all regions of India with authentic sports complexes, turfs, and GPS coordinates

export const PAN_INDIA_CITIES = [
  // West India
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', region: 'West', lat: 23.0225, lng: 72.5714, isMetro: true },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', region: 'West', lat: 19.0760, lng: 72.8777, isMetro: true },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', region: 'West', lat: 18.5204, lng: 73.8567, isMetro: true },
  { id: 'surat', name: 'Surat', state: 'Gujarat', region: 'West', lat: 21.1702, lng: 72.8311 },
  { id: 'vadodara', name: 'Vadodara', state: 'Gujarat', region: 'West', lat: 22.3072, lng: 73.1812 },
  { id: 'rajkot', name: 'Rajkot', state: 'Gujarat', region: 'West', lat: 22.3039, lng: 70.8022 },
  { id: 'nagpur', name: 'Nagpur', state: 'Maharashtra', region: 'West', lat: 21.1458, lng: 79.0882 },
  { id: 'nashik', name: 'Nashik', state: 'Maharashtra', region: 'West', lat: 19.9975, lng: 73.7898 },
  { id: 'goa', name: 'Goa (Panaji)', state: 'Goa', region: 'West', lat: 15.4909, lng: 73.8278 },

  // South India
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', region: 'South', lat: 12.9716, lng: 77.5946, isMetro: true },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', region: 'South', lat: 13.0827, lng: 80.2707, isMetro: true },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', region: 'South', lat: 17.3850, lng: 78.4867, isMetro: true },
  { id: 'kochi', name: 'Kochi', state: 'Kerala', region: 'South', lat: 9.9312, lng: 76.2673 },
  { id: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', region: 'South', lat: 11.0168, lng: 76.9558 },
  { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', state: 'Kerala', region: 'South', lat: 8.5241, lng: 76.9366 },
  { id: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh', region: 'South', lat: 17.6868, lng: 83.2185 },

  // North India
  { id: 'delhi', name: 'Delhi NCR (New Delhi)', state: 'Delhi', region: 'North', lat: 28.6139, lng: 77.2090, isMetro: true },
  { id: 'gurugram', name: 'Gurugram (Gurgaon)', state: 'Haryana', region: 'North', lat: 28.4595, lng: 77.0266, isMetro: true },
  { id: 'noida', name: 'Noida / Greater Noida', state: 'Uttar Pradesh', region: 'North', lat: 28.5355, lng: 77.3910, isMetro: true },
  { id: 'chandigarh', name: 'Chandigarh', state: 'Punjab/Haryana', region: 'North', lat: 30.7333, lng: 76.7794 },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', region: 'North', lat: 26.9124, lng: 75.7873 },
  { id: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', region: 'North', lat: 26.8467, lng: 80.9462 },
  { id: 'dehradun', name: 'Dehradun', state: 'Uttarakhand', region: 'North', lat: 30.3165, lng: 78.0322 },

  // East & North-East India
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', region: 'East', lat: 22.5726, lng: 88.3639, isMetro: true },
  { id: 'bhubaneswar', name: 'Bhubaneswar', state: 'Odisha', region: 'East', lat: 20.2961, lng: 85.8245 },
  { id: 'patna', name: 'Patna', state: 'Bihar', region: 'East', lat: 25.5941, lng: 85.1376 },
  { id: 'ranchi', name: 'Ranchi', state: 'Jharkhand', region: 'East', lat: 23.3441, lng: 85.3096 },
  { id: 'guwahati', name: 'Guwahati', state: 'Assam', region: 'East', lat: 26.1445, lng: 91.7362 },

  // Central India
  { id: 'indore', name: 'Indore', state: 'Madhya Pradesh', region: 'Central', lat: 22.7196, lng: 75.8577 },
  { id: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh', region: 'Central', lat: 23.2599, lng: 77.4126 },
  { id: 'raipur', name: 'Raipur', state: 'Chhattisgarh', region: 'Central', lat: 21.2514, lng: 81.6296 }
];

export const CITIES = PAN_INDIA_CITIES;

export const SPORTS_CATEGORIES = [
  { id: 'all', name: 'All Sports', icon: '🏆', color: '#10B981' },
  { id: 'badminton', name: 'Badminton', icon: '🏸', color: '#06B6D4' },
  { id: 'football', name: 'Football / Turf', icon: '⚽', color: '#10B981' },
  { id: 'cricket', name: 'Box Cricket', icon: '🏏', color: '#F59E0B' },
  { id: 'tennis', name: 'Tennis', icon: '🎾', color: '#84CC16' },
  { id: 'pickleball', name: 'Pickleball', icon: '🏓', color: '#EC4899' },
  { id: 'basketball', name: 'Basketball', icon: '🏀', color: '#F97316' },
  { id: 'table_tennis', name: 'Table Tennis', icon: '🏓', color: '#6366F1' },
  { id: 'swimming', name: 'Swimming', icon: '🏊', color: '#3B82F6' },
  { id: 'squash', name: 'Squash', icon: '🎯', color: '#A855F7' }
];

export const DATASET_VERSION = '3.0.0-pan-india';

export const INITIAL_VENUES = [
  // -------------------------------------------------------------
  // AHMEDABAD
  // -------------------------------------------------------------
  {
    id: 'the-arena-transstadia',
    name: 'The Arena by TransStadia',
    city: 'ahmedabad',
    area: 'Kankaria Lake, Maninagar',
    fullAddress: 'Near Gate No. 3, Kankaria Lake, Maninagar, Ahmedabad, Gujarat 380022',
    rating: 4.9,
    reviewsCount: 38,
    pricePerHour: 750,
    sport: 'football',
    sportName: 'Football / Turf',
    sportIcon: '⚽',
    venueType: 'outdoor',
    isTopRated: true,
    isBudget: false,
    operatingHours: '6:00 AM - 11:30 PM',
    about: 'India’s premier convertible multi-purpose stadium built to Olympic specifications. Features FIFA 2-star certified artificial football turf, 4K night floodlighting, professional dugouts, and player locker rooms.',
    specialNotes: [
      'FIFA 2-Star certified turf flooring with shock pad underlay',
      'Turf/rubber sole shoes strictly required (metal studs prohibited)',
      'Official match balls and training bibs provided free of charge'
    ],
    amenities: [
      'FIFA Certified 50mm Turf',
      '4K LED Floodlights',
      'Changing Rooms & Showers',
      'Match Bibs & Ball Included',
      'Spectator Gallery (20,000 capacity)',
      'Sports Cafe & Nutrition Bar'
    ],
    courts: [
      { id: 'c1', name: 'Turf A (7v7 Match Turf)', surface: 'FIFA Certified AstroTurf', price: 1200 },
      { id: 'c2', name: 'Turf B (5v5 Fast Pitch)', surface: 'FIFA Certified AstroTurf', price: 750 }
    ],
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-ts-1',
        userName: 'Aman Singhania',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '24 June 2025',
        time: '8:30 PM',
        comment: 'World class facility! The turf cushioning is top notch with zero knee strain. Lighting is bright and even.'
      }
    ],
    coordinates: { lat: 22.9984, lng: 72.5976 }
  },
  {
    id: 'sbr-badminton',
    name: 'SBR Badminton & Sports Arena',
    city: 'ahmedabad',
    area: 'Satellite / Jodhpur Cross Road',
    fullAddress: '2nd Floor, Aangan Complex, Opposite Star Bazaar, Satellite, Ahmedabad, Gujarat 380015',
    rating: 4.7,
    reviewsCount: 26,
    pricePerHour: 250,
    sport: 'badminton',
    sportName: 'Badminton',
    sportIcon: '🏸',
    venueType: 'indoor',
    isTopRated: true,
    isBudget: true,
    operatingHours: '6:00 AM - 11:00 PM',
    about: 'Premier tournament training venue equipped with 6 international standard BWF-approved synthetic and wooden teak courts. Glare-free overhead LED lighting, high ceiling clearance (35+ ft), air-cooling, and player lounge.',
    specialNotes: [
      'Tournament Training Venue with BWF certified synthetic mats',
      'For more than 2 players Rs. 50 extra per person',
      'Equipment available on rent (Yonex rackets, Mavis 350 shuttles)'
    ],
    amenities: [
      'BWF Grade 1 Synthetic Mats',
      'Wooden Teak Sprung Floors',
      'Glare-Free LED Fixtures',
      'Locker & Shower Rooms',
      'Equipment Rental Pro-Shop'
    ],
    courts: [
      { id: 'c1', name: 'Court 1 (Yonex BWF Mat)', surface: 'Synthetic BWF Mat', price: 250 },
      { id: 'c2', name: 'Court 2 (Yonex BWF Mat)', surface: 'Synthetic BWF Mat', price: 250 },
      { id: 'c3', name: 'Court 3 (Teak Wood Court)', surface: 'Wooden Teak Floor', price: 300 }
    ],
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-sbr-1',
        userName: 'Mitchell Admin',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '10 June 2025',
        time: '5:30 PM',
        comment: 'Nice turf, well maintained and lighting is top notch! Staff was very courteous.'
      }
    ],
    coordinates: { lat: 23.0234, lng: 72.5186 }
  },

  // -------------------------------------------------------------
  // DELHI NCR
  // -------------------------------------------------------------
  {
    id: 'siri-fort-delhi',
    name: 'Siri Fort Sports Complex',
    city: 'delhi',
    area: 'August Kranti Marg, Siri Fort',
    fullAddress: 'Siri Fort Institutional Area, August Kranti Marg, New Delhi, Delhi 110049',
    rating: 4.9,
    reviewsCount: 74,
    pricePerHour: 350,
    sport: 'badminton',
    sportName: 'Badminton',
    sportIcon: '🏸',
    venueType: 'indoor',
    isTopRated: true,
    isBudget: true,
    operatingHours: '6:00 AM - 10:00 PM',
    about: 'Iconic Commonwealth Games host stadium with 12 international BWF badminton courts, 8 synthetic tennis courts, Olympic swimming pool, and squash courts.',
    specialNotes: [
      'Official CWG 2010 Venue',
      'Strictly non-marking shoes required',
      'Yonex stringing service on site'
    ],
    amenities: [
      '12 BWF Certified Courts',
      'Olympic Swimming Complex',
      'Tennis Hard & Clay Courts',
      'Locker & Steam Rooms',
      'Pro Sports Shop'
    ],
    courts: [
      { id: 'c1', name: 'Court A (CWG Arena Mat)', surface: 'BWF Grade 1', price: 350 },
      { id: 'c2', name: 'Court B (CWG Arena Mat)', surface: 'BWF Grade 1', price: 350 }
    ],
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-sf-1',
        userName: 'Kabir Varma',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '15 June 2025',
        time: '7:00 AM',
        comment: 'Best sports complex in Delhi NCR. The badminton hall is massive with perfect lighting.'
      }
    ],
    coordinates: { lat: 28.5528, lng: 77.2189 }
  },
  {
    id: 'cybercity-turf-gurugram',
    name: 'Cyber City Sports Arena & Turf',
    city: 'gurugram',
    area: 'DLF Cyber City, Phase 2',
    fullAddress: 'Opposite Building 10, DLF Cyber City, Sector 24, Gurugram, Haryana 122002',
    rating: 4.8,
    reviewsCount: 52,
    pricePerHour: 950,
    sport: 'football',
    sportName: 'Football / Turf',
    sportIcon: '⚽',
    venueType: 'outdoor',
    isTopRated: true,
    isBudget: false,
    operatingHours: '24 Hours Open',
    about: 'High-energy 7v7 and 5v5 FIFA-standard football and box cricket turf located in the heart of Cyber Hub. Features high-definition floodlights and corporate lounge.',
    specialNotes: [
      'Open 24x7 for night matches',
      'Free energy drinks & water dispenser'
    ],
    amenities: [
      'FIFA Approved 50mm Grass',
      'LED Floodlights',
      'Air-conditioned Dugouts',
      'Sound System & Live Scoreboard',
      'Valet Parking'
    ],
    courts: [
      { id: 'c1', name: 'Cyber Turf 1 (5v5)', surface: 'Artificial Turf', price: 950 },
      { id: 'c2', name: 'Cyber Turf 2 (7v7 Grand)', surface: 'Artificial Turf', price: 1500 }
    ],
    images: [
      'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-cc-1',
        userName: 'Varun Grover',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '20 June 2025',
        time: '9:00 PM',
        comment: 'Unbeatable location and fantastic turf bounce. Ideal for corporate leagues.'
      }
    ],
    coordinates: { lat: 28.4950, lng: 77.0895 }
  },

  // -------------------------------------------------------------
  // BENGALURU
  // -------------------------------------------------------------
  {
    id: 'cse-bengaluru',
    name: 'Padukone-Dravid Centre for Sports Excellence',
    city: 'bengaluru',
    area: 'Bettahalasur, Yelahanka / Airport Road',
    fullAddress: 'Survey No 336, Bettahalasur, Jala Hobli, Yelahanka, Bengaluru, Karnataka 562157',
    rating: 5.0,
    reviewsCount: 89,
    pricePerHour: 400,
    sport: 'badminton',
    sportName: 'Badminton',
    sportIcon: '🏸',
    venueType: 'indoor',
    isTopRated: true,
    isBudget: false,
    operatingHours: '5:30 AM - 10:30 PM',
    about: 'India’s most advanced integrated sports complex co-founded by Prakash Padukone and Rahul Dravid. Features 16 international BWF Grade-1 badminton courts, FIFA-certified football pitch, Olympic pool, and sports science center.',
    specialNotes: [
      'Strictly non-marking indoor court shoes required',
      'Full facility sports medicine, physio, and recovery ice baths'
    ],
    amenities: [
      '16 BWF Certified Courts',
      'FIFA Approved Football Turf',
      '50m Olympic Pool',
      'Sports Science Lab',
      'Pro Athlete Cafeteria'
    ],
    courts: [
      { id: 'c1', name: 'Court 1 (Centre Court BWF)', surface: 'BWF Grade 1 Mat', price: 400 },
      { id: 'c2', name: 'Court 2 (BWF Tournament Mat)', surface: 'BWF Grade 1 Mat', price: 400 }
    ],
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-cse-1',
        userName: 'Siddharth Rao',
        userAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '21 June 2025',
        time: '7:00 AM',
        comment: 'Hands down the best sports facility in India. World class lighting, temperature, and flooring.'
      }
    ],
    coordinates: { lat: 13.1782, lng: 77.6256 }
  },
  {
    id: 'play-arena-sarjapur',
    name: 'Play Arena Multi-Sports Turf & Courts',
    city: 'bengaluru',
    area: 'Kasavanahalli, Sarjapur Road',
    fullAddress: 'Play Arena, Central Jail Road, Kasavanahalli, Sarjapur Road, Bengaluru, Karnataka 560035',
    rating: 4.7,
    reviewsCount: 54,
    pricePerHour: 900,
    sport: 'football',
    sportName: 'Football / Turf',
    sportIcon: '⚽',
    venueType: 'outdoor',
    isTopRated: true,
    isBudget: false,
    operatingHours: '6:00 AM - 11:00 PM',
    about: 'Iconic 10-acre multi-sports arena with multiple 5v5 and 7v7 football turfs, synthetic badminton courts, basketball courts, and skate park.',
    specialNotes: [
      'Bibs and match footballs provided with every turf slot'
    ],
    amenities: [
      'Multi 5v5 & 7v7 Turfs',
      'Badminton Arena',
      'Night Floodlights',
      'Showers & Lockers',
      'Play Lounge & Cafe'
    ],
    courts: [
      { id: 'c1', name: 'Turf Alpha (5v5 Football)', surface: 'Artificial Turf 50mm', price: 900 }
    ],
    images: [
      'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-pa-1',
        userName: 'Naveen Kumar',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '16 June 2025',
        time: '8:00 PM',
        comment: 'Great turf quality with zero slippery patches. Plenty of parking and food options around.'
      }
    ],
    coordinates: { lat: 12.9063, lng: 77.6748 }
  },

  // -------------------------------------------------------------
  // MUMBAI
  // -------------------------------------------------------------
  {
    id: 'andheri-sports-complex',
    name: 'Andheri Sports Complex (Shahaji Raje Sankul)',
    city: 'mumbai',
    area: 'Veera Desai Road, Andheri West',
    fullAddress: 'Shahaji Raje Krida Sankul, Veera Desai Road, Andheri West, Mumbai, Maharashtra 400053',
    rating: 4.6,
    reviewsCount: 62,
    pricePerHour: 350,
    sport: 'badminton',
    sportName: 'Badminton',
    sportIcon: '🏸',
    venueType: 'indoor',
    isTopRated: true,
    isBudget: true,
    operatingHours: '6:00 AM - 10:30 PM',
    about: 'Major government-backed multi-sports complex in Mumbai featuring 6 wooden teak badminton courts, Olympic swimming pool, tennis courts, and football ground.',
    specialNotes: [
      'Non-marking shoes mandatory on wooden court'
    ],
    amenities: [
      '6 Wooden Teak Courts',
      'Olympic Swimming Pool',
      'Floodlit Football Ground',
      'Locker & Changing Rooms'
    ],
    courts: [
      { id: 'c1', name: 'Court 1 (Wooden Teak)', surface: 'Wooden Flooring', price: 350 }
    ],
    images: [
      'https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-asc-1',
        userName: 'Rohan Deshmukh',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        rating: 4.5,
        date: '19 June 2025',
        time: '7:30 PM',
        comment: 'Great value for money in Andheri. Courts are well kept.'
      }
    ],
    coordinates: { lat: 19.1294, lng: 72.8335 }
  },
  {
    id: 'play-turf-bandra',
    name: 'Play Turf Mumbai',
    city: 'mumbai',
    area: 'Bandra West / Khar',
    fullAddress: 'Behind Khar Gymkhana, 14th Road, Bandra West, Mumbai, Maharashtra 400052',
    rating: 4.8,
    reviewsCount: 47,
    pricePerHour: 1100,
    sport: 'football',
    sportName: 'Football / Turf',
    sportIcon: '⚽',
    venueType: 'outdoor',
    isTopRated: true,
    isBudget: false,
    operatingHours: '6:00 AM - 1:00 AM',
    about: 'Premier rooftop football and box cricket turf in Bandra West with sea breeze, high tension safety nets, LED floodlights, and premium rubber-infilled turf.',
    specialNotes: [
      'Open until 1:00 AM for late night corporate matches'
    ],
    amenities: [
      'Rooftop Sea Breeze Turf',
      'Night Floodlights',
      'Air-conditioned Dugouts'
    ],
    courts: [
      { id: 'c1', name: 'Rooftop Pitch A (5v5)', surface: 'Rubber Infill Turf', price: 1100 }
    ],
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-ptb-1',
        userName: 'Zaid Merchant',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '23 June 2025',
        time: '10:00 PM',
        comment: 'The vibe here at night is unmatched! Turf is soft and very safe for slide tackles.'
      }
    ],
    coordinates: { lat: 19.0607, lng: 72.8362 }
  },

  // -------------------------------------------------------------
  // HYDERABAD
  // -------------------------------------------------------------
  {
    id: 'gopichand-academy-hyderabad',
    name: 'Pullela Gopichand Badminton Academy',
    city: 'hyderabad',
    area: 'Gachibowli, Financial District',
    fullAddress: 'Survey No 91, ISB Road, Gachibowli, Hyderabad, Telangana 500032',
    rating: 5.0,
    reviewsCount: 96,
    pricePerHour: 400,
    sport: 'badminton',
    sportName: 'Badminton',
    sportIcon: '🏸',
    venueType: 'indoor',
    isTopRated: true,
    isBudget: false,
    operatingHours: '5:30 AM - 10:00 PM',
    about: 'Legendary breeding ground of Olympic champions like PV Sindhu and Saina Nehwal. Features 8 international Yonex synthetic courts, high air volume cooling, and world-class physical fitness gym.',
    specialNotes: [
      'World-class training facility',
      'Non-marking shoes strictly enforced'
    ],
    amenities: [
      '8 Olympic BWF Courts',
      'High-Performance Gym',
      'Physiotherapy Center',
      'Cafeteria & Protein Bar'
    ],
    courts: [
      { id: 'c1', name: 'Court 1 (Yonex BWF Green)', surface: 'BWF Grade 1', price: 400 },
      { id: 'c2', name: 'Court 2 (Yonex BWF Green)', surface: 'BWF Grade 1', price: 400 }
    ],
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-pg-1',
        userName: 'Anand Reddy',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '22 June 2025',
        time: '6:30 AM',
        comment: 'Playing here is a dream for any badminton fan! Courts are in pristine condition.'
      }
    ],
    coordinates: { lat: 17.4435, lng: 78.3489 }
  },

  // -------------------------------------------------------------
  // CHENNAI
  // -------------------------------------------------------------
  {
    id: 'sdat-tennis-stadium-chennai',
    name: 'SDAT Tennis Stadium & Arena',
    city: 'chennai',
    area: 'Nungambakkam, Lake Area',
    fullAddress: 'Sports Development Authority of Tamil Nadu, Nungambakkam, Chennai, Tamil Nadu 600034',
    rating: 4.9,
    reviewsCount: 68,
    pricePerHour: 500,
    sport: 'tennis',
    sportName: 'Tennis',
    sportIcon: '🎾',
    venueType: 'outdoor',
    isTopRated: true,
    isBudget: false,
    operatingHours: '6:00 AM - 10:00 PM',
    about: 'Famous former home of the ATP Chennai Open. Features 5 floodlit Plexicushion hard courts, 6,000 capacity stadium, and coaching academy.',
    specialNotes: [
      'Official ATP Tour Specification Courts',
      'Tennis shoes required'
    ],
    amenities: [
      'ATP Plexicushion Courts',
      'Floodlights',
      'Locker & Showers',
      'Tennis Pro Shop'
    ],
    courts: [
      { id: 'c1', name: 'Court 1 (ATP Center Court)', surface: 'Plexicushion Hard', price: 600 },
      { id: 'c2', name: 'Court 2 (Match Court)', surface: 'Plexicushion Hard', price: 500 }
    ],
    images: [
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-sdat-1',
        userName: 'Karthik Subramanian',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '19 June 2025',
        time: '5:30 PM',
        comment: 'Iconic tennis ground with unmatched court pace and bounce. Highly recommended.'
      }
    ],
    coordinates: { lat: 13.0604, lng: 80.2405 }
  },

  // -------------------------------------------------------------
  // PUNE
  // -------------------------------------------------------------
  {
    id: 'balewadi-sports-complex-pune',
    name: 'Shree Shiv Chhatrapati Sports Complex',
    city: 'pune',
    area: 'Balewadi, Mahalunge',
    fullAddress: 'National Games Park, Balewadi, Pune, Maharashtra 411045',
    rating: 4.8,
    reviewsCount: 57,
    pricePerHour: 300,
    sport: 'badminton',
    sportName: 'Badminton',
    sportIcon: '🏸',
    venueType: 'indoor',
    isTopRated: true,
    isBudget: true,
    operatingHours: '6:00 AM - 10:30 PM',
    about: 'Mega National Games sports stadium featuring air-conditioned badminton halls, Olympic swimming pool, table tennis complex, and athletic tracks.',
    specialNotes: [
      'National Games specification venue',
      'Non-marking footwear strictly mandatory'
    ],
    amenities: [
      'BWF Air-conditioned Courts',
      'Olympic Swimming Stadium',
      'Gym & Recovery Center',
      'Cafeteria'
    ],
    courts: [
      { id: 'c1', name: 'Court 1 (BWF Mat)', surface: 'BWF Grade 1', price: 300 },
      { id: 'c2', name: 'Court 2 (BWF Mat)', surface: 'BWF Grade 1', price: 300 }
    ],
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-bw-1',
        userName: 'Soham Kulkarni',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '18 June 2025',
        time: '6:00 PM',
        comment: 'Huge complex with great lighting and cool temperature. Best in Pune.'
      }
    ],
    coordinates: { lat: 18.5793, lng: 73.7667 }
  },

  // -------------------------------------------------------------
  // KOLKATA
  // -------------------------------------------------------------
  {
    id: 'salt-lake-stadium-arena-kolkata',
    name: 'Salt Lake Stadium Sports Hub (VYBK)',
    city: 'kolkata',
    area: 'Sector III, Bidhannagar / Salt Lake',
    fullAddress: 'Vivekananda Yuba Bharati Krirangan, Sector III, Salt Lake City, Kolkata, West Bengal 700098',
    rating: 4.9,
    reviewsCount: 78,
    pricePerHour: 800,
    sport: 'football',
    sportName: 'Football / Turf',
    sportIcon: '⚽',
    venueType: 'outdoor',
    isTopRated: true,
    isBudget: false,
    operatingHours: '6:00 AM - 11:00 PM',
    about: 'Mecca of Indian Football. Features official training turfs, floodlit 7v7 astroturf pitches, and indoor sports arenas used for FIFA U-17 World Cup matches.',
    specialNotes: [
      'FIFA World Cup Training Turf',
      'Turf boots required'
    ],
    amenities: [
      'FIFA Approved Artificial Grass',
      'Stadium Floodlights',
      'Locker & Shower Facility',
      'Cafeteria'
    ],
    courts: [
      { id: 'c1', name: 'Practice Turf 1 (7v7)', surface: 'FIFA Certified AstroTurf', price: 800 }
    ],
    images: [
      'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-slk-1',
        userName: 'Debojyoti Banerjee',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '20 June 2025',
        time: '7:30 PM',
        comment: 'Unbelievable football atmosphere! The turf condition is pristine.'
      }
    ],
    coordinates: { lat: 22.5697, lng: 88.4069 }
  },

  // -------------------------------------------------------------
  // JAIPUR
  // -------------------------------------------------------------
  {
    id: 'sawai-mansingh-stadium-jaipur',
    name: 'Sawai Mansingh (SMS) Indoor Sports Stadium',
    city: 'jaipur',
    area: 'Ambedkar Circle, Jan Path',
    fullAddress: 'SMS Stadium, Jan Path, Ambedkar Circle, Jaipur, Rajasthan 302005',
    rating: 4.8,
    reviewsCount: 45,
    pricePerHour: 280,
    sport: 'badminton',
    sportName: 'Badminton',
    sportIcon: '🏸',
    venueType: 'indoor',
    isTopRated: true,
    isBudget: true,
    operatingHours: '6:00 AM - 10:00 PM',
    about: 'Historic multi-sports facility in Jaipur featuring wooden and synthetic badminton courts, table tennis arena, and international tennis complex.',
    specialNotes: [
      'Non-marking shoes required'
    ],
    amenities: [
      'Wooden & Synthetic Courts',
      'Table Tennis Arena',
      'Lockers & Showers'
    ],
    courts: [
      { id: 'c1', name: 'Court 1 (Wooden Teak)', surface: 'Wooden Flooring', price: 280 }
    ],
    images: [
      'https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-sms-1',
        userName: 'Aditya Rathore',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '17 June 2025',
        time: '6:30 PM',
        comment: 'Classic stadium with great lighting and well maintained wooden floors.'
      }
    ],
    coordinates: { lat: 26.8940, lng: 75.8030 }
  }
];

export const INITIAL_USER = {
  id: 'usr-admin-1',
  name: 'Mitchell Admin',
  email: 'mitchell.admin@quickcourt.com',
  role: 'Player',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  city: 'ahmedabad',
  memberSince: 'January 2024'
};

export const INITIAL_BOOKINGS = [
  {
    id: 'QC-2025-8842',
    venueId: 'the-arena-transstadia',
    venueName: 'The Arena by TransStadia',
    sport: 'football',
    sportIcon: '⚽',
    courtName: 'Turf A (7v7 Match Turf)',
    date: '2025-06-28',
    formattedDate: '28 June 2025',
    timeSlot: '6:00 PM - 7:00 PM',
    location: 'Kankaria, AHMEDABAD',
    status: 'Confirmed',
    amount: 1200,
    extraPlayers: 2,
    rentalEquipments: ['Bibs & Balls'],
    createdAt: '2025-06-20T10:30:00Z',
    canCancel: true,
    cancellationReason: null
  },
  {
    id: 'QC-2025-4421',
    venueId: 'sbr-badminton',
    venueName: 'SBR Badminton & Sports Arena',
    sport: 'badminton',
    sportIcon: '🏸',
    courtName: 'Court 1 (Yonex BWF Mat)',
    date: '2025-06-25',
    formattedDate: '25 June 2025',
    timeSlot: '5:00 PM - 6:00 PM',
    location: 'Satellite, AHMEDABAD',
    status: 'Confirmed',
    amount: 300,
    extraPlayers: 0,
    rentalEquipments: [],
    createdAt: '2025-06-18T12:00:00Z',
    canCancel: true,
    cancellationReason: null
  }
];

export const TIME_SLOTS = [
  { id: '06:00', label: '6:00 AM - 7:00 AM', time: '06:00', period: 'Morning' },
  { id: '07:00', label: '7:00 AM - 8:00 AM', time: '07:00', period: 'Morning' },
  { id: '08:00', label: '8:00 AM - 9:00 AM', time: '08:00', period: 'Morning' },
  { id: '09:00', label: '9:00 AM - 10:00 AM', time: '09:00', period: 'Morning' },
  { id: '10:00', label: '10:00 AM - 11:00 AM', time: '10:00', period: 'Morning' },
  { id: '11:00', label: '11:00 AM - 12:00 PM', time: '11:00', period: 'Morning' },
  { id: '12:00', label: '12:00 PM - 1:00 PM', time: '12:00', period: 'Afternoon' },
  { id: '13:00', label: '1:00 PM - 2:00 PM', time: '13:00', period: 'Afternoon' },
  { id: '14:00', label: '2:00 PM - 3:00 PM', time: '14:00', period: 'Afternoon' },
  { id: '15:00', label: '3:00 PM - 4:00 PM', time: '15:00', period: 'Afternoon' },
  { id: '16:00', label: '4:00 PM - 5:00 PM', time: '16:00', period: 'Evening' },
  { id: '17:00', label: '5:00 PM - 6:00 PM', time: '17:00', period: 'Evening' },
  { id: '18:00', label: '6:00 PM - 7:00 PM', time: '18:00', period: 'Evening' },
  { id: '19:00', label: '7:00 PM - 8:00 PM', time: '19:00', period: 'Evening' },
  { id: '20:00', label: '8:00 PM - 9:00 PM', time: '20:00', period: 'Night' },
  { id: '21:00', label: '9:00 PM - 10:00 PM', time: '21:00', period: 'Night' },
  { id: '22:00', label: '10:00 PM - 11:00 PM', time: '22:00', period: 'Night' }
];

export const RENTAL_EQUIPMENTS = [
  { id: 'eq-racket-pair', name: 'Yonex Racket Pair (2x)', price: 100, icon: '🏸' },
  { id: 'eq-shuttlecock-box', name: 'Yonex Mavis 350 Tube (3x)', price: 150, icon: '🎯' },
  { id: 'eq-shoes', name: 'Yonex Non-Marking Shoes', price: 120, icon: '👟' },
  { id: 'eq-tennis-balls', name: 'Wilson US Open Ball Can (3x)', price: 180, icon: '🎾' },
  { id: 'eq-football-bibs', name: 'Match Bibs & Football', price: 100, icon: '⚽' },
  { id: 'eq-towel', name: 'Sports Towel & Overgrip', price: 50, icon: '🧼' }
];
