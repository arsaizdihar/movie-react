import React, { useEffect, useState } from "react";
import { Movie } from "../ts/type";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d04742a1e9e55575ea0a3bb3c47a88c5"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Most Popular Movie List</h1>
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
