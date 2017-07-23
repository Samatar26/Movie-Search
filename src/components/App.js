import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import SearchForm from './../containers/SearchForm';
import Movies from './../containers/Movies.js';
import reducers from '../reducers';
import '../styles/reset';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);



class App extends Component {
  render() {
    return (
     <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <SearchForm />
        <Movies />
      </div>
    </Provider>
    );
  }
}

export default App;
