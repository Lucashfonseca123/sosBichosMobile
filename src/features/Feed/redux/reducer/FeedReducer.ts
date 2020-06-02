import {FeedActions} from '../types/FeedActionsTypes';
import {IFeedState} from '../types/FeedStateTypes';
import {IFeedBaseAction} from '../action/FeedActions';

const initialState: IFeedState = {
  pet: [
    {
      id: '',
      name: '',
      description: '',
      avatar: '',
      sex: '',
    },
  ],
  current_page: 1,
  reset: false,
};

export default function (
  state: IFeedState = initialState,
  action: IFeedBaseAction,
) {
  const {type, payload} = action;
  switch (type) {
    case FeedActions.GET_INFO: {
      return Object.assign({}, state, payload);
    }

    case FeedActions.GET_INFO_SUCCESS: {
      return Object.assign({}, state, payload);
    }

    case FeedActions.GET_INFO_ERRORED: {
      return Object.assign({}, state, payload);
    }

    case FeedActions.SET_RESET: {
      return Object.assign({}, state, {reset: false});
    }

    default:
      return state;
  }
}
