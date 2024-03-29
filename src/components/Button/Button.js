import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = styled.button`

  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const ButtonComponent = (props) => {
    const { onClick, label } = props;
    return (
      <Button onClick={onClick}>
        {label}
      </Button>
    );
  };

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
