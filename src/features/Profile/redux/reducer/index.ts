import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileReducer from './ProfileReducer';

const persistConfig = {
  key: 'Profile',
  storage: AsyncStorage,
  whitelist: ['url'],
  stateReconciler: autoMergeLevel2,
};

export default combineReducers({
  state: persistReducer(persistConfig, ProfileReducer),
});
