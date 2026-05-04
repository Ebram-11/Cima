// [SCRUM-49][SCRUM-55] Booking-related API calls
import { api } from './api';

// [SCRUM-55] Create a booking (called after payment confirmation)
export const createBooking = (bookingData) =>
  api.request('/bookings', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });

// [SCRUM-49] Fetch paginated booking history
export const getBookingHistory = (page = 1) =>
  api.request(`/bookings?page=${page}`);

// [SCRUM-55] Fetch a single booking's ticket
export const getTicket = (bookingId) =>
  api.request(`/bookings/${bookingId}/ticket`);
