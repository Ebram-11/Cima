// SCRUM-41: Filter Cinemas by Location
const { LOCATIONS, CINEMAS } = require('../data/cinemas');

// GET /api/cinemas?location=Cairo
function getCinemas(req, res) {
  const { location } = req.query;

  if (!location || !location.trim()) {
    return res.json({ cinemas: CINEMAS, total: CINEMAS.length });
  }

  const loc = location.trim().toLowerCase();
  const filtered = CINEMAS.filter(c => c.location.toLowerCase() === loc);

  res.json({ cinemas: filtered, total: filtered.length, appliedLocation: location });
}

// GET /api/locations
function getLocations(req, res) {
  res.json({ locations: LOCATIONS });
}

module.exports = { getCinemas, getLocations };
