import { Router } from "express";
import { NewMovie } from "../types";
import {
  createOneMovie,
  deleteOneMovie,
  readAllMovies,
  readOneMovie,
  updateOneMovie,
} from "../services/movies";

const router = Router();

router.get("/", (req, res) => {
  const durationMax = Number(req.query["duration-max"]);
  const movies = readAllMovies(durationMax);
  return res.json(movies);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = readOneMovie(id);
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

  const newMovie = createOneMovie({ title, director, duration});
  return res.json(newMovie);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deletedMovie = deleteOneMovie(id);
  if (!deletedMovie) {
    return res.sendStatus(404);
  }
  return res.json(deletedMovie);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);

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

  const updatedMovie = updateOneMovie(id, { title, director, duration });

  if (!updatedMovie) {
    return res.sendStatus(404);
  }

  return res.json(updatedMovie);
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
