import {API_GATEWAY_ENDPOINT} from './Contants';

interface IAuthentication {
  email: string;
  password: string;
}

interface IAuthenticationWithSocialNetwork {
  accessToken?: string;
  provider?: string;
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

export {AUTHENTICATION, AUTHENTICATION_WITH_SOCIAL_NETWORKS, CREATE_USER};
