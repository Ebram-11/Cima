import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import './home.css';

// Mock movie data — will be replaced with API calls later
const MOCK_MOVIES = [
  {
    id: 1,
    title: 'Dune: Part Three',
    genre: 'Sci-Fi',
    rating: 8.9,
    poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
  },
  {
    id: 2,
    title: 'The Batman II',
    genre: 'Action',
    rating: 8.5,
    poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlME0banwYYgJN.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Sci-Fi',
    rating: 9.2,
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg',
  },
  {
    id: 4,
    title: 'Oppenheimer',
    genre: 'Drama',
    rating: 8.8,
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg',
  },
  {
    id: 5,
    title: 'Spider-Man: Beyond',
    genre: 'Action',
    rating: 8.3,
    poster: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
  },
  {
    id: 6,
    title: 'Avatar 3',
    genre: 'Fantasy',
    rating: 7.8,
    poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
  },
  {
    id: 7,
    title: 'Gladiator II',
    genre: 'Action',
    rating: 8.1,
    poster: 'https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRy4iKrj2GP4p.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg',
  },
  {
    id: 8,
    title: 'Inside Out 3',
    genre: 'Animation',
    rating: 8.6,
    poster: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MN75UqLl6Vg.jpg',
  },
];

function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const featured = MOCK_MOVIES[0];

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
            <span className="hero-rating">★ {featured.rating}</span>
            <span>{featured.genre}</span>
            <span>2h 35m</span>
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/movies/' + featured.id)}>Book Now</button>
            <button className="btn-secondary" onClick={() => navigate('/movies/' + featured.id)}>More Info</button>
          </div>
        </div>
      </div>

      {/* Trending Movies */}
      <section>
        <div className="section-header">
          <h2>🔥 Trending This Week</h2>
          <button className="see-all">See All →</button>
        </div>
        <div className="movies-row">
          {MOCK_MOVIES.map((movie, index) => (
            <div
              key={movie.id}
              className="movie-card slide-up"
              style={{ animationDelay: `${index * 60}ms`, cursor: 'pointer' }}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} loading="lazy" />
                <div className="movie-poster-rating">★ {movie.rating}</div>
              </div>
              <div className="movie-title">{movie.title}</div>
              <div className="movie-genre">{movie.genre}</div>
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
          {[...MOCK_MOVIES].reverse().map((movie, index) => (
            <div
              key={movie.id}
              className="movie-card slide-up"
              style={{ animationDelay: `${index * 60}ms`, cursor: 'pointer' }}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} loading="lazy" />
                <div className="movie-poster-rating">★ {movie.rating}</div>
              </div>
              <div className="movie-title">{movie.title}</div>
              <div className="movie-genre">{movie.genre}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
