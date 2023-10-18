import MovieCard from "./MovieCard";
import movies from "../db/movies";

// Props Version

const MovieList = () => {
  return (
    <>
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard moviesObject={movie} key={index} />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
