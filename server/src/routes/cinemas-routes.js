const express = require('express');
const router = express.Router();
const { getCinemas, getLocations, getCinemaById } = require('../controllers/cinemas-controller');

router.get('/', getCinemas);
router.get('/locations', getLocations);
router.get('/:id', getCinemaById);

module.exports = router;
