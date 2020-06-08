import React, {useState} from 'react';

import {ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  ViewCheckbox,
  ContainerModal,
  ButtonModalLeft,
  ButtonModalRight,
} from './styles';
import {Markdown, Button, Modal, Toast} from 'components';
import {useRoute} from '@react-navigation/native';
import {Close} from 'assets/icons';
import CheckBox from '@react-native-community/checkbox';

const TermsUse = () => {
  const route = useRoute();
  const [checked, setChecked] = useState();
  const [checked1, setChecked1] = useState();
  const [checked2, setChecked2] = useState();
  const [checked3, setChecked3] = useState();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [toastIsVisible, setToastIsVisible] = useState(false);

  // console.log(route.params.item);

  return (
    <ScrollView>
      <Container>
        <Toast
          visible={toastIsVisible}
          message="Por favor, confirme todos os termos de uso"
        />
        <Markdown
          style={{
            paddingBottom: 16,
            paddingTop: 16,
            paddingRight: 10,
            paddingLeft: 16,
          }}
          text="      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae bibendum mauris eu. Mattis dui, integer venenatis senectus ultrices et dictumst nunc. Velit at auctor pellentesque laoreet integer interdum sed nunc. Sociis netus aenean pretium leo quam egestas.
        A aenean turpis pellentesque et. Magna pulvinar egestas morbi facilisi ornare sollicitudin. Ac feugiat egestas felis porttitor. Ut fermentum tempor risus facilisi sollicitudin rhoncus. Fusce nisl nibh mattis nec auctor. In sed odio metus magna porttitor semper nec sed sed.
        Vehicula ac lacinia duis in quam magna nec in id. Ullamcorper suspendisse rutrum viverra nisi, nunc. Quam iaculis a sit."
        />
        <ViewCheckbox>
          <CheckBox
            disabled={false}
            value={checked}
            onValueChange={() =>
              checked ? setChecked(false) : setChecked(true)
            }
          />
          <TouchableOpacity
            onPress={
              checked ? () => setChecked(false) : () => setChecked(true)
            }>
            <Markdown text="Aceito ser carinhoso." />
          </TouchableOpacity>
        </ViewCheckbox>
        <ViewCheckbox>
          <CheckBox
            disabled={false}
            value={checked1}
            onValueChange={() =>
              checked1 ? setChecked1(false) : setChecked1(true)
            }
          />
          <TouchableOpacity
            onPress={() => (checked1 ? setChecked1(false) : setChecked1(true))}>
            <Markdown text="Declaro ter lido e concordado com os termos de adoção." />
          </TouchableOpacity>
        </ViewCheckbox>
        <ViewCheckbox>
          <CheckBox
            disabled={false}
            value={checked2}
            onValueChange={() =>
              checked2 ? setChecked2(false) : setChecked2(true)
            }
          />
          <TouchableOpacity
            onPress={() => (checked2 ? setChecked2(false) : setChecked2(true))}>
            <Markdown text="Cuidarei do meu PET como se fosse da família." />
          </TouchableOpacity>
        </ViewCheckbox>
        <ViewCheckbox>
          <CheckBox
            disabled={false}
            value={checked3}
            onValueChange={() =>
              checked3 ? setChecked3(false) : setChecked3(true)
            }
          />
          <TouchableOpacity
            onPress={() => (checked3 ? setChecked3(false) : setChecked3(true))}>
            <Markdown text="Não abandonerei meu PET em hipótese alguma." />
          </TouchableOpacity>
        </ViewCheckbox>
        <Button
          onPress={() => {
            checked && checked1 && checked2 && checked3
              ? setModalIsVisible(true)
              : setToastIsVisible(true);
            setTimeout(() => {
              setToastIsVisible(false);
            }, 3000);
          }}
          style={{height: 50, width: '90%'}}
          text="Enviar pedido de adoção"
        />
      </Container>
      <Modal isVisible={modalIsVisible} noPaddingBottom={true}>
        <TouchableOpacity
          onPress={() => setModalIsVisible(false)}
          style={{
            position: 'absolute',
            right: 10,
            top: 12,
            padding: 8,
            borderRadius: 16,
            zIndex: 1,
          }}>
          <Close width={16} height={16} />
        </TouchableOpacity>
        <Markdown
          style={{marginTop: 16}}
          fontColor="#000"
          fontSize={18}
          text="Confirmar o pedido de adoção?"
          type="bold"
        />
        <Markdown
          fontColor="#0E2533"
          fontSize={14}
          style={{marginTop: 32, paddingHorizontal: 16, textAlign: 'center'}}
          text="Você fará um animalzinho muito feliz e ele irá te amar infinitamente!!"
          type="light"
        />
        <ContainerModal>
          <ButtonModalLeft onPress={() => setModalIsVisible(false)}>
            <Markdown
              fontColor="#CE2020"
              type="semiBold"
              fontSize={14}
              fontColor="white"
              text="CANCELAR"
            />
          </ButtonModalLeft>
          <ButtonModalRight
            onPress={() =>
              alert(`Pedido de adoção enviado para o id: ${route.params.item}`)
            }>
            <Markdown
              fontColor="#CE2020"
              type="semiBold"
              fontSize={14}
              fontColor="white"
              text="CONFIRMAR"
            />
          </ButtonModalRight>
        </ContainerModal>
      </Modal>
    </ScrollView>
  );
};

export default React.memo(TermsUse);
