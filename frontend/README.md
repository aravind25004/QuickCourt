# ⚡ QuickCourt - Local Sports Booking Platform

A modern, responsive, full-featured sports venue and court booking web application built with **React**, **Vite**, and a custom **CSS Glassmorphism Design System**, implementing the complete wireframe design from the Excalidraw specification.

---

## 🌟 Key Features & Implemented Screens

### 1. 🔑 Screen 1: Login
- **Responsive Split Layout**: Rich sport action visual on desktop, auto-hidden on mobile screens.
- **Fields & Validations**:
  - Email format checker and existence validation.
  - Password input with 👁 toggle to show/hide.
  - 8–20 character rule enforcement with uppercase, number, and symbol checks.
- **Quick Actions**: One-click demo credentials autofill for `Mitchell Admin` and interactive **Forgot Password** reset modal.

### 2. 📝 Screen 2: Sign Up
- **Profile Picture Upload**: File size checker with immediate `< 1 MB` limit validation.
- **Role Selector**: Choose between `Player` or `Facility Owner`.
- **Validation**: Email uniqueness check, password strength criteria, and confirm password matching.
- **Seamless Flow**: Direct transition to Screen 3 (OTP Email Verification).

### 3. 🔐 Screen 3: Email Verification (OTP)
- **6-Digit OTP Box**: Auto-focus advancing, backspace navigation, and copy-paste support.
- **Resend Countdown Timer**: 30-second active countdown before enabling resend code.
- **Edit Email Popup**: Inline email correction modal allowing immediate re-sending of verification codes.

### 4. 🏠 Screens 4 & 5: Home Page
- **Header Navigation**: QuickCourt branding, interactive City Switcher (`Ahmedabad`, `Rajkot`, `Surat`, `Vadodara`, `Mumbai`, `Bengaluru`), and user profile menu.
- **Hero Banner**: `FIND PLAYERS & VENUES NEARBY` with instant CTA buttons.
- **Sports Category Pills**: Filter by Badminton, Football, Box Cricket, Tennis, Pickleball, Basketball, Table Tennis, Swimming.
- **Featured Venues Carousel**: Real-time venue cards with price tags, badges (`⭐ Top Rated`, `₹ Budget`, `🌤️ Outdoor` / `🏢 Indoor`), and `See all venues >` link.

### 5. 🔍 Screen 6: Explore & Search Venues
- **Header**: Dynamic breadcrumbs `Sports Venues in {City}: Discover and Book Nearby Venues`.
- **Faceted Multi-Filters**:
  - Instant search by venue name or area.
  - Sport category dropdown.
  - Price per hour range slider (₹100 to ₹2000/hr).
  - Venue Type selection (`Indoor`, `Outdoor`, `All`).
  - Star rating filter (`4 stars & up`, `3 stars & up`, `2 stars & up`, `1 stars & up`).
- **Pagination**: Numbered pages and previous/next navigation buttons.

### 6. 🏸 Screen 7: Single Venue Details Page
- **Media Gallery**: Image/video carousel with `<` and `>` arrow navigation and thumbnail selector.
- **Venue Specs & Amenities**: BWF synthetic mats, floodlights, rental gear, lockers, and showers.
- **Operating Hours & Interactive Map**: Operating hours (`7:00 AM - 11:00 PM`), address, and live map directions link.
- **Player Reviews**: Star breakdown, verified review cards, `[Load more reviews]` pagination, and interactive `[Write Review]` rating modal.

### 7. 📅 Screen 8: Court Booking & Slot Selection
- **Auth Guard**: Unauthenticated users are redirected to login with an automated return flow.
- **Court Selector**: Select specific courts (e.g. Synthetic BWF, Wooden court, Turf).
- **Date Picker**: Enforces rule `The selected date must be today or later`.
- **Time Slot Grid**: Categorized by Morning, Afternoon, Evening, Night. Enforces rules `Start time must be in the future` and `Unavailable time slots are disabled`.
- **Duration & Add-ons**: 1hr, 2hr, 3hr selector, extra players (+₹50/player), and rental equipment toggles (rackets, shuttles, shoes).
- **Checkout & Payment**: Interactive payment modal with UPI QR code, Credit/Debit card, Netbanking, or Pay at Venue, culminating in a celebration confetti animation and booking receipt.

### 8. 👤 Screen 9: Profile & My Bookings Dashboard
- **User Header**: Avatar, Full Name (`Mitchell Admin`), Email, Member since date.
- **Edit Profile Tab**: Update full name, email, avatar image (<1MB check), and change password.
- **All Bookings Tab**:
  - `All Bookings` and `Cancelled` sub-tabs.
  - Booking cards displaying sport icon, venue name, date, time slot, location, status (`✅ Confirmed` / `❌ Cancelled`), and cost.
  - Actions: `[Cancel Booking]` with refund prompt, `[Write Review]` with star ratings modal, and "No cancel booking" status for past/cancelled slots.

---

## 🛠️ Technology Stack

- **Frontend**: React 18 (JSX)
- **Tooling & Bundler**: Vite
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti
- **Styling**: Vanilla CSS Design System with CSS Custom Properties, Glassmorphism, and responsive breakpoints

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Production Bundle
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.
