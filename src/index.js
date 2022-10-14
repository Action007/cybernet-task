import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render() {
	ReactDOM.render(<App movies={getAllMovies()} watched={getWatchedMovies()} />, document.getElementById('root'))
}

render();
