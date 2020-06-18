import React, {useEffect, useState} from 'react';

import {Container, PaddingLine, EmptyView} from './styles';
import {FlatList, TouchableOpacity} from 'react-native';
import {Markdown, Modal} from 'components';

import {getInfoNews} from '../../redux/actions/NewsActions';

import NewsCard from './newsCard';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'store/RootReducer';
import {useNavigation} from '@react-navigation/native';

const NotificationScreen = () => {
  const dispatch = useDispatch();
  const [modalConnected, setModalConnected] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getInfoNews());
  }, []);

  const news = useSelector((appState: AppState) => appState.News.state.news);

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

  return (
    <>
      {!isConnected ? (
        <Modal width={80} isVisible={modalConnected}>
          <>
            <Markdown
              style={{textAlign: 'center', paddingBottom: 16}}
              text="Por favor, conecte-se e reinicie o aplicativo para visualizar as notificações."
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
          </>
        </Modal>
      ) : news.length === 0 ? (
        <EmptyView>
          <Markdown text="Por enquanto, estamos sem avisos." />
        </EmptyView>
      ) : (
        <FlatList
          data={news}
          style={{backgroundColor: '#F8F8F8'}}
          renderItem={({item}) => (
            <Container>
              <NewsCard
                title={item.title}
                date="23 de março"
                location={item.subtitle}
                description={item.body}
                photoUri={item.folder}
              />
            </Container>
          )}
          keyExtractor={(item) => item.id}
          // onRefresh={() => setRefreshing(true)}
          // refreshing={false}
          ListFooterComponent={<PaddingLine />}
        />
      )}
    </>
  );
};

export default React.memo(NotificationScreen);
