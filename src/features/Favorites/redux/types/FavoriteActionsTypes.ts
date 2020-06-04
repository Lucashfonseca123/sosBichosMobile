type EnumLiteralsOf<T extends object> = T[keyof T];

export type IFavoriteActions = EnumLiteralsOf<typeof FavoriteActions>;

export const FavoriteActions = Object.freeze({
  GET_INFO: '@favorite/GET_INFO' as '@favorite/GET_INFO',
  GET_INFO_SUCCESS: '@favorite/GET_INFO_SUCCESS' as '@favorite/GET_INFO_SUCCESS',
  GET_INFO_ERRORED: '@favorite/GET_INFO_ERRORED' as '@favorite/GET_INFO_ERRORED',
  SET_REMOVE: '@favorite/SET_REMOVE' as '@favorite/SET_REMOVE',
  SET_REMOVE_SUCCESS: '@favorite/SET_REMOVE_SUCCESS' as '@favorite/SET_REMOVE_SUCCESS',
  SET_REMOVE_ERRORED: '@favorite/SET_REMOVE_ERRORED' as '@favorite/SET_REMOVE_ERRORED',
  SET_REMOVE_TO_INITIAL_STATUS: '@favorite/SET_REMOVE_TO_INITIAL_STATUS' as '@favorite/SET_REMOVE_TO_INITIAL_STATUS',
});
