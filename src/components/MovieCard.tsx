import React, { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { Movie } from "../ts/type";

const MovieCard: React.FC<Movie> = (props) => {
  const { setMovie } = useContext(ModalContext);
  return (
    <div className="card-container">
      <div className="glow"></div>
      <button className="card" onClick={() => setMovie(props)}>
        <h3 className="movie-title">{props.title}</h3>
        <h4 className="rating">{props.vote_average}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w400${props.backdrop_path}`}
          alt={props.title}
          className="poster"
          loading="lazy"
        />
      </button>
    </div>
  );
};

export default MovieCard;
