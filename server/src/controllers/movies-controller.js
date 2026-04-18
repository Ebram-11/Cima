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

  // Dynamically assign random showtimes at 3 to 5 randomly picked cinemas
  const numCinemas = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5
  const shuffledCinemas = [...CINEMAS].sort(() => 0.5 - Math.random());
  const selectedCinemas = shuffledCinemas.slice(0, numCinemas);

  const showtimes = selectedCinemas.map(cinema => {
    // Generate 3 random ordered showtimes
    const times = ['13:00', '15:30', '18:00', '20:30', '23:00']
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .sort();

    return {
      cinemaId: cinema.id,
      name: cinema.name,
      location: cinema.location,
      times
    };
  });

  res.json({ movie: { ...movie, showtimes } });
}

module.exports = { getMovies, getGenres, getMovieById };
