import React from 'react';

import {Container} from './styles';
import {Markdown, FavoritePetCard} from 'components';

const FavoriteScreen = () => {
  return (
    <Container>
      <FavoritePetCard />
    </Container>
  );
};

export default FavoriteScreen;
