import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProfileHome, SosInfo} from 'features/Profile/screens';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileHome"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen
        name="ProfileHome"
        component={ProfileHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SosInfo"
        component={SosInfo}
        options={{
          title: 'Quem somos?',
          headerTintColor: '#333333',
          //   headerTitleStyle: {color: '#CE2020'},
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(ProfileNavigator);
