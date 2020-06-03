import 'react-native-gesture-handler';
import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthenticationNavigator from './AuthenticationNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import FeedNavigator from './FeedNavigator';
import {AppState} from 'store/RootReducer';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const isAuthenticate = useSelector(
    (appState: AppState) => appState.Authentication.state.tokenAccess,
  );

  return (
    <Stack.Navigator
      initialRouteName={
        isAuthenticate === '' ? 'AuthenticationNavigator' : 'BottomTabNavigator'
      }
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
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{title: 'Primeira tela deu boa', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default React.memo(RootNavigator);
