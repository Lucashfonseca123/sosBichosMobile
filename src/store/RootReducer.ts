import {combineReducers} from 'redux';
import authenticationReducer from 'features/Authentication/redux/reducer';
import feedReducer from 'features/Feed/redux/reducer';
import favoritesReducer from 'features/Favorites/redux/reducer';

const rootReducer = combineReducers({
  Authentication: authenticationReducer,
  Feed: feedReducer,
  Favorites: favoritesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
