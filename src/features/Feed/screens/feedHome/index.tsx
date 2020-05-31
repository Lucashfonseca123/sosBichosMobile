import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {Text, View, ScrollView} from 'react-native';
import {Container, Content} from './styles';
import {PetCard, Markdown, Button} from 'components';

import {Paw} from 'assets/icons';

const FeedHome = () => {
  const [activeSections, setActiveSections] = useState<boolean>();
  const [activeSections2, setActiveSections2] = useState<boolean>();

  return (
    <Container>
      <ScrollView>
        <TouchableOpacity onPress={() => setActiveSections(!activeSections)}>
          <PetCard />
        </TouchableOpacity>
        <Collapsible collapsed={activeSections} align="center">
          <Content>
            <Markdown
              style={{paddingTop: 8}}
              text="Precisa de cuidados para sua patinha quebrada. É velhinho mas gosta de dar atenção e brincar com os menores. #AssistaUmAnuncioPorMim"
            />
            <Button
              onPress={() => alert('Vai para os favoritos')}
              fontSize={15}
              style={{
                width: 218,
                height: 32,
              }}>
              <Markdown
                text="Faça uma doação  "
                type="semiBold"
                fontColor="white"
              />
              <Paw width={20} height={20} fill="white" />
            </Button>
          </Content>
        </Collapsible>
        <TouchableOpacity
          style={{marginTop: 8, marginBottom: 8}}
          onPress={() => setActiveSections2(!activeSections2)}>
          <PetCard />
        </TouchableOpacity>
        <Collapsible collapsed={activeSections2} align="center">
          <Content>
            <Markdown text="Precisa de cuidados para sua patinha quebrada. É velhinho mas gosta de dar atenção e brincar com os menores. #AssistaUmAnuncioPorMim" />
            <Button
              onPress={() => alert('Vai para os favoritos')}
              fontSize={15}
              style={{
                width: 218,
                height: 32,
              }}>
              <Markdown
                text="Faça uma doação  "
                type="semiBold"
                fontColor="white"
              />
              <Paw width={20} height={20} fill="white" />
            </Button>
          </Content>
        </Collapsible>
      </ScrollView>
    </Container>
  );
};

export default FeedHome;
