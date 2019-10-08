import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
 type, value, onChange, min
} = props;
  return <input type={type} value={value} onChange={onChange} min={min} />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
