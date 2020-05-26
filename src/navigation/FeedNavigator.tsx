import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FeedHome} from 'features/Feed/screens';

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedHome"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#F8F8F8',
        },
      }}>
      <Stack.Screen
        name="FeedHome"
        component={FeedHome}
        options={{title: 'Primeira tela deu boa', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default React.memo(FeedNavigator);
