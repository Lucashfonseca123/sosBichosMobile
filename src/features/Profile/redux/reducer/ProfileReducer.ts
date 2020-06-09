import {ProfileActions} from '../types/ProfileActionsTypes';
import {IProfileState} from '../types/ProfileStateTypes';
import {IProfileBaseAction} from '../action/ProfileActions';

const initialState: IProfileState = {
  url: '',
};

export default function (
  state: IProfileState = initialState,
  action: IProfileBaseAction,
) {
  const {type, payload} = action;
  switch (type) {
    case ProfileActions.SET_CAMERA_URL: {
      return Object.assign({}, state, payload);
    }

    case ProfileActions.SET_CAMERA_URL_SUCCESS: {
      return Object.assign({}, state, payload);
    }

    case ProfileActions.SET_CAMERA_URL_ERRORED: {
      return Object.assign({}, state, payload);
    }

    default:
      return state;
  }
}
