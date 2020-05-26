import React from 'react';

import {Container} from './styles';
import {Markdown} from 'components';
import {useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

const FeedHome = () => {
  const token = useSelector(
    (appState: AppState) => appState.Authentication.state.tokenAccess,
  );
  return (
    <Container>
      <Markdown text="Ta aqui o token bicho" />
      <Markdown text={token} />
    </Container>
  );
};

export default FeedHome;
