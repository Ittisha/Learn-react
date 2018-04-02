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

const isShortValue = (field, value) => value.length < limits[field.toUpperCase()].min;

const isLongValue = (field, value) => value.length > limits[field.toUpperCase()].max;

const isFieldValid = (field, value) => !isLongValue(field, value) && !isShortValue(field, value);

const getErrorMessage = (field, value) => {
  const shortValue = isShortValue(field, value);

  return shortValue ? `${field} field should contain at least ${limits[field.toUpperCase()].min} characters`
    : `${field} field should contain not more than ${limits[field.toUpperCase()].max} characters`;
};

export {
  isFieldValid,
  getErrorMessage,
};
