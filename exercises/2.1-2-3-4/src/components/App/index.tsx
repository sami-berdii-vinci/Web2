import Header from "../Header";
import Cinema from "../Cinema";
import Footer from "../Footer";
import { Movie } from "../../types";

const App = () => {

  const headerImgUrl = "https://media.istockphoto.com/id/1941543582/fr/vectoriel/clapperboard-action-ouverte-de-l%C3%A9quipement-de-r%C3%A9alisation-de-films-%C3%A0-clin.jpg?s=2048x2048&w=is&k=20&c=Jf-0ZNTFT0RgAzZKYWggy2CY3PHfj1W5qoY3muVQlcs=";
  const footerImgUrl = "https://media.istockphoto.com/id/1150098746/fr/vectoriel/int%C3%A9rieur-de-cin%C3%A9ma-cin%C3%A9ma-audience-foule-regardant-le-film-assis-dans-des-rang%C3%A9es-de.jpg?s=2048x2048&w=is&k=20&c=4foBQDV_RKWKjvQbkODEKMVOfCPt6fsmJlDWIak51Z8=";


  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1: Movie[] = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2: Movie[] = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 

  
  return (
    <div>
      <Header title={pageTitle} img_url={headerImgUrl} children={undefined} />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer img_url={footerImgUrl} children={undefined} />
    </div>
  );
};

export default App;
