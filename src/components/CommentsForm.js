import React, { Component } from 'react';
import FormErrors from './FormErrors';
import './style/CommentsForm.css';
import { isFieldValid } from '../utils/validate-utils';

class CommentsForm extends Component {
  static getErrorClass(error) {
    return error.length === 0 ? '' : 'error-field';
  }

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      comment: '',
      touched: {
        user: false,
        comment: false,
      },
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    this.setState({
      user: '',
      comment: '',
      touched: {
        user: false,
        comment: false,
      },
    });
  }

  onInputChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  onInputBlur(evt) {
    const { name } = evt.target;
    this.setState({
      touched: {
        ...this.state.touched,
        [name]: true,
      },
    });
  }

  getErrorClass(field) {
    let errorClass = '';
    if (this.state.touched[field]) {
      errorClass = !isFieldValid(field, this.state[field]) ? 'error-field' : '';
    }
    return errorClass;
  }

  validateForm() {
    return isFieldValid('user', this.state.user) && isFieldValid('comment', this.state.comment);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <FormErrors formData={this.state} />
        <label htmlFor="userName">Your name:
          <input
            type="text"
            id="userName"
            name="user"
            value={this.state.user}
            onChange={this.onInputChange}
            onBlur={this.onInputBlur}
            className={this.getErrorClass('user')}
          />
        </label>
        <textarea
          value={this.state.comment}
          name="comment"
          onChange={this.onInputChange}
          onBlur={this.onInputBlur}
          className={this.getErrorClass('comment')}
        />
        <button type="submit" disabled={!this.validateForm()}>Submit</button>
      </form>
    );
  }
}

export default CommentsForm;
