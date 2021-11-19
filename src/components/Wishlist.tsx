import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import MovieCard from "./MovieCard";

const Wishlist = () => {
  const { movies } = useContext(AppContext);
  return (
    <>
      <div className="container">
        <h1 className="title">Wishlist</h1>
        <div className="wishlist">
          <Link to="/movie-react">back</Link>
        </div>
        <div id="movies">
          {movies.map(
            (movie) => movie.wishlist && <MovieCard {...movie} key={movie.id} />
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
