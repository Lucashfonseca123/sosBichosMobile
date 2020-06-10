type EnumLiteralsOf<T extends object> = T[keyof T];

export type IProfileTypes = EnumLiteralsOf<typeof ProfileActions>;

export const ProfileActions = Object.freeze({
  SET_CAMERA_URL: '@profile/SET_CAMERA_URL' as '@profile/SET_CAMERA_URL',
  SET_CAMERA_URL_SUCCESS: '@profile/SET_CAMERA_URL_SUCCESS' as '@profile/SET_CAMERA_URL_SUCCESS',
  SET_CAMERA_URL_ERRORED: '@profile/SET_CAMERA_URL_ERRORED' as '@profile/SET_CAMERA_URL_ERRORED',
});
