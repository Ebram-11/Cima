/**
 * cinemas-page.jsx
 * ─────────────────────────────────────────────────────────
 * SCRUM-41: Filter Cinemas By Location
 * SCRUM-42: Filter Movies by Genre
 *
 * Branch  : feature/SCRUM-41-42-cinemas-movies-filter
 * Commit  : [SCRUM-41][SCRUM-42] Integrate CinemasPage with backend API
 */

import { useState, useCallback, useRef } from "react";
import CinemaLocationFilter from "./cinema-location-filter";
import MovieGenreFilter from "./movie-genre-filter";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

// ── Main Page ────────────────────────────────────────────
export default function CinemasPage() {
  const [activeTab, setActiveTab]       = useState("cinemas"); // "cinemas" | "movies"
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGenres, setSelectedGenres]     = useState([]);
  const [cinemas, setCinemas]           = useState([]);
  const [movies, setMovies]             = useState([]);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState(null);
  const loadingTimer                    = useRef(null);

  // ── Data fetchers ────────────────────────────────────
  const fetchCinemas = useCallback(async (location) => {
    const params = new URLSearchParams({ page: 1, limit: 20 });
    if (location) params.set("location", location);

    const res = await fetch(`${API_BASE}/api/cinemas?${params}`);
    if (!res.ok) throw new Error(`Cinemas fetch failed: ${res.status}`);
    const json = await res.json();
    // cinemasController returns { cinemas, total } — shape from cinemasController.js
    return json.cinemas ?? [];
  }, []);

  const fetchMovies = useCallback(async (genres) => {
    const params = new URLSearchParams({ page: 1, limit: 20 });
    if (genres.length > 0) params.set("genres", genres.join(","));

    const res = await fetch(`${API_BASE}/api/movies?${params}`);
    if (!res.ok) throw new Error(`Movies fetch failed: ${res.status}`);
    const json = await res.json();
    // moviesController returns { movies, total } — shape from moviesController.js
    return json.movies ?? [];
  }, []);

  // ── Debounced filter runner ──────────────────────────
  const runFilter = useCallback((location, genres) => {
    setLoading(true);
    setError(null);
    clearTimeout(loadingTimer.current);

    loadingTimer.current = setTimeout(async () => {
      try {
        const [cinemasData, moviesData] = await Promise.all([
          fetchCinemas(location),
          fetchMovies(genres),
        ]);
        setCinemas(cinemasData);
        setMovies(moviesData);
      } catch (err) {
        console.error("[CinemasPage] Filter error:", err);
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 280);
  }, [fetchCinemas, fetchMovies]);

  // ── Filter handlers ──────────────────────────────────
  // SCRUM-41: location filter — no page reload
  const handleLocationChange = useCallback((governorate) => {
    setSelectedLocation(governorate);
    runFilter(governorate, selectedGenres);
  }, [selectedGenres, runFilter]);

  // SCRUM-42: genre filter — multi-select
  const handleGenreChange = useCallback((genreIds) => {
    setSelectedGenres(genreIds);
    runFilter(selectedLocation, genreIds);
  }, [selectedLocation, runFilter]);

  return (
    <div className="page">
      <header className="page-header">
        <div className="logo">🎬 CIMA</div>
        <nav className="tabs">
          {["cinemas", "movies"].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "tab--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "cinemas" ? "🏛️ Cinemas" : "🎥 Movies"}
            </button>
          ))}
        </nav>
      </header>

      <main className="page-main">
        {/* ── Sidebar Filters ── */}
        <aside className="sidebar">
          {activeTab === "cinemas" && (
            <section className="filter-section">
              {/* SCRUM-41: CinemaLocationFilter — imported component */}
              <CinemaLocationFilter
                selectedLocation={selectedLocation ?? "All Locations"}
                onFilterChange={handleLocationChange}
              />
            </section>
          )}
          {activeTab === "movies" && (
            <section className="filter-section">
              {/* SCRUM-42: MovieGenreFilter — imported component */}
              <MovieGenreFilter
                selectedGenres={selectedGenres}
                onFilterChange={handleGenreChange}
              />
            </section>
          )}
        </aside>

        {/* ── Results ── */}
        <section className="results">
          {loading && (
            <div className="loading-bar">
              <div className="loading-bar__fill" />
            </div>
          )}

          {error && <div className="error-banner">{error}</div>}

          {activeTab === "cinemas" && (
            <>
              <ResultsHeader
                count={cinemas.length}
                label="cinema"
                subtitle={selectedLocation ? `in ${selectedLocation}` : "across Egypt"}
              />
              <div className="card-grid">
                {cinemas.length === 0 && !loading
                  ? <EmptyState message={selectedLocation ? `No cinemas found in ${selectedLocation}` : "No cinemas available"} />
                  : cinemas.map((cinema) => <CinemaCard key={cinema.id} cinema={cinema} />)
                }
              </div>
            </>
          )}

          {activeTab === "movies" && (
            <>
              <ResultsHeader
                count={movies.length}
                label="movie"
                subtitle={selectedGenres.length > 0 ? `in: ${selectedGenres.join(", ")}` : "all genres"}
              />
              <div className="card-grid">
                {movies.length === 0 && !loading
                  ? <EmptyState message="No movies match the selected genres" />
                  : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
              </div>
            </>
          )}
        </section>
      </main>

      <style>{PAGE_STYLES}</style>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────

function ResultsHeader({ count, label, subtitle }) {
  return (
    <div className="results-header">
      <p className="results-title">
        <span className="results-count">{count}</span>{" "}
        {label}{count !== 1 ? "s" : ""}{" "}
        <span className="results-sub">{subtitle}</span>
      </p>
    </div>
  );
}

function CinemaCard({ cinema }) {
  return (
    <div className="card">
      <div className="card-icon">🏛️</div>
      <div className="card-body">
        <h3 className="card-title">{cinema.name}</h3>
        <p className="card-meta">
          <span className="badge badge--gold">{cinema.location}</span>
          {cinema.imax && <span className="badge badge--gold">IMAX</span>}
        </p>
        <p className="card-address">{cinema.address}</p>
        {cinema.screens && (
          <p className="card-rating">🎞️ {cinema.screens} screens</p>
        )}
      </div>
    </div>
  );
}

function MovieCard({ movie }) {
  return (
    <div className="card movie-card">
      <div className="card-poster">
        {movie.poster
          ? <img src={movie.poster} alt={movie.title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }} />
          : "🎬"
        }
      </div>
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        <p className="card-meta">
          {movie.genres.map((genre) => (
            <span key={genre} className="badge badge--purple">{genre}</span>
          ))}
        </p>
        {movie.rating > 0 && <p className="card-rating">⭐ {movie.rating.toFixed(1)}</p>}
        {movie.year && <p className="card-address">{movie.year}</p>}
      </div>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">🎭</div>
      <p>{message}</p>
    </div>
  );
}

// ── Styles ───────────────────────────────────────────────
const PAGE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .page {
    min-height: 100vh;
    background: #0c0c14;
    color: #e2e2ee;
    font-family: 'DM Sans', sans-serif;
  }

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 36px;
    border-bottom: 1px solid #1e1e2c;
    background: #0f0f1a;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: #e8b84b;
    letter-spacing: -0.02em;
  }
  .tabs { display: flex; gap: 6px; }
  .tab {
    padding: 7px 18px;
    border-radius: 8px;
    border: 1.5px solid transparent;
    background: transparent;
    color: #9ca3af;
    font-family: 'Syne', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
    letter-spacing: 0.02em;
  }
  .tab:hover { color: #e2e2ee; border-color: #2d2d3a; }
  .tab--active { background: #1a1a2e; color: #e8b84b; border-color: #e8b84b44; }

  .page-main {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 0;
    min-height: calc(100vh - 62px);
  }
  .sidebar {
    padding: 28px 20px;
    border-right: 1px solid #1e1e2c;
    background: #0f0f1a;
    position: sticky;
    top: 62px;
    height: calc(100vh - 62px);
    overflow-y: auto;
  }

  .filter-section { width: 100%; }

  .results { padding: 28px 32px; position: relative; }
  .loading-bar {
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px; background: #1e1e2c; overflow: hidden;
  }
  .loading-bar__fill {
    height: 100%; width: 60%;
    background: linear-gradient(90deg, #e8b84b, #c084fc);
    animation: slide 0.9s ease-in-out infinite alternate;
  }
  @keyframes slide { from { transform: translateX(-100%); } to { transform: translateX(200%); } }

  .error-banner {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #f87171;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 0.85rem;
    margin-bottom: 20px;
  }

  .results-header { margin-bottom: 24px; }
  .results-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #e2e2ee;
  }
  .results-count { color: #e8b84b; }
  .results-sub { font-weight: 400; color: #6b7280; font-size: 0.9rem; }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }
  .card {
    background: #13131f;
    border: 1px solid #1e1e2c;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
    transition: border-color 0.2s, transform 0.2s;
  }
  .card:hover { border-color: #e8b84b44; transform: translateY(-2px); }
  .movie-card:hover { border-color: #c084fc44; }
  .card-icon { font-size: 1.8rem; flex-shrink: 0; }
  .card-poster {
    width: 44px; height: 60px;
    background: #1e1e2c;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
    overflow: hidden;
  }
  .card-body { flex: 1; min-width: 0; }
  .card-title {
    font-family: 'Syne', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    color: #e2e2ee;
    margin-bottom: 8px;
    line-height: 1.3;
  }
  .card-meta { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
  .badge {
    font-size: 0.65rem;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 999px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .badge--gold { background: rgba(232,184,75,0.15); color: #e8b84b; }
  .badge--purple { background: rgba(192,132,252,0.15); color: #c084fc; }
  .card-address { font-size: 0.75rem; color: #6b7280; margin-top: 4px; }
  .card-rating { font-size: 0.8rem; color: #9ca3af; margin-top: 4px; }

  .empty-state {
    grid-column: 1/-1;
    text-align: center;
    padding: 60px 20px;
    color: #4b5563;
  }
  .empty-icon { font-size: 3rem; margin-bottom: 12px; }

  @media (max-width: 768px) {
    .page-main { grid-template-columns: 1fr; }
    .sidebar { position: static; height: auto; border-right: none; border-bottom: 1px solid #1e1e2c; }
  }
`;
