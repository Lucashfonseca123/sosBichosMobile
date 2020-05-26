import {LoginActions} from '../types/LoginActionsTypes';
import {ILoginState} from '../types/LoginStateTypes';
import {ILoginBaseAction} from '../action/LoginActions';

const initialState: ILoginState = {
  username: '',
  tokenAccess: '',
};

export default function (
  state: ILoginState = initialState,
  action: ILoginBaseAction,
) {
  const {type, payload} = action;
  switch (type) {
    case LoginActions.AUTHENTICATION_LOGIN_SUCCESS: {
      return Object.assign({}, state, payload);
    }

    case LoginActions.AUTHENTICATION_LOGIN_ERRORED: {
      return Object.assign({}, state, payload);
    }

    default:
      return state;
  }
}
