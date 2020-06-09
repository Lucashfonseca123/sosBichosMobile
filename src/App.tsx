if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import {persistor, store} from './store/Store';
import {PersistGate} from 'redux-persist/integration/react';

import RootNavigator from './navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Platform, Text} from 'react-native';

import BackgroundColor from 'react-native-background-color';

console.disableYellowBox = true;

const App = () => {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    if (Platform.OS === 'android') {
      setTimeout(() => {
        BackgroundColor.setColor('#FFFFFF');
      }, 500);
    }
  }, []);

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
