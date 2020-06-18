import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FavoritedScreen} from 'features/Favorites/screens';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FavoritedScreen"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen
        name="FavoritedScreen"
        options={{
          title: 'Favoritos',
          headerTintColor: '#ce2020',
          headerTitleAlign: 'center',
        }}
        component={FavoritedScreen}
      />
    </Stack.Navigator>
  );
};

export default React.memo(ProfileNavigator);
