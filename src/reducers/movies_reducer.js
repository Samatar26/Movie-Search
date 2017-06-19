import {
  FETCH_LATEST_MOVIES,
  FETCH_SEARCH_MOVIES,
} from './../actions/types.js';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LATEST_MOVIES:
      return [...state, ...action.payload.results];
    case FETCH_SEARCH_MOVIES:
      return [...action.payload];
  }
  return state;
}
