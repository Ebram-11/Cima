const express = require('express');
const router = express.Router();
const { getCinemas, getLocations } = require('../controllers/cinemas-controller');

router.get('/', getCinemas);
router.get('/locations', getLocations);

module.exports = router;
