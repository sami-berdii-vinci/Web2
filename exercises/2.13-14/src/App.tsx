import { useEffect, useState } from 'react'
import './App.css'

interface Joke{
  joke : string;
  category : string;
};

function App() {

  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  
  useEffect(() => {
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
  }, []);

  if (!joke) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1> Jokes Central </h1>
      <h3>Random joke</h3>
      <h4>{joke.category}</h4>
      <p>{joke.joke}</p> 
    </div>
  )

  
}

export default App
