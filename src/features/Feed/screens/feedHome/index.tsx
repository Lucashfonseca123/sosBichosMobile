import React, {useState, useEffect} from 'react';
import {TouchableOpacity, FlatList, View} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {Container, Content} from './styles';
import {PetCard, Markdown, Button} from 'components';

import {getInfoFeed, setReset} from '../../redux/action/FeedActions';

import {Paw, Close} from 'assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

const FeedHome = () => {
  const [activeSections, setActiveSections] = useState<boolean>();
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const pets = useSelector((appState: AppState) => appState.Feed.state.pet);

  const currentPage = useSelector(
    (appState: AppState) => appState.Feed.state.current_page,
  );

  const reset = useSelector((appState: AppState) => appState.Feed.state.reset);

  useEffect(() => {
    dispatch(
      getInfoFeed({
        current_page: 1,
      }),
    );
  }, []);

  const nextPage = () => {
    dispatch(
      getInfoFeed({
        current_page: currentPage + 1,
      }),
    );
  };

  const getDescription = () => {
    const indexPet = pets.findIndex((item) => item.id === id);

    if (indexPet < 0) {
      return '';
    } else {
      return pets[indexPet].description;
    }
  };

  return (
    <>
      <FlatList
        data={pets}
        renderItem={({item}) => (
          <>
            <Container>
              <TouchableOpacity
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
        // ListFooterComponent={nextPage}
        onRefresh={nextPage}
        refreshing={false}
      />

      <Collapsible collapsed={activeSections} align="center">
        <Content>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
              marginRight: 40,
            }}>
            <TouchableOpacity
              style={{padding: 10, borderRadius: 20}}
              onPress={() => {}}>
              <Close width={24} height={24} />
            </TouchableOpacity>
          </View>
          <Markdown style={{paddingBottom: 8}} text={getDescription()} />
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

export default FeedHome;
