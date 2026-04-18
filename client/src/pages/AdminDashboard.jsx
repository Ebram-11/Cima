import { useState, useEffect } from 'react';
import { useAuth } from '../context/auth-context';
import api from '../services/api';
import './AdminDashboard.css';

function AdminDashboard() {
  const { user } = useAuth();
  const [cinema, setCinema] = useState(null);
  const [moviesPlaying, setMoviesPlaying] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState('');

  useEffect(() => {
    if (user?.managedCinemaId) {
      loadCinemaData();
    }
  }, [user]);

  const loadCinemaData = async () => {
    setLoading(true);
    try {
      const data = await api.cinemas.getById(user.managedCinemaId);
      setCinema(data.cinema);
      setMoviesPlaying(data.moviesPlaying || []);
      
      const moviesData = await api.movies.list();
      setAllMovies(moviesData.movies || []);
    } catch (err) {
      setError('Failed to load management data.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMovie = async (movieId) => {
    if (!window.confirm('Are you sure you want to remove this movie from your cinema?')) return;
    try {
      await api.cinemas.removeMovie(user.managedCinemaId, movieId);
      setMoviesPlaying(prev => prev.filter(m => m.id !== movieId));
    } catch (err) {
      alert('Failed to remove movie.');
    }
  };

  const handleAddMovie = async () => {
    if (!selectedMovieId) return;
    try {
      // Default times for now
      const defaultTimes = ["4:00 PM", "7:00 PM", "10:00 PM"];
      await api.cinemas.addMovie(user.managedCinemaId, { 
        movieId: selectedMovieId, 
        times: defaultTimes 
      });
      setShowAddModal(false);
      loadCinemaData();
    } catch (err) {
      alert('Failed to add movie.');
    }
  };

  if (user?.userRole !== 'STAFF' && user?.userRole !== 'ADMIN') {
    return <div className="admin-error">Access Denied. You are not a manager.</div>;
  }

  if (loading) return <div className="admin-loading">Loading Dashboard...</div>;

  return (
    <div className="admin-dashboard slide-up">
      <header className="admin-header">
        <div className="admin-title-group">
          <span className="admin-badge">Management Console</span>
          <h1>{cinema?.name}</h1>
          <p className="admin-location">📍 {cinema?.location} • {cinema?.screens} Screens</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          + Add Movie to Schedule
        </button>
      </header>

      {error && <div className="alert-error">{error}</div>}

      <div className="admin-content">
        <section className="manage-movies">
          <h2>🎬 Currently Playing</h2>
          <div className="admin-movies-grid">
            {moviesPlaying.length > 0 ? (
              moviesPlaying.map(movie => (
                <div key={movie.id} className="admin-movie-card">
                  <img src={movie.poster} alt={movie.title} />
                  <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <p>{movie.times.join(' • ')}</p>
                    <button 
                      className="btn-danger-outline" 
                      onClick={() => handleRemoveMovie(movie.id)}
                    >
                      Remove from Cinema
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-text">No movies are currently scheduled for this cinema.</p>
            )}
          </div>
        </section>
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content glass">
            <h2>Add Movie to {cinema?.name}</h2>
            <p>Select a movie from the catalog to add to your daily schedule.</p>
            
            <select 
              value={selectedMovieId} 
              onChange={(e) => setSelectedMovieId(e.target.value)}
              className="admin-select"
            >
              <option value="">Select a movie...</option>
              {allMovies
                .filter(m => !moviesPlaying.some(p => p.id === m.id))
                .map(m => (
                  <option key={m.id} value={m.id}>{m.title} ({m.year})</option>
                ))}
            </select>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleAddMovie}>Add to Schedule</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
