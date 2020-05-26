import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, SignIn} from 'features/Authentication/screens';

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Primeira tela deu boa', headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Crie sua conta',
          headerTintColor: '#333333',
          headerTitleStyle: {color: '#CE2020'},
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(AuthenticationNavigator);
