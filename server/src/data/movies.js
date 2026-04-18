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
    "rating": 7.602,
    "duration": 162,
    "poster": "https://image.tmdb.org/t/p/w500/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
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
    "rating": 7.266,
    "duration": 169,
    "poster": "https://image.tmdb.org/t/p/w500/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/1jHxkVXMI5s3vRiyiZooUy1shB5.jpg",
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
    "rating": 6.569,
    "duration": 148,
    "poster": "https://image.tmdb.org/t/p/w500/zj8ongFhtWNsVlfjOGo8pSr7PQg.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/8lBViysvNJBPkl6zG1LVAaW3qhj.jpg",
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
    "rating": 7.793,
    "duration": 165,
    "poster": "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/y2DB71C4nyIdMrANijz8mzvQtk6.jpg",
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
    "rating": 6.36,
    "duration": 132,
    "poster": "https://image.tmdb.org/t/p/w500/lCxz1Yus07QCQQCb6I0Dr3Lmqpx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/hj5RynBrJB1Wlz84t3lJj9DuTJh.jpg",
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
    "rating": 6.454,
    "duration": 139,
    "poster": "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/w1oD1MzHjnBJc5snKupIQaSBLIh.jpg",
    "year": 2007
  },
  {
    "id": 38757,
    "title": "Tangled",
    "genres": [
      "Family",
      "Animation"
    ],
    "rating": 7.61,
    "duration": 100,
    "poster": "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/cWczNud8Y8i8ab0Z4bxos4myWYO.jpg",
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
    "rating": 7.27,
    "duration": 141,
    "poster": "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kIBK5SKwgqIIuRKhhWrJn3XkbPq.jpg",
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
    "rating": 7.681,
    "duration": 153,
    "poster": "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ze6Mx4QE5mQVXRYmG2flncqqle4.jpg",
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
    "rating": 5.992,
    "duration": 151,
    "poster": "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg",
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
    "rating": 5.801,
    "duration": 154,
    "poster": "https://image.tmdb.org/t/p/w500/385XwTQZDpRX2d3kxtnpiLrjBXw.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/aTBsOF7JDQQlwO9Od2iQJEuSRWR.jpg",
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
    "rating": 6.336,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/e3DXXLJHGqMx9yYpXsql1XNljmM.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/3CqMIX3ZlrD0pU3fpBL6DM0Cneb.jpg",
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
    "rating": 7.375,
    "duration": 151,
    "poster": "https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/vr6n6ZFUZvedvIlhfYcbCWcaKyW.jpg",
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
    "rating": 6.122,
    "duration": 149,
    "poster": "https://image.tmdb.org/t/p/w500/yDuJGq8biNMW7zM3w95UaDJv0KG.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/vHd8RTXTGFwexUC2Mj1HOgSy9J3.jpg",
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
    "rating": 6.642,
    "duration": 143,
    "poster": "https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/dlPw6SESWNudgriKvNxJJLJryLq.jpg",
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
    "rating": 6.629,
    "duration": 150,
    "poster": "https://image.tmdb.org/t/p/w500/qxz3WIyjZiSKUhaTIEJ3c1GcC9z.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/9pBv1BOSloAUgAkF0meJWdnbV4Q.jpg",
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
    "rating": 8,
    "duration": 143,
    "poster": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
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
    "rating": 6.566,
    "duration": 136,
    "poster": "https://image.tmdb.org/t/p/w500/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg",
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
    "rating": 6.541,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/90DdoEStzeObs96fsYf4GG544iN.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5AhpUb8CAP0jZ4Wrn7AsRUYjZxB.jpg",
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
    "rating": 7.332,
    "duration": 144,
    "poster": "https://image.tmdb.org/t/p/w500/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/3UbaCMmqOd7mca4Y5DOzY2ZVTyX.jpg",
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
    "rating": 6.732,
    "duration": 136,
    "poster": "https://image.tmdb.org/t/p/w500/jexoNYnPd6vVrmygwF6QZmWPFdu.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/HVcza6tJtWFrLriuh3Ano4Vt46.jpg",
    "year": 2012
  },
  {
    "id": 20662,
    "title": "Robin Hood",
    "genres": [
      "Adventure",
      "Action"
    ],
    "rating": 6.395,
    "duration": 140,
    "poster": "https://image.tmdb.org/t/p/w500/ldOLoEroWISvPvqTY2IgnuEUWTq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/gOi18HJqiuOYoXMH4CgpFnTHgUJ.jpg",
    "year": 2010
  },
  {
    "id": 57158,
    "title": "The Hobbit: The Desolation of Smaug",
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "rating": 7.577,
    "duration": 161,
    "poster": "https://image.tmdb.org/t/p/w500/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/hwPnxzIgQFfXl5zP0Yh8bViCMzf.jpg",
    "year": 2013
  },
  {
    "id": 2268,
    "title": "The Golden Compass",
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "rating": 6.082,
    "duration": 113,
    "poster": "https://image.tmdb.org/t/p/w500/mIHV28g4Zhbc8yhnhOixa8m4p5O.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qifYc5jT4CZxmLH9DfOlipioSPp.jpg",
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
    "rating": 6.887,
    "duration": 187,
    "poster": "https://image.tmdb.org/t/p/w500/6a2HY6UmD7XiDD3NokgaBAXEsD2.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mRM2NB0i3wv4HqxXvwIjEVi4Qqq.jpg",
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
    "rating": 7.902,
    "duration": 194,
    "poster": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qBChUbS8ksbJoPTfZpogsnxG5tY.jpg",
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
    "rating": 7.447,
    "duration": 147,
    "poster": "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/wdwcOBMkt3zmPQuEMxB3FUtMio2.jpg",
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
    "rating": 5.883,
    "duration": 131,
    "poster": "https://image.tmdb.org/t/p/w500/9b0Im7SfedHiajTwzSL9zGyBI7M.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/85PMh0cKywekAJYDnRXfezYAmEc.jpg",
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
    "rating": 6.699,
    "duration": 124,
    "poster": "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/s5QfDFqRO6sjgPtKkjxD0WqXQef.jpg",
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
    "rating": 7.26,
    "duration": 143,
    "poster": "https://image.tmdb.org/t/p/w500/d0IVecFQvsGdSbnMAHqiYsNYaJT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qB2eFmGEh5YCzhXUpz7As2PaDCh.jpg",
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
    "rating": 7.303,
    "duration": 127,
    "poster": "https://image.tmdb.org/t/p/w500/eg8XHjA7jkM3ulBLnfGTczR9ytI.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/6al048Lat3eLVQOuKtc9h6Tu94d.jpg",
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
    "rating": 6.931,
    "duration": 130,
    "poster": "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/iVped1djsF0tvGkvnHbzsE3ZPTF.jpg",
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
    "rating": 6.639,
    "duration": 108,
    "poster": "https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ocOWbTzHcJVTw9Tz173KPeskDOP.jpg",
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
    "rating": 6.418,
    "duration": 104,
    "poster": "https://image.tmdb.org/t/p/w500/a2xicU8DpKtRizOHjQLC1JyCSRS.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/sBl1n4Oi2wX81EtXIb8NsPqJf3W.jpg",
    "year": 2006
  },
  {
    "id": 62211,
    "title": "Monsters University",
    "genres": [
      "Family",
      "Animation"
    ],
    "rating": 7.046,
    "duration": 104,
    "poster": "https://image.tmdb.org/t/p/w500/y7thwJ7z5Bplv6vwl6RI0yteaDD.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/hmAOMwVeJfdWXgK1Ikyl2eYkE99.jpg",
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
    "rating": 6.21,
    "duration": 150,
    "poster": "https://image.tmdb.org/t/p/w500/pLBb0whOzVDtJvyD4DPeQyQNOqp.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bH1bhjn37uA1zOPvyHbzJSvza7v.jpg",
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
    "rating": 5.958,
    "duration": 165,
    "poster": "https://image.tmdb.org/t/p/w500/jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/wxr4Z6E83h14CogsZOzDm1vuDX3.jpg",
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
    "rating": 5.932,
    "duration": 130,
    "poster": "https://image.tmdb.org/t/p/w500/tkzfAUEKoUp4YFNbZV9hfpZOz0z.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/o6TYNmB1CT85j7lmyvSedoybyc9.jpg",
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
    "rating": 6.532,
    "duration": 142,
    "poster": "https://image.tmdb.org/t/p/w500/bU7nTmvmy0h3VUP01v1T2imgH6N.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/k0hlAzTryCYX1O1LyC6P8tAa8s0.jpg",
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
    "rating": 6.539,
    "duration": 125,
    "poster": "https://image.tmdb.org/t/p/w500/8Nc6R8k7bG8frSiDJo0oLucF7dN.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uUa6jgSr5BQpcBhhaz1PV1JhSa4.jpg",
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
    "rating": 6.176,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/okIz1HyxeVOMzYwwHUjH2pHi74I.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/4BS8tgBNWg2jPiDlBwM2iJe1xB7.jpg",
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
    "rating": 5.181,
    "duration": 114,
    "poster": "https://image.tmdb.org/t/p/w500/fj21HwUprqjjwTdkKC1XZurRSpV.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tS3ByIQR6V61DaWhEIFbLSuLK5Q.jpg",
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
    "rating": 7.804,
    "duration": 103,
    "poster": "https://image.tmdb.org/t/p/w500/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uAfhsySkr1UzQg1zdg3dZQRz9Fd.jpg",
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
    "rating": 6.084,
    "duration": 115,
    "poster": "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uifaXfJxjTMeNttw5u04nHx1G5w.jpg",
    "year": 2009
  },
  {
    "id": 168259,
    "title": "Furious 7",
    "genres": [
      "Action"
    ],
    "rating": 7.2,
    "duration": 137,
    "poster": "https://image.tmdb.org/t/p/w500/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ehzI1mVcnHqB58NqPyQwpMqcVoz.jpg",
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
    "rating": 6.825,
    "duration": 116,
    "poster": "https://image.tmdb.org/t/p/w500/aCnVdvExw6UWSeQfr0tUH3jr4qG.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/31VpBgUX5O4Z3dn5ZbX8HLqoXH3.jpg",
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
    "rating": 7.53,
    "duration": 131,
    "poster": "https://image.tmdb.org/t/p/w500/tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/fctQU5MoXgJ5pNMljFzlEFXwfSu.jpg",
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
    "rating": 7.319,
    "duration": 132,
    "poster": "https://image.tmdb.org/t/p/w500/Aim3kVNh1MPIxPEFeJrl9e9Uf1a.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/npDrIM6ZbuD7nUxI7ZzNBxs4IRF.jpg",
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
    "rating": 5.871,
    "duration": 114,
    "poster": "https://image.tmdb.org/t/p/w500/9jSI7saUX9Qz0JLh19jX2ulEwL7.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/djSAd6HUm66eVNC3PiZbYwOpD5A.jpg",
    "year": 2013
  },
  {
    "id": 64682,
    "title": "The Great Gatsby",
    "genres": [
      "Romance",
      "Drama"
    ],
    "rating": 7.353,
    "duration": 143,
    "poster": "https://image.tmdb.org/t/p/w500/tyxfCBQv6Ap74jcu3xd7aBiaa29.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5mQZqk2qSJCsYmvw1cQJLEcLNYM.jpg",
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
    "rating": 6.296,
    "duration": 116,
    "poster": "https://image.tmdb.org/t/p/w500/siNGMLdOUNYLEGtlsnmQcpO2XZX.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/iP0capCU4w5nxCDl398CH7yR1r9.jpg",
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
    "rating": 6.918,
    "duration": 131,
    "poster": "https://image.tmdb.org/t/p/w500/8wo4eN8dWKaKlxhSvBz19uvj8gA.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/9X7Im1YuBhyHYVD8r7CAONPJR5k.jpg",
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
    "rating": 6.223,
    "duration": 154,
    "poster": "https://image.tmdb.org/t/p/w500/28YlCLrFhONteYSs9hKjD1Km0Cj.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/h3js4rulxzKMOokM2oO5Kr0mBZU.jpg",
    "year": 2011
  },
  {
    "id": 217,
    "title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "genres": [
      "Adventure",
      "Action"
    ],
    "rating": 6.022,
    "duration": 122,
    "poster": "https://image.tmdb.org/t/p/w500/56As6XEM1flWvprX4LgkPl8ii4K.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/p96949hcwUG2BwE6MgKmw0uYNCx.jpg",
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
    "rating": 6.7,
    "duration": 93,
    "poster": "https://image.tmdb.org/t/p/w500/8RSkxOO80btfKjyiC5ZiTaCHIT8.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/cF3H9pyUF6dsvqlYUcH0TyBAMTG.jpg",
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
    "rating": 7.022,
    "duration": 93,
    "poster": "https://image.tmdb.org/t/p/w500/1XAuDtMWpL0sYSFK0R6EZate2Ux.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qx9ts2hBYJrkIQxhryitxnLlm2u.jpg",
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
    "rating": 6.783,
    "duration": 122,
    "poster": "https://image.tmdb.org/t/p/w500/m7SHlvcGfCkbzk2xP7XHDOI6o93.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/r2ZBqkOCWSEp3z7gmpjSJ8k3kCK.jpg",
    "year": 2016
  },
  {
    "id": 10681,
    "title": "WALL·E",
    "genres": [
      "Family",
      "Animation"
    ],
    "rating": 8.11,
    "duration": 98,
    "poster": "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ai2FicMUxLCurVkjtYdSvVDWRmS.jpg",
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
    "rating": 6.487,
    "duration": 91,
    "poster": "https://image.tmdb.org/t/p/w500/mp9CzKxLa2i7yblMXUrzVfGqsCo.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ozsLB1HRCN6ZAmJN89pWtoiAwnb.jpg",
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
    "rating": 5.873,
    "duration": 158,
    "poster": "https://image.tmdb.org/t/p/w500/c2PkTPT5D9zB8SIm5wNlDAANEqM.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/jCvkDqWWBrgxf9R3DrtJ6GpqXse.jpg",
    "year": 2009
  },
  {
    "id": 17979,
    "title": "A Christmas Carol",
    "genres": [
      "Drama",
      "Animation"
    ],
    "rating": 6.905,
    "duration": 96,
    "poster": "https://image.tmdb.org/t/p/w500/xNwlAIdx1Ln28GRiQttUP9Gojy2.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uocpNfrP0Vvnf2UxykXuIR1HNUd.jpg",
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
    "rating": 5.46,
    "duration": 124,
    "poster": "https://image.tmdb.org/t/p/w500/2NCcAZ3M3F0FxENYmammBknwpVn.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/w4hk4QG05nDuSgimpa7XAM6OyPX.jpg",
    "year": 2015
  },
  {
    "id": 258489,
    "title": "The Legend of Tarzan",
    "genres": [
      "Adventure",
      "Action"
    ],
    "rating": 5.915,
    "duration": 109,
    "poster": "https://image.tmdb.org/t/p/w500/eJrfz178xBGlxjDGxnBXTzWWa4w.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/btCaMm9aVW1PG485Ef8RMBBALzI.jpg",
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
    "rating": 7.136,
    "duration": 143,
    "poster": "https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tuDhEdza074bA497bO9WFEPs6O6.jpg",
    "year": 2005
  },
  {
    "id": 246655,
    "title": "X-Men: Apocalypse",
    "genres": [
      "Sci-Fi"
    ],
    "rating": 6.522,
    "duration": 144,
    "poster": "https://image.tmdb.org/t/p/w500/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/sTQNRqLbfCXolrb5CizAW1dj528.jpg",
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
    "rating": 8.528,
    "duration": 152,
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg",
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
    "rating": 7.959,
    "duration": 96,
    "poster": "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/hGGC9gKo7CFE3fW07RA587e5kol.jpg",
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
    "rating": 6.241,
    "duration": 94,
    "poster": "https://image.tmdb.org/t/p/w500/hpHarddVj34j53T7NsoUGdKj4mP.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/fbxZeJEcyf76oEQIGmotlclwmiH.jpg",
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
    "rating": 7.657,
    "duration": 126,
    "poster": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/cKvDv2LpwVEqbdXWoQl4XgGN6le.jpg",
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
    "rating": 7.174,
    "duration": 126,
    "poster": "https://image.tmdb.org/t/p/w500/1dxRq3o3l3bVWNRvvSb7rRf68qp.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/Aj81Gu3u1a64qXFOLDuF5gdxyy0.jpg",
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
    "rating": 5.32,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/mCdo7nykEVCa25bjnkwgyX35fjm.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tbzWgnaqhFwN5mCIiwbgN5oiw0V.jpg",
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
    "rating": 5.513,
    "duration": 112,
    "poster": "https://image.tmdb.org/t/p/w500/A3acM1lX5PNWQa6r5qeMAJOxbnT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/W034dd7w2malON26KWyZm4y37W.jpg",
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
    "rating": 5.917,
    "duration": 123,
    "poster": "https://image.tmdb.org/t/p/w500/sk3FZgh3sRrmr8vyhaitNobMcfh.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/wAk0yKrhAmvsoMvlKs4QImhvK5X.jpg",
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
    "rating": 5.585,
    "duration": 96,
    "poster": "https://image.tmdb.org/t/p/w500/blI1ioXbgJWOJ3PbcBuSV65Ebwu.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/yVwCXQzSZvg9H0YBXvzPfSs6Vqx.jpg",
    "year": 2007
  },
  {
    "id": 137113,
    "title": "Edge of Tomorrow",
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "rating": 7.637,
    "duration": 113,
    "poster": "https://image.tmdb.org/t/p/w500/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/4V1yIoAKPMRQwGBaSses8Bp2nsi.jpg",
    "year": 2014
  },
  {
    "id": 9804,
    "title": "Waterworld",
    "genres": [
      "Adventure",
      "Action"
    ],
    "rating": 6.224,
    "duration": 135,
    "poster": "https://image.tmdb.org/t/p/w500/X4UyUO5jgzs3c5YafnmYKLKKYw.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/yaIu82UiD9QZEkKCGrAd8VAmc0V.jpg",
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
    "rating": 5.783,
    "duration": 118,
    "poster": "https://image.tmdb.org/t/p/w500/mc9b25IAprHfsaOz0wTshOwGHcY.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/jE5wVBRCGQzjHjvFUcYwGS4x0ux.jpg",
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
    "rating": 7.91,
    "duration": 94,
    "poster": "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/o3i6AfTcWAuNvzAUV3q5lOmi6Gx.jpg",
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
    "rating": 6.871,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/2Epx7F9X7DrFptn4seqn4mzBVks.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/8oYykF1Qhrb8fC2qZqD71EzRywg.jpg",
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
    "rating": 6.851,
    "duration": 124,
    "poster": "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg",
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
    "rating": 5.988,
    "duration": 127,
    "poster": "https://image.tmdb.org/t/p/w500/8HUa5kRubYbnAD5UVpnhTGGgMTW.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/KBe9fHU5rVg4daoKnFwl1Cbc28.jpg",
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
    "rating": 7.087,
    "duration": 97,
    "poster": "https://image.tmdb.org/t/p/w500/bDG3yei6AJlEAK3A5wN7RwFXQ7V.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bNiiUCQUD7ij5Ybh2GoWSZwqAb1.jpg",
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
    "rating": 7.337,
    "duration": 130,
    "poster": "https://image.tmdb.org/t/p/w500/mSmAc9G25fhOHH45SLEeagR0qi7.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/3SozaNPOYUadcmTPgndDibMyDNC.jpg",
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
    "poster": "https://image.tmdb.org/t/p/w500/6esL8UH2sXXqbfbaV6bFEUBCDOr.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bHDQPPXx5hxkrg7oE9TJXrFHUSg.jpg",
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
    "rating": 6.2,
    "duration": 119,
    "poster": "https://image.tmdb.org/t/p/w500/xDHnmcroujCRG0ysYQaiswjbyHd.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/nyt0jlofZyjhRqiQkEp0cdoKaS3.jpg",
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
    "rating": 7.653,
    "duration": 136,
    "poster": "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/1RWLMyC9KcFfcaoViMiJGSSZzzr.jpg",
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
    "rating": 6.393,
    "duration": 93,
    "poster": "https://image.tmdb.org/t/p/w500/6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uzzTystB8lL0mRDII5Sfs5HxgkI.jpg",
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
    "rating": 6.3,
    "duration": 130,
    "poster": "https://image.tmdb.org/t/p/w500/kziYpr5Nfw60P0My8aj1sgCEqed.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/udYOmbW1JEZjVd726PWHlmptxPi.jpg",
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
    "rating": 7.724,
    "duration": 102,
    "poster": "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg",
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
    "rating": 7.356,
    "duration": 108,
    "poster": "https://image.tmdb.org/t/p/w500/zWoIgZ7mgmPkaZjG0102BSKFIqQ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/3IFRjBDwtk0DlIsDfJ2zEzLjUBi.jpg",
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
    "rating": 6.724,
    "duration": 100,
    "poster": "https://image.tmdb.org/t/p/w500/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/jtOvTVlkF8TlaOq94oNXRc9u2yp.jpg",
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
    "rating": 5.355,
    "duration": 120,
    "poster": "https://image.tmdb.org/t/p/w500/9S50foUIYGwiNPWOxi1WJF6IPwI.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/auT0H5fFUnPKjHNj0OkQMkxdbl2.jpg",
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
    "rating": 7.857,
    "duration": 98,
    "poster": "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/59vDC1BuEQvti24OMr0ZvtAK6R1.jpg",
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
    "rating": 6.186,
    "duration": 109,
    "poster": "https://image.tmdb.org/t/p/w500/nvsoLAclNfpyJSp73TiGKwZoqJW.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kbXMOnz2RhTSAbLtHX5hy5AXtwv.jpg",
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
    "rating": 7.905,
    "duration": 121,
    "poster": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg",
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
    "rating": 8.47,
    "duration": 169,
    "poster": "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/2ssWTSVklAEc98frZUQhgtGHx7s.jpg",
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
    "rating": 8.372,
    "duration": 148,
    "poster": "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
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
    "rating": 7.216,
    "duration": 120,
    "poster": "https://image.tmdb.org/t/p/w500/jPNShaWZMpVF0iQ7j1dvTuZLD20.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tb0uo01w2kDHiQwTszsLlSusAm4.jpg",
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
    "rating": 7.37,
    "duration": 169,
    "poster": "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xyXmtuvsoM5J3yNad0nvcetpBdY.jpg",
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
    "rating": 7.003,
    "duration": 106,
    "poster": "https://image.tmdb.org/t/p/w500/gqY0ITBgT7A82poL9jv851qdnIb.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/jY9ef5nqY4xIIMu3yzW3qamUCoi.jpg",
    "year": 2001
  }
];

module.exports = { GENRES, MOVIES };
