import 'react-native-gesture-handler';
import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthenticationNavigator from './AuthenticationNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import FeedNavigator from './FeedNavigator';
import {
  SosInfo,
  HowToHelp,
  ContactUs,
  CameraScreen,
  EditProfile,
} from 'features/Profile/screens';

import FavoriteNavigatorWithoutBottomTab from './FavoriteNavigatorWithoutBottomTab';
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
          // backgroundColor: '#FFF',
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
      <Stack.Screen
        name="FavoriteNavigatorWithoutBottomTab"
        component={FavoriteNavigatorWithoutBottomTab}
        options={{title: 'Primeira tela deu boa', headerShown: false}}
      />
      <Stack.Screen
        name="SosInfo"
        component={SosInfo}
        options={{
          title: 'Quem somos?',
          headerTintColor: '#333333',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="HowToHelp"
        component={HowToHelp}
        options={{title: 'Como ajudar', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{title: 'Entre em contato', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edição perfil', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default React.memo(RootNavigator);
