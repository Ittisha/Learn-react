import React, { Component } from 'react';
import FormErrors from './FormErrors';
import './style/CommentsForm.css';

/**
 * Enum for limits values.
 * @readonly
 * @enum {number}
 */
const limits = {
  USER: {
    min: 4,
    max: 16,
  },
  COMMENT: {
    min: 10,
    max: 60,
  },
};

class CommentsForm extends Component {
  static getErrorClass(error) {
    return error.length === 0 ? '' : 'error-field';
  }

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      comment: '',
      formErrors: {
        user: '',
        comment: '',
      },
      userValid: false,
      commentValid: false,
      formValid: false,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    this.setState({
      user: '',
      comment: '',
    });
  }

  onInputChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    }, () => { this.validateField(name, value); });
  }

  validateField(field, value) {
    const validationErrors = this.state.formErrors;
    let { userValid, commentValid } = this.state;
    const shortValue = value.length < limits[field.toUpperCase()].min;
    const longValue = value.length > limits[field.toUpperCase()].max;

    switch (field) {
      case 'user':
        userValid = !shortValue && !longValue;
        validationErrors.user = '';
        if (!userValid) {
          validationErrors.user = shortValue ? `User name should contain at least ${limits.USER.min} characters`
            : `User name should contain not more than ${limits.USER.max} characters`;
        }
        break;

      case 'comment':
        commentValid = !shortValue && !longValue;
        validationErrors.comment = '';
        if (!commentValid) {
          validationErrors.comment = shortValue ? `Comment text should contain at least ${limits.COMMENT.min} characters`
            : `Comment text  should contain not more than ${limits.COMMENT.max} characters`;
        }
        break;

      default:
        break;
    }

    this.setState({
      formErrors: validationErrors,
      userValid,
      commentValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.userValid && this.state.commentValid,
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <FormErrors formErrors={this.state.formErrors} />
        <label htmlFor="userName">Your name:
          <input
            type="text"
            id="userName"
            name="user"
            value={this.state.user}
            onChange={this.onInputChange}
            className={CommentsForm.getErrorClass(this.state.formErrors.user)}
          />
        </label>
        <textarea
          value={this.state.comment}
          name="comment"
          onChange={this.onInputChange}
          className={CommentsForm.getErrorClass(this.state.formErrors.comment)}
        />
        <button type="submit" disabled={!this.state.formValid}>Submit</button>
      </form>
    );
  }
}

export default CommentsForm;
