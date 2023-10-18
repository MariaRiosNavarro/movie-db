/* eslint-disable react/prop-types */
import "./MovieCard.scss";
import Star from "./Star";

const MovieCard = (props) => {
  let rateValue = Math.round(Number(props.moviesObject.rate));

  return (
    <>
      <article className="movie-card">
        <h3 className="title">{props.moviesObject.title}</h3>
        <span className="year">{props.moviesObject.year}</span>
        <h4 className="direction">{props.moviesObject.direction}</h4>
        <p className="duration">{props.moviesObject.duration}</p>
        <div className="genre-wrapper">
          {props.moviesObject.genre.map((oneGenre, index) => (
            <span className="genre" key={index}>
              {oneGenre}
            </span>
          ))}
        </div>
        <Star rate={rateValue} />
      </article>
    </>
  );
};

export default MovieCard;
