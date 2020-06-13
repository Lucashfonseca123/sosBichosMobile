import React from 'react';

import {Container, Image, ContainerTitle} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Markdown} from 'components';
import {SexMale, SexFemale} from 'assets/icons';
import {View} from 'react-native';

interface IPetCard {
  title?: string;
  onPress?: Function;
  photo_url?: string;
  sex?: string;
}

const PetCard = (props: IPetCard) => {
  return (
    <Container>
      <TouchableOpacity activeOpacity={100} onPress={() => {}}>
        <Image
          source={{
            uri: `${props.photo_url}`,
          }}
        />
        <ContainerTitle>
          {props.sex === 'Male' ? (
            <SexMale width={24} height={24} />
          ) : (
            <SexFemale width={18} height={18} />
          )}
          <Markdown
            elevation={10}
            type="bold"
            text={props.title}
            fontColor="white"
          />
          <View />
        </ContainerTitle>
      </TouchableOpacity>
    </Container>
  );
};

export default PetCard;
