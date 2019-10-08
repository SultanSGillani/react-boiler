import { all } from 'redux-saga/effects';

import index from './containers/Counter/sagas';

export default function* mySaga() {
  yield all([...index]);
}
