import React from 'react';
import PropTypes from 'prop-types';

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((errorName) => {
      if (formErrors[errorName].length > 0) {
        return (
          <p key={errorName}>{formErrors[errorName]}</p>
        );
      }
      return '';
    })}
  </div>
);

FormErrors.propTypes = {
  formErrors: PropTypes.shape({
    user: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormErrors;
