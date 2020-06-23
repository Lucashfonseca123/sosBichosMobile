import {ILoginTypes, LoginActions} from '../types/LoginActionsTypes';
import {
  IAuthentication,
  IAuthenticationSuccess,
  ICreateUser,
  ICreateUserSuccess,
  ILoginWithSocialNetworks,
  ILoginWithSocialNetworksSuccess,
  IGetCep,
  IGetCepSuccess,
  IProfileEditUser,
  IProfileEditUserSuccess,
  IProfileEditUserErrored,
  IConnected,
  ISetRefreshTokenErrored,
  ISetRefreshTokenSuccess,
  ILoginWithSocialNetworksErrored,
} from '../types/LoginPayloadTypes';

export interface ILoginBaseAction {
  type: ILoginTypes;
  payload?:
    | IAuthentication
    | IAuthenticationSuccess
    | ICreateUser
    | ICreateUserSuccess
    | IGetCep
    | IGetCepSuccess
    | IProfileEditUser
    | IProfileEditUserSuccess
    | IConnected
    | ISetRefreshTokenErrored
    | ISetRefreshTokenSuccess
    | ILoginWithSocialNetworks
    | IProfileEditUserErrored
    | ILoginWithSocialNetworksErrored
    | ILoginWithSocialNetworksSuccess;
}

export interface ILoginAuthenticate extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IAuthentication;
}

export interface ILoginAuthenticateSuccess extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IAuthenticationSuccess;
}

export interface ILoginAuthenticateWithSocial extends ILoginBaseAction {
  type: ILoginTypes;
  payload: ILoginWithSocialNetworks;
}
export interface ILoginAuthenticateWIthSocialSuccess extends ILoginBaseAction {
  type: ILoginTypes;
  payload: ILoginWithSocialNetworksSuccess;
}
export interface ILoginAuthenticateWIthSocialErroredAction
  extends ILoginBaseAction {
  type: ILoginTypes;
  payload: ILoginWithSocialNetworksErrored;
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

export interface IGetCepAction extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IGetCep;
}
export interface IGetCepSuccessAction extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IGetCepSuccess;
}
export interface IGetCepErroredAction extends ILoginBaseAction {
  type: ILoginTypes;
}
export interface ISetProfileEditAction extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IProfileEditUser;
}
export interface ISetProfileEditSuccessAction extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IProfileEditUserSuccess;
}
export interface ISetProfileEditErroredAction extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IProfileEditUserErrored;
}
export interface ISetIsConnectedAction extends ILoginBaseAction {
  type: ILoginTypes;
  payload: IConnected;
}
export interface ISetInitialLoadingAction extends ILoginBaseAction {
  type: ILoginTypes;
}
export interface ISetInitialMessageAction extends ILoginBaseAction {
  type: ILoginTypes;
}
export interface ISetUserCompleteAction extends ILoginBaseAction {
  type: ILoginTypes;
}
export interface ISetInititalStateAction extends ILoginBaseAction {
  type: ILoginTypes;
}

export interface ISetRefreshTokenAction extends ILoginBaseAction {
  type: ILoginTypes;
}

export interface ISetRefreshTokenSuccessAction extends ILoginBaseAction {
  type: ILoginTypes;
  payload: ISetRefreshTokenSuccess;
}

export interface ISetRefreshTokenErrroredAction extends ILoginBaseAction {
  type: ILoginTypes;
  payload: ISetRefreshTokenErrored;
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

export function loginWithSocialNetworks(
  payload: ILoginWithSocialNetworks,
): ILoginAuthenticateWithSocial {
  return {
    type: LoginActions.AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS,
    payload,
  };
}

export function loginWithSocialNetworksSuccess(
  payload: ILoginWithSocialNetworksSuccess,
): ILoginAuthenticateWIthSocialSuccess {
  return {
    type: LoginActions.AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_SUCCESS,
    payload,
  };
}

export function loginWithSocialNetworksErrored(
  payload: ILoginWithSocialNetworksErrored,
): ILoginAuthenticateWIthSocialErroredAction {
  return {
    type: LoginActions.AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_ERRORED,
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

export function getCep(payload: IGetCep): IGetCepAction {
  return {
    type: LoginActions.GET_CEP,
    payload,
  };
}

export function getCepSuccess(payload: IGetCepSuccess): IGetCepSuccessAction {
  return {
    type: LoginActions.GET_CEP_SUCCESS,
    payload,
  };
}

export function getCepErrored(): IGetCepErroredAction {
  return {
    type: LoginActions.GET_CEP_ERRORED,
  };
}

export function setProfileEditUser(
  payload: IProfileEditUser,
): ISetProfileEditAction {
  return {
    type: LoginActions.SET_EDIT_USER,
    payload,
  };
}

export function setProfileEditUserSuccess(
  payload: IProfileEditUserSuccess,
): ISetProfileEditSuccessAction {
  return {
    type: LoginActions.SET_EDIT_USER_SUCCESS,
    payload,
  };
}

export function setProfileEditUserErrored(
  payload: IProfileEditUserErrored,
): ISetProfileEditErroredAction {
  return {
    type: LoginActions.SET_EDIT_USER_ERRORED,
    payload,
  };
}

export function isConnected(payload: IConnected): ISetIsConnectedAction {
  return {
    type: LoginActions.SET_IS_CONNECTED,
    payload,
  };
}

export function setInitialLoading(): ISetInitialLoadingAction {
  return {
    type: LoginActions.SET_INITIAL_LOADING,
  };
}

export function setInitialMessage(): ISetInitialMessageAction {
  return {
    type: LoginActions.SET_INITIAL_MESSAGE,
  };
}

export function setUserComplete(): ISetUserCompleteAction {
  return {
    type: LoginActions.SET_USER_COMPLETE,
  };
}

export function setInitialAuth(): ISetInititalStateAction {
  return {
    type: LoginActions.SET_INITIAL_STATE,
  };
}

export function setRefreshToken(): ISetRefreshTokenAction {
  return {
    type: LoginActions.SET_REFRESH_TOKEN,
  };
}

export function setRefreshTokenSuccess(
  payload: ISetRefreshTokenSuccess,
): ISetRefreshTokenSuccessAction {
  return {
    type: LoginActions.SET_REFRESH_TOKEN_SUCCESS,
    payload,
  };
}

export function setRefreshTokenErrored(
  payload: ISetRefreshTokenErrored,
): ISetRefreshTokenErrroredAction {
  return {
    type: LoginActions.SET_REFRESH_TOKEN_ERRORED,
    payload,
  };
}
