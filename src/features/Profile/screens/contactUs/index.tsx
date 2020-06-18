import React from 'react';

import {Container, TopContainer, ListItem} from './styles';
import {Markdown, Button} from 'components';

import {TouchableOpacity, Linking} from 'react-native';

import {Facebook, Instagram, Twitter, Mail} from 'assets/icons';
import {useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

const ContactUs = () => {
  const name = useSelector(
    (appState: AppState) => appState.Authentication.state.user.name,
  );

  return (
    <Container>
      <TopContainer>
        <Markdown
          fontColor="#909090"
          text="Siga a gente em nossas redes sociais!"
        />
      </TopContainer>
      <ListItem
        onPress={() =>
          Linking.openURL('https://www.facebook.com/SosBichosDeRua')
        }>
        <Facebook width={39} height={39} />
        <Markdown
          fontColor="#3A84FF"
          style={{paddingLeft: 16}}
          text="facebook.com/SosBichosDeRua"
        />
      </ListItem>
      <ListItem
        onPress={() =>
          Linking.openURL('https://www.instagram.com/SosBichosPG')
        }>
        <Instagram width={39} height={39} />
        <Markdown
          fontColor="#3A84FF"
          style={{paddingLeft: 16}}
          text="instagram.com/SosBichosPG"
        />
      </ListItem>
      <ListItem
        onPress={() =>
          Linking.openURL('https://www.twitter.com/SosBichosdeRua')
        }>
        <Twitter width={39} height={39} />
        <Markdown
          fontColor="#3A84FF"
          style={{paddingLeft: 16}}
          text="twitter.com/SosBichosdeRua"
        />
      </ListItem>
      <ListItem
        onPress={() =>
          Linking.openURL(
            `mailto:contato@sosbichosderua.org.br?subject=Voluntáriado SOS Bichos&body=Olá, meu nome é ${name}, gostaria de ser voluntário do SOS Bichos.`,
          )
        }>
        <Mail width={39} height={39} />
        <Markdown
          fontColor="#3A84FF"
          style={{paddingLeft: 16}}
          text="contato@sosbichosderua.org.br"
        />
      </ListItem>
      <Button
        text="Whatsapp"
        style={{backgroundColor: '#34AF23'}}
        onPress={() =>
          Linking.openURL(
            `https://api.whatsapp.com/send?phone=5542984285723&text=Olá, meu nome é ${name}, gostaria de ser voluntário na ONG Sos Bichos`,
          )
        }
      />
    </Container>
  );
};

export default React.memo(ContactUs);
