import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './containers/Counter/reducers';

// eslint-disable-next-line import/prefer-default-export
export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    counter,
  });
