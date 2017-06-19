import React, { Component } from 'react';
import SearchForm from './../containers/SearchForm';
import Movies from './../containers/Movies.js';
class App extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <Movies />
      </div>
    );
  }
}

export default App;
