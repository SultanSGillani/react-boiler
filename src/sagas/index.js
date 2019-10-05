import { all } from 'redux-saga/effects';

import index from './counter';

export default function* mySaga() {
  yield all([...index]);
}
