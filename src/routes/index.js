import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeLayout from './HomeLayout/HomeLayout';
import loadableCons from './loadableCons';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <AppRoute exact path="/" layout={HomeLayout} component={loadableCons.Counter} />
      <AppRoute exact path="/about" layout={HomeLayout} component={loadableCons.About} />
    </Switch>
  </BrowserRouter>
);

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};

export default Routes;
