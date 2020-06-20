import React, {useEffect, useState} from 'react';

import {FlatList, Share, View, Alert} from 'react-native';

import {Container, PaddingLine, ContainerLoading} from './styles';
import {BadEmoji} from 'assets/icons';
import {
  FavoritePetCard,
  Modal,
  ActivityIndicator,
  Toast,
  Markdown,
} from 'components';

import {
  getInfoFavorites,
  setRemovePet,
  setRemovePetToInitialStatus,
} from '../../redux/actions/FavoriteActions';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import {
  TestIds,
  InterstitialAd,
  AdEventType,
  RewardedAd,
  RewardedAdEventType,
} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-7880577010811580/4854364219';

const FavoriteScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleToast, setVisibleToast] = useState(false);
  const [modalConnected, setModalConnected] = useState(false);
  const [sharedName, setSharedName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loaded, setLoaded] = useState(false);

  const setRemove = (id: string) => {
    setIsLoading(true);
    dispatch(setRemovePet({id: id}));
    setRefreshing(true);
  };

  const pets = useSelector((appState: AppState) =>
    appState.Favorites.state.pet ? appState.Favorites.state.pet : [],
  );

  const removeStatus = useSelector(
    (appState: AppState) => appState.Favorites.state.statusRemove,
  );

  const petFeed = useSelector((appState: AppState) => appState.Feed.state.pet);

  const isConnected = useSelector(
    (appState: AppState) => appState.Authentication.state.isConnected,
  );

  useEffect(() => {
    if (!isConnected) {
      setModalConnected(true);
    } else {
      setModalConnected(false);
    }
  }, [isConnected]);

  useEffect(() => {
    dispatch(getInfoFavorites());
    if (removeStatus) {
      setVisibleToast(true);
      dispatch(setRemovePetToInitialStatus());
    }
    setRefreshing(false);
    setIsLoading(false);
    setTimeout(() => {
      setVisibleToast(false);
    }, 2000);
    return setRefreshing(true);
  }, [refreshing, removeStatus, petFeed]);

  const navigationToAdopt = (id: string) => {
    navigation.navigate('FavoriteNavigatorWithoutBottomTab', {
      screen: 'TermsUse',
      params: {
        item: id,
      },
    });
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Olá, esse é o pet ${sharedName}, ele pode ser seu novo amigo (a) !`,
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

  const show = () => {
    const rewardAd = RewardedAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });

    rewardAd.onAdEvent((type, error) => {
      if (type === RewardedAdEventType.LOADED) {
        rewardAd.show();
      }
      setIsLoading(false);

      if (type === RewardedAdEventType.EARNED_REWARD) {
        Alert.alert(
          'Reward Ad',
          'You just earned a reward of 5 lives',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: true},
        );
      }
    });

    rewardAd.load();
  };

  return (
    <>
      {!isConnected ? (
        <Modal width={80} isVisible={modalConnected}>
          <View>
            <Markdown
              style={{textAlign: 'center', paddingBottom: 16}}
              text="Por favor, conecte-se e reinicie o aplicativo para visualizar os pets favoritados."
            />
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 12,
                borderWidth: 1,
                borderColor: '#CE2020',
                shadowRadius: 20,
                alignItems: 'center',
              }}
              onPress={() => {
                setModalConnected(false);
                navigation.navigate('BottomTabNavigator', {
                  screen: 'Feed',
                });
              }}>
              <Markdown
                fontColor="#CE2020"
                type="semiBold"
                fontSize={14}
                text="IR PARA O FEED"
              />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : pets.length === 0 ? (
        <ContainerLoading>
          <BadEmoji width={100} height={100} />
          <Markdown
            type="semiBold"
            text="Você ainda não favoritou nenhum PET."
          />
          <Markdown
            style={{textAlign: 'center', paddingTop: 2}}
            text="Entre na aba do Feed e favorite um pet para aparecer aqui!"
          />
        </ContainerLoading>
      ) : pets[0].id === '' ? (
        <ContainerLoading>
          <ActivityIndicator size="large" />
        </ContainerLoading>
      ) : (
        <>
          <Toast visible={visibleToast} message="Pet removido com sucesso" />
          <FlatList
            data={pets}
            style={{backgroundColor: '#F8F8F8'}}
            renderItem={({item}) => (
              <Container>
                {setSharedName(item.name)}
                <FavoritePetCard
                  name={item.name}
                  rescued_date={item.rescued_at}
                  description={item.description}
                  photoUri={item.avatar}
                  onPressedDonation={() => navigation.navigate('HowToHelp')}
                  onPressedAdopt={() => navigationToAdopt(item.id)}
                  onPressedRemove={() => setRemove(item.id)}
                  onPressedShare={(text) => onShare}
                  onPressedAnnouncement={() => {
                    setIsLoading(true), show();
                  }}
                  inAdoptionProcess={item.inAdoptionProcess}
                />
              </Container>
            )}
            keyExtractor={(item) => item.id}
            onRefresh={() => setRefreshing(true)}
            refreshing={false}
            ListFooterComponent={<PaddingLine />}
          />
          <Modal modal={true} width={30} isVisible={isLoading}>
            <ActivityIndicator size="large" />
          </Modal>
        </>
      )}
    </>
  );
};

export default React.memo(FavoriteScreen);
