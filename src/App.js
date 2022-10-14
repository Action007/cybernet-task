import React, { useState } from "react";
import "./App.css";
import GetMoviesComponents from "./components/GetMoviesComponents";
import { getAllMovies } from "./utils/getAllMovies";

const App = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");

  const add = (title, description, image) => {
    const movie = {};
    movie.title = title;
    movie.description = description;
    movie.image = image;

    const movies = getAllMovies();
    movies.push(movie);

    localStorage.setItem("movies-all", JSON.stringify(movies));
  };

  return (
    <div className="App">
      <h1>Reactive Movies!</h1>
      <h1>Add movie!</h1>
      <b>
        TITLE:
        <br />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </b>
      <br />
      <b>
        IMAGE URL:
        <br />
        <input type="text" onChange={(e) => setImage(e.target.value)} />
      </b>
      <br />
      <b>
        COMMENT:
        <br />
        <input type="text" onChange={(e) => setComment(e.target.value)} />
      </b>
      <br />
      <input
        type="button"
        onClick={function (e) {
          add(title, image, comment);
        }}
        value="ADD MOVIE"
      />

      <h1>Watchlist:</h1>
      <GetMoviesComponents />

      <h1>Already watched:</h1>
      <getWatchedMoviesComponents />
    </div>
  );
};

export default App;
