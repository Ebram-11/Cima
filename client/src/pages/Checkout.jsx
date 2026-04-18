import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api';

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // If someone manually types /checkout in the URL without selecting a movie, kick them back
  useEffect(() => {
    if (!state?.movie) navigate('/movies');
  }, [state, navigate]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Create a Payment Intent with a random booking ID
      const bookingId = `BKG-${Math.floor(Math.random() * 10000)}`;
      const intentResponse = await api.payments.createIntent(150, bookingId); // EGP 150 mock price
      
      // 2. Simulate 5-second processing NFR over HTTPS
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 3. Confirm the payment
      await api.payments.confirm(intentResponse.clientSecret, bookingId);
      
      setSuccess(true);
      // Kick to home after showing success message
      setTimeout(() => navigate('/'), 3000); 
    } catch (err) {
      setError(err.message || 'Payment was declined. Please check your details and retry.');
    } finally {
      setLoading(false);
    }
  };

  if (!state?.movie) return null;

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '12px' }}>
      <h2>Secure Checkout 🔒</h2>
      <div style={{ padding: '15px', backgroundColor: '#2a2a2a', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>{state.movie.title}</h3>
        <p>📍 {state.cinema.name} ({state.cinema.location})</p>
        <p>⏰ {state.time} — 1 Ticket</p>
        <h2 style={{ color: '#e8a838', marginTop: '10px' }}>Total: 150 EGP</h2>
      </div>

      {success ? (
        <div style={{ padding: '20px', backgroundColor: '#2e7d32', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
          <h3>✅ Payment Successful!</h3>
          <p>Your booking is confirmed. Redirecting...</p>
        </div>
      ) : (
        <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {error && (
            <div style={{ padding: '15px', backgroundColor: '#d32f2f', color: 'white', borderRadius: '8px' }}>
              ⚠️ {error}
            </div>
          )}
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label>Card Number (Mocked for PCI-DSS)</label>
            <input type="text" placeholder="1234 5678 9101 1121" maxLength="19" required 
                   style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#333', color: 'white' }} />
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
              <label>Expiry</label>
              <input type="text" placeholder="MM/YY" maxLength="5" required 
                     style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#333', color: 'white' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
              <label>CVC</label>
              <input type="password" placeholder="123" maxLength="3" required 
                     style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#333', color: 'white' }} />
            </div>
          </div>

          <p style={{ fontSize: '12px', color: '#888' }}>
            🔒 All data is transmitted securely via HTTPS and processed off-server.
          </p>

          <button type="submit" disabled={loading} style={{ 
            padding: '15px', backgroundColor: '#e8a838', color: 'black', border: 'none', 
            borderRadius: '6px', fontWeight: 'bold', fontSize: '16px', cursor: loading ? 'wait' : 'pointer' 
          }}>
            {loading ? 'Processing...' : 'Pay 150 EGP securely'}
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;