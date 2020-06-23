import {IFavoriteBaseActions} from '../actions/FavoriteActions';
import {FavoriteActions} from '../types/FavoriteActionsTypes';
import {IFavoriteState} from '../types/FavoriteStateTypes';

const initialState: IFavoriteState = {
  pet: [
    {
      id: '',
      name: '',
      avatar: '',
      description: '',
      sex: '',
      rescued_at: '',
    },
  ],
  message: '',
  statusRemove: false,
  status: false,
};

export default function (state = initialState, action: IFavoriteBaseActions) {
  const {type, payload} = action;

  switch (type) {
    case FavoriteActions.GET_INFO_SUCCESS: {
      return Object.assign({}, state, payload);
    }

    case FavoriteActions.GET_INFO_ERRORED: {
      return Object.assign({}, state, payload);
    }

    case FavoriteActions.SET_REMOVE: {
      return Object.assign({}, state, payload);
    }

    case FavoriteActions.SET_REMOVE_SUCCESS: {
      return Object.assign({}, state, payload);
    }

    case FavoriteActions.SET_REMOVE_ERRORED: {
      return Object.assign({}, state, payload);
    }

    case FavoriteActions.SET_REMOVE_TO_INITIAL_STATUS: {
      return Object.assign({}, state, {statusRemove: false});
    }

    case FavoriteActions.SET_ADOPT_SUCCESS: {
      return Object.assign({}, state, {status: true});
    }

    case FavoriteActions.SET_ADOPT_ERRORED: {
      return Object.assign({}, state, payload);
    }

    case FavoriteActions.STATUS_DISPATCH_TO_INITIAL: {
      return Object.assign({}, state, {status: false});
    }

    case FavoriteActions.SET_INITIAL_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
