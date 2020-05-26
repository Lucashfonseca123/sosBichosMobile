import {combineReducers} from 'redux';
import authenticationReducer from 'features/Authentication/redux/reducer';

const rootReducer = combineReducers({
  Authentication: authenticationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
