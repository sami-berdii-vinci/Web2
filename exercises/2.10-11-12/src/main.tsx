import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import App from "./components/App";
import CinemaPage from "./components/pages/CinemaPage";
import MovieListPage from "./components/pages/MovieListPage";
import AddMoviePage from "./components/pages/AddMoviePage";
import MoviePage from "./components/pages/MoviePage";

const router = createBrowserRouter([ // c'est dans le main qu'on s'occupe de définir le path de chaque page !!! 
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinemas",
        element: <CinemaPage />,
      },
      {
        path: "movie-list",
        element: <MovieListPage />,
      },
      {
        path: "add-movie",
        element: <AddMoviePage/>,
      },
      {
        path: "movies/:id",
        element: <MoviePage />,
      }
    ],
  }, 
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);