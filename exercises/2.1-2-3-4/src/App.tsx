interface HeaderProps {
  title : string;
}


const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <div>
        <Header title={pageTitle}/>
      </div>

      <Cinema 
        name={cinema1Name}
        movie1title={cinema1Movie1Title}
        movie1director={cinema1Movie1Director}
        movie2title={cinema1Movie2Title}
        movie2director={cinema1Movie2Director}
      />

      <Cinema 
        name={cinema2Name}
        movie1title={cinema2Movie1Title}
        movie1director={cinema2Movie1Director}
        movie2title={cinema2Movie2Title}
        movie2director={cinema2Movie2Director}
      />
      
    </div>
  );
};

const Header = (props : HeaderProps) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
};

const Cinema = (props: {name:string, movie1title:string, movie1director:string, movie2title:string, movie2director:string})=> {
  return (
  <div>
    <h2>{props.name}</h2>
    <ul>
      <li>
        <strong>{props.movie1title}</strong> - Réalisateur :{" "}
        {props.movie1director}
      </li>
      <li>
      <strong>{props.movie2title}</strong> - Réalisateur :{" "}
        {props.movie2director}
      </li>
    </ul>
  </div>
  )
};

export default App;
