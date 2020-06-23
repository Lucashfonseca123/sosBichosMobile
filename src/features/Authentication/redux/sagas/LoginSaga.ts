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
  getCepSuccess,
  getCepErrored,
  ILoginAuthenticateWithSocial,
  loginWithSocialNetworksSuccess,
  loginWithSocialNetworksErrored,
  ISetProfileEditAction,
  setProfileEditUserSuccess,
  setProfileEditUserErrored,
  IGetCepAction,
  setRefreshTokenSuccess,
  setRefreshTokenErrored,
  ISetRefreshTokenAction,
} from '../action/LoginActions';

import {GET_CEP} from 'api/Location';

import {
  AUTHENTICATION,
  CREATE_USER,
  EDIT_USER,
  AUTHENTICATION_WITH_SOCIAL_NETWORKS,
  REFRESH_TOKEN,
} from 'api/Authentication';

export function* watchLoginRequest() {
  yield takeLeading(LoginActions.AUTHENTICATION_LOGIN, workerLoginRequest);
  yield takeLeading(LoginActions.CREATE_USER, workerCreateUser);
  yield takeLeading(
    LoginActions.AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS,
    workerLoginWithSocialRequest,
  );
  yield takeLeading(LoginActions.GET_CEP, workerGetCepRequest);
  yield takeLeading(LoginActions.SET_EDIT_USER, workerEditUser);
  yield takeLeading(LoginActions.SET_REFRESH_TOKEN, workerSetRefreshToken);
}

function* workerLoginRequest(action: ILoginAuthenticate) {
  try {
    const {payload} = action;
    const {token, user} = yield call(AUTHENTICATION, {
      email: payload.email,
      password: payload.password,
    });
    if (token) {
      yield call(AsyncStorage.setItem, 'tokenAccess', token.token);
      yield call(AsyncStorage.setItem, 'refreshToken', token.refreshToken);
      yield put(
        loginSuccess({
          tokenAccess: token.token,
          user: user,
          refreshToken: token.refreshToken,
        }),
      );
    } else {
      console.log('Deu ruim');
      yield put(
        loginErrored({
          tokenAccess: 'Deu ruim',
          user: {user: 'desconhecido'},
          refreshToken: 'Não encontrado',
        }),
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
      password_confirmation: payload.password_confirmation,
    });
    if (token.token) {
      yield call(AsyncStorage.setItem, 'tokenAccess', token.token);
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

export function* workerEditUser(action: ISetProfileEditAction) {
  try {
    const {payload} = action;
    const response = yield call(EDIT_USER, payload);
    if (response.name) {
      yield put(
        setProfileEditUserSuccess({
          user: response,
          isLoading: true,
          message: '',
        }),
      );
    } else {
      if (response.message === 'This E-mail already exist') {
        yield put(
          setProfileEditUserErrored({
            message: 'E-mail selecionado ja está cadastrado, tente outro.',
          }),
        );
      } else {
        yield put(
          setProfileEditUserErrored({
            message: 'Erro desconhecido.',
          }),
        );
      }
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
    const response = yield call(AUTHENTICATION_WITH_SOCIAL_NETWORKS, {
      accessToken: payload.tokenAccess,
      provider: payload.provider,
    });
    if (response.token.token) {
      yield call(AsyncStorage.setItem, 'tokenAccess', response.token.token);
      yield call(
        AsyncStorage.setItem,
        'refreshToken',
        response.token.refreshToken,
      );
      yield put(
        loginWithSocialNetworksSuccess({
          refreshToken: response.token.refreshToken,
          tokenAccess: response.token.token,
          user: response.user,
        }),
      );
    } else {
      yield put(
        loginWithSocialNetworksErrored({
          message: 'Error login with gmail',
        }),
      );
    }
  } catch (err) {
    console.log('erro', err);
  }
}

function* workerGetCepRequest(action: IGetCepAction) {
  try {
    const {payload} = action;
    const response = yield call(GET_CEP, {
      cep: payload.cep,
    });
    if (response) {
      yield put(getCepSuccess({address: response}));
    } else {
      console.log('Deu ruim');
      yield put(getCepErrored());
    }
  } catch (err) {
    console.log('error', err);
  }
}

function* workerSetRefreshToken() {
  try {
    const {token} = yield call(REFRESH_TOKEN);
    if (token.token) {
      yield put(
        setRefreshTokenSuccess({
          tokenAccess: token.token,
          refreshToken: token.refreshToken,
        }),
      );
    } else {
      yield put(setRefreshTokenErrored({message: 'Erro'}));
    }
  } catch (err) {
    console.log('error', err);
  }
}
