import qs from 'qs';

export const makeURL = (path = '', queryParams = {}) => {
  let scheme = 'sosbichos';
  let queryString = '';
  queryString = qs.stringify(queryParams);
  if (queryString) {
    queryString = `?${queryString}`;
  }
  return encodeURI(`${scheme}://${path}${queryString}`);
};
