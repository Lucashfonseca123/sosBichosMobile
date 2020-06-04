export interface IGetFeed {
  current_page: number;
}

export interface IGetFeedSuccess {
  pet: IFeedPet[];
  current_page: number;
}

interface IFeedPet {
  id: string;
  name: string;
  sex: string;
  description: string;
  avatar: string;
  recued_at: string;
  favorited: boolean;
}

export interface IGetFeedErrored {
  reset: boolean;
}

export interface ISetCurrentPage {
  current_page: number;
}

export interface ISetCurrentErrored {
  message: string;
}
export interface ISetFavorite {
  id: string;
}
export interface ISetFavoriteSuccessOrErrored {
  message: string;
}
