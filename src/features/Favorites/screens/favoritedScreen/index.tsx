import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';

import {Container, PaddingLine, ContainerLoading} from './styles';
import {FavoritePetCard, Modal, ActivityIndicator, Toast} from 'components';

import {
  getInfoFavorites,
  setRemovePet,
  setRemovePetToInitialStatus,
} from '../../redux/actions/FavoriteActions';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

import {parseDate} from 'utils/date_fns';

const FavoriteScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleToast, setVisibleToast] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <>
      {pets[0].id === '' ? (
        <ContainerLoading>
          <ActivityIndicator size="large" />
        </ContainerLoading>
      ) : (
        <>
          <Toast visible={visibleToast} message="Pet removido com sucesso" />
          <FlatList
            data={pets}
            renderItem={({item}) => (
              <Container>
                <FavoritePetCard
                  name={item.name}
                  rescued_date={item.rescued_at}
                  description={item.description}
                  photoUri={item.avatar}
                  onPressedRemove={() => setRemove(item.id)}
                />
              </Container>
            )}
            keyExtractor={(item) => item.id}
            onRefresh={() => setRefreshing(true)}
            refreshing={false}
            ListFooterComponent={<PaddingLine />}
          />
          <Modal width={30} isVisible={isLoading}>
            <ActivityIndicator size="large" />
          </Modal>
        </>
      )}
    </>
  );
};

export default React.memo(FavoriteScreen);
