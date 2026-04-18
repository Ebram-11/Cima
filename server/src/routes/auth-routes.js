const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/auth-controller');
const { auth-middleware } = require('../middleware/auth-middleware');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', auth-middleware, getMe);

module.exports = router;
