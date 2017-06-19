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
          src={`http://image.tmdb.org/t/p/w342${this.props.poster}`}
        />
        <MovieOverview>
          {this.props.overview.replace(/^(.{100}[^\s]*).*/, '$1')}...
        </MovieOverview>
      </MovieContainer>
    );
  }
}

export default Movie;
