import {fork, all} from 'redux-saga/effects';
import authenticationSaga from 'features/Authentication/redux/sagas';

export default function* rootSaga() {
  yield all([fork(authenticationSaga)]);
}
