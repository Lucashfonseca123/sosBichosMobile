import React, {useState, useEffect, useCallback, useRef} from 'react';
import {TouchableOpacity, FlatList, View, BackHandler} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {
  Container,
  Content,
  FooterComponent,
  ViewRescuedAndDescription,
  ContainerContent,
} from './styles';
import {PetCard, Markdown, Button, ActivityIndicator, Toast} from 'components';

import {
  getInfoFeed,
  setReset,
  setFavorite,
  setFavoriteMessageToInitial,
} from '../../redux/action/FeedActions';

import {Paw, Close, Favorite, Share} from 'assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const FeedHome = () => {
  const [activeSections, setActiveSections] = useState<boolean>();
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [visibleToast, setVisibleToast] = useState<boolean>(false);
  const navigation = useNavigation();

  const refFlatList = useRef();

  const dispatch = useDispatch();

  const pets = useSelector((appState: AppState) => appState.Feed.state.pet);

  const currentPage = useSelector(
    (appState: AppState) => appState.Feed.state.current_page,
  );

  const reset = useSelector((appState: AppState) => appState.Feed.state.reset);

  const messageFavorites = useSelector(
    (appState: AppState) => appState.Feed.state.message,
  );

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        BackHandler.exitApp();
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }, []),
  );

  useEffect(() => {
    setIsLoading(false);
  }, [pets]);

  useEffect(() => {
    if (messageFavorites === 'Sucesso') {
      setVisibleToast(true);
      setActiveSections(true);
      dispatch(setFavoriteMessageToInitial());
    }
    setTimeout(() => {
      setVisibleToast(false);
    }, 3000);
  }, [messageFavorites]);

  useEffect(() => {
    dispatch(
      getInfoFeed({
        current_page: 1,
      }),
    );
    if (reset === true) {
      dispatch(setReset());
    }
  }, [reset]);

  const nextPage = () => {
    setIsLoading(true);
    dispatch(
      getInfoFeed({
        current_page: currentPage + 1,
      }),
    );
  };

  const getData = (parameters: string) => {
    const indexPet = pets.findIndex((item) => item.id === id);

    if (indexPet < 0) {
      return '';
    } else {
      switch (parameters) {
        case 'name':
          return pets[indexPet].name;
        case 'description':
          return pets[indexPet].description;
        case 'rescued_at':
          return `Resgatado em: ${pets[indexPet].rescued_at}`;
        case 'id':
          return pets[indexPet].id;
      }
    }
  };

  const endList = () => {
    setIsLoading(true);
    dispatch(
      getInfoFeed({
        current_page: currentPage + 1,
      }),
    );
    refFlatList.current.scrollToIndex({index: 0});
  };

  const setFavoritePet = (params?: string) => {
    dispatch(
      setFavorite({
        id: params,
      }),
    );
  };

  return (
    <>
      <Toast visible={visibleToast} message="Pet favoritado com sucesso" />
      {isLoading || pets.length === 0 ? (
        <View style={{marginTop: 16}}>
          <ActivityIndicator />
        </View>
      ) : (
        false
      )}
      <FlatList
        data={pets}
        ref={refFlatList}
        renderItem={({item}) => (
          <>
            <Container>
              <TouchableOpacity
                style={{opacity: 1}}
                onPress={() => {
                  setId(item.id);
                  setActiveSections(!activeSections);
                }}>
                <PetCard
                  title={item.name}
                  sex={item.sex}
                  photo_url={item.avatar}
                />
              </TouchableOpacity>
            </Container>
          </>
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <FooterComponent>
            <TouchableOpacity
              onPress={endList}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Markdown
                type="semiBold"
                fontColor="#3A84FF"
                text="Clique aqui ou puxe para atualizar a lista."
              />
            </TouchableOpacity>
          </FooterComponent>
        }
        // onEndReached={nextPage}
        // onEndReachedThreshold={1}
        onRefresh={nextPage}
        refreshing={false}
      />
      <Collapsible collapsed={activeSections} align="center">
        <Content>
          <ContainerContent>
            <View>
              <Markdown
                style={{paddingLeft: 20, paddingBottom: 16}}
                type="semiBold"
                fontSize={18}
                fontColor="#CE2020"
                text={getData('name')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{paddingBottom: 16, borderRadius: 20}}
                onPress={() => {}}>
                <Share style={{marginRight: 16}} width={28} height={28} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderRadius: 20}}
                onPress={() => setFavoritePet(getData('id'))}>
                <Favorite
                  style={{top: -3, marginRight: 16}}
                  width={33}
                  fill="#000"
                  height={33}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingBottom: 16, borderRadius: 20}}
                onPress={() => {
                  setActiveSections(true);
                }}>
                <Close width={24} height={24} />
              </TouchableOpacity>
            </View>
          </ContainerContent>
          <ViewRescuedAndDescription>
            <Markdown
              text={getData('rescued_at')}
              fontSize={12}
              fontColor="#000000"
            />
            <Markdown
              style={{paddingTop: 16}}
              fontSize={12}
              text={getData('description')}
            />
          </ViewRescuedAndDescription>
          <Button
            onPress={() => alert('Doação é bom também.')}
            fontSize={15}
            style={{
              width: 218,
              height: 32,
            }}>
            <Markdown
              text="Faça uma doação  "
              type="semiBold"
              fontColor="white"
            />
            <Paw width={20} height={20} fill="white" />
          </Button>
        </Content>
      </Collapsible>
    </>
  );
};

export default React.memo(FeedHome);
