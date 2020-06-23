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
  SET_ADOPT: '@favorite/SET_ADOPT' as '@favorite/SET_ADOPT',
  SET_ADOPT_SUCCESS: '@favorite/SET_ADOPT_SUCCESS' as '@favorite/SET_ADOPT_SUCCESS',
  SET_ADOPT_ERRORED: '@favorite/SET_ADOPT_ERRORED' as '@favorite/SET_ADOPT_ERRORED',
  STATUS_DISPATCH_TO_INITIAL: '@favorite/STATUS_DISPATCH_TO_INITIAL' as '@favorite/STATUS_DISPATCH_TO_INITIAL',
  SET_INITIAL_STATE: '@favorite/SET_INITIAL_STATE' as '@favorite/SET_INITIAL_STATE',
});
