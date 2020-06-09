import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FeedHome} from 'features/Feed/screens';
import {Question, Close, Paw, Love, Notification, Profile} from 'assets/icons';
import {TouchableOpacity, View} from 'react-native';
import {Modal, Markdown} from 'components';

import {Container} from './styles';

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
                        width: 40,
                        borderRadius: 15,
                        alignItems: 'center',
                      }}
                      onPress={() => setInfo(false)}>
                      <Close width={20} height={20} />
                    </TouchableOpacity>
                  </View>
                  <Markdown
                    type="bold"
                    fontSize={20}
                    fontColor="#CE2020"
                    style={{alignItems: 'center', marginBottom: 8}}
                    text="Olá, seja bem vindo!"
                  />
                  <Markdown
                    style={{marginBottom: 16}}
                    text="Esse é o aplicativo SOS BICHOS, nele você pode encontrar um amigo e ter uma companhia para a vida!"
                  />
                  <Container>
                    <Paw width={20} height={20} fill="#CE2020" />
                    <Markdown
                      style={{marginBottom: 16, paddingLeft: 16}}
                      text="• Na aba Feed todos os PETS da ong serão listados, aqui você pode favoritar eles ou fazer uma doação."
                    />
                  </Container>
                  <Container>
                    <Love width={20} height={20} fill="#CE2020" />
                    <Markdown
                      style={{marginBottom: 16, paddingLeft: 16}}
                      text="• Na aba Favoritos, todos os PETS favoritados no FEED serão listados, com a opção de fazer um pedido de adoção ou doação."
                    />
                  </Container>
                  <Container>
                    <Notification width={20} height={20} fill="#CE2020" />
                    <Markdown
                      style={{marginBottom: 16, paddingLeft: 16}}
                      text="• Na aba Notificações, serão listadas todos os próximos eventos organizados pela ong SOS Bichos."
                    />
                  </Container>
                  <Container>
                    <Profile width={20} height={20} fill="#CE2020" />
                    <Markdown
                      style={{marginBottom: 16, paddingLeft: 16}}
                      text="• Na aba Perfil, exibe todas as infos sobre a ong, doações e seus dados para a adoção."
                    />
                  </Container>
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      padding: 12,
                      backgroundColor: '#CE2020',
                      shadowRadius: 20,
                      elevation: 4,
                      marginBottom: 8,
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
