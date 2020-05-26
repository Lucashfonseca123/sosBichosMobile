import {ILoginTypes, LoginActions} from '../types/LoginActionsTypes';
import {
  IAuthentication,
  IAuthenticationSuccess,
} from '../types/LoginPayloadTypes';

export interface ILoginBaseAction {
  type: ILoginTypes;
  payload: IAuthentication | IAuthenticationSuccess;
}

export interface ILoginAuthenticate extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IAuthentication;
}

export interface ILoginAuthenticateSuccess extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IAuthenticationSuccess;
}

export function login(payload: IAuthentication): ILoginAuthenticate {
  return {
    type: LoginActions.AUTHENTICATION_LOGIN,
    payload,
  };
}

export function loginSuccess(
  payload: IAuthenticationSuccess,
): ILoginAuthenticateSuccess {
  return {
    type: LoginActions.AUTHENTICATION_LOGIN_SUCCESS,
    payload,
  };
}

export function loginErrored(
  payload: IAuthenticationSuccess,
): ILoginAuthenticateSuccess {
  return {
    type: LoginActions.AUTHENTICATION_LOGIN_ERRORED,
    payload,
  };
}
