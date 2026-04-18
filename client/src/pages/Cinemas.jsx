// SCRUM-41: Filter Cinemas by Location
import { useEffect, useState } from 'react';
import api from '../services/api';
import './Cinemas.css';

// Session persistence key — acceptance criterion 4:
// filter selection persists across navigation within the same session.
const LOCATION_KEY = 'cima_cinema_location_filter';

function Cinemas() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(() => {
    // Restore from sessionStorage on mount
    return sessionStorage.getItem(LOCATION_KEY) || '';
  });
  const [cinemas, setCinemas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load available locations once
  useEffect(() => {
    api.cinemas.locations()
      .then(data => setLocations(data.locations || []))
      .catch(err => setError(err.message));
  }, []);

  // Fetch cinemas whenever the location changes, and persist to sessionStorage
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError('');

    // Persist selection for the session (acceptance criterion 4)
    if (selectedLocation) {
      sessionStorage.setItem(LOCATION_KEY, selectedLocation);
    } else {
      sessionStorage.removeItem(LOCATION_KEY);
    }

    api.cinemas.list(selectedLocation)
      .then(data => {
        if (!cancelled) setCinemas(data.cinemas || []);
      })
      .catch(err => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [selectedLocation]);

  const clearFilter = () => setSelectedLocation('');

  const hasFilter = Boolean(selectedLocation);

  return (
    <div className="cinemas-page">
      <header className="cinemas-header">
        <div>
          <h1>🏢 Cinemas</h1>
          <p className="cinemas-subtitle">
            {hasFilter
              ? `Showing cinemas in ${selectedLocation}`
              : 'Browse all cinemas across Egypt'}
          </p>
        </div>
        {hasFilter && (
          <button className="clear-btn" onClick={clearFilter}>
            Clear Filter ✕
          </button>
        )}
      </header>

      {/* Location selector */}
      <div className="location-filter">
        <label htmlFor="location-select" className="filter-label">
          📍 Location
        </label>
        <select
          id="location-select"
          className="location-select"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">All locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {error && <div className="alert-error">{error}</div>}

      {loading ? (
        <div className="cinemas-loading">
          <div className="spinner" style={{ width: 32, height: 32, borderWidth: 3 }} />
        </div>
      ) : cinemas.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎭</div>
          <h3>No results found</h3>
          <p>
            {hasFilter
              ? `We couldn't find any cinemas in ${selectedLocation}.`
              : 'No cinemas are currently available.'}
          </p>
          {hasFilter && (
            <button className="btn-primary" onClick={clearFilter}>
              Clear Filter
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="results-count">
            {cinemas.length} {cinemas.length === 1 ? 'cinema' : 'cinemas'} found
          </div>
          <div className="cinemas-grid">
            {cinemas.map((cinema, index) => (
              <div
                key={cinema.id}
                className="cinema-card slide-up"
                style={{ animationDelay: `${Math.min(index * 50, 400)}ms` }}
              >
                <div className="cinema-image">
                  <img src={cinema.image} alt={cinema.name} loading="lazy" />
                  {cinema.imax && <span className="cinema-badge">IMAX</span>}
                </div>
                <div className="cinema-body">
                  <h3 className="cinema-name">{cinema.name}</h3>
                  <div className="cinema-location">
                    📍 {cinema.location}
                  </div>
                  <div className="cinema-address">{cinema.address}</div>
                  <div className="cinema-stats">
                    <span>🎬 {cinema.screens} screens</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cinemas;
