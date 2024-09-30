import { Router } from "express";
import { Movie, NewMovie } from "../types";

const router = Router();

const movies: Movie[] = [
  {
    id: 1,
    title: "Les Schtroumpfs",
    director: "Peyo",
    duration: 93,
  },
  {
    id: 2,
    title: "Le diner de cons",
    director: "Louis de Funès",
    duration: 102,
  },
  {
    id: 3,
    title: "Avengers : Endgame",
    director: "Marvel",
    duration: 117,
  },
];

router.get("/", (req, res) => {
  if (!req.query["duration-max"]) {
    return res.json(movies);
  }
  const durationMax = Number(req.query["duration-max"]);
  const filteredMovies = movies.filter((movie) => {
    return movie.duration <= durationMax;
  });
  return res.json(filteredMovies);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) {
    return res.sendStatus(404);
  }
  return res.json(movie);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    body.duration <= 0 ||
    !body.title.trim() ||
    !body.director.trim() ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0) ||
    "description" in body && (typeof body.description !== "string") ||
    "imageURL" in body && (typeof body.imageURL !== "string"))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration } = body as NewMovie;

  const nextId = movies.reduce((maxId, movie) => (movie.id > maxId ? movie.id : maxId), 0) + 1;
  const newMovie: Movie = {
    id: nextId,
    title,
    director,
    duration
  };

  movies.push(newMovie);
  return res.json(newMovie);
});

export default router;
