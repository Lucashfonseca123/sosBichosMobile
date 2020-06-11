export interface IProfileUrl {
  url: string;
}

export interface IProfileUrlSuccessOrErrored {
  message: string;
}

export interface IProfileEditUser {
  name?: string;
  cellphone_number?: number;
  birthdate?: Date;
  profession?: string;
  email?: string;
  address?: IAddress;
}

interface IAddress {
  cep?: string;
  district?: string;
  street?: string;
  streetNumber?: string;
  city?: string;
  complement?: string;
}
