/**
 * cinema-location-filter.jsx
 * ─────────────────────────────────────────────────────────
 * SCRUM-41: Filter Cinemas By Location
 *
 * Sourced locations from backend seed data (data/cinemas.js → LOCATIONS).
 * Falls back to the full governorates list if /api/cinemas/locations
 * is unavailable.
 *
 * Branch  : feature/SCRUM-41-cinema-location-filter
 * Commit  : [SCRUM-41] Add CinemaLocationFilter component
 */

import { useState, useEffect, useCallback } from "react";

// Matches LOCATIONS array in data/cinemas.js
// (fetched dynamically below; this is the fallback)
const FALLBACK_LOCATIONS = [
  "All Locations",
  "Cairo",
  "Giza",
  "Alexandria",
  "New Cairo",
  "Sheikh Zayed",
  "6th of October",
  "Mansoura",
  "Hurghada",
];

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

/**
 * CinemaLocationFilter
 *
 * Props:
 *  - onFilterChange(governorate: string | null) — called whenever filter changes
 *  - selectedLocation: string | null — controlled from parent (optional)
 *  - className: string — extra class names (optional)
 */
export default function CinemaLocationFilter({
  onFilterChange,
  selectedLocation = "All Locations",
  className = "",
}) {
  const [active, setActive]       = useState(selectedLocation);
  const [locations, setLocations] = useState(FALLBACK_LOCATIONS);

  // Keep in sync if parent controls it
  useEffect(() => {
    setActive(selectedLocation ?? "All Locations");
  }, [selectedLocation]);

  // Fetch available locations from GET /api/cinemas/locations
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/cinemas/locations`);
        if (!res.ok) return; // silently keep fallback
        const json = await res.json();
        if (Array.isArray(json.locations) && json.locations.length > 0) {
          setLocations(["All Locations", ...json.locations]);
        }
      } catch {
        // network error — fallback list remains
      }
    };
    fetchLocations();
  }, []);

  const handleSelect = useCallback(
    (location) => {
      setActive(location);
      // Pass null for "All Locations" so the parent clears the filter
      onFilterChange(location === "All Locations" ? null : location);
    },
    [onFilterChange]
  );

  return (
    <div className={`location-filter ${className}`}>
      <p className="filter-label">Filter by Location</p>
      <div className="chips-wrapper">
        {locations.map((location) => (
          <button
            key={location}
            className={`chip ${active === location ? "chip--active" : ""}`}
            onClick={() => handleSelect(location)}
            aria-pressed={active === location}
          >
            {location}
          </button>
        ))}
      </div>

      <style>{`
        .location-filter {
          font-family: 'Syne', 'Trebuchet MS', sans-serif;
        }

        .filter-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9ca3af;
          margin: 0 0 10px 2px;
        }

        .chips-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .chip {
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
          letter-spacing: 0.02em;
        }

        .chip:hover {
          border-color: #e8b84b;
          color: #e8b84b;
          background: rgba(232, 184, 75, 0.07);
        }

        .chip--active {
          background: #e8b84b;
          border-color: #e8b84b;
          color: #0f0f17;
          font-weight: 700;
        }

        .chip--active:hover {
          background: #f0c96a;
          border-color: #f0c96a;
          color: #0f0f17;
        }
      `}</style>
    </div>
  );
}
