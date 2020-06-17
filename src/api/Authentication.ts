import {API_GATEWAY_ENDPOINT} from './Contants';
import AsyncStorage from '@react-native-community/async-storage';

interface IAuthentication {
  email: string;
  password: string;
}

interface IAuthenticationWithSocialNetwork {
  accessToken?: string;
  provider?: string;
}

interface IEditProfileUser {
  name?: string;
  cellphone?: number;
  birthdate?: Date;
  profession?: string;
  email?: string;
  address?: IAddress;
}

interface IAddress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

const AUTHENTICATION = (props: IAuthentication) => {
  // const {username, password} = props;
  const url = API_GATEWAY_ENDPOINT + 'session';
  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
  };

  let queryParams = {
    headers,
    method: method,
    body: JSON.stringify(props),
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

const AUTHENTICATION_WITH_SOCIAL_NETWORKS = (
  props: IAuthenticationWithSocialNetwork,
) => {
  const url = API_GATEWAY_ENDPOINT + 'session/social';
  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
  };

  let queryParams = {
    headers,
    method: method,
    body: JSON.stringify(props),
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

const CREATE_USER = (props: ICreateUser) => {
  // const {username, password} = props;
  const url = API_GATEWAY_ENDPOINT + 'user/create';
  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
  };

  let queryParams = {
    headers,
    method: method,
    body: JSON.stringify(props),
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

const EDIT_USER = async (props: IEditProfileUser) => {
  // const {username, password} = props;
  const url = API_GATEWAY_ENDPOINT + 'user/create';
  const method = 'PUT';
  const token = await AsyncStorage.getItem('tokenAccess');
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };

  let queryParams = {
    headers,
    method: method,
    body: JSON.stringify(props),
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

export {
  AUTHENTICATION,
  AUTHENTICATION_WITH_SOCIAL_NETWORKS,
  CREATE_USER,
  EDIT_USER,
};
