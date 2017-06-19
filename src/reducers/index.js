import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import moviesReducer from './movies_reducer';
const rootReducer = combineReducers({
  movies: moviesReducer,
  form,
});

export default rootReducer;
