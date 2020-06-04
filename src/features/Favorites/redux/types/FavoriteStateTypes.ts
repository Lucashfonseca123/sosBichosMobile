export interface IFavoriteState {
  pet: IFeedPet[];
  message: string;
  statusRemove: boolean;
}

interface IFeedPet {
  id: string;
  name: string;
  sex: string;
  description: string;
  avatar: string;
  rescued_at: string;
}
