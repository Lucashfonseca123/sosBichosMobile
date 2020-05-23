import React from 'react';

import RootNavigator from './navigation/RootNavigator';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
