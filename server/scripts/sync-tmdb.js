require('dotenv').config();
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const MOVIES_PATH = path.join(__dirname, '../src/data/movies.js');
const { MOVIES, GENRES } = require(MOVIES_PATH);

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

async function syncMovies() {
  console.log(`Starting TMDB sync for ${MOVIES.length} movies...`);
  
  const updatedMovies = [];

  for (const movie of MOVIES) {
    try {
      console.log(`Searching for: ${movie.title}...`);
      
      const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          query: movie.title,
          year: movie.year || undefined
        }
      });

      const result = response.data.results[0];

      if (result) {
        console.log(`Found: ${result.title} (${result.release_date})`);
        
        updatedMovies.push({
          ...movie,
          poster: result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : movie.poster,
          backdrop: result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : movie.backdrop,
          rating: result.vote_average || movie.rating,
          // synopsis: result.overview || movie.synopsis // Optional: add synopsis if needed
        });
      } else {
        console.warn(`No TMDB result for: ${movie.title}`);
        updatedMovies.push(movie);
      }
      
      // Delay to respect rate limits if necessary (TMDB is generous but better safe)
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      console.error(`Error syncing ${movie.title}:`, error.message);
      updatedMovies.push(movie);
    }
  }

  // Generate the new file content
  const fileContent = `const GENRES = ${JSON.stringify(GENRES, null, 2)};\n\nconst MOVIES = ${JSON.stringify(updatedMovies, null, 2)};\n\nmodule.exports = { GENRES, MOVIES };\n`;

  fs.writeFileSync(MOVIES_PATH, fileContent);
  console.log('Successfully updated movies.js with TMDB data!');
}

syncMovies();
