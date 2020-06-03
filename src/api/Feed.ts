import {API_GATEWAY_ENDPOINT} from './Contants';
import AsyncStorage from '@react-native-community/async-storage';

interface IGetInfo {
  page: number;
}
interface ISetFavorite {
  id: string;
}

const GET_INFO = async (props: IGetInfo) => {
  const url = API_GATEWAY_ENDPOINT + `pets/?page=${props.page}`;
  const method = 'GET';
  const token = await AsyncStorage.getItem('tokenAccess');
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };

  let queryParams = {
    headers,
    method: method,
    // body: JSON.stringify(props),
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

const SET_FAVORITE = async (props: ISetFavorite) => {
  const url = API_GATEWAY_ENDPOINT + `user/favorite/${props.id}`;
  const method = 'PATCH';
  const token = await AsyncStorage.getItem('tokenAccess');
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };

  let queryParams = {
    headers,
    method: method,
    // body: JSON.stringify(props),
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

export {GET_INFO, SET_FAVORITE};
