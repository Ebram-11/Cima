// SCRUM-42: Filter Movies by Genre
const { GENRES, MOVIES } = require('../data/movies');

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

module.exports = { getMovies, getGenres };
