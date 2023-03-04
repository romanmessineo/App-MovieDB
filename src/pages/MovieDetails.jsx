import { get } from "../utils/httpClient";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";

export function MovieDetails() {
  const { movieId } = useParams();

  const { data: movie, isLoading, isError } = useQuery(
    ["movie", movieId],
    () => get("/movie/" + movieId),
    {
      enabled: !!movieId,
    }
  );

  if (isLoading) {
    return <Spinner/> ; 
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  const company =
    "https://image.tmdb.org/t/p/w500" + movie.production_companies[0].logo_path;

  return (
    <div className="container">
      <div className={styles.detailsContainer}>
        <img
          className={`${styles.col} ${styles.movieImage}`}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={`${styles.col}${styles.movieDetails}`}>
          <p>
            <strong>Title:</strong> {movie.title}
          </p>
          <button onClick={() => window.location.reload(false)}>
            Click to reload!
          </button>
          <p>
            <strong>Description:</strong> {movie.overview}
          </p>
          <p>
            Producida por: <img
              width={128}
              height={32}
              src={company}
              alt=""
              srcset=""
              className="companyImg"
            />
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(" - ")}
          </p>
        </div>
      </div>
    </div>
  );
}
