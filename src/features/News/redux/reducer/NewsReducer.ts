import {INewsBaseActions} from '../actions/NewsActions';
import {NewsActions} from '../types/NewsActionsTypes';
import {INewsState} from '../types/NewsStateTypes';

const initialState: INewsState = {
  news: [{}],
};

export default function (state = initialState, action: INewsBaseActions) {
  const {type, payload} = action;

  switch (type) {
    case NewsActions.GET_INFO_SUCCESS: {
      return Object.assign({}, state, payload);
    }

    case NewsActions.GET_INFO_ERRORED: {
      return Object.assign({}, state, payload);
    }

    default: {
      return state;
    }
  }
}
