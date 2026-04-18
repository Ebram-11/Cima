const express = require('express');
const router = express.Router();
const { createPaymentIntent, confirmBooking } = require('../controllers/payments-controller');
const { authMiddleware } = require('../middleware/auth-middleware');

// Protected routes - user must be logged in to pay
router.post('/create-intent', authMiddleware, createPaymentIntent);
router.post('/confirm', authMiddleware, confirmBooking);

module.exports = router;        