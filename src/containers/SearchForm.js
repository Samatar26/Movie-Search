import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from './../styles/header';
import { reduxForm } from 'redux-form';

class SearchForm extends Component {
  renderField = field => {
    return <input type="text" {...field.input} />;
  };
  render() {
    return (
      <div><SearchBar name="searchTerm" component={this.renderField} /></div>
    );
  }
}

export default reduxForm({
  form: 'SearchForm',
})(SearchForm);
