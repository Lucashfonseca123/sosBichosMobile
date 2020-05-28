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
