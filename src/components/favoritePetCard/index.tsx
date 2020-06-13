import React from 'react';

import {Image, View} from 'react-native';

import {
  Container,
  ContainerButton,
  ContainerTop,
  TouchableButtons,
  ViewHeaderButton,
} from './styles';
import {Markdown, Button} from 'components';

import {parseDate} from 'utils/date_fns';

import {Close, Announcement, Share} from 'assets/icons';

interface IFavoritePetCard {
  onPressedDonation?: Function;
  onPressedAdopt?: Function;
  onPressedRemove?: Function;
  onPressedShare?: Function;
  onPressedAnnouncement?: Function;
  photoUri: string;
  name: string;
  rescued_date: string;
  description: string;
}

const FavoritePetCard = (props: IFavoritePetCard) => {
  return (
    <Container>
      <ContainerTop>
        <Image
          style={{width: 100, height: 130, borderRadius: 20}}
          source={{
            uri: props.photoUri,
          }}
        />
        <ViewHeaderButton>
          <TouchableButtons
            onPress={
              props.onPressedAnnouncement
                ? props.onPressedAnnouncement()
                : () => alert('To no anúncio.')
            }>
            <Announcement width={28} height={28} style={{marginRight: 8}} />
          </TouchableButtons>
          <TouchableButtons
            onPress={
              props.onPressedShare
                ? props.onPressedShare(props.name)
                : () => alert('To no share.')
            }>
            <Share width={28} height={28} style={{marginRight: 16}} />
          </TouchableButtons>
          <TouchableButtons
            onPress={props.onPressedRemove ? props.onPressedRemove : () => {}}>
            <Close width={14} height={14} />
          </TouchableButtons>
        </ViewHeaderButton>
        <View style={{flex: 1}}>
          <Markdown
            style={{
              paddingLeft: 10,
              paddingTop: 8,
            }}
            fontColor="#Ce2020"
            type="semiBold"
            text={props.name ? props.name : ''}
          />
          <Markdown
            style={{paddingLeft: 10, paddingTop: 8}}
            fontColor="#000"
            fontSize={12}
            text={`Resgatado ${
              props.rescued_date
                ? parseDate(props.rescued_date, 'dd/MM/yyyy')
                : ''
            }`}
          />
          <Markdown
            style={{paddingLeft: 10, paddingTop: 8}}
            fontSize={12}
            text={props.description ? props.description : ''}
          />
        </View>
      </ContainerTop>

      <ContainerButton>
        <Button
          text="Me adote"
          onPress={
            props.onPressedAdopt
              ? props.onPressedAdopt
              : () => alert('Opa, bora pra casa')
          }
          style={{width: 110, height: 35}}
          fontSize={13}
        />
        <Button
          text="Faça uma doação"
          onPress={
            props.onPressedDonation
              ? props.onPressedDonation
              : () => alert('Aguardo doação')
          }
          style={{width: 170, height: 35}}
          fontSize={13}
        />
      </ContainerButton>
    </Container>
  );
};

export default React.memo(FavoritePetCard);
