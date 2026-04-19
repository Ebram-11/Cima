const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { CINEMAS: cinemasData } = require('../src/data/cinemas');
const { MOVIES: moviesData } = require('../src/data/movies');

async function seed() {
  console.log('🌱 Starting database seeding...');

  try {
    // 1. Check if data already exists to prevent redundant seeding
    const cinemaCount = await prisma.cinema.count();
    const movieCount = await prisma.movie.count();

    if (cinemaCount > 0 || movieCount > 0) {
      console.log('✅ Database already contains data. Skipping seed.');
      return;
    }

    // 2. Import Cinemas
    console.log(`🎬 Importing ${cinemasData.length} cinemas...`);
    const cinemaMap = {}; // store oldId -> newId mapping if needed, but we'll use names for matching showtimes
    
    for (const c of cinemasData) {
      const created = await prisma.cinema.create({
        data: {
          name: c.name,
          location: c.location,
          address: c.address,
          screens: c.screens,
          imax: c.imax || false,
          image: c.image
        }
      });
      cinemaMap[c.id] = created.id;
    }

    // 3. Import Movies
    console.log(`🎞️ Importing ${moviesData.length} movies...`);
    const movieMap = {};

    for (const m of moviesData) {
      const created = await prisma.movie.create({
        data: {
          tmdbId: m.id, // Using TMDB ID as unique identifier
          title: m.title,
          poster: m.poster,
          backdrop: m.backdrop,
          rating: m.rating || 0,
          duration: m.duration || 0,
          year: m.year,
          genres: m.genres || []
        }
      });
      movieMap[m.id] = created.id;
    }

    // 4. Generate Showtimes
    // Since we were using a modulo-based logic in the controllers, 
    // we'll now explicitly create showtimes in the DB for easier management.
    console.log('⏰ Creating showtimes...');
    
    // We'll give every movie some showtimes at every cinema for the seed
    const times = ["1:00 PM", "4:00 PM", "7:00 PM", "10:30 PM"];
    const allMovies = Object.values(movieMap);
    const allCinemas = Object.values(cinemaMap);

    for (const movieId of allMovies) {
      // Pick 2-3 random cinemas for each movie
      const randomCinemas = allCinemas.sort(() => 0.5 - Math.random()).slice(0, 3);
      for (const cinemaId of randomCinemas) {
        for (const time of times) {
          await prisma.showtime.create({
            data: {
              movieId,
              cinemaId,
              time
            }
          });
        }
      }
    }

    console.log('✅ Seeding complete!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
