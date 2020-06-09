import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {ScrollView, TouchableOpacity, Linking} from 'react-native';

import {Container, ContainerCollapsible, ViewTitle} from './styles';
import {Markdown, Button} from 'components';
import {PagSeguro, Boleto, Vakinha} from 'assets/icons';
import {useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

const HowToHelp = () => {
  const [expanded, setExpanded] = useState(true);
  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(true);
  const [expanded4, setExpanded4] = useState(true);

  const name = useSelector(
    (appState: AppState) => appState.Authentication.state.user.name,
  );

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Container>
        <Markdown text="      Existem alguns métodos para ajudar a ong, desde o voluntáriado a doaçoes físicas, abaixo segue algumas opções de doações em dinheiro e cartão. Para voluntariado, entre em contato conosco pelo whatsapp." />
        <Markdown
          style={{marginTop: 8}}
          text="Se preferir, leve para nós pessoalmente:"
        />
        <Markdown
          type="semiBold"
          style={{marginTop: 8}}
          text="• ESPAÇO ANIMAL CLÍNICA VETERINÁRIA: Rua Balduíno Taques, 289, Centro, Ponta Grossa/PR"
        />
        <Button
          text="Whatsapp"
          style={{backgroundColor: '#34AF23', marginTop: 32}}
          onPress={() =>
            Linking.openURL(
              `https://api.whatsapp.com/send?phone=5542984285723&text=Olá, meu nome é ${name}, gostaria de ser voluntário na ONG Sos Bichos`,
            )
          }
        />
        <Button
          text="Depósito em conta"
          onPress={() => setExpanded1(!expanded1)}
        />
        <Collapsible collapsed={expanded1}>
          <ContainerCollapsible>
            <ViewTitle>
              <Markdown
                type="bold"
                fontColor="#083CF2"
                text="CAIXA ECONÔMICA FEDERAL"
              />
            </ViewTitle>
            <Markdown text="Titular: Associação SOS Bichos de Rua " />
            <Markdown text="Agência: 2958 " />
            <Markdown text="Conta Poupança: 12731-7 " />
            <Markdown style={{paddingBottom: 16}} text="Operação: 013 " />
            <ViewTitle>
              <Markdown type="bold" fontColor="#083CF2" text="BANCO ITAÚ" />
            </ViewTitle>
            <Markdown text="Titular: Associação SOS Bichos de Rua " />
            <Markdown text="Agência: 2958 " />
            <Markdown text="Conta Poupança: 12731-7 " />
            <Markdown text="Operação: 013 " />
          </ContainerCollapsible>
        </Collapsible>
        <Button
          text="Depósito pelo pagseguro"
          onPress={() => setExpanded2(!expanded2)}
        />
        <Collapsible collapsed={expanded2}>
          <ContainerCollapsible style={{alignItems: 'center'}}>
            <Markdown
              style={{paddingBottom: 8}}
              type="bold"
              fontColor="#828282"
              text="Escolha o valor a ser doado:"
            />
            <Markdown text="• Você será redirecionado para uma página do pagseguro, somente aceito cartão de crédito." />
            <Markdown
              style={{paddingBottom: 16}}
              text="• Será efetuado uma assinatura mensal com o valor escolhido, podendo ser cancelada a qualquer momento."
            />
            <TouchableOpacity
              onPress={() => Linking.openURL('https://pagseguro.uol.com.br/')}>
              <PagSeguro width={178} height={79} />
            </TouchableOpacity>
          </ContainerCollapsible>
        </Collapsible>
        <Button
          text="Boleto bancário"
          onPress={() => setExpanded3(!expanded3)}
        />
        <Collapsible collapsed={expanded3}>
          <ContainerCollapsible style={{alignItems: 'center'}}>
            <Markdown
              style={{paddingBottom: 8}}
              type="bold"
              fontColor="#828282"
              text="Escolha o valor a ser doado:"
            />
            <Markdown
              style={{marginBottom: 8}}
              text="• Você será redirecionado para uma página do boletobancario.com, onde ira gerar o boleto com o valor selecionado."
            />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('http://www.sosbichos.org.br/doar/boleto.shtml')
              }>
              <Boleto width={127} height={79} />
            </TouchableOpacity>
          </ContainerCollapsible>
        </Collapsible>
        <Button text="Vakinha" onPress={() => setExpanded4(!expanded4)} />
        <Collapsible collapsed={expanded4}>
          <ContainerCollapsible style={{alignItems: 'center'}}>
            <Markdown
              style={{paddingBottom: 8}}
              type="semiBold"
              text="Faça uma doação em alguma de nossas vakinhas:"
            />
            <Markdown
              type="bold"
              fontColor="#828282"
              text="• Vaquinha bicheira."
            />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.vakinha.com.br/vaquinha/bicheira-grave',
                )
              }>
              <Vakinha width={127} height={79} />
            </TouchableOpacity>
            <Markdown
              type="bold"
              fontColor="#828282"
              text="• Vaquinha novo abrigo."
            />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.vakinha.com.br/vaquinha/novo-abrigo',
                )
              }>
              <Vakinha width={127} height={79} />
            </TouchableOpacity>
          </ContainerCollapsible>
        </Collapsible>
      </Container>
    </ScrollView>
  );
};

export default React.memo(HowToHelp);
