// [SCRUM-49] View Booking History
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBookingHistory } from '../services/bookings-service';
import './booking-history.css';

const STATUSES = {
  CONFIRMED: { label: 'Confirmed', className: 'status--confirmed' },
  CANCELLED: { label: 'Cancelled', className: 'status--cancelled' },
  PENDING:   { label: 'Pending',   className: 'status--pending'   },
};

export default function BookingHistory() {
  const navigate = useNavigate();
  const [bookings, setBookings]     = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState('');

  const fetchBookings = useCallback(async (page) => {
    setLoading(true);
    setError('');
    try {
      const data = await getBookingHistory(page);
      setBookings(data.bookings);
      setPagination(data.pagination);
    } catch (err) {
      setError(err.message || 'Failed to load booking history.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings(1);
  }, [fetchBookings]);

  const handlePageChange = (newPage) => {
    fetchBookings(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="booking-history">
      <h1 className="booking-history__title">My Bookings</h1>

      {loading && (
        <div className="booking-history__state">Loading your bookings…</div>
      )}

      {!loading && error && (
        <div className="booking-history__state booking-history__state--error">{error}</div>
      )}

      {!loading && !error && bookings.length === 0 && (
        <div className="booking-history__state">
          <p>You haven't made any bookings yet.</p>
          <button className="btn-primary" onClick={() => navigate('/movies')}>
            Browse Movies
          </button>
        </div>
      )}

      {!loading && !error && bookings.length > 0 && (
        <>
          <p className="booking-history__count">
            {pagination.total} booking{pagination.total !== 1 ? 's' : ''} found
          </p>

          <ul className="booking-history__list">
            {bookings.map((booking) => {
              const status = STATUSES[booking.status] || STATUSES.CONFIRMED;
              const seatList = booking.seats
                .map((s) => `${s.row}${s.number}`)
                .join(', ');

              return (
                <li key={booking.id} className="booking-card">
                  {/* Poster */}
                  {booking.moviePoster && (
                    <img
                      className="booking-card__poster"
                      src={booking.moviePoster}
                      alt={booking.movieTitle}
                    />
                  )}

                  {/* Details */}
                  <div className="booking-card__details">
                    <div className="booking-card__header">
                      <h2 className="booking-card__movie">{booking.movieTitle}</h2>
                      <span className={`booking-card__status ${status.className}`}>
                        {status.label}
                      </span>
                    </div>

                    <p className="booking-card__ref">
                      Ref: <strong>{booking.referenceNumber}</strong>
                    </p>

                    <div className="booking-card__meta">
                      <span>🏛 {booking.cinemaName}</span>
                      <span>📍 {booking.cinemaLocation}</span>
                      <span>📅 {booking.showDate}</span>
                      <span>🕐 {booking.showtime}</span>
                      <span>💺 {seatList}</span>
                      <span>💰 EGP {booking.totalAmount.toFixed(2)}</span>
                    </div>

                    <p className="booking-card__booked-on">
                      Booked on {formatDate(booking.createdAt)}
                    </p>
                  </div>

                  {/* Ticket button */}
                  {booking.ticket && booking.status === 'CONFIRMED' && (
                    <button
                      className="booking-card__ticket-btn"
                      onClick={() => navigate(`/bookings/${booking.id}/ticket`)}
                    >
                      View Ticket
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Pagination — AC3: max 20 per page */}
          {pagination.totalPages > 1 && (
            <div className="booking-history__pagination">
              <button
                className="pagination__btn"
                disabled={pagination.page === 1}
                onClick={() => handlePageChange(pagination.page - 1)}
              >
                ← Prev
              </button>

              <span className="pagination__info">
                Page {pagination.page} of {pagination.totalPages}
              </span>

              <button
                className="pagination__btn"
                disabled={pagination.page === pagination.totalPages}
                onClick={() => handlePageChange(pagination.page + 1)}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
