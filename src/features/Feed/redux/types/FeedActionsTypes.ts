type EnumLiteralsOf<T extends object> = T[keyof T];

export type IFeedTypes = EnumLiteralsOf<typeof FeedActions>;

export const FeedActions = Object.freeze({
  GET_INFO: '@feed/GET_INFO' as '@feed/GET_INFO',
  GET_INFO_SUCCESS: '@feed/GET_INFO_SUCCESS' as '@feed/GET_INFO_SUCCESS',
  GET_INFO_ERRORED: '@feed/GET_INFO_ERRORED' as '@feed/GET_INFO_ERRORED',
  SET_CURRENT_PAGE: '@feed/SET_CURRENT_PAGE' as '@feed/SET_CURRENT_PAGE',
  SET_CURRENT_PAGE_SUCCESS: '@feed/SET_CURRENT_PAGE_SUCCESS' as '@feed/SET_CURRENT_PAGE_SUCCESS',
  SET_CURRENT_PAGE_ERRORED: '@feed/SET_CURRENT_PAGE_ERRORED' as '@feed/SET_CURRENT_PAGE_ERRORED',
  SET_RESET: '@feed/SET_RESET' as '@feed/SET_RESET',
  SET_FAVORITE: '@feed/SET_FAVORITE' as '@feed/SET_FAVORITE',
  SET_FAVORITE_SUCCESS: '@feed/SET_FAVORITE_SUCCESS' as '@feed/SET_FAVORITE_SUCCESS',
  SET_FAVORITE_ERRORED: '@feed/SET_FAVORITE_ERRORED' as '@feed/SET_FAVORITE_ERRORED',
  SET_FAVORITE_MESSAGE_TO_INITIAL: '@feed/SET_FAVORITE_MESSAGE_TO_INITIAL' as '@feed/SET_FAVORITE_MESSAGE_TO_INITIAL',
  SET_FAVORITE_STATUS_SUCCESS: '@feed/SET_FAVORITE_STATUS_SUCCESS' as '@feed/SET_FAVORITE_STATUS_SUCCESS',
});
