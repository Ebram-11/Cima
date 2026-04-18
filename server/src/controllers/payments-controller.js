const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_mock_key_for_now');

// Mock database for bookings/seat holds
let bookings = [];

// POST /api/payments/create-intent
const createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency = 'egp', bookingId } = req.body;

    // FR: Ensure seat hold is valid here (mocked for now)
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: 'Invalid payment amount.' });
    }

    // Create a PaymentIntent with the order amount and currency
    // NFR: Stripe handles PCI-DSS compliance and card data tokenization automatically
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects the amount in the smallest currency unit (e.g., piasters)
      currency: currency,
      metadata: { bookingId },
    });

    // Send the client secret back to the frontend to complete the payment
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ message: 'Payment gateway error. Please try again.' });
  }
};

// POST /api/payments/confirm
const confirmBooking = async (req, res) => {
  try {
    const { paymentIntentId, bookingId } = req.body;
    
    // Retrieve the payment status from Stripe to verify it actually succeeded
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    // FR: Confirm booking ONLY after successful payment
    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ 
        message: 'Payment was not successful. Please retry.',
        status: paymentIntent.status 
      });
    }

    // Mark booking as paid in our "database"
    bookings.push({ id: bookingId, paid: true, transactionId: paymentIntent.id });

    res.json({ message: 'Payment successful! Booking confirmed.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to verify payment.' });
  }
};

module.exports = { createPaymentIntent, confirmBooking };