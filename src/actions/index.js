import { FETCH_LATEST_MOVIES } from './types';
const ROOT_URL = 'http://localhost:4000';

export function fetchLatestMovies() {
  return function(dispatch) {
    fetch(`${ROOT_URL}/latest`, { method: 'GET' })
      .then(response => response.json())
      .then(data => dispatch({ type: FETCH_LATEST_MOVIES, payload: data }))
      .catch(err => console.log(err));
  };
}
