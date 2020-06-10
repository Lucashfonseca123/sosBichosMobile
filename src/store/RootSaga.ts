import {fork, all} from 'redux-saga/effects';
import authenticationSaga from 'features/Authentication/redux/sagas';
import feedSaga from 'features/Feed/redux/sagas';
import favoritesSaga from 'features/Favorites/redux/sagas';
import profileSaga from 'features/Profile/redux/sagas';

export default function* rootSaga() {
  yield all([
    fork(authenticationSaga),
    fork(feedSaga),
    fork(favoritesSaga),
    fork(profileSaga),
  ]);
}
