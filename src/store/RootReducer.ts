import {combineReducers} from 'redux';
import authenticationReducer from 'features/Authentication/redux/reducer';
import feedReducer from 'features/Feed/redux/reducer';

const rootReducer = combineReducers({
  Authentication: authenticationReducer,
  Feed: feedReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
