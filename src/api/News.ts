import {API_GATEWAY_ENDPOINT} from './Contants';
import AsyncStorage from '@react-native-community/async-storage';

const GET_NEWS = async () => {
  const url = API_GATEWAY_ENDPOINT + 'news';
  const method = 'GET';
  const token = await AsyncStorage.getItem('tokenAccess');
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };

  let queryParams = {
    headers,
    method: method,
  };

  let result = fetch(url, queryParams)
    .then((response) => {
      return response.json().then((responseJson) => {
        return responseJson;
      });
    })
    .catch((error) => {
      console.log(error.message);
      return error;
    });

  return result;
};

export {GET_NEWS};
