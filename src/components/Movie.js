import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        Movie
      </div>
    );
  }
}

export default Movie;
