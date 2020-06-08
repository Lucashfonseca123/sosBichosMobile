import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProfileHome} from 'features/Profile/screens';

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
    </Stack.Navigator>
  );
};

export default React.memo(ProfileNavigator);
