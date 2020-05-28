import React from 'react';
import {View, Image} from 'react-native';

import {Container} from './styles';
import {Markdown} from 'components';
import {useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

const FeedHome = () => {
  const token = useSelector(
    (appState: AppState) => appState.Authentication.state.tokenAccess,
  );

  const user = useSelector(
    (appState: AppState) => appState.Authentication.state.user,
  );

  return (
    <Container>
      <Markdown
        fontColor="#CE2020"
        type="bold"
        fontSize={36}
        text={`Bem vindo ${user.name}`}
      />
      <Image
        source={{uri: user.avatar}}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
      <View style={{padding: 8}} />
      <Markdown text="Ta aqui o token bicho:" />
      <Markdown text={token} />
      <View style={{padding: 8}} />
      <Markdown text={`Id: ${user.id}`} />
      <View style={{padding: 8}} />
      <Markdown text={`Criação: ${user.created_at}`} />
      <View style={{padding: 8}} />
      <Markdown text={`Email: ${user.email}`} />
    </Container>
  );
};

export default FeedHome;
