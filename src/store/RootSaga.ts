import {fork, all} from 'redux-saga/effects';
import authenticationSaga from 'features/Authentication/redux/sagas';
import feedSaga from 'features/Feed/redux/sagas';

export default function* rootSaga() {
  yield all([fork(authenticationSaga), fork(feedSaga)]);
}
