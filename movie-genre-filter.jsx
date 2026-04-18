/**
 * movie-genre-filter.jsx
 * ─────────────────────────────────────────────────────────
 * SCRUM-42: Filter Movies by Genre (multi-select)
 *
 * Genre list is fetched from GET /api/movies/genres and falls back
 * to the predefined FALLBACK_GENRES constant (mirrors data/movies.js).
 *
 * Branch  : feature/SCRUM-42-movie-genre-filter
 * Commit  : [SCRUM-42] Add MovieGenreFilter component
 */

import { useState, useEffect, useCallback } from "react";

// Mirrors GENRES array in data/movies.js — used as fallback
const FALLBACK_GENRES = [
  { id: "action",      label: "Action",      emoji: "💥" },
  { id: "adventure",   label: "Adventure",   emoji: "🗺️" },
  { id: "animation",   label: "Animation",   emoji: "🎨" },
  { id: "comedy",      label: "Comedy",      emoji: "😂" },
  { id: "crime",       label: "Crime",       emoji: "🔫" },
  { id: "documentary", label: "Documentary", emoji: "🎙️" },
  { id: "drama",       label: "Drama",       emoji: "🎭" },
  { id: "fantasy",     label: "Fantasy",     emoji: "🧙" },
  { id: "horror",      label: "Horror",      emoji: "👻" },
  { id: "musical",     label: "Musical",     emoji: "🎵" },
  { id: "mystery",     label: "Mystery",     emoji: "🔍" },
  { id: "romance",     label: "Romance",     emoji: "❤️" },
  { id: "sci-fi",      label: "Sci-Fi",      emoji: "🚀" },
  { id: "thriller",    label: "Thriller",    emoji: "😱" },
  { id: "western",     label: "Western",     emoji: "🤠" },
  { id: "history",     label: "History",     emoji: "📜" },
  { id: "sport",       label: "Sport",       emoji: "⚽" },
  { id: "family",      label: "Family",      emoji: "👨‍👩‍👧" },
  { id: "biography",   label: "Biography",   emoji: "📖" },
  { id: "war",         label: "War",         emoji: "⚔️" },
];

// Emoji map used when backend returns plain genre strings
const GENRE_EMOJI_MAP = Object.fromEntries(
  FALLBACK_GENRES.map((genre) => [genre.label.toLowerCase(), genre.emoji])
);

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

/**
 * MovieGenreFilter
 *
 * Props:
 *  - onFilterChange(selectedGenreIds: string[]) — called whenever selection changes
 *  - selectedGenres: string[] — controlled from parent (optional)
 *  - className: string — extra class names (optional)
 */
export default function MovieGenreFilter({
  onFilterChange,
  selectedGenres = [],
  className = "",
}) {
  const [selected, setSelected] = useState(new Set(selectedGenres));
  const [genres, setGenres]     = useState(FALLBACK_GENRES);

  // Keep in sync if parent controls it
  useEffect(() => {
    setSelected(new Set(selectedGenres));
  }, [selectedGenres]);

  // Fetch available genres from GET /api/movies/genres (moviesController.getGenres)
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/movies/genres`);
        if (!res.ok) return; // silently keep fallback
        const json = await res.json();
        // moviesController returns { genres: string[] }
        if (Array.isArray(json.genres) && json.genres.length > 0) {
          const mappedGenres = json.genres.map((genreLabel) => ({
            id: genreLabel.toLowerCase(),
            label: genreLabel,
            emoji: GENRE_EMOJI_MAP[genreLabel.toLowerCase()] ?? "🎬",
          }));
          setGenres(mappedGenres);
        }
      } catch {
        // network error — fallback list remains
      }
    };
    fetchGenres();
  }, []);

  const toggleGenre = useCallback(
    (id) => {
      setSelected((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        onFilterChange([...next]);
        return next;
      });
    },
    [onFilterChange]
  );

  const clearAll = useCallback(() => {
    setSelected(new Set());
    onFilterChange([]);
  }, [onFilterChange]);

  return (
    <div className={`genre-filter ${className}`}>
      <div className="genre-header">
        <p className="filter-label">Filter by Genre</p>
        {selected.size > 0 && (
          <button className="clear-btn" onClick={clearAll}>
            Clear ({selected.size})
          </button>
        )}
      </div>

      <div className="genre-grid">
        {genres.map((genre) => {
          const isActive = selected.has(genre.id);
          return (
            <button
              key={genre.id}
              className={`genre-pill ${isActive ? "genre-pill--active" : ""}`}
              onClick={() => toggleGenre(genre.id)}
              aria-pressed={isActive}
            >
              <span className="genre-emoji">{genre.emoji}</span>
              <span className="genre-label">{genre.label}</span>
            </button>
          );
        })}
      </div>

      <style>{`
        .genre-filter {
          font-family: 'Syne', 'Trebuchet MS', sans-serif;
        }

        .genre-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .filter-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9ca3af;
          margin: 0;
        }

        .clear-btn {
          font-size: 0.72rem;
          color: #e8b84b;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 2px 0;
          letter-spacing: 0.03em;
          transition: color 0.15s;
        }
        .clear-btn:hover { color: #f0c96a; text-decoration: underline; }

        .genre-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .genre-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1.5px solid #2d2d3a;
          background: transparent;
          color: #c9c9d9;
          font-size: 0.8rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.18s ease;
          white-space: nowrap;
        }

        .genre-pill:hover {
          border-color: #c084fc;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.07);
        }

        .genre-pill--active {
          background: #c084fc;
          border-color: #c084fc;
          color: #0f0f17;
          font-weight: 700;
        }

        .genre-pill--active:hover {
          background: #d8b4fe;
          border-color: #d8b4fe;
          color: #0f0f17;
        }

        .genre-emoji {
          font-size: 0.95rem;
          line-height: 1;
        }

        .genre-label {
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
