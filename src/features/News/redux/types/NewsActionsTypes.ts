type EnumLiteralsOf<T extends object> = T[keyof T];

export type INewsActions = EnumLiteralsOf<typeof NewsActions>;

export const NewsActions = Object.freeze({
  GET_INFO: '@news/GET_INFO' as '@news/GET_INFO',
  GET_INFO_SUCCESS: '@news/GET_INFO_SUCCESS' as '@news/GET_INFO_SUCCESS',
  GET_INFO_ERRORED: '@news/GET_INFO_ERRORED' as '@news/GET_INFO_ERRORED',
});
