import {ILoginTypes, LoginActions} from '../types/LoginActionsTypes';
import {
  IAuthentication,
  IAuthenticationSuccess,
  ICreateUser,
  ICreateUserSuccess,
} from '../types/LoginPayloadTypes';

export interface ILoginBaseAction {
  type: ILoginTypes;
  payload?:
    | IAuthentication
    | IAuthenticationSuccess
    | ICreateUser
    | ICreateUserSuccess;
}

export interface ILoginAuthenticate extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IAuthentication;
}

export interface ILoginAuthenticateSuccess extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IAuthenticationSuccess;
}

export interface ICreateUsers extends ILoginBaseAction {
  type: ILoginTypes;
  payload: ICreateUser;
}
export interface ICreateUsersSuccessOrErrored extends ILoginBaseAction {
  type: ILoginTypes;
  payload: ICreateUserSuccess;
}

export interface IInitialMatchToken extends ILoginBaseAction {
  type: ILoginTypes;
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

export function createUser(payload: ICreateUser): ICreateUsers {
  return {
    type: LoginActions.CREATE_USER,
    payload,
  };
}

export function createUserSuccess(
  payload: ICreateUserSuccess,
): ICreateUsersSuccessOrErrored {
  return {
    type: LoginActions.CREATE_USER_SUCCESS,
    payload,
  };
}

export function createUserErrored(
  payload: ICreateUserSuccess,
): ICreateUsersSuccessOrErrored {
  return {
    type: LoginActions.CREATE_USER_ERRORED,
    payload,
  };
}

export function initialTokenMatch(): IInitialMatchToken {
  return {
    type: LoginActions.INITIAL_MATCH_TOKEN,
  };
}
