import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from 'features/Authentication/screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#FFF',
          },
        }}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Primeira tela deu boa', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
