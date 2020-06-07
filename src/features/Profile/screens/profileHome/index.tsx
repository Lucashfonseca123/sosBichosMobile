import React from 'react';
import {TouchableOpacity} from 'react-native';

import {MobileShare, ContactPhone, CreditCard, Peoples} from 'assets/icons';

import {
  MiddleContainer,
  TopImageContainer,
  Scaffold,
  ImageUser,
  ContainerButtons,
  BottomContainer,
  TouchableButtons,
  DivInfoDogs,
} from './styles';
import {useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

import {Markdown} from 'components';
import {useNavigation} from '@react-navigation/native';

const ProfileHome = () => {
  const navigation = useNavigation();

  const user = useSelector(
    (appState: AppState) => appState.Authentication.state.user,
  );

  const petsFavorited = useSelector(
    (appState: AppState) => appState.Favorites.state.pet,
  );

  return (
    <Scaffold>
      <TopImageContainer
        source={require('assets/background/ComponentBackground.jpg')}>
        <ImageUser
          source={{
            uri: `${user.avatar}`,
          }}
        />
        <Markdown
          style={{textAlign: 'center'}}
          text={user.name}
          fontSize={24}
          fontColor="white"
          type="bold"
        />
        <TouchableOpacity onPress={() => alert('Suas infos serão mudadas')}>
          <Markdown
            text="Mudar informações do perfil"
            fontSize={12}
            fontColor="white"
            type="bold"
          />
        </TouchableOpacity>
      </TopImageContainer>
      <MiddleContainer>
        <DivInfoDogs>
          <Markdown
            type="semiBold"
            fontColor="#040C47"
            fontSize={16}
            text="82"
          />
          <Markdown fontSize={14} text="Dogs ajudados" />
        </DivInfoDogs>
        <DivInfoDogs>
          <Markdown
            type="semiBold"
            fontColor="#040C47"
            fontSize={16}
            text={petsFavorited.length}
          />
          <Markdown fontSize={14} text="Dogs favoritados" />
        </DivInfoDogs>
        <DivInfoDogs>
          <Markdown
            type="semiBold"
            fontColor="#040C47"
            fontSize={16}
            text="32"
          />
          <Markdown fontSize={14} text="Dogs em risco" />
        </DivInfoDogs>
      </MiddleContainer>
      <BottomContainer>
        <ContainerButtons>
          <TouchableButtons onPress={() => navigation.navigate('SosInfo')}>
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
