export interface IAuthentication {
  email: string;
  password: string;
}

export interface IAuthenticationSuccess {
  tokenAccess: string;
  user: object;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ICreateUserSuccess {
  tokenAccess: string;
  user?: object;
}

export interface ILoginWithSocialNetworks {
  tokenAccess: string | null;
  provider: string;
}

export interface ILoginWithSocialNetworksSuccess {
  tokenAccess: string;
  user: object;
}

export interface IGetCep {
  cep: string;
}
export interface IGetCepSuccess {
  address: IAddress;
}

interface IAddress {
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface IProfileEditUser {
  name?: string;
  cellphone?: number;
  birthdate?: Date;
  profession?: string;
  email?: string;
  address?: IAddress;
}

export interface IProfileEditUserSuccess {
  user: {
    name?: string;
    cellphone?: number;
    birthdate?: Date;
    profession?: string;
    email?: string;
    address?: IAddress;
  };
  isLoading: boolean;
  message: '';
}

export interface IProfileEditUserErrored {
  message: string;
}
export interface IConnected {
  isConnected: boolean;
}
