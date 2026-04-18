/**
 * routes.js  —  Central route registrar
 * ─────────────────────────────────────────────────────────
 * SCRUM-41: Filter Cinemas By Location  →  /api/cinemas
 * SCRUM-42: Filter Movies by Genre      →  /api/movies
 *
 * Branch  : feature/SCRUM-41-42-api-routes
 * Commit  : [SCRUM-41][SCRUM-42] Wire cinemas and movies routes to Express app
 *
 * Usage in app.js / server.js:
 *   const registerRoutes = require('./routes');
 *   registerRoutes(app);
 */

const authRoutes    = require("./authRoutes");
const cinemasRoutes = require("./cinemasRoutes");
const moviesRoutes  = require("./moviesRoutes");

/**
 * registerRoutes
 * Mounts all feature routers onto the Express app instance.
 *
 * @param {import('express').Application} app
 */
function registerRoutes(app) {
  // Auth — SCRUM-?? (register / login / me)
  app.use("/api/auth", authRoutes);

  // SCRUM-41: GET /api/cinemas?location=Cairo
  //           GET /api/cinemas/locations
  app.use("/api/cinemas", cinemasRoutes);

  // SCRUM-42: GET /api/movies?genres=Action,Drama
  //           GET /api/movies/genres
  app.use("/api/movies", moviesRoutes);
}

module.exports = registerRoutes;
