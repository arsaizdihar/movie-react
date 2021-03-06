import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import MovieCard from "./MovieCard";

const Home = () => {
  const { movies } = useContext(AppContext);

  return (
    <>
      <div className="container">
        <h1 className="title">Most Popular Movie List</h1>
        <div className="wishlist">
          <Link to="/movie-react/wishlist">Wishlist</Link>
        </div>
        <div id="movies">
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
