import rootSaga from './RootSaga';
import {createStore, compose, applyMiddleware} from 'redux';
import reactotron from '../ReactotronConfig';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './RootReducer';

const sagaMonitor = reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const persistConfig = {
  key: 'sosbichos',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reactotron.createEnhancer()),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
