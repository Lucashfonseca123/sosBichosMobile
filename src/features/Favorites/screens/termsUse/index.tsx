import React, {useState} from 'react';

import {ScrollView, TouchableOpacity} from 'react-native';
import {Container, ViewCheckbox} from './styles';
import {Markdown, Button} from 'components';
import {useRoute} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const TermsUse = () => {
  const route = useRoute();
  const [checked, setChecked] = useState();
  const [checked1, setChecked1] = useState();
  const [checked2, setChecked2] = useState();
  const [checked3, setChecked3] = useState();

  return (
    <ScrollView>
      <Container>
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
              checked ? setChecked1(false) : setChecked1(true)
            }
          />
          <TouchableOpacity
            onPress={
              checked1 ? () => setChecked1(false) : () => setChecked1(true)
            }>
            <Markdown text="Declaro ter lido e concordado com os termos de adoção." />
          </TouchableOpacity>
        </ViewCheckbox>
        <ViewCheckbox>
          <CheckBox
            disabled={false}
            value={checked2}
            onValueChange={() =>
              checked ? setChecked2(false) : setChecked2(true)
            }
          />
          <TouchableOpacity
            onPress={
              checked2 ? () => setChecked2(false) : () => setChecked2(true)
            }>
            <Markdown text="Cuidarei do meu PET como se fosse da família." />
          </TouchableOpacity>
        </ViewCheckbox>
        <ViewCheckbox>
          <CheckBox
            disabled={false}
            value={checked3}
            onValueChange={() =>
              checked ? setChecked3(false) : setChecked3(true)
            }
          />
          <TouchableOpacity
            onPress={
              checked3 ? () => setChecked3(false) : () => setChecked3(true)
            }>
            <Markdown text="Não abandonerei meu PET em hipótese alguma." />
          </TouchableOpacity>
        </ViewCheckbox>
        <Button
          onPress={() => alert('Bem demais meu caro')}
          style={{height: 50, width: '90%'}}
          text="Enviar pedido de adoção"
        />
      </Container>
    </ScrollView>
  );
};

export default React.memo(TermsUse);
