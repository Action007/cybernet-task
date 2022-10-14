export const addWatchedMovie = (title, description, image) => {
  const movie = {};
  movie.title = title;
  movie.description = description;
  movie.image = image;

  const movies = getWatchedMovies();
  movies.push(movie);

  localStorage.setItem("movies-watched", JSON.stringify(movies));
};
