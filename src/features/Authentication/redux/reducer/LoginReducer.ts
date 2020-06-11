import {LoginActions} from '../types/LoginActionsTypes';
import {ILoginState} from '../types/LoginStateTypes';
import {ILoginBaseAction} from '../action/LoginActions';

const initialState: ILoginState = {
  tokenAccess: '',
  match: undefined,
  user: {
    address: {},
  },
};

export default function (
  state: ILoginState = initialState,
  action: ILoginBaseAction,
) {
  const {type, payload} = action;
  switch (type) {
    case LoginActions.AUTHENTICATION_LOGIN_SUCCESS: {
      return Object.assign({}, state, payload, {match: true});
    }

    case LoginActions.AUTHENTICATION_LOGIN_ERRORED: {
      return Object.assign({}, state, payload, {match: false});
    }

    case LoginActions.CREATE_USER_SUCCESS: {
      return Object.assign({}, state, payload, {match: true});
    }

    case LoginActions.CREATE_USER_ERRORED: {
      return Object.assign({}, state, payload, {match: false});
    }

    case LoginActions.AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_SUCCESS: {
      return Object.assign({}, state, payload, {match: true});
    }

    case LoginActions.AUTHENTICATION_LOGIN_WITH_SOCIAL_NETWORKS_ERRORED: {
      return Object.assign({}, state, payload, {match: false});
    }

    case LoginActions.INITIAL_MATCH_TOKEN: {
      return Object.assign({}, state, {match: undefined});
    }

    case LoginActions.GET_CEP_SUCCESS: {
      state.user.address = payload.address;
      return state;
    }

    case LoginActions.GET_CEP_ERRORED: {
      return Object.assign({}, state, payload);
    }

    case LoginActions.SET_EDIT_USER_SUCCESS: {
      return Object.assign({}, state, payload);
    }

    case LoginActions.SET_EDIT_USER_ERRORED: {
      return Object.assign({}, state, payload);
    }

    default:
      return state;
  }
}
