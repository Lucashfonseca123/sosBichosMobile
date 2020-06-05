import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FeedHome} from 'features/Feed/screens';
import {Question, Close} from 'assets/icons';
import {TouchableOpacity, View} from 'react-native';
import {Modal, Markdown, Button} from 'components';

const Stack = createStackNavigator();

const FeedNavigator = () => {
  const [info, setInfo] = React.useState<boolean>(false);

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
        key="FeedHome"
        options={{
          title: 'Feed',
          headerTintColor: '#333333',
          headerTitleStyle: {color: '#CE2020'},
          headerTitleAlign: 'center',
          headerRight: () => (
            <>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => setInfo(true)}>
                <Question width={50} height={25} />
              </TouchableOpacity>
              <Modal isVisible={info}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View style={{width: '90%'}} />
                    <TouchableOpacity
                      style={{
                        marginTop: -10,
                        width: 40,
                        padding: 10,
                        borderRadius: 15,
                        alignItems: 'center',
                      }}
                      onPress={() => setInfo(false)}>
                      <Close width={20} height={20} />
                    </TouchableOpacity>
                  </View>
                  <Markdown text="Esse é o feed, você pode encontrar seu amiguinho aqui" />
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      padding: 12,
                      backgroundColor: '#CE2020',
                      shadowRadius: 20,
                      marginTop: 10,
                      elevation: 4,
                    }}
                    onPress={() => setInfo(false)}>
                    <Markdown
                      fontColor="#FFF"
                      type="semiBold"
                      fontSize={14}
                      text="VAMOS LÁ"
                    />
                  </TouchableOpacity>
                </View>
              </Modal>
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(FeedNavigator);
