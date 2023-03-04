import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const { id, title = "Untitled", poster_path } = movie;
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : "https://via.placeholder.com/300x450?text=No+image";

  return (
    <div className={styles.movieCard}>
      <Link to={`/movies/${id}`}>
        <div className={styles.container}>
          <img
            width={230}
            height={345}
            className={styles.movieImage}
            src={imgUrl}
            alt={title}
          />
          <div>{title}</div>
        </div>
      </Link>
    </div>
  );
}
