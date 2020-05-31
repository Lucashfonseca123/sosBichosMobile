import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Love, Notification, Paw, Profile as Prof} from 'assets/icons';

import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

function Favorites() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Favoritos!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Perfil!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notificações!</Text>
    </View>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Doações"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => (
            <Paw
              name="paw"
              fill={color}
              color="#e91e63"
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size}) => (
            <Love
              name="feed"
              fill={color}
              color="#e9e9e9"
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({color, size}) => (
            <Notification
              name="bell"
              fill={color}
              backgroundColor={{color: 'green'}}
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <>
              <Prof
                name="bell"
                fill={color}
                style={{color: 'green'}}
                color={color}
                width={size}
                height={size}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
