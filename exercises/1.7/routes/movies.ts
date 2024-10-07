import { Router } from "express";
import path from "node:path";
import { Movie, NewMovie } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/movies.json");

const router = Router();

const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "Les Schtroumpfs",
    director: "Peyo",
    duration: 93,
  },
  {
    id: 2,
    title: "L'avare",
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
  const movies = parse(jsonDbPath, defaultMovies);
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
  const movies = parse(jsonDbPath, defaultMovies)
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
    !body.director.trim()
  ) {
    return res.sendStatus(400);
  }

  /*for (const movie of movies) {
    if (body.title === movie.title && body.director === movie.director){
      return res.sendStatus(409);
    }
  }*/

  const { title, director, duration } = body as NewMovie;

  const movies = parse(jsonDbPath, defaultMovies);

  const nextId = movies.reduce((maxId, movie) => (movie.id > maxId ? movie.id : maxId), 0) + 1;
  const newMovie: Movie = {
    id: nextId,
    title,
    director,
    duration
  };

  movies.push(newMovie);
  serialize(jsonDbPath, movies);
  return res.json(newMovie);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movies = parse(jsonDbPath, defaultMovies);
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = movies.splice(index, 1);
  serialize(jsonDbPath, movies);
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movies = parse(jsonDbPath, defaultMovies);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number"))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration }: Partial<NewMovie> = body;

  if (title) {
    movie.title = title;
  }
  if (director) {
    movie.director = director;
  }
  if (duration) {
    movie.duration = duration;
  }

  serialize(jsonDbPath, movies);

  return res.json(movie);
});

router.put("/:id", (req, res) => {
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
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const movies = parse(jsonDbPath, defaultMovies);

  const indexOfMovieToUpdate = movies.findIndex((movie) => movie.id === id);
  
  if (indexOfMovieToUpdate < 0) {
    const newMovie = body as NewMovie;

    const nextId =
      movies.reduce((acc, movie) => (movie.id > acc ? movie.id : acc), 0) + 1;

    const addedMovie = { id: nextId, ...newMovie };

    movies.push(addedMovie);

    serialize(jsonDbPath, movies);

    return res.json(addedMovie);
  }

  const updatedMovie = { ...movies[indexOfMovieToUpdate], ...body } as Movie;

  movies[indexOfMovieToUpdate] = updatedMovie;

  serialize(jsonDbPath, movies);

  return res.send(updatedMovie);
});

export default router;
