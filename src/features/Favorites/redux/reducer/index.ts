import FavoriteReducer from './FavoriteReducer';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'favorite',
  whitelist: ['pet'],
  storage: AsyncStorage,
  stateReconcilier: autoMergeLevel2,
};

export default combineReducers({
  state: persistReducer(persistConfig, FavoriteReducer),
});
