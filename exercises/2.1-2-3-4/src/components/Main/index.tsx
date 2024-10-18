interface CinemaProps {
    name: string;
    movie1: Movie;
    movie2: Movie;
  }
  
  interface Movie {
    title: string;
    director: string;
  }
  
  const Cinema = (props: CinemaProps) => {
    return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        <li>
          <strong>{props.movie1.title}</strong> - Réalisateur :{" "}
          {props.movie1.director}
        </li>
        <li>
        <strong>{props.movie2.title}</strong> - Réalisateur :{" "}
          {props.movie2.director}
        </li>
      </ul>
    </div>
    )
};

export default Cinema;