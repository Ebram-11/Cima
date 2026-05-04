# SCRUM-49 & SCRUM-55 — Integration Checklist

## Branch
```
feature/SCRUM-49-55-booking-history-and-ticket
```

---

## 1. Schema migration

Replace `server/prisma/schema.prisma` with the provided file, then run:

```bash
npx prisma migrate dev --name add-booking-seat-ticket
npx prisma generate
```

---

## 2. Install frontend dependency (QR code renderer)

```bash
cd client
npm install qrcode
```

---

## 3. Register backend routes in `server/src/index.js`

```js
const bookingsRoutes = require('./routes/bookings-routes');
app.use('/api/bookings', bookingsRoutes);
```

---

## 4. Add routes to `client/src/App.jsx`

```jsx
import BookingHistory from './pages/booking-history';
import Ticket         from './pages/ticket';

// Inside AppRoutes(), add:
<Route path="/bookings" element={
  <ProtectedRoute><AppLayout><BookingHistory /></AppLayout></ProtectedRoute>
} />

<Route path="/bookings/:id/ticket" element={
  <ProtectedRoute><AppLayout><Ticket /></AppLayout></ProtectedRoute>
} />
```

---

## 5. Add `.env` variable (server)

```
QR_SECRET=your-random-secret-string-here
```

This is used to HMAC-sign QR data so duplicate scans are detectable.

---

## 6. Sidebar / nav link  (optional but recommended for SCRUM-49)

Add a "My Bookings" link to `client/src/components/Sidebar.jsx`:

```jsx
<NavLink to="/bookings">My Bookings</NavLink>
```

---

## Acceptance Criteria coverage

### SCRUM-49 (View Booking History)
| AC | How it's covered |
|----|-----------------|
| AC1 – bookings sorted most-recent first | `orderBy: { createdAt: 'desc' }` in controller |
| AC2 – shows movie, cinema, showtime, seat(s), status | All fields returned & rendered in `booking-history.jsx` |
| AC3 – max 20 per page | `BOOKINGS_PER_PAGE = 20`, paginator rendered when `totalPages > 1` |
| AC4 – unauthenticated redirect to login | `authMiddleware` on all routes + React `ProtectedRoute` |

### SCRUM-55 (Digital Ticket with QR Code)
| AC | How it's covered |
|----|-----------------|
| AC1 – QR generated on booking confirmation | `createBooking` creates `Ticket` record with `qrData` in same transaction |
| AC2 – QR encodes booking reference number | `generateQrData()` embeds `referenceNumber` in HMAC payload |
| AC3 – Ticket accessible from booking history | "View Ticket" button on each confirmed booking card |
| AC4 – Duplicate scan detection | `validateQr` endpoint checks `isUsed`; returns 409 on duplicate |

### NFRs
| NFR | How it's covered |
|-----|-----------------|
| QR generated within 3s of payment | Single DB transaction; `qrcode` canvas render is client-side & near-instant |
| Ticket page loads QR within 2s | `QRCode.toCanvas` fires immediately after data fetch in `useEffect` |
