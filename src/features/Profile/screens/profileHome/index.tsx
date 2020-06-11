import React from 'react';
import {TouchableOpacity, Share} from 'react-native';

import {
  MobileShare,
  ContactPhone,
  CreditCard,
  Peoples,
  Camera,
} from 'assets/icons';

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
import {useNavigation, useRoute} from '@react-navigation/native';

const ProfileHome = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const user = useSelector(
    (appState: AppState) => appState.Authentication.state.user,
  );

  const petsFavorited = useSelector(
    (appState: AppState) => appState.Favorites.state.pet,
  );

  const allPets = useSelector(
    (appState: AppState) => appState.Feed.state.pagination.total,
  );

  const photoUrl = useSelector(
    (appState: AppState) => appState.Profile.state.url,
  );

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Olá, esse é um link para você conhecer o aplicativo SOS Bichos e poder encontrar seu amigo(a)!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Scaffold>
      <TopImageContainer
        source={require('assets/background/ComponentBackground.jpg')}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CameraScreen')}
          style={{position: 'absolute', right: '35%', top: '50%', zIndex: 5}}>
          <Camera width={30} height={30} />
        </TouchableOpacity>
        <ImageUser
          source={{
            uri: `${
              photoUrl
                ? photoUrl
                : user.avatar
                ? user.avatar
                : 'https://www.uvu.edu/chss/images/events/presenter-imgs/end_violence/user-icon-silhouette.png'
            }`,
          }}
        />
        <Markdown
          style={{textAlign: 'center'}}
          text={user.name}
          fontSize={24}
          fontColor="white"
          type="bold"
        />
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
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
            text="5"
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
            text={allPets}
          />
          <Markdown fontSize={14} text="Dogs em risco" />
        </DivInfoDogs>
      </MiddleContainer>
      <BottomContainer>
        <ContainerButtons>
          <TouchableButtons onPress={() => navigation.navigate('SosInfo')}>
            <Peoples
              fill="#3A84FF"
              style={{marginBottom: 16}}
              width={69}
              height={44}
            />
            <Markdown fontColor="#3A84FF" text="Quem somos?" />
          </TouchableButtons>
          <TouchableButtons onPress={() => navigation.navigate('HowToHelp')}>
            <CreditCard
              fill="#3A84FF"
              style={{marginBottom: 16}}
              width={69}
              height={44}
            />
            <Markdown fontColor="#3A84FF" text="Como ajudar" />
          </TouchableButtons>
        </ContainerButtons>
        <ContainerButtons>
          <TouchableButtons
            onPress={() => {
              navigation.navigate('ContactUs');
            }}>
            <ContactPhone
              fill="#3A84FF"
              style={{marginBottom: 16}}
              width={69}
              height={44}
            />
            <Markdown fontColor="#3A84FF" text="Entre em contato" />
          </TouchableButtons>
          <TouchableButtons onPress={() => onShare()}>
            <MobileShare
              style={{marginTop: 20, marginBottom: 16}}
              fill="#3A84FF"
              width={69}
              height={44}
            />
            <Markdown
              fontColor="#3A84FF"
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
