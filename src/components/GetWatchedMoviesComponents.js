import React from "react";
import { getAllMovies } from "../utils/getAllMovies";
import { removeWatchedMovie } from "./../utils/removeWatchedMovie";

const GetWatchedMoviesComponents = () => {
  const movies = getAllMovies();
  const components = [];

  movies.forEach(function (movie) {
    components.push(
      movie && (
        <div className="watched">
          <div>
            <img src={movie.image} height="100px" />
          </div>
          <span>
            <a
              className="movie-watched"
              href="#"
              onClick={() => removeWatchedMovie(movie.title)}
            >
              {movie.title}
            </a>
          </span>
          <br />
          <span>{movie.comment}</span>
          <br />
          <br />
        </div>
      )
    );
  });

  return components;
};

export default GetWatchedMoviesComponents;
