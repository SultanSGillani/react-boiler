import { combineReducers } from 'redux';

import counter from './containers/Counter/reducers';

export default combineReducers({
  counter,
});
