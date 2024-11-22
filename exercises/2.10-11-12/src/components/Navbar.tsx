import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => ( // c'est dans main.tsx qu'on s'occupe de définir le path de chaque page !!!
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/cinemas">Cinemas</Link>
    <Link to="/movie-list">My favorite movies</Link>
    <Link to="/add-movie">Add a movie</Link>
  </nav>
);

export default NavBar;