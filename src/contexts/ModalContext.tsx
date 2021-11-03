import { createContext, useEffect, useRef, useState } from "react";
import { Movie } from "../ts/type";

interface Context {
  movie: Movie | null;
  setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
}

export const ModalContext = createContext({} as Context);
const ModalProvider: React.FC = ({ children }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

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

  return (
    <ModalContext.Provider value={{ movie, setMovie }}>
      {children}
      {movie && (
        <div className="overlay" onClick={handleClose}>
          <div className="movie-detail-container">
            <div className="movie-detail" ref={containerRef}>
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
    </ModalContext.Provider>
  );
};

export default ModalProvider;
