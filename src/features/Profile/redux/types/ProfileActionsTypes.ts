type EnumLiteralsOf<T extends object> = T[keyof T];

export type IProfileTypes = EnumLiteralsOf<typeof ProfileActions>;

export const ProfileActions = Object.freeze({
  SET_CAMERA_URL: '@auth/SET_CAMERA_URL' as '@auth/SET_CAMERA_URL',
  SET_CAMERA_URL_SUCCESS: '@auth/SET_CAMERA_URL_SUCCESS' as '@auth/SET_CAMERA_URL_SUCCESS',
  SET_CAMERA_URL_ERRORED: '@auth/SET_CAMERA_URL_ERRORED' as '@auth/SET_CAMERA_URL_ERRORED',
});
