import React from 'react';

import {Container} from './styles';
import {SectionList, Text} from 'react-native';
import {Markdown} from 'components';

import NewsCard from './newsCard';

const DATA = [
  {
    date: '25 de Março',
    data: [
      {
        title: 'Bazar de roupas',
        date: '24 de abril',
        local: 'Uepg uvaranas',
        description:
          'Bazar para ajuda de custos e compra de ração para os próximos meses, vários modelos, esperamos por você!',
      },
      {
        title: 'Bazar de roupas',
        date: '24 de abril',
        local: 'Uepg uvaranas',
        description:
          'Bazar para ajuda de custos e compra de ração para os próximos meses, vários modelos, esperamos por você!',
      },
    ],
  },
  {
    date: '28 de Abril',
    data: [
      {
        title: 'Bazar de roupas',
        date: '24 de abril',
        local: 'Uepg uvaranas',
        description:
          'Bazar para ajuda de custos e compra de ração para os próximos meses, vários modelos, esperamos por você!',
      },
      {
        title: 'Bazar de roupas',
        date: '24 de abril',
        local: 'Uepg uvaranas',
        description:
          'Bazar para ajuda de custos e compra de ração para os próximos meses, vários modelos, esperamos por você!',
      },
    ],
  },
  {
    date: '4 de Maio',
    data: [
      {
        title: 'Bazar de roupas',
        date: '24 de abril',
        local: 'Uepg uvaranas',
        description:
          'Bazar para ajuda de custos e compra de ração para os próximos meses, vários modelos, esperamos por você!',
      },
      {
        title: 'Bazar de roupas',
        date: '24 de abril',
        local: 'Uepg uvaranas',
        description:
          'Bazar para ajuda de custos e compra de ração para os próximos meses, vários modelos, esperamos por você!',
      },
    ],
  },
  {
    date: '17 de outubro',
    data: [
      {
        title: 'Bazar de roupas',
        date: '24 de abril',
        local: 'Uepg uvaranas',
        description:
          'Bazar para ajuda de custos e compra de ração para os próximos meses, vários modelos, esperamos por você!',
      },
      {
        title: 'Bazar de roupas',
        date: '24 de abril',
        local: 'Uepg uvaranas',
        description:
          'Bazar para ajuda de custos e compra de ração para os próximos meses, vários modelos, esperamos por você!',
      },
    ],
  },
];

const NotificationScreen = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => (
        <Container>
          <NewsCard
            title={item.title}
            date={item.date}
            location={item.local}
            description={item.description}
          />
        </Container>
      )}
      renderSectionHeader={({section: {date}}) => (
        <Text style={{marginLeft: 16}}>{date}</Text>
      )}
    />
  );
};

export default React.memo(NotificationScreen);
