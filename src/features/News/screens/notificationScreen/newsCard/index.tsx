import React from 'react';

import {Image, View} from 'react-native';

import {Container, ContainerTop} from './styles';
import {Markdown} from 'components';

interface INewsCard {
  photoUri?: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

const FavoritePetCard = (props: INewsCard) => {
  return (
    <Container>
      <ContainerTop>
        <View style={{flex: 1}}>
          <Markdown
            style={{
              paddingLeft: 10,
              paddingTop: 8,
            }}
            fontSize={20}
            fontColor="#Ce2020"
            type="semiBold"
            text={props.title}
          />
          <Markdown
            style={{paddingLeft: 10}}
            fontColor="#000"
            fontSize={12}
            text={props.date}
          />
          <Markdown
            fontColor="#000"
            style={{paddingLeft: 10, paddingTop: 2}}
            fontSize={12}
            text={props.location}
          />
          <Markdown
            style={{paddingLeft: 10, paddingTop: 8}}
            type="light"
            fontSize={12}
            text={props.description}
          />
        </View>
        <Image
          style={{
            marginLeft: 4,
            width: 100,
            height: 130,
            borderRadius: 20,
          }}
          source={{
            uri: props.photoUri,
          }}
        />
      </ContainerTop>
    </Container>
  );
};

export default React.memo(FavoritePetCard);
