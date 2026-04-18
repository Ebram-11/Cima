// SCRUM-42: Filter Movies by Genre
const { GENRES, MOVIES } = require('../data/movies');
const { CINEMAS } = require('../data/cinemas');

// GET /api/movies?genres=Action,Drama
// - No `genres` param -> return all movies
// - Multiple genres -> OR match (movie with ANY of the selected genres)
function getMovies(req, res) {
  const { genres } = req.query;

  if (!genres) {
    return res.json({ movies: MOVIES, total: MOVIES.length });
  }

  // Parse comma-separated list. Ignore empty values. Case-insensitive match.
  const selected = String(genres)
    .split(',')
    .map(g => g.trim())
    .filter(Boolean)
    .map(g => g.toLowerCase());

  if (selected.length === 0) {
    return res.json({ movies: MOVIES, total: MOVIES.length });
  }

  const filtered = MOVIES.filter(movie =>
    movie.genres.some(g => selected.includes(g.toLowerCase()))
  );

  res.json({ movies: filtered, total: filtered.length, appliedGenres: selected });
}

// GET /api/genres  (predefined list — satisfies FR4: at least 15 genres)
function getGenres(req, res) {
  res.json({ genres: GENRES });
}

// GET /api/movies/:id
function getMovieById(req, res) {
  const { id } = req.params;
  const movie = MOVIES.find(m => m.id === parseInt(id, 10));

  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  // Statically assign 3 to 5 cinemas based on the movie's ID
  const numCinemas = (movie.id % 3) + 3; // 3, 4, or 5
  const startIdx = movie.id % CINEMAS.length;
  
  const selectedCinemas = [];
  for (let i = 0; i < numCinemas; i++) {
    selectedCinemas.push(CINEMAS[(startIdx + i) % CINEMAS.length]);
  }

  // Get current time in HH:MM format
  const now = new Date();
  const currentHours = String(now.getHours()).padStart(2, '0');
  const currentMinutes = String(now.getMinutes()).padStart(2, '0');
  const currentTimeStr = `${currentHours}:${currentMinutes}`;

  const allTimes = ['13:00', '15:30', '18:00', '20:30', '23:00'];
  // SCRUM-43: exclude past showtimes
  const futureTimes = allTimes.filter(t => t > currentTimeStr);

  const showtimes = [];

  if (futureTimes.length > 0) {
    selectedCinemas.forEach(cinema => {
      // Pick times deterministically based on movie and cinema IDs
      const timeOffset = (movie.id + cinema.id) % futureTimes.length;
      const count = ( (movie.id + cinema.id) % 2 ) + 2; // pick 2 or 3
      
      const times = [];
      for(let i=0; i<count; i++) {
         const tm = futureTimes[(timeOffset + i) % futureTimes.length];
         if(!times.includes(tm)) times.push(tm);
      }
      times.sort();

      if (times.length > 0) {
        showtimes.push({
          cinemaId: cinema.id,
          name: cinema.name,
          location: cinema.location,
          times
        });
      }
    });
  }

  res.json({ movie: { ...movie, showtimes } });
}

module.exports = { getMovies, getGenres, getMovieById };
