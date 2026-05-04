// [SCRUM-55] Generate & Display Digital Ticket with QR Code
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';
import { getTicket } from '../services/bookings-service';
import './ticket.css';

export default function Ticket() {
  const { id: bookingId } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const [data, setData]     = useState(null);   // { ticket, booking }
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState('');

  // ── Fetch ticket data ──────────────────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTicket(bookingId);
        setData(result);
      } catch (err) {
        setError(err.message || 'Could not load ticket.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [bookingId]);

  // ── Render QR code onto canvas once data arrives ───────────────────────────
  // NFR: QR code must display within 2 seconds of page load
  useEffect(() => {
    if (!data?.ticket?.qrData || !canvasRef.current) return;

    QRCode.toCanvas(canvasRef.current, data.ticket.qrData, {
      width: 220,
      margin: 2,
      color: { dark: '#000000', light: '#ffffff' },
      errorCorrectionLevel: 'H',
    });
  }, [data]);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  if (loading) {
    return <div className="ticket-page__state">Loading ticket…</div>;
  }

  if (error) {
    return (
      <div className="ticket-page__state ticket-page__state--error">
        <p>{error}</p>
        <button className="btn-back" onClick={() => navigate('/bookings')}>
          ← Back to Bookings
        </button>
      </div>
    );
  }

  const { ticket, booking } = data;
  const seatList = booking.seats.map((s) => `${s.row}${s.number}`).join(', ');

  return (
    <div className="ticket-page">
      <button className="btn-back" onClick={() => navigate('/bookings')}>
        ← My Bookings
      </button>

      <div className="ticket">
        {/* ── Header strip ─────────────────────────────── */}
        <div className="ticket__header">
          <span className="ticket__brand">🎬 CIMA</span>
          {ticket.isUsed && (
            <span className="ticket__used-badge">USED</span>
          )}
        </div>

        {/* ── Movie info ───────────────────────────────── */}
        <div className="ticket__body">
          <div className="ticket__movie-section">
            {booking.moviePoster && (
              <img
                className="ticket__poster"
                src={booking.moviePoster}
                alt={booking.movieTitle}
              />
            )}
            <div className="ticket__movie-info">
              <h1 className="ticket__movie-title">{booking.movieTitle}</h1>
              <p className="ticket__ref">Ref: <strong>{booking.referenceNumber}</strong></p>
            </div>
          </div>

          {/* ── Details grid ─────────────────────────────── */}
          <div className="ticket__details-grid">
            <div className="ticket__detail">
              <span className="ticket__detail-label">Cinema</span>
              <span className="ticket__detail-value">{booking.cinemaName}</span>
            </div>
            <div className="ticket__detail">
              <span className="ticket__detail-label">Location</span>
              <span className="ticket__detail-value">{booking.cinemaLocation}</span>
            </div>
            <div className="ticket__detail">
              <span className="ticket__detail-label">Date</span>
              <span className="ticket__detail-value">{formatDate(booking.showDate)}</span>
            </div>
            <div className="ticket__detail">
              <span className="ticket__detail-label">Showtime</span>
              <span className="ticket__detail-value">{booking.showtime}</span>
            </div>
            <div className="ticket__detail">
              <span className="ticket__detail-label">Seat(s)</span>
              <span className="ticket__detail-value">{seatList}</span>
            </div>
            <div className="ticket__detail">
              <span className="ticket__detail-label">Total Paid</span>
              <span className="ticket__detail-value">EGP {booking.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* ── Tear line ─────────────────────────────────── */}
        <div className="ticket__tear-line" aria-hidden="true" />

        {/* ── QR section ───────────────────────────────── */}
        <div className="ticket__qr-section">
          <canvas ref={canvasRef} className="ticket__qr-canvas" />
          <p className="ticket__qr-hint">Present this QR code at the cinema entrance</p>
          {ticket.isUsed && (
            <p className="ticket__used-warning">⚠️ This ticket has already been scanned.</p>
          )}
        </div>
      </div>
    </div>
  );
}
