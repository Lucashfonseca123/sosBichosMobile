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
}

export interface ILoginWithSocialNetworks {
  tokenAccess: string | null;
}

export interface ILoginWithSocialNetworksSuccess {
  tokenAccess: string;
  user: object;
}
