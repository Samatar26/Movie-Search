import React, { Component } from 'react';
import * as actions from './../actions/index';
import { connect } from 'react-redux';
import Movie from './../components/Movie';

class Movies extends Component {
  componentWillMount() {
    this.props.fetchLatestMovies();
  }
  render() {
    return (
      <div>
        {this.props.movies.map(movie =>
          <Movie
            title={movie.title}
            poster={movie.poster_path}
            overview={movie.overview}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default connect(mapStateToProps, actions)(Movies);
