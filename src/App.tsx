if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React from 'react';

import {Provider} from 'react-redux';
import {persistor, store} from './store/Store';
import {PersistGate} from 'redux-persist/integration/react';

import RootNavigator from './navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
