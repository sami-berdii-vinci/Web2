import { useEffect, useState } from 'react'
import './App.css'

interface Joke{
  joke : string;
  category : string;
};

function App() {

  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  /*const jokeTimer = () => {
    const [joke, setJoke] = useState(undefined);
  }*/

  

  
  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
      })
      .then((data) => {
        setJoke({
          joke: data.joke ?? "No joke found",
          category: data.category ?? "Unknown",
        });
      });
  };
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchJoke();
    }, 10000);
    
    return () => clearTimeout(timer);
  })
 
  
  if (!joke) {
    return (<p>Loading...</p>);
  }

  return (
    <div>
      <h1> Destructorr314's Joke Central </h1>
      <h4>{joke.category}</h4>
      <p>{joke.joke}</p> 
    </div>
  ) 

  

  
}

export default App
