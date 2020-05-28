import 'react-native-gesture-handler';
import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthenticationNavigator from './AuthenticationNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import FeedNavigator from './FeedNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthenticationNavigator"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen
        name="AuthenticationNavigator"
        component={AuthenticationNavigator}
        options={{title: 'Primeira tela deu boa', headerShown: false}}
      />
      <Stack.Screen
        name="FeedNavigator"
        component={FeedNavigator}
        options={{title: 'Primeira tela deu boa', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default React.memo(RootNavigator);
