import { FETCH_LATEST_MOVIES } from './../actions/types.js';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LATEST_MOVIES:
      return [...state, ...action.payload.results];
  }
  return state;
}
