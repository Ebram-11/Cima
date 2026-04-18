const express = require('express');
const cors = require('cors');
require('dotenv').config();

const auth-routes = require('./routes/auth-routes');
const movies-routes = require('./routes/movies-routes');
const cinemas-routes = require('./routes/cinemas-routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', auth-routes);
app.use('/api/movies', movies-routes);
app.use('/api/cinemas', cinemas-routes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Cima API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎬 Cima server running on http://localhost:${PORT}`);
});
