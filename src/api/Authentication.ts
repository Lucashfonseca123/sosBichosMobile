import {API_GATEWAY_ENDPOINT} from './Contants';

interface IAuthentication {
  email: string;
  password: string;
}

const AUTHENTICATION = (props: IAuthentication) => {
  // const {username, password} = props;
  const url = API_GATEWAY_ENDPOINT;
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

export {AUTHENTICATION};
