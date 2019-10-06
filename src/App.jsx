import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './global-styles';
import Counter from './containers/Counter/Loadable';
import About from './containers/About/Loadable';

import store from './store';
import styled from 'styled-components';

const Layout = styled.div`
  display: inherit;
  text-align: center;
`;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
    <GlobalStyle />
  </Provider>
);

export default App;
