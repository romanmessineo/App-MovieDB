import { MovieDetails } from "./pages/MovieDetails";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import styles from "./App.module.css";
import { LandingPage } from "./pages/LandingPage";

export const App = () => {
  return (
    <BrowserRouter>
        <header>
          <Link to="/">
            <h1 className={styles.title}>OsseanMovies</h1>
          </Link>
        </header>
        <main>
        <Routes>
            <Route path="/" element={<LandingPage/>}/> 
            <Route path="/movies/:movieId" element={<MovieDetails/>}/>
          </Routes> 
        </main>
     
    </BrowserRouter>
  );
};

/* Tokken;
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjJmZDk3MzIzN2E1ODAwYzNiMmNkNTdiMjQ2MTJjMiIsInN1YiI6IjYzYzJjMDBjZGY4NTdjMDBiYzIyNDU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3yP1TCDvyWZeqfRnoug9l7r-F9RGgvfRJHQVUCC1UL0
*/
