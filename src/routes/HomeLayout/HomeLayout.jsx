import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Navbar } from '../../components';

const Layout = styled.div`
  display: inherit;
  text-align: center;
`;

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Navbar />
      {children}
    </Layout>
  );
};

HomeLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default HomeLayout;
