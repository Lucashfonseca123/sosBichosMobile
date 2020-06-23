import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Share} from 'react-native';

import {
  MobileShare,
  ContactPhone,
  CreditCard,
  Peoples,
  Camera,
  Logout,
  Close,
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
  ButtonModalRight,
  ButtonModalLeft,
  ContainerModal,
  ViewLoading,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'store/RootReducer';

import {Markdown, Modal, ActivityIndicator} from 'components';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  setInitialAuth,
  setInitialLoading,
} from 'features/Authentication/redux/action/LoginActions';
import {setInitialState} from 'features/Favorites/redux/actions/FavoriteActions';

const ProfileHome = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);

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

  const loadingAuth = useSelector(
    (appState: AppState) => appState.Authentication.state.isLoadingLogout,
  );

  useEffect(() => {
    if (loadingAuth === true) {
      dispatch(setInitialLoading());
      setLoadingLogout(false);
      setModalIsVisible(false);
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'AuthenticationNavigator',
            params: {screen: 'Login'},
          },
        ],
      });
    }
  }, [loadingAuth]);

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
          onPress={() => setModalIsVisible(true)}
          style={{position: 'absolute', top: 0, right: 0, margin: 16}}>
          <Logout width={30} height={30} />
        </TouchableOpacity>
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
            <Peoples style={{marginBottom: 16}} width={69} height={44} />
            <Markdown fontColor="#a2a2a2" type="semiBold" text="Quem somos?" />
          </TouchableButtons>
          <TouchableButtons onPress={() => navigation.navigate('HowToHelp')}>
            <CreditCard
              fill="#CDCDCD"
              style={{marginBottom: 16}}
              width={69}
              height={44}
            />
            <Markdown fontColor="#a2a2a2" type="semiBold" text="Como ajudar" />
          </TouchableButtons>
        </ContainerButtons>
        <ContainerButtons>
          <TouchableButtons
            onPress={() => {
              navigation.navigate('ContactUs');
            }}>
            <ContactPhone
              fill="#CDCDCD"
              style={{marginBottom: 16}}
              width={69}
              height={44}
            />
            <Markdown
              fontColor="#a2a2a2"
              type="semiBold"
              text="Entre em contato"
            />
          </TouchableButtons>
          <TouchableButtons onPress={() => onShare()}>
            <MobileShare
              style={{marginTop: 20, marginBottom: 16}}
              fill="#CDCDCD"
              width={69}
              height={44}
            />
            <Markdown
              fontColor="#a2a2a2"
              type="semiBold"
              style={{textAlign: 'center'}}
              text="Compartilhe e convide seus amigos!"
            />
          </TouchableButtons>
        </ContainerButtons>
        <Modal isVisible={modalIsVisible} width={100} noPaddingBottom={true}>
          {loadingLogout ? (
            <ViewLoading>
              <ActivityIndicator size="large" />
            </ViewLoading>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => setModalIsVisible(false)}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 12,
                  padding: 8,
                  borderRadius: 16,
                  zIndex: 1,
                }}>
                <Close width={16} height={16} />
              </TouchableOpacity>
              <Markdown
                style={{marginTop: 16}}
                fontColor="#000"
                fontSize={18}
                text="Você deseja realmente sair?"
                type="bold"
              />
              <ContainerModal>
                <ButtonModalLeft onPress={() => setModalIsVisible(false)}>
                  <Markdown
                    fontColor="#CE2020"
                    type="semiBold"
                    fontSize={14}
                    fontColor="white"
                    text="CANCELAR"
                  />
                </ButtonModalLeft>
                <ButtonModalRight
                  onPress={() => {
                    setLoadingLogout(true);
                    dispatch(setInitialAuth());
                    dispatch(setInitialState());
                  }}>
                  <Markdown
                    fontColor="#CE2020"
                    type="semiBold"
                    fontSize={14}
                    fontColor="white"
                    text="CONFIRMAR"
                  />
                </ButtonModalRight>
              </ContainerModal>
            </>
          )}
        </Modal>
      </BottomContainer>
    </Scaffold>
  );
};

export default ProfileHome;
