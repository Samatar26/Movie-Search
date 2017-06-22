import React, { Component } from 'react';
import * as actions from './../actions/index';
import { connect } from 'react-redux';
import { MoviesList } from './../styles/movie';
import Movie from './../components/Movie';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchLatestMovies();
  }
  render() {
    console.log(this.props.movies);
    return (
      <MoviesList>
        {this.props.movies.map(movie =>
          <Movie
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            overview={movie.overview}
          />
        )}
      </MoviesList>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default connect(mapStateToProps, actions)(Movies);
