import {call, put, takeLeading} from 'redux-saga/effects';
import {LoginActions} from '../types/LoginActionsTypes';
import {
  ILoginAuthenticate,
  loginSuccess,
  loginErrored,
} from '../action/LoginActions';

import {AUTHENTICATION} from 'api/Authentication';

export function* watchLoginRequest() {
  yield takeLeading(LoginActions.AUTHENTICATION_LOGIN, workerLoginRequest);
}

function* workerLoginRequest(action: ILoginAuthenticate) {
  try {
    const {payload} = action;
    const {token} = yield call(AUTHENTICATION, {
      username: payload.username,
      password: payload.password,
    });
    if (token) {
      yield put(loginSuccess({tokenAccess: token}));
    } else {
      console.log('Deu ruim');
      yield put(loginErrored({tokenAccess: 'Deu ruim'}));
    }
  } catch (err) {
    console.log('error', err);
  }
}
