/*
  Warnings:

  - A unique constraint covering the columns `[managedCinemaId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "managedCinemaId" TEXT;

-- CreateTable
CREATE TABLE "Cinema" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "screens" INTEGER NOT NULL DEFAULT 1,
    "imax" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cinema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "tmdbId" INTEGER,
    "title" TEXT NOT NULL,
    "poster" TEXT,
    "backdrop" TEXT,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "year" INTEGER NOT NULL,
    "genres" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Showtime" (
    "id" TEXT NOT NULL,
    "cinemaId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Showtime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdbId_key" ON "Movie"("tmdbId");

-- CreateIndex
CREATE INDEX "Showtime_cinemaId_idx" ON "Showtime"("cinemaId");

-- CreateIndex
CREATE INDEX "Showtime_movieId_idx" ON "Showtime"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "User_managedCinemaId_key" ON "User"("managedCinemaId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_managedCinemaId_fkey" FOREIGN KEY ("managedCinemaId") REFERENCES "Cinema"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Showtime" ADD CONSTRAINT "Showtime_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Showtime" ADD CONSTRAINT "Showtime_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
