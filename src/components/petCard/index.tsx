import React from 'react';

import {Container, Image, ContainerTitle} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Markdown} from 'components';
import {SexMale} from 'assets/icons';
import {View} from 'react-native';

interface IPetCard {
  title?: string;
  onPress?: Function;
}

const PetCard = (props: IPetCard) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={{
            uri:
              'https://www.hypeness.com.br/wp-content/uploads/2019/09/Vira-lata_Caramelo_1.jpg',
          }}
        />
        <ContainerTitle>
          <SexMale width={24} height={24} />
          <Markdown
            elevation={10}
            type="bold"
            text="Tonico"
            fontColor="white"
          />
          <View />
        </ContainerTitle>
      </TouchableOpacity>
    </Container>
  );
};

export default PetCard;
