import {API_LOCATION_CEP} from './Contants';

interface ILocation {
  cep: string;
}

const GET_CEP = (props: ILocation) => {
  const url = API_LOCATION_CEP + `${props.cep}/json`;
  const method = 'GET';
  const headers = {
    'Content-Type': 'application/json',
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

export {GET_CEP};
