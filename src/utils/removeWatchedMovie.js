import { getWatchedMovies } from "./getWatchedMovies";
export const removeWatchedMovie = (title) => {
  const movies = getWatchedMovies();

  for (let i = 0; i < movies.length; i++) {
    if (!movies[i]) continue;
    if (movies[i].title === title) {
      movies[i] = null;
    }
  }

  localStorage.setItem("movies-watched", JSON.stringify(movies));
}
