import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';

import {ArrowLeft} from 'assets/icons';

import {NotificationScreen} from 'features/News/screens';

import {TermsUse} from 'features/Favorites/screens';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const NewsNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="TermsUse"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#f9f9f9',
        },
      }}>
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          title: 'Avisos',
          headerTintColor: '#ce2020',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(NewsNavigator);
