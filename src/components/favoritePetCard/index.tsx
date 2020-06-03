import React from 'react';

import {Image, View, TouchableOpacity, Alert} from 'react-native';

import {Container, ContainerButton, ContainerTop} from './styles';
import {Markdown, Button} from 'components';

import {Close, Announcement, Share} from 'assets/icons';

const FavoritePetCard = () => {
  return (
    <Container>
      <ContainerTop>
        <Image
          style={{width: 110, height: 140, borderRadius: 20}}
          source={{
            uri:
              'https://storage.googleapis.com/download/storage/v1/b/sosbichos-test/o/pet18.jpeg?generation=1590819253400495&alt=media',
          }}
        />
        <View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
          <TouchableOpacity
            onPress={() => alert('Opoa, assista um anúncio pra mim')}>
            <Announcement width={28} height={28} style={{marginRight: 8}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Compartilha ai')}>
            <Share width={28} height={28} style={{marginRight: 16}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => alert('Certeza que deseja remover o dog?')}>
            <Close width={14} height={14} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <Markdown
            style={{paddingLeft: 16, paddingTop: 16}}
            fontColor="#Ce2020"
            type="semiBold"
            text="Tonico"
          />
          <Markdown
            style={{paddingLeft: 16, paddingTop: 8}}
            fontColor="#000"
            fontSize={12}
            text="Resgatado em 12/05/2019"
          />
          <Markdown
            style={{paddingLeft: 16, paddingTop: 8}}
            fontSize={12}
            text="Precisa de cuidados pra sua patinha quebrada. É velhinho mas adora brincar com os mais novos"
          />
        </View>
      </ContainerTop>

      <ContainerButton>
        <Button
          text="Me adote"
          onPress={() => alert('Opa, bora pra casa')}
          style={{width: 110, height: 35}}
          fontSize={13}
        />
        <Button
          text="Faça uma doação"
          onPress={() => alert('Aguardo doação')}
          style={{width: 170, height: 35}}
          fontSize={13}
        />
      </ContainerButton>
    </Container>
  );
};

export default FavoritePetCard;
