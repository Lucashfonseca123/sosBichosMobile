export interface ILoginState {
  tokenAccess?: string;
  refreshToken?: string;
  match?: boolean;
  user?: object | IAddress;
  isConnected: boolean;
  isLoading: boolean;
  message: string;
  userComplete: boolean;
  isLoadingLogout: boolean;
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
