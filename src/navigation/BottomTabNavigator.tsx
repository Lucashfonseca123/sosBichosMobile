import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Love, Notification, Paw, Profile as Prof} from 'assets/icons';
import {FeedHome} from 'features/Feed/screens';

const Tab = createBottomTabNavigator();

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Doações"
        component={Profile}
        options={{
          tabBarLabel: 'Doações',
          tabBarIcon: ({color, size}) => (
            <Paw name="paw" color="#e91e63" width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedHome}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => (
            <Love name="feed" color="#e9e9e9" width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <Notification
              name="bell"
              fill="red"
              backgroundColor={{color: 'green'}}
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <>
              {/* <View style={{backgroundColor: color, width: 40, height: 30}} /> */}
              <Prof
                name="bell"
                fill="red"
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
