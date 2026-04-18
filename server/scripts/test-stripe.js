require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function testStripe() {
  console.log('Testing Stripe Key:', process.env.STRIPE_SECRET_KEY ? 'Present (First 10 chars: ' + process.env.STRIPE_SECRET_KEY.substring(0, 10) + ')' : 'Missing');
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: 'usd',
    });
    console.log('✅ Success! PaymentIntent created:', paymentIntent.id);
  } catch (error) {
    console.error('❌ Stripe Error:', error.message);
    if (error.raw) {
       console.error('Raw Error Code:', error.raw.code);
       console.error('Raw Param:', error.raw.param);
    }
  }
}

testStripe();
