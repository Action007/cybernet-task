export const getWatchedMovies = () => {
  const movies = localStorage.getItem("movies-watched");

  if (!movies) {
    return [];
  } else {
    return JSON.parse(movies);
  }
};
