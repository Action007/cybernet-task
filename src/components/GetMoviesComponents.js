import React from "react";
import { addWatchedMovie } from "../utils/addWatchedMovie";
import { getWatchedMovies } from "../utils/getWatchedMovies";

const GetMoviesComponents = () => {
  const movies = getWatchedMovies();
  const components = [];

  const onAddWatchedMovieHandler = (title, comment, image) => {
    return () => {
      addWatchedMovie(title, comment, image);
    };
  };

  movies.forEach((movie) => {
    components.push(
      <div className="all">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a
            className="movie-watched"
            href="#"
            onClick={onAddWatchedMovieHandler(
              movie.title,
              movie.comment,
              movie.image
            )}
          >
            {movie.title}
          </a>
        </span>
        <br />
        <span>{movie.comment}</span>
        <br />
        <br />
      </div>
    );
  });

  return components;
};

export default GetMoviesComponents;
