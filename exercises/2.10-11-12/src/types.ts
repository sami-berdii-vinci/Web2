interface Movie {
    title: string;
    director: string;
    duration: number;
    imageUrl?: string;
    description?: string;
    budget?: number;
  }

  type NewMovie = Omit<Movie, "id">;

  interface CinemaContext {
    movies: Movie[];
    addMovie: (newMovie : NewMovie) => void;
  }
  
  export type { Movie, NewMovie, CinemaContext };