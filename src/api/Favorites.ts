import {API_GATEWAY_ENDPOINT} from './Contants';
import AsyncStorage from '@react-native-community/async-storage';

interface ISetRemove {
  id: string;
}

const GET_LIST_FAVORITES = async () => {
  const url = API_GATEWAY_ENDPOINT + 'user/favorites';
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

const SET_REMOVE_ITEM_FAVORITE = async (props: ISetRemove) => {
  const url = API_GATEWAY_ENDPOINT + `user/disfavor/${props.id}`;
  const method = 'DELETE';
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

export {GET_LIST_FAVORITES, SET_REMOVE_ITEM_FAVORITE};
