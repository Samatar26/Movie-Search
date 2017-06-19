import React, { Component } from 'react';
import {
  MovieContainer,
  MovieTitle,
  MoviePoster,
  MovieOverview,
} from './../styles/movie';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MovieContainer>
        <MovieTitle>{this.props.title}</MovieTitle>
        <MoviePoster
          src={`http://image.tmdb.org/t/p/w500${this.props.poster}`}
        />
        <MovieOverview>{this.props.overview}</MovieOverview>
      </MovieContainer>
    );
  }
}

export default Movie;
