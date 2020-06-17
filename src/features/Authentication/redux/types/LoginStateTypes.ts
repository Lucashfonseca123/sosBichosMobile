export interface ILoginState {
  tokenAccess?: string;
  match?: boolean;
  user?: object | IAddress;
  isConnected: boolean;
}

interface IAddress {
  address: IAddressObject;
}

interface IAddressObject {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}
