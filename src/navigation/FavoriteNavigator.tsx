import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FavoritedScreen, TermsUse} from 'features/Favorites/screens';

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
        component={FavoritedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsUse"
        component={TermsUse}
        options={{
          title: 'Termos de Adoção',
          headerTintColor: '#333333',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(ProfileNavigator);