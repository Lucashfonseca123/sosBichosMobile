import React, {useEffect, useState} from 'react';

import {FlatList, View} from 'react-native';

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

import {parseDate} from 'utils/date_fns';
import {useNavigation} from '@react-navigation/native';

const FavoriteScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleToast, setVisibleToast] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setRemove = (id: string) => {
    setIsLoading(true);
    dispatch(setRemovePet({id: id}));
    setRefreshing(true);
  };

  const pets = useSelector(
    (appState: AppState) => appState.Favorites.state.pet,
  );

  const removeStatus = useSelector(
    (appState: AppState) => appState.Favorites.state.statusRemove,
  );

  const petFeed = useSelector((appState: AppState) => appState.Feed.state.pet);

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

  return (
    <>
      {pets.length === 0 ? (
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
                <FavoritePetCard
                  name={item.name}
                  rescued_date={item.rescued_at}
                  description={item.description}
                  photoUri={item.avatar}
                  onPressedDonation={() => navigation.navigate('HowToHelp')}
                  onPressedAdopt={() => navigationToAdopt(item.id)}
                  onPressedRemove={() => setRemove(item.id)}
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
