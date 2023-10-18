import MovieCard from "./MovieCard";
import movies from "../db/movies";
import "./MovieList.scss";

// Props Version

const MovieList = () => {
  return (
    <>
      <article className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard moviesObject={movie} key={index} />
        ))}
      </article>
    </>
  );
};

export default MovieList;
