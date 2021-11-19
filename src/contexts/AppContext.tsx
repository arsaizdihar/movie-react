import { createContext, useEffect, useRef, useState } from "react";
import { Movie } from "../ts/type";

interface Context {
  movie: Movie | null;
  setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export const AppContext = createContext({} as Context);
const AppProviter: React.FC = ({ children }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d04742a1e9e55575ea0a3bb3c47a88c5"
    )
      .then((res) => res.json())
      .then((data) => {
        const wishlist: number[] = JSON.parse(
          localStorage.getItem("wishlist") || "[]"
        );
        setMovies(
          data.results.map((m: any) => ({
            ...m,
            wishlist: wishlist.includes(m.id),
          }))
        );
      });
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("overlay-active", movie !== null);
  }, [movie]);

  const handleClose: React.MouseEventHandler = (e) => {
    const X = e.clientX;
    const Y = e.clientY;
    const container = containerRef.current;
    if (container) {
      const { left, top, right, bottom } = container.getBoundingClientRect();
      if (left <= X && right >= X && top <= Y && bottom >= Y) {
        return;
      }
      setMovie(null);
    }
  };

  const toggleWishlist = () => {
    if (movie) {
      const toggleTo = !movie.wishlist;
      setMovie({ ...movie, wishlist: toggleTo });
      setMovies(
        movies.map((m) =>
          m.id === movie.id ? { ...m, wishlist: toggleTo } : m
        )
      );
      const wishlist: number[] = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );
      if (toggleTo) {
        wishlist.push(movie.id);
      } else {
        wishlist.splice(wishlist.indexOf(movie.id), 1);
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  return (
    <AppContext.Provider value={{ movie, setMovie, movies, setMovies }}>
      {children}
      {movie && (
        <div className="overlay" onClick={handleClose}>
          <div className="movie-detail-container">
            <div className="movie-detail" ref={containerRef}>
              <button
                className={`love-icon ${
                  movie.wishlist ? "love-icon-check" : ""
                }`}
                onClick={toggleWishlist}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <h2 className="detail-title">{movie.title}</h2>
              <h4 className="rating">{movie.vote_average}</h4>
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                alt={movie.title}
                className="poster"
              />
              <p className="detail-description">{movie.overview}</p>
              <button className="detail-close" onClick={() => setMovie(null)}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
};

export default AppProviter;
