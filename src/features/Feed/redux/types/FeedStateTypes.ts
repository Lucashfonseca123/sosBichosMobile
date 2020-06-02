export interface IFeedState {
  pet: IFeedPet[];
  current_page: number;
  reset: boolean;
}

interface IFeedPet {
  id: string;
  name: string;
  sex: string;
  description: string;
  avatar: string;
}
