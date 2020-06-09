import {fork} from 'redux-saga/effects';
import {watchLoginRequest} from './LoginSaga';

export default function* authenticationSaga() {
  yield fork(watchLoginRequest);
}
