import path from "node:path";
import { Movie, NewMovie } from "../types;";
import { parse, serialize } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/movies.json");

const defaultDrinks: Movie[] = [
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

function readAllMovies(durationMax: number): Movie[] {
  const movies = parse(jsonDbPath, defaultMovies);
  if (!durationMax) {
    return movies;
  }

  const durationMaxNumber = Number(durationMax);

  const filteredMovies = movies.filter((movie) => {
    return movie.duration <= durationMaxNumber;
  });
  return filteredMovies;
}

function readOneMovie(id: number): Movie | undefined {
  const movies = parse(jsonDbPath, defaultMovies);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) {
    return undefined;
  }
  return movie;
}

function createOneMovie(newMovie: NewMovie): Movie {
  const movies = parse(jsonDbPath, defaultMovies);

  const nextId =
    movies.reduce((maxId, movie) => (movie.id > maxId ? movie.id : maxId), 0) + 1;

  const createdMovie = {
    id: nextId,
    ...newMovie,
  };

  movies.push(createdMovie);
  serialize(jsonDbPath, movies);

  return createdMovie;
}

function deleteOneMovie(movieId: number): Movie | undefined {
  const movies = parse(jsonDbPath, defaultMovies);
  const index = movies.findIndex((movie) => movie.id === movieId);
  if (index === -1) {
    return undefined;
  }

  const deletedElements = movies.splice(index, 1);
  serialize(jsonDbPath, movies);
  return deletedElements[0];
}

function updateOneMovie(
  movieId: number,
  newMovie: Partial<NewMovie>
): Movie | undefined {
  const movies = parse(jsonDbPath, defaultDrinks);
  const movie = movies.find((movie) => movie.id === movieId);
  if (!movie) {
    return undefined;
  }

  if (newMovie.title !== undefined) {
    movie.title = newMovie.title!; // the router already checks for the presence of title
  }
  if (newMovie.director !== undefined) {
    drink.director = newDrink.director!;
  }
  if (newMovie.duration !== undefined) {
    movie.duration = newMovie.duration!;
  }

  serialize(jsonDbPath, movies);
  return movie;
}

export {
  readAllMovies,
  readOneMovie,
  createOneMovie,
  deleteOneMovie,
  updateOneMovie,
};
