import { Movie } from "../types.ts";
import "./MovieCard.css";


interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="card">
     
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        {movie.imageUrl && ( //notation pour les champs optionnels : si movie.imgurl existe alors affiche l'image ; si movie.imgurl n'existe pas alors ne va pas plus loin
        <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
      )}
        <p className="card-text">
          <strong>Réalisateur :</strong> {movie.director}
        </p>
        <p className="card-text">
          <strong>Durée :</strong> {movie.duration} minutes
        </p>
        {movie.budget && ( //idem
          <p className="card-text">
            <strong>Budget :</strong> {movie.budget} millions de dollars
          </p>
        )}
        {movie.description && ( //idem
          <p className="card-text">
            <strong>Description :</strong> {movie.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;