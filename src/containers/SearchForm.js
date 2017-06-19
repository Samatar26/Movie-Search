import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from './../styles/header';
import * as actions from './../actions/index';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {
  renderField = field => {
    return <SearchBar type="text" {...field.input} />;
  };

  getMovies = searchTerm => {
    this.props.fetchSearchMovies(searchTerm);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.getMovies)}>
        <Field name="searchTerm" component={this.renderField} />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default reduxForm({
  form: 'SearchForm',
})(connect(mapStateToProps, actions)(SearchForm));
