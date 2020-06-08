import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';

import {ArrowLeft} from 'assets/icons';

import {TermsUse} from 'features/Favorites/screens';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const FavoriteNavigatorWithoutBottomTab = () => {
  const navigation = useNavigation();

  const buttonLeft = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ArrowLeft width={20} height={20} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName="TermsUse"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen
        name="TermsUse"
        component={TermsUse}
        options={{
          title: 'Termos de Adoção',
          headerTintColor: '#333333',
          headerTitleAlign: 'center',
          headerLeft: buttonLeft,
        }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(FavoriteNavigatorWithoutBottomTab);
