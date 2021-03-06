export interface IGetInfoFavoriteSuccess {
  pet: IFeedPet[];
}

export interface IGetInfoFavoriteErrored {
  message: string;
}

interface IFeedPet {
  id: string;
  name: string;
  sex: string;
  description: string;
  avatar: string;
  recued_at: string;
}

export interface ISetRemovePet {
  id: string;
}

export interface ISetRemovePetSuccess {
  statusRemove: boolean;
}

export interface ISetRemovePetErrored {
  statusRemove: boolean;
}

export interface ISetAdopt {
  user_id: string;
  pet_id: string;
}
export interface ISetAdoptSuccess {
  message: string;
}
export interface ISetAdoptErrored {
  message: string;
}
