interface Movie {
    id: number;
    title: string;
    director: string;
    duration: number;
    imageUrl?: string;
    description?: string;
    budget?: number;
  }

  interface CinemaContext {
    movies: Movie[];
    addMovie: (newMovie : NewMovie) => void;
  }

  type NewMovie = Omit<Movie, "id">;
  
  export type { Movie, NewMovie, CinemaContext };