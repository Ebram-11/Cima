import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import api from '../services/api';
import './Home.css';

function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api.movies.list()
      .then(data => {
        if (!cancelled) setMovies(data.movies || []);
      })
      .catch(err => console.error(err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <div className="home-loading">
        <div className="spinner" style={{ width: 40, height: 40, borderWidth: 4 }}></div>
      </div>
    );
  }

  const featured = movies[0] || null;
  const trending = movies.slice(0, 10);
  const nowShowing = [...movies].reverse().slice(0, 10);

  return (
    <div className="home-page">
      {/* Welcome Banner */}
      <div className="welcome-banner fade-in">
        <div className="welcome-text">
          <h3>Welcome back, {user?.name?.split(' ')[0]} 👋</h3>
          <p>Ready to discover your next movie experience?</p>
        </div>
      </div>

      {/* Hero — Featured Movie */}
          {featured && (
            <div className="hero">
              <div
                className="hero-backdrop"
                style={{ backgroundImage: `url(${featured.backdrop})` }}
              />
              <div className="hero-overlay" />
              <div className="hero-content">
                <span className="hero-badge">🔥 Trending Now</span>
                <h1 className="hero-title">{featured.title}</h1>
                <div className="hero-meta">
                  <span className="hero-rating">★ {featured.rating.toFixed(1)}</span>
                  <span>{featured.genres?.join(', ')}</span>
                  <span>{featured.duration} min</span>
                </div>
                <div className="hero-actions">
                  <button className="btn-primary" onClick={() => navigate('/movies/' + featured.id)}>Book Now</button>
                  <button className="btn-secondary" onClick={() => navigate('/movies/' + featured.id)}>More Info</button>
                </div>
              </div>
            </div>
          )}

      {/* Trending Movies */}
      <section>
        <div className="section-header">
          <h2>🔥 Trending This Week</h2>
          <button className="see-all">See All →</button>
        </div>
        <div className="movies-row">
          {trending.map((movie, index) => (
            <div
              key={movie.id}
              className="movie-card slide-up"
              style={{ animationDelay: `${index * 60}ms`, cursor: 'pointer' }}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} loading="lazy" />
                <div className="movie-poster-rating">★ {movie.rating.toFixed(1)}</div>
              </div>
              <div className="movie-title">{movie.title}</div>
              <div className="movie-genre">{movie.genres?.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Now Showing */}
      <section style={{ marginTop: '40px' }}>
        <div className="section-header">
          <h2>🎬 Now Showing</h2>
          <button className="see-all">See All →</button>
        </div>
        <div className="movies-row">
          {nowShowing.map((movie, index) => (
            <div
              key={movie.id}
              className="movie-card slide-up"
              style={{ animationDelay: `${index * 60}ms`, cursor: 'pointer' }}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} loading="lazy" />
                <div className="movie-poster-rating">★ {movie.rating.toFixed(1)}</div>
              </div>
              <div className="movie-title">{movie.title}</div>
              <div className="movie-genre">{movie.genres?.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
