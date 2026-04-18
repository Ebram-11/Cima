const express = require('express');
const router = express.Router();
const { getMovies, getGenres } = require('../controllers/moviesController');

// Public for Sprint 1 — browsing doesn't require auth
router.get('/', getMovies);
router.get('/genres', getGenres);

module.exports = router;
