import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from './../styles/header';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {
  renderField = field => {
    return <SearchBar type="text" {...field.input} />;
  };

  getMovies = ({ searchTerm }) => {
    console.log(searchTerm);
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

export default reduxForm({
  form: 'SearchForm',
})(SearchForm);
