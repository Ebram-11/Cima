// Seed movie data parsed from movies.csv. In-memory, no DB required.

const GENRES = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Western"
];

const MOVIES = [
  {
    "id": 19995,
    "title": "Avatar",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Fantasy",
      "Action"
    ],
    "rating": 7.2,
    "duration": 162,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Avatar",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Avatar",
    "year": 2009
  },
  {
    "id": 285,
    "title": "Pirates of the Caribbean: At World's End",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 6.9,
    "duration": 169,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Pirates%20of%20the%20Caribbean%3A%20At%20World's%20End",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Pirates%20of%20the%20Caribbean%3A%20At%20World's%20End",
    "year": 2007
  },
  {
    "id": 206647,
    "title": "Spectre",
    "genres": [
      "Adventure",
      "Action",
      "Crime"
    ],
    "rating": 6.3,
    "duration": 148,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Spectre",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Spectre",
    "year": 2015
  },
  {
    "id": 49026,
    "title": "The Dark Knight Rises",
    "genres": [
      "Thriller",
      "Drama",
      "Action",
      "Crime"
    ],
    "rating": 7.6,
    "duration": 165,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Dark%20Knight%20Rises",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Dark%20Knight%20Rises",
    "year": 2012
  },
  {
    "id": 49529,
    "title": "John Carter",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.1,
    "duration": 132,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=John%20Carter",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=John%20Carter",
    "year": 2012
  },
  {
    "id": 559,
    "title": "Spider-Man 3",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 5.9,
    "duration": 139,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Spider-Man%203",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Spider-Man%203",
    "year": 2007
  },
  {
    "id": 38757,
    "title": "Tangled",
    "genres": [
      "Family",
      "Animation"
    ],
    "rating": 7.4,
    "duration": 100,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Tangled",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Tangled",
    "year": 2010
  },
  {
    "id": 99861,
    "title": "Avengers: Age of Ultron",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.3,
    "duration": 141,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Avengers%3A%20Age%20of%20Ultron",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Avengers%3A%20Age%20of%20Ultron",
    "year": 2015
  },
  {
    "id": 767,
    "title": "Harry Potter and the Half-Blood Prince",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "rating": 7.4,
    "duration": 153,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Harry%20Potter%20and%20the%20Half-Blood%20Prince",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Harry%20Potter%20and%20the%20Half-Blood%20Prince",
    "year": 2009
  },
  {
    "id": 209112,
    "title": "Batman v Superman: Dawn of Justice",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 5.7,
    "duration": 151,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Batman%20v%20Superman%3A%20Dawn%20of%20Justice",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Batman%20v%20Superman%3A%20Dawn%20of%20Justice",
    "year": 2016
  },
  {
    "id": 1452,
    "title": "Superman Returns",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Fantasy",
      "Action"
    ],
    "rating": 5.4,
    "duration": 154,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Superman%20Returns",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Superman%20Returns",
    "year": 2006
  },
  {
    "id": 10764,
    "title": "Quantum of Solace",
    "genres": [
      "Adventure",
      "Thriller",
      "Action",
      "Crime"
    ],
    "rating": 6.1,
    "duration": 106,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Quantum%20of%20Solace",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Quantum%20of%20Solace",
    "year": 2008
  },
  {
    "id": 58,
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 7,
    "duration": 151,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Pirates%20of%20the%20Caribbean%3A%20Dead%20Man's%20Chest",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Pirates%20of%20the%20Caribbean%3A%20Dead%20Man's%20Chest",
    "year": 2006
  },
  {
    "id": 57201,
    "title": "The Lone Ranger",
    "genres": [
      "Adventure",
      "Western",
      "Action"
    ],
    "rating": 5.9,
    "duration": 149,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Lone%20Ranger",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Lone%20Ranger",
    "year": 2013
  },
  {
    "id": 49521,
    "title": "Man of Steel",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Fantasy",
      "Action"
    ],
    "rating": 6.5,
    "duration": 143,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Man%20of%20Steel",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Man%20of%20Steel",
    "year": 2013
  },
  {
    "id": 2454,
    "title": "The Chronicles of Narnia: Prince Caspian",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "rating": 6.3,
    "duration": 150,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Chronicles%20of%20Narnia%3A%20Prince%20Caspian",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Chronicles%20of%20Narnia%3A%20Prince%20Caspian",
    "year": 2008
  },
  {
    "id": 24428,
    "title": "The Avengers",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.4,
    "duration": 143,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Avengers",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Avengers",
    "year": 2012
  },
  {
    "id": 1865,
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 6.4,
    "duration": 136,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Pirates%20of%20the%20Caribbean%3A%20On%20Stranger%20Tides",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Pirates%20of%20the%20Caribbean%3A%20On%20Stranger%20Tides",
    "year": 2011
  },
  {
    "id": 41154,
    "title": "Men in Black 3",
    "genres": [
      "Comedy",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.2,
    "duration": 106,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Men%20in%20Black%203",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Men%20in%20Black%203",
    "year": 2012
  },
  {
    "id": 122917,
    "title": "The Hobbit: The Battle of the Five Armies",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 7.1,
    "duration": 144,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Hobbit%3A%20The%20Battle%20of%20the%20Five%20Armies",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Hobbit%3A%20The%20Battle%20of%20the%20Five%20Armies",
    "year": 2014
  },
  {
    "id": 1930,
    "title": "The Amazing Spider-Man",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 6.5,
    "duration": 136,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Amazing%20Spider-Man",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Amazing%20Spider-Man",
    "year": 2012
  },
  {
    "id": 20662,
    "title": "Robin Hood",
    "genres": [
      "Adventure",
      "Action"
    ],
    "rating": 6.2,
    "duration": 140,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Robin%20Hood",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Robin%20Hood",
    "year": 2010
  },
  {
    "id": 57158,
    "title": "The Hobbit: The Desolation of Smaug",
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "rating": 7.6,
    "duration": 161,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Hobbit%3A%20The%20Desolation%20of%20Smaug",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Hobbit%3A%20The%20Desolation%20of%20Smaug",
    "year": 2013
  },
  {
    "id": 2268,
    "title": "The Golden Compass",
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "rating": 5.8,
    "duration": 113,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Golden%20Compass",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Golden%20Compass",
    "year": 2007
  },
  {
    "id": 254,
    "title": "King Kong",
    "genres": [
      "Adventure",
      "Action",
      "Drama"
    ],
    "rating": 6.6,
    "duration": 187,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=King%20Kong",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=King%20Kong",
    "year": 2005
  },
  {
    "id": 597,
    "title": "Titanic",
    "genres": [
      "Romance",
      "Thriller",
      "Drama"
    ],
    "rating": 7.5,
    "duration": 194,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Titanic",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Titanic",
    "year": 1997
  },
  {
    "id": 271110,
    "title": "Captain America: Civil War",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.1,
    "duration": 147,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Captain%20America%3A%20Civil%20War",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Captain%20America%3A%20Civil%20War",
    "year": 2016
  },
  {
    "id": 44833,
    "title": "Battleship",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "rating": 5.5,
    "duration": 131,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Battleship",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Battleship",
    "year": 2012
  },
  {
    "id": 135397,
    "title": "Jurassic World",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "rating": 6.5,
    "duration": 124,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Jurassic%20World",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Jurassic%20World",
    "year": 2015
  },
  {
    "id": 37724,
    "title": "Skyfall",
    "genres": [
      "Adventure",
      "Action",
      "Thriller"
    ],
    "rating": 6.9,
    "duration": 143,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Skyfall",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Skyfall",
    "year": 2012
  },
  {
    "id": 558,
    "title": "Spider-Man 2",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 6.7,
    "duration": 127,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Spider-Man%202",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Spider-Man%202",
    "year": 2004
  },
  {
    "id": 68721,
    "title": "Iron Man 3",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.8,
    "duration": 130,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Iron%20Man%203",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Iron%20Man%203",
    "year": 2013
  },
  {
    "id": 12155,
    "title": "Alice in Wonderland",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "rating": 6.4,
    "duration": 108,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Alice%20in%20Wonderland",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Alice%20in%20Wonderland",
    "year": 2010
  },
  {
    "id": 36668,
    "title": "X-Men: The Last Stand",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "rating": 6.3,
    "duration": 104,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=X-Men%3A%20The%20Last%20Stand",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=X-Men%3A%20The%20Last%20Stand",
    "year": 2006
  },
  {
    "id": 62211,
    "title": "Monsters University",
    "genres": [
      "Family",
      "Animation"
    ],
    "rating": 7,
    "duration": 104,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Monsters%20University",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Monsters%20University",
    "year": 2013
  },
  {
    "id": 8373,
    "title": "Transformers: Revenge of the Fallen",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6,
    "duration": 150,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Transformers%3A%20Revenge%20of%20the%20Fallen",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Transformers%3A%20Revenge%20of%20the%20Fallen",
    "year": 2009
  },
  {
    "id": 91314,
    "title": "Transformers: Age of Extinction",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 5.8,
    "duration": 165,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Transformers%3A%20Age%20of%20Extinction",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Transformers%3A%20Age%20of%20Extinction",
    "year": 2014
  },
  {
    "id": 68728,
    "title": "Oz: The Great and Powerful",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "rating": 5.7,
    "duration": 130,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Oz%3A%20The%20Great%20and%20Powerful",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Oz%3A%20The%20Great%20and%20Powerful",
    "year": 2013
  },
  {
    "id": 102382,
    "title": "The Amazing Spider-Man 2",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 6.5,
    "duration": 142,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Amazing%20Spider-Man%202",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Amazing%20Spider-Man%202",
    "year": 2014
  },
  {
    "id": 20526,
    "title": "TRON: Legacy",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.3,
    "duration": 125,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=TRON%3A%20Legacy",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=TRON%3A%20Legacy",
    "year": 2010
  },
  {
    "id": 49013,
    "title": "Cars 2",
    "genres": [
      "Adventure",
      "Comedy",
      "Family",
      "Animation"
    ],
    "rating": 5.8,
    "duration": 106,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Cars%202",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Cars%202",
    "year": 2011
  },
  {
    "id": 44912,
    "title": "Green Lantern",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "rating": 5.1,
    "duration": 114,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Green%20Lantern",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Green%20Lantern",
    "year": 2011
  },
  {
    "id": 10193,
    "title": "Toy Story 3",
    "genres": [
      "Comedy",
      "Family",
      "Animation"
    ],
    "rating": 7.6,
    "duration": 103,
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    "year": 2010
  },
  {
    "id": 534,
    "title": "Terminator Salvation",
    "genres": [
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "rating": 5.9,
    "duration": 115,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Terminator%20Salvation",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Terminator%20Salvation",
    "year": 2009
  },
  {
    "id": 168259,
    "title": "Furious 7",
    "genres": [
      "Action"
    ],
    "rating": 7.3,
    "duration": 137,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Furious%207",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Furious%207",
    "year": 2015
  },
  {
    "id": 72190,
    "title": "World War Z",
    "genres": [
      "Sci-Fi",
      "Action",
      "Thriller",
      "Drama",
      "Horror"
    ],
    "rating": 6.7,
    "duration": 116,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=World%20War%20Z",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=World%20War%20Z",
    "year": 2013
  },
  {
    "id": 127585,
    "title": "X-Men: Days of Future Past",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Fantasy",
      "Action"
    ],
    "rating": 7.5,
    "duration": 131,
    "poster": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRy4iKrj2GP4p.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "year": 2014
  },
  {
    "id": 54138,
    "title": "Star Trek Into Darkness",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.4,
    "duration": 132,
    "poster": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MN75UqLl6Vg.jpg",
    "year": 2013
  },
  {
    "id": 81005,
    "title": "Jack the Giant Slayer",
    "genres": [
      "Fantasy",
      "Family",
      "Action"
    ],
    "rating": 5.5,
    "duration": 114,
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "year": 2013
  },
  {
    "id": 64682,
    "title": "The Great Gatsby",
    "genres": [
      "Romance",
      "Drama"
    ],
    "rating": 7.3,
    "duration": 143,
    "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlME0banwYYgJN.jpg",
    "year": 2013
  },
  {
    "id": 9543,
    "title": "Prince of Persia: The Sands of Time",
    "genres": [
      "Adventure",
      "Romance",
      "Fantasy",
      "Action"
    ],
    "rating": 6.2,
    "duration": 116,
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    "year": 2010
  },
  {
    "id": 68726,
    "title": "Pacific Rim",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.7,
    "duration": 131,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Pacific%20Rim",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Pacific%20Rim",
    "year": 2013
  },
  {
    "id": 38356,
    "title": "Transformers: Dark of the Moon",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.1,
    "duration": 154,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Transformers%3A%20Dark%20of%20the%20Moon",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Transformers%3A%20Dark%20of%20the%20Moon",
    "year": 2011
  },
  {
    "id": 217,
    "title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "genres": [
      "Adventure",
      "Action"
    ],
    "rating": 5.7,
    "duration": 122,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Indiana%20Jones%20and%20the%20Kingdom%20of%20the%20Crystal%20Skull",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Indiana%20Jones%20and%20the%20Kingdom%20of%20the%20Crystal%20Skull",
    "year": 2008
  },
  {
    "id": 105864,
    "title": "The Good Dinosaur",
    "genres": [
      "Adventure",
      "Family",
      "Animation"
    ],
    "rating": 6.6,
    "duration": 93,
    "poster": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRy4iKrj2GP4p.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "year": 2015
  },
  {
    "id": 62177,
    "title": "Brave",
    "genres": [
      "Action",
      "Animation",
      "Family",
      "Adventure",
      "Comedy"
    ],
    "rating": 6.7,
    "duration": 93,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Brave",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Brave",
    "year": 2012
  },
  {
    "id": 188927,
    "title": "Star Trek Beyond",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.6,
    "duration": 122,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Star%20Trek%20Beyond",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Star%20Trek%20Beyond",
    "year": 2016
  },
  {
    "id": 10681,
    "title": "WALL·E",
    "genres": [
      "Family",
      "Animation"
    ],
    "rating": 7.8,
    "duration": 98,
    "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlME0banwYYgJN.jpg",
    "year": 2008
  },
  {
    "id": 5174,
    "title": "Rush Hour 3",
    "genres": [
      "Comedy",
      "Thriller",
      "Action",
      "Crime"
    ],
    "rating": 6.1,
    "duration": 91,
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    "year": 2007
  },
  {
    "id": 14161,
    "title": "2012",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 5.6,
    "duration": 158,
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
    "year": 2009
  },
  {
    "id": 17979,
    "title": "A Christmas Carol",
    "genres": [
      "Drama",
      "Animation"
    ],
    "rating": 6.6,
    "duration": 96,
    "poster": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    "year": 2009
  },
  {
    "id": 76757,
    "title": "Jupiter Ascending",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Fantasy",
      "Action"
    ],
    "rating": 5.2,
    "duration": 124,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Jupiter%20Ascending",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Jupiter%20Ascending",
    "year": 2015
  },
  {
    "id": 258489,
    "title": "The Legend of Tarzan",
    "genres": [
      "Adventure",
      "Action"
    ],
    "rating": 5.5,
    "duration": 109,
    "poster": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRy4iKrj2GP4p.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "year": 2016
  },
  {
    "id": 411,
    "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "rating": 6.7,
    "duration": 143,
    "poster": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MN75UqLl6Vg.jpg",
    "year": 2005
  },
  {
    "id": 246655,
    "title": "X-Men: Apocalypse",
    "genres": [
      "Sci-Fi"
    ],
    "rating": 6.4,
    "duration": 144,
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "year": 2016
  },
  {
    "id": 155,
    "title": "The Dark Knight",
    "genres": [
      "Thriller",
      "Drama",
      "Action",
      "Crime"
    ],
    "rating": 8.2,
    "duration": 152,
    "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlME0banwYYgJN.jpg",
    "year": 2008
  },
  {
    "id": 14160,
    "title": "Up",
    "genres": [
      "Adventure",
      "Comedy",
      "Family",
      "Animation"
    ],
    "rating": 7.7,
    "duration": 96,
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    "year": 2009
  },
  {
    "id": 15512,
    "title": "Monsters vs Aliens",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Family",
      "Animation"
    ],
    "rating": 6,
    "duration": 94,
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
    "year": 2009
  },
  {
    "id": 1726,
    "title": "Iron Man",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.4,
    "duration": 126,
    "poster": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    "year": 2008
  },
  {
    "id": 44826,
    "title": "Hugo",
    "genres": [
      "Adventure",
      "Family",
      "Drama"
    ],
    "rating": 7,
    "duration": 126,
    "poster": "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    "year": 2011
  },
  {
    "id": 8487,
    "title": "Wild Wild West",
    "genres": [
      "Sci-Fi",
      "Action",
      "Western",
      "Adventure",
      "Comedy"
    ],
    "rating": 5.1,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRy4iKrj2GP4p.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "year": 1999
  },
  {
    "id": 1735,
    "title": "The Mummy: Tomb of the Dragon Emperor",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 5.2,
    "duration": 112,
    "poster": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MN75UqLl6Vg.jpg",
    "year": 2008
  },
  {
    "id": 297761,
    "title": "Suicide Squad",
    "genres": [
      "Sci-Fi",
      "Action",
      "Crime",
      "Fantasy",
      "Adventure"
    ],
    "rating": 5.9,
    "duration": 123,
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "year": 2016
  },
  {
    "id": 2698,
    "title": "Evan Almighty",
    "genres": [
      "Comedy",
      "Fantasy",
      "Family"
    ],
    "rating": 5.3,
    "duration": 96,
    "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlME0banwYYgJN.jpg",
    "year": 2007
  },
  {
    "id": 137113,
    "title": "Edge of Tomorrow",
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.6,
    "duration": 113,
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    "year": 2014
  },
  {
    "id": 9804,
    "title": "Waterworld",
    "genres": [
      "Adventure",
      "Action"
    ],
    "rating": 5.9,
    "duration": 135,
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
    "year": 1995
  },
  {
    "id": 14869,
    "title": "G.I. Joe: The Rise of Cobra",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "rating": 5.6,
    "duration": 118,
    "poster": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    "year": 2009
  },
  {
    "id": 150540,
    "title": "Inside Out",
    "genres": [
      "Comedy",
      "Family",
      "Drama",
      "Animation"
    ],
    "rating": 8,
    "duration": 94,
    "poster": "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    "year": 2015
  },
  {
    "id": 278927,
    "title": "The Jungle Book",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family",
      "Drama"
    ],
    "rating": 6.7,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRy4iKrj2GP4p.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "year": 2016
  },
  {
    "id": 10138,
    "title": "Iron Man 2",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.6,
    "duration": 124,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Iron%20Man%202",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Iron%20Man%202",
    "year": 2010
  },
  {
    "id": 58595,
    "title": "Snow White and the Huntsman",
    "genres": [
      "Adventure",
      "Fantasy",
      "Drama"
    ],
    "rating": 5.8,
    "duration": 127,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Snow%20White%20and%20the%20Huntsman",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Snow%20White%20and%20the%20Huntsman",
    "year": 2012
  },
  {
    "id": 102651,
    "title": "Maleficent",
    "genres": [
      "Action",
      "Fantasy",
      "Family",
      "Adventure",
      "Romance"
    ],
    "rating": 7,
    "duration": 97,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Maleficent",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Maleficent",
    "year": 2014
  },
  {
    "id": 119450,
    "title": "Dawn of the Planet of the Apes",
    "genres": [
      "Thriller",
      "Sci-Fi",
      "Action",
      "Drama"
    ],
    "rating": 7.3,
    "duration": 130,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Dawn%20of%20the%20Planet%20of%20the%20Apes",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Dawn%20of%20the%20Planet%20of%20the%20Apes",
    "year": 2014
  },
  {
    "id": 79698,
    "title": "The Lovers",
    "genres": [
      "Adventure",
      "Romance",
      "Sci-Fi",
      "Action"
    ],
    "rating": 4.8,
    "duration": 109,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=The%20Lovers",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=The%20Lovers",
    "year": 2015
  },
  {
    "id": 64686,
    "title": "47 Ronin",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action",
      "Drama"
    ],
    "rating": 5.9,
    "duration": 119,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=47%20Ronin",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=47%20Ronin",
    "year": 2013
  },
  {
    "id": 100402,
    "title": "Captain America: The Winter Soldier",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.6,
    "duration": 136,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Captain%20America%3A%20The%20Winter%20Soldier",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Captain%20America%3A%20The%20Winter%20Soldier",
    "year": 2014
  },
  {
    "id": 10192,
    "title": "Shrek Forever After",
    "genres": [
      "Animation",
      "Fantasy",
      "Family",
      "Adventure",
      "Comedy"
    ],
    "rating": 6,
    "duration": 93,
    "poster": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRy4iKrj2GP4p.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "year": 2010
  },
  {
    "id": 158852,
    "title": "Tomorrowland",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Mystery",
      "Family"
    ],
    "rating": 6.2,
    "duration": 130,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Tomorrowland",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Tomorrowland",
    "year": 2015
  },
  {
    "id": 177572,
    "title": "Big Hero 6",
    "genres": [
      "Action",
      "Animation",
      "Family",
      "Adventure",
      "Comedy"
    ],
    "rating": 7.8,
    "duration": 102,
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "year": 2014
  },
  {
    "id": 82690,
    "title": "Wreck-It Ralph",
    "genres": [
      "Adventure",
      "Comedy",
      "Family",
      "Animation"
    ],
    "rating": 7.1,
    "duration": 108,
    "poster": "https://placehold.co/500x750/1a1a1a/e8a838?font=montserrat&text=Wreck-It%20Ralph",
    "backdrop": "https://placehold.co/1920x1080/1a1a1a/222222?font=montserrat&text=Wreck-It%20Ralph",
    "year": 2012
  },
  {
    "id": 5255,
    "title": "The Polar Express",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family",
      "Animation"
    ],
    "rating": 6.4,
    "duration": 100,
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    "year": 2004
  },
  {
    "id": 47933,
    "title": "Independence Day: Resurgence",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 4.9,
    "duration": 120,
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
    "year": 2016
  },
  {
    "id": 10191,
    "title": "How to Train Your Dragon",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family",
      "Animation"
    ],
    "rating": 7.5,
    "duration": 98,
    "poster": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    "year": 2010
  },
  {
    "id": 296,
    "title": "Terminator 3: Rise of the Machines",
    "genres": [
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "rating": 5.9,
    "duration": 109,
    "poster": "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    "year": 2003
  },
  {
    "id": 118340,
    "title": "Guardians of the Galaxy",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.9,
    "duration": 121,
    "poster": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRy4iKrj2GP4p.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "year": 2014
  },
  {
    "id": 157336,
    "title": "Interstellar",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Drama"
    ],
    "rating": 8.1,
    "duration": 169,
    "poster": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MN75UqLl6Vg.jpg",
    "year": 2014
  },
  {
    "id": 27205,
    "title": "Inception",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Action",
      "Thriller",
      "Adventure"
    ],
    "rating": 8.1,
    "duration": 148,
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "year": 2010
  },
  {
    "id": 315011,
    "title": "Shin Godzilla",
    "genres": [
      "Sci-Fi",
      "Action",
      "Drama",
      "Adventure",
      "Horror"
    ],
    "rating": 6.5,
    "duration": 120,
    "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlME0banwYYgJN.jpg",
    "year": 2016
  },
  {
    "id": 49051,
    "title": "The Hobbit: An Unexpected Journey",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 7,
    "duration": 169,
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    "year": 2012
  },
  {
    "id": 9799,
    "title": "The Fast and the Furious",
    "genres": [
      "Thriller",
      "Action",
      "Crime"
    ],
    "rating": 6.6,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
    "year": 2001
  }
];

module.exports = { GENRES, MOVIES };
