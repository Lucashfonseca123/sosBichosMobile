export interface ILoginState {
  tokenAccess?: string;
  match?: boolean;
  user?: object | IAddress;
}

interface IAddress {
  address: IAddressObject;
}

interface IAddressObject {
  cep: string;
  logradoura: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}
