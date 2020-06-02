import {call, put, takeLeading} from 'redux-saga/effects';
import {LoginActions} from '../types/LoginActionsTypes';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ILoginAuthenticate,
  loginSuccess,
  loginErrored,
  ICreateUsers,
  createUserSuccess,
  createUserErrored,
  ILoginAuthenticateWithSocial,
  loginWithSocialNetworksSuccess,
  loginWithSocialNetworksErrored,
} from '../action/LoginActions';

import {
  AUTHENTICATION,
  CREATE_USER,
  AUTHENTICATION_WITH_SOCIAL_NETWORKS,
} from 'api/Authentication';

export function* watchLoginRequest() {
  yield takeLeading(LoginActions.AUTHENTICATION_LOGIN, workerLoginRequest);
  yield takeLeading(LoginActions.CREATE_USER, workerCreateUser);
  yield takeLeading(
    LoginActions.AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS,
    workerLoginWithSocialRequest,
  );
}

function* workerLoginRequest(action: ILoginAuthenticate) {
  try {
    const {payload} = action;
    const {token, user} = yield call(AUTHENTICATION, {
      email: payload.email,
      password: payload.password,
    });
    if (token) {
      yield call(AsyncStorage.setItem, 'tokenAccess', token);
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
    const {token, user} = yield call(CREATE_USER, {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });
    if (token) {
      yield call(AsyncStorage.setItem, 'tokenAccess', token);
      yield put(createUserSuccess({tokenAccess: token, user: user}));
    } else {
      yield put(
        createUserErrored({tokenAccess: 'Deu ruim na criação de usuário'}),
      );
    }
  } catch (err) {
    console.log('erro', err);
  }
}

export function* workerLoginWithSocialRequest(
  action: ILoginAuthenticateWithSocial,
) {
  try {
    const {payload} = action;
    const {token, user} = yield call(AUTHENTICATION_WITH_SOCIAL_NETWORKS, {
      accessToken: payload.tokenAccess,
      provider: payload.provider,
    });
    if (token) {
      yield call(AsyncStorage.setItem, 'tokenAccess', token);
      yield put(
        loginWithSocialNetworksSuccess({tokenAccess: token, user: user}),
      );
    } else {
      yield put(
        loginWithSocialNetworksErrored({
          accessToken: 'Deu ruim na criação de usuário com loginSocial',
        }),
      );
    }
  } catch (err) {
    console.log('erro', err);
  }
}
