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
};

export default function (state = initialState, action: IFavoriteBaseActions) {
  const {type, payload} = action;

  switch (type) {
    case FavoriteActions.GET_INFO: {
      return Object.assign({}, state, payload);
    }

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

    default: {
      return state;
    }
  }
}
