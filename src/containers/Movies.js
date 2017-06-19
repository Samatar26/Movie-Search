import React, { Component } from 'react';
import * as actions from './../actions/index';
import { connect } from 'react-redux';

class Movies extends Component {
  componentWillMount() {
    this.props.fetchLatestMovies();
  }
  render() {
    console.log(this.props);
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
