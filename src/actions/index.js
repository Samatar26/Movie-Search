import { FETCH_LATEST_MOVIES, FETCH_SEARCH_MOVIES } from './types';
const ROOT_URL = process.env.ROOT_URL || 'http://localhost:4000';

export function fetchLatestMovies() {
  return function(dispatch) {
    fetch(`${ROOT_URL}/latest`, { method: 'GET' })
      .then(response => response.json())
      .then(data => dispatch({ type: FETCH_LATEST_MOVIES, payload: data }))
      .catch(err => console.log(err));
  };
}

export function fetchSearchMovies(searchTerm) {
  return function(dispatch) {
    fetch(`${ROOT_URL}/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(searchTerm),
    })
      .then(response => response.json())
      .then(data => {
        const movieResults = data.results.filter(movie => movie.poster_path);
        return dispatch({ type: FETCH_SEARCH_MOVIES, payload: movieResults });
      })
      .catch(err => console.log(err));
  };
}
