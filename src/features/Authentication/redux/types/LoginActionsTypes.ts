type EnumLiteralsOf<T extends object> = T[keyof T];

export type ILoginTypes = EnumLiteralsOf<typeof LoginActions>;

export const LoginActions = Object.freeze({
  AUTHENTICATION_LOGIN: '@login/AUTHENTICATION_LOGIN' as '@login/AUTHENTICATION_LOGIN',
  AUTHENTICATION_LOGIN_SUCCESS: '@login/AUTHENTICATION_LOGIN_SUCCESS' as '@login/AUTHENTICATION_LOGIN_SUCCESS',
  AUTHENTICATION_LOGIN_ERRORED: '@login/AUTHENTICATION_LOGIN_ERRORED' as '@login/AUTHENTICATION_LOGIN_ERRORED',
});
