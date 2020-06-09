import {combineReducers} from 'redux';
import authenticationReducer from 'features/Authentication/redux/reducer';
import feedReducer from 'features/Feed/redux/reducer';
import favoritesReducer from 'features/Favorites/redux/reducer';
import profileReducer from 'features/Profile/redux/reducer';

const rootReducer = combineReducers({
  Authentication: authenticationReducer,
  Feed: feedReducer,
  Favorites: favoritesReducer,
  Profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
