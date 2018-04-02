import React from 'react';
import PropTypes from 'prop-types';
import { isFieldValid, getErrorMessage } from '../utils/validate-utils';

const FormErrors = ({ formData }) => {
  const { user, comment, touched } = formData;
  const formFields = { user, comment };

  return (
    <div className="formErrors">
      {Object.keys(formFields).map((fieldName) => {
        if (!isFieldValid(fieldName, formFields[fieldName]) && touched[fieldName]) {
          return (
            <p key={fieldName}>{getErrorMessage(fieldName, formFields[fieldName])}</p>
          );
        }
        return '';
      })}
    </div>);
};

FormErrors.propTypes = {
  formData: PropTypes.shape({
    user: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    touched: PropTypes.object.isRequired,
  }).isRequired,
};

export default FormErrors;
