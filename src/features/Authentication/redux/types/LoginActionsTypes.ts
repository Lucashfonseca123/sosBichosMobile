type EnumLiteralsOf<T extends object> = T[keyof T];

export type ILoginTypes = EnumLiteralsOf<typeof LoginActions>;

export const LoginActions = Object.freeze({
  AUTHENTICATION_LOGIN: '@auth/AUTHENTICATION_LOGIN' as '@auth/AUTHENTICATION_LOGIN',
  AUTHENTICATION_LOGIN_SUCCESS: '@auth/AUTHENTICATION_LOGIN_SUCCESS' as '@auth/AUTHENTICATION_LOGIN_SUCCESS',
  AUTHENTICATION_LOGIN_ERRORED: '@auth/AUTHENTICATION_LOGIN_ERRORED' as '@auth/AUTHENTICATION_LOGIN_ERRORED',
  AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS: '@auth/AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS' as '@auth/AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS',
  AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_SUCCESS: '@auth/AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_SUCCESS' as '@auth/AAUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_SUCCESS',
  AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_ERRORED: '@auth/AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_ERRORED' as '@auth/AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_ERRORED',
  CREATE_USER: '@auth/CREATE_USER' as '@auth/CREATE_USER',
  CREATE_USER_SUCCESS: '@auth/CREATE_USER_SUCCESS' as '@auth/CREATE_USER_SUCCESS',
  CREATE_USER_ERRORED: '@auth/CREATE_USER_ERRORED' as '@auth/CREATE_USER_ERRORED',
  INITIAL_MATCH_TOKEN: '@auth/INITIAL_MATCH_TOKEN' as '@auth/INITIAL_MATCH_TOKEN',
  GET_CEP: '@auth/GET_CEP' as '@auth/GET_CEP',
  GET_CEP_SUCCESS: '@auth/GET_CEP_SUCCESS' as '@auth/GET_CEP_SUCCESS',
  GET_CEP_ERRORED: '@auth/GET_CEP_ERRORED' as '@auth/GET_CEP_ERRORED',
  SET_EDIT_USER: '@auth/SET_EDIT_USER' as '@auth/SET_EDIT_USER',
  SET_EDIT_USER_SUCCESS: '@auth/SET_EDIT_USER_SUCCESS' as '@auth/SET_EDIT_USER_SUCCESS',
  SET_EDIT_USER_ERRORED: '@auth/SET_EDIT_USER_ERRORED' as '@auth/SET_EDIT_USER_ERRORED',
  SET_IS_CONNECTED: '@auth/SET_IS_CONNECTED' as '@auth/SET_IS_CONNECTED',
  SET_INITIAL_LOADING: '@auth/SET_INITIAL_LOADING' as '@auth/SET_INITIAL_LOADING',
  SET_INITIAL_MESSAGE: '@auth/SET_INITIAL_MESSAGE' as '@auth/SET_INITIAL_MESSAGE',
  SET_USER_COMPLETE: '@auth/SET_USER_COMPLETE' as '@auth/SET_USER_COMPLETE',
  SET_INITIAL_STATE: '@auth/SET_INITIAL_STATE' as '@auth/SET_INITIAL_STATE',
  SET_REFRESH_TOKEN: '@auth/SET_REFRESH_TOKEN' as '@auth/SET_REFRESH_TOKEN',
  SET_REFRESH_TOKEN_SUCCESS: '@auth/SET_REFRESH_TOKEN_SUCCESS' as '@auth/SET_REFRESH_TOKEN_SUCCESS',
  SET_REFRESH_TOKEN_ERRORED: '@auth/SET_REFRESH_TOKEN_ERRORED' as '@auth/SET_REFRESH_TOKEN_ERRORED',
});
