const express = require('express');
const router = express.Router();
const { 
  getCinemas, 
  getLocations, 
  getCinemaById,
  addMovieToShowtime,
  removeMovieFromShowtime
} = require('../controllers/cinemas-controller');
const { authMiddleware, checkRole, canManageCinema } = require('../middleware/auth-middleware');

router.get('/', getCinemas);
router.get('/locations', getLocations);
router.get('/:id', getCinemaById);

// Management routes
router.post('/:id/movies', 
  authMiddleware, 
  checkRole(['ADMIN', 'STAFF']), 
  canManageCinema, 
  addMovieToShowtime
);

router.delete('/:id/movies/:movieId', 
  authMiddleware, 
  checkRole(['ADMIN', 'STAFF']), 
  canManageCinema, 
  removeMovieFromShowtime
);

module.exports = router;
