// SCRUM-42: Filter Movies by Genre
import { useEffect, useState } from 'react';
import api from '../services/api';
import './Movies.css';

function Movies() {
  const [genres, setGenres] = useState([]);         // all genres available
  const [selected, setSelected] = useState([]);     // user-selected genres
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load the list of genres once on mount
  useEffect(() => {
    api.movies.genres()
      .then(data => setGenres(data.genres || []))
      .catch(err => setError(err.message));
  }, []);

  // Fetch movies whenever the selected genres change
  // (Debounce is unnecessary for chip clicks; each click should feel instant.)
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError('');

    api.movies.list(selected)
      .then(data => {
        if (!cancelled) setMovies(data.movies || []);
      })
      .catch(err => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [selected]);

  const toggleGenre = (genre) => {
    setSelected(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)    // remove if already selected
        : [...prev, genre]                 // otherwise add
    );
  };

  const clearFilters = () => setSelected([]);

  const hasFilters = selected.length > 0;

  return (
    <div className="movies-page">
      <header className="movies-header">
        <div>
          <h1>🎬 Movies</h1>
          <p className="movies-subtitle">
            {hasFilters
              ? `Filtering by ${selected.length} genre${selected.length > 1 ? 's' : ''}`
              : 'Browse all movies currently available'}
          </p>
        </div>
        {hasFilters && (
          <button className="clear-btn" onClick={clearFilters}>
            Clear Filters ✕
          </button>
        )}
      </header>

      {/* Genre chip selector */}
      <div className="genre-filters" role="group" aria-label="Filter by genre">
        {genres.map(genre => {
          const isActive = selected.includes(genre);
          return (
            <button
              key={genre}
              className={`genre-chip ${isActive ? 'active' : ''}`}
              onClick={() => toggleGenre(genre)}
              aria-pressed={isActive}
            >
              {genre}
            </button>
          );
        })}
      </div>

      {/* Results */}
      {error && <div className="alert-error">{error}</div>}

      {loading ? (
        <div className="movies-loading">
          <div className="spinner" style={{ width: 32, height: 32, borderWidth: 3 }} />
        </div>
      ) : movies.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎞️</div>
          <h3>No movies found</h3>
          <p>
            {hasFilters
              ? 'Try adjusting or clearing your filters.'
              : 'Check back soon for new releases.'}
          </p>
          {hasFilters && (
            <button className="btn-primary" onClick={clearFilters}>
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="results-count">
            {movies.length} {movies.length === 1 ? 'movie' : 'movies'} found
          </div>
          <div className="movies-grid">
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="movie-card slide-up"
                style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
              >
                <div className="movie-poster">
                  <img src={movie.poster} alt={movie.title} loading="lazy" />
                  {movie.rating > 0 && (
                    <div className="movie-poster-rating">★ {movie.rating}</div>
                  )}
                </div>
                <div className="movie-title">{movie.title}</div>
                <div className="movie-meta">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration} min</span>
                </div>
                <div className="movie-genres">
                  {movie.genres.slice(0, 2).join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Movies;
