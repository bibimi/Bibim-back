-- AlterTable
ALTER TABLE "User" ADD COLUMN     "introduce" TEXT;

-- CreateTable
CREATE TABLE "TextFeed" (
    "id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageFeed" (
    "id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConcertFeed" (
    "id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoundFeed" (
    "id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
