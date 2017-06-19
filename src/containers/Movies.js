import React, { Component } from 'react';
import * as actions from './../actions/index';
import { connect } from 'react-redux';

class Movies extends Component {
  componentWillMount() {
    this.props.fetchLatestMovies();
  }
  render() {
    this.props.movies.forEach(movie => {
      console.log(movie.title);
    });
    return (
      <div>
        Movies
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default connect(mapStateToProps, actions)(Movies);
