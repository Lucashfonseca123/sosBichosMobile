export interface IFeedState {
  pet: IFeedPet[];
  current_page: number;
  reset: boolean;
  isLoading: boolean;
  message: string;
}

interface IFeedPet {
  id: string;
  name: string;
  sex: string;
  description: string;
  avatar: string;
  rescued_at: string;
}
