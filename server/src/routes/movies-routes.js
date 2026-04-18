const express = require('express');
const router = express.Router();
const { getMovies, getGenres, getMovieById } = require('../controllers/movies-controller');

// Public for Sprint 1 — browsing doesn't require auth
router.get('/', getMovies);
router.get('/genres', getGenres);
router.get('/:id', getMovieById);

module.exports = router;
