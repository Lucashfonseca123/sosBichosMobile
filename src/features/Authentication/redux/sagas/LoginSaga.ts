import {call, put, takeLeading} from 'redux-saga/effects';
import {LoginActions} from '../types/LoginActionsTypes';
import {
  ILoginAuthenticate,
  loginSuccess,
  loginErrored,
  ICreateUsers,
  createUserSuccess,
  createUserErrored,
} from '../action/LoginActions';

import {AUTHENTICATION, CREATE_USER} from 'api/Authentication';

export function* watchLoginRequest() {
  yield takeLeading(LoginActions.AUTHENTICATION_LOGIN, workerLoginRequest);
  yield takeLeading(LoginActions.CREATE_USER, workerCreateUser);
}

function* workerLoginRequest(action: ILoginAuthenticate) {
  try {
    const {payload} = action;
    const {token, user} = yield call(AUTHENTICATION, {
      email: payload.email,
      password: payload.password,
    });
    if (token) {
      yield put(loginSuccess({tokenAccess: token, user: user}));
    } else {
      console.log('Deu ruim');
      yield put(
        loginErrored({tokenAccess: 'Deu ruim', user: {user: 'desconhecido'}}),
      );
    }
  } catch (err) {
    console.log('error', err);
  }
}

export function* workerCreateUser(action: ICreateUsers) {
  try {
    const {payload} = action;
    const {token} = yield call(CREATE_USER, {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });
    if (token) {
      yield put(createUserSuccess({tokenAccess: token}));
    } else {
      yield put(
        createUserErrored({tokenAccess: 'Deu ruim na criação de usuário'}),
      );
    }
  } catch (err) {
    console.log('erro', err);
  }
}
