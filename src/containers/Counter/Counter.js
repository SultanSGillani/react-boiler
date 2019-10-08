import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import Input from '../../components/Input';
import { actions as counterActions } from './reducers';

const Container = styled.div`
  display: inherit;
`;

const Counter = (props) => {
  const [val, setVal] = useState(0);

  const customValChange = (e) => {
    setVal(+e.target.value);
  };

  const customValReset = () => {
    setVal(0);
  };

  const {
 total, counterIncrease, counterDecrease, counterReset
} = props;

  return (
    <Container>
      <h1>{total}</h1>
      <Button label="Increase" onClick={() => counterIncrease(val)} />
      Increase
      <Button label="Decrease" onClick={() => counterDecrease(val)} />
      Decrease
      <Button label="Reset" onClick={counterReset} />
      <p>Input custom number to increase or decrease the total</p>
      <Input type="number" value={val} onChange={customValChange} min={0} />
      <br />
      <Button label="Reset Custom Value" onClick={customValReset} />
    </Container>
  );
};

Counter.propTypes = {
  total: PropTypes.number.isRequired,
  counterIncrease: PropTypes.func.isRequired,
  counterDecrease: PropTypes.func.isRequired,
  counterReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  total: state.counter.total,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...counterActions,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
