import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Love, Notification, Paw, Profile as Prof} from 'assets/icons';

import FeedNavigator from './FeedNavigator';
import ProfileNavigator from './ProfileNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import NewsNavigator from './NewsNavigator';

const Tab = createBottomTabNavigator();

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
            <Paw name="paw" fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigator}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size}) => (
            <Love name="feed" fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NewsNavigator}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({color, size}) => (
            <Notification name="bell" fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <>
              <Prof
                name="bell"
                fill={color}
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
