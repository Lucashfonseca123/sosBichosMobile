import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import LoginReducer from './LoginReducer';

const persistConfig = {
  key: 'login',
  storage: AsyncStorage,
  whitelist: ['user', 'tokenAccess', 'userComplete'],
  stateReconciler: autoMergeLevel2,
};

export default combineReducers({
  state: persistReducer(persistConfig, LoginReducer),
});
