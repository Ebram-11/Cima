// SCRUM-41: Filter Cinemas by Location
const { LOCATIONS, CINEMAS } = require('../data/cinemas');
const { MOVIES } = require('../data/movies');

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

// GET /api/cinemas/:id
function getCinemaById(req, res) {
  const cinemaId = parseInt(req.params.id, 10);
  const cinema = CINEMAS.find(c => c.id === cinemaId);

  if (!cinema) {
    return res.status(404).json({ message: 'Cinema not found' });
  }

  const now = new Date();
  const currentHours = String(now.getHours()).padStart(2, '0');
  const currentMinutes = String(now.getMinutes()).padStart(2, '0');
  const currentTimeStr = `${currentHours}:${currentMinutes}`;

  const allTimes = ['13:00', '15:30', '18:00', '20:30', '23:00'];
  const futureTimes = allTimes.filter(t => t > currentTimeStr);

  const moviesPlaying = [];

  if (futureTimes.length > 0) {
    MOVIES.forEach(movie => {
      const numCinemas = (movie.id % 3) + 3;
      const startIdx = movie.id % CINEMAS.length;
      let showsHere = false;
      
      for (let i = 0; i < numCinemas; i++) {
        if (CINEMAS[(startIdx + i) % CINEMAS.length].id === cinemaId) {
          showsHere = true;
          break;
        }
      }

      if (showsHere) {
        const timeOffset = (movie.id + cinemaId) % futureTimes.length;
        const count = ((movie.id + cinemaId) % 2) + 2;

        const times = [];
        for (let i = 0; i < count; i++) {
          const tm = futureTimes[(timeOffset + i) % futureTimes.length];
          if (!times.includes(tm)) times.push(tm);
        }
        times.sort();

        if (times.length > 0) {
          moviesPlaying.push({
            id: movie.id,
            title: movie.title,
            poster: movie.poster,
            rating: movie.rating,
            genres: movie.genres,
            duration: movie.duration,
            year: movie.year,
            times
          });
        }
      }
    });
  }

  res.json({ cinema, moviesPlaying });
}

module.exports = { getCinemas, getLocations, getCinemaById };
