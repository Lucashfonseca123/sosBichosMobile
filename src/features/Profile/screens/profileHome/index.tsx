import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {MobileShare, ContactPhone, CreditCard, Peoples} from 'assets/icons';

import {
  MiddleContainer,
  TopContainer,
  Scaffold,
  ImageUser,
  ContainerButtons,
  BottomContainer,
  TouchableButtons,
} from './styles';
import {useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

import {Markdown} from 'components';

const ProfileHome = () => {
  const user = useSelector(
    (appState: AppState) => appState.Authentication.state.user,
  );

  return (
    <Scaffold>
      <TopContainer>
        <Image source={require('assets/background/ComponentBackground.jpg')} />
        <ImageUser
          source={{
            uri: `${user.avatar}`,
          }}
        />
        <Markdown
          text={user.name}
          fontSize={24}
          fontColor="white"
          type="bold"
          style={{
            position: 'absolute',
            top: '82%',
            left: '30%',
          }}
        />
        <TouchableOpacity
          onPress={() => alert('Suas infos serão mudadas')}
          style={{position: 'absolute', top: '102%', left: '29%'}}>
          <Markdown
            text="Mudar informações do perfil"
            fontSize={12}
            fontColor="white"
            type="bold"
          />
        </TouchableOpacity>
      </TopContainer>
      <MiddleContainer>
        <Markdown fontSize={12} text="Dogs ajudados" />
        <Markdown fontSize={12} text="Dogs favoritados" />
        <Markdown fontSize={12} text="Dogs Dogs em risco" />
      </MiddleContainer>
      <BottomContainer>
        <ContainerButtons>
          <TouchableButtons>
            <Peoples style={{marginBottom: 16}} width={69} height={44} />
            <Markdown fontColor="#828282" text="Quem somos" />
          </TouchableButtons>
          <TouchableButtons>
            <CreditCard style={{marginBottom: 16}} width={69} height={44} />
            <Markdown fontColor="#828282" text="Como ajudar" />
          </TouchableButtons>
        </ContainerButtons>
        <ContainerButtons>
          <TouchableButtons>
            <ContactPhone style={{marginBottom: 16}} width={69} height={44} />
            <Markdown fontColor="#828282" text="Entre em contato" />
          </TouchableButtons>
          <TouchableButtons>
            <MobileShare
              style={{marginTop: 20, marginBottom: 16}}
              width={69}
              height={44}
            />
            <Markdown
              fontColor="#828282"
              style={{textAlign: 'center'}}
              text="Compartilhe e convide seus amigos!"
            />
          </TouchableButtons>
        </ContainerButtons>
      </BottomContainer>
    </Scaffold>
  );
};

export default ProfileHome;
