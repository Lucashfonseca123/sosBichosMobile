import {fork} from 'redux-saga/effects';
import {watchCepRequest} from './ProfileSaga';

export default function* authenticationSaga() {
  yield fork(watchCepRequest);
}
