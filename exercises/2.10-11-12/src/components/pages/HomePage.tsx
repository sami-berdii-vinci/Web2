import PageTitle from "../PageTitle";
import { useOutletContext } from "react-router-dom";
import { CinemaContext } from "../../types";
import MovieTitleList from "../MovieTitleList";

const HomePage = () => {
  const { movies }: CinemaContext = useOutletContext();
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
      <h5>My favorites movies : </h5>
      <MovieTitleList movies={movies} />
    </div>
  );
};
export default HomePage;