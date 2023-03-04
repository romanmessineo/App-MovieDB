import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { get } from "../utils/httpClient";
import Spinner from "../components/Spinner";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const moviesContainerRef = useRef(null);

  const handleLoadMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const moviesContainer = moviesContainerRef.current;
      if (
        moviesContainer &&
        window.innerHeight + window.scrollY >=
          moviesContainer.offsetTop + moviesContainer.offsetHeight - 400
      ) {
        handleLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleLoadMore]);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const data = await get(`/discover/movie?page=${currentPage}`);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setLoading(false);
    };
    fetchMovies();

    return () => {};
  }, [currentPage]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div style={{ height: "100%" }}>
      <ul className={styles.moviesGrid} ref={moviesContainerRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}