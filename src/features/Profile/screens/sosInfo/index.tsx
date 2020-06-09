import React from 'react';

import {Container, Line} from './styles';
import {ScrollView} from 'react-native';
import {Markdown} from 'components';

const SosInfo = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Container>
        <Markdown text="   Associação não governamental, sem fins lucrativos, fundada em 04 de março de 2011, na cidade de Ponta Grossa, estado do Paraná, e inscrita no CNPJ sob nº 13.393.050/0001-28." />
        <Line />
        <Markdown type="semiBold" fontColor="#707070" text="Objetivos:" />
        <Line />
        <Markdown text="• Defender, preservar e conservar o meio ambiente e promover o desenvolvimento sustentável." />
        <Line />
        <Markdown text="• Promover o voluntariado." />
        <Line />
        <Markdown text="• Promover e estimular o controle de natalidade dos animais, inclusive através de procedimento cirúrgico." />
        <Line />
        <Markdown text="• Dar assistência médico-veterinária a animais de rua, abandonados e para os de propriedade da população hipossuficiente, bem como para os animais silvestres." />
        <Line />
        <Markdown text="• Estimular o ato da adoção de animais adultos e filhotes." />
        <Line />
        <Markdown text="• Fiscalizar o cumprimento de leis relativas a animais, promovendo as ações competentes, quando necessário, judicial e extrajudicialmente." />
        <Line />
        <Markdown text="• Colaborar com o Poder Legislativo no sentido de aprimorar a legislação relativa aos direitos dos animais, de todas as espécies." />
        <Line />
        <Markdown text="•  Promover cursos e campanhas educativas sobre guarda responsável, respeito e amor aos animais, utilizando-se de palestras em escolas, eventos, meios de comunicação, etc." />
      </Container>
    </ScrollView>
  );
};

export default React.memo(SosInfo);
