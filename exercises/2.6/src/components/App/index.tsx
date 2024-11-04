import Header from "../Header";
import Cinema from "../Cinema";
import Footer from "../Footer";
import { Movie } from "../../types";



const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC De Brouckère";

  const headerImgUrl = "https://media.istockphoto.com/id/1941543582/fr/vectoriel/clapperboard-action-ouverte-de-l%C3%A9quipement-de-r%C3%A9alisation-de-films-%C3%A0-clin.jpg?s=2048x2048&w=is&k=20&c=Jf-0ZNTFT0RgAzZKYWggy2CY3PHfj1W5qoY3muVQlcs=";
  const footerImgUrl = "https://media.istockphoto.com/id/1150098746/fr/vectoriel/int%C3%A9rieur-de-cin%C3%A9ma-cin%C3%A9ma-audience-foule-regardant-le-film-assis-dans-des-rang%C3%A9es-de.jpg?s=2048x2048&w=is&k=20&c=4foBQDV_RKWKjvQbkODEKMVOfCPt6fsmJlDWIak51Z8=";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      description:
        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description:
        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
      description:
        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      description:
        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",
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
