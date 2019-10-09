import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import Navbar from './components/Navbar';
import GlobalStyle from './global-styles';
import Counter from './containers/Counter/Loadable';
import About from './containers/About/Loadable';
import history from './utils/history';

import configureStore from './store';

const store = configureStore();

const Layout = styled.div`
  display: inherit;
  text-align: center;
`;

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Navbar />
        <Route exact path="/" component={Counter} />
        <Route exact path="/about" component={About} />
      </Layout>
    </ConnectedRouter>
    <GlobalStyle />
  </Provider>
);

export default App;
