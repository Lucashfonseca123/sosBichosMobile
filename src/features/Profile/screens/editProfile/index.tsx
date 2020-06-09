import React, {useRef, useState} from 'react';

import {ScrollView, Platform, TouchableOpacity} from 'react-native';
import {Container, ViewRow, ViewTextField, ViewButton} from './styles';
import {TextField, Button, Markdown} from 'components';

import {parseDate} from 'utils/date_fns';

import DateTimePicker from '@react-native-community/datetimepicker';

import Header from './header';

const EditProfile = () => {
  const refName = useRef();
  const refLastName = useRef();
  const refCellPhone = useRef();
  const refBirthday = useRef();
  const refOccupation = useRef();
  const refMail = useRef();
  const refCep = useRef();
  const refStreet = useRef();
  const refStreetNumber = useRef();
  const refCity = useRef();
  const refComplement = useRef();

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  console.log(date);

  return (
    <ScrollView>
      <Container>
        <Header title="Dados pessoais" />
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refName}
              placeholder="Primeiro nome"
              style={{fontSize: 16}}
            />
          </ViewTextField>
          <ViewTextField>
            <TextField
              ref={refLastName}
              placeholder="Sobrenome"
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refCellPhone}
              placeholder="Celular"
              style={{fontSize: 16}}
            />
          </ViewTextField>
          <ViewTextField style={{justifyContent: 'center'}}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => setShow(true)}>
              <Markdown
                fontColor="#3A84FF"
                text={
                  date.toDateString() != undefined
                    ? `Nascimento: ${date.toLocaleDateString()}`
                    : 'Data não informada'
                }
              />
            </TouchableOpacity>
            {show ? (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                locale="pt-br"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || date;
                  setShow(Platform.OS === 'ios');
                  setDate(currentDate);
                }}
              />
            ) : null}
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refOccupation}
              placeholder="Profissão"
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow style={{marginBottom: 16}}>
          <ViewTextField>
            <TextField
              ref={refMail}
              placeholder="E-mail"
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <Header title="Endereço" />
        <ViewRow>
          <ViewTextField style={{width: '50%'}}>
            <TextField
              ref={refCep}
              placeholder="Cep"
              style={{fontSize: 16, width: '50%'}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refStreet}
              placeholder="Logradouro"
              style={{fontSize: 16}}
            />
          </ViewTextField>
          <ViewTextField>
            <TextField
              ref={refCellPhone}
              placeholder="Número"
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refCity}
              placeholder="Cidade"
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refComplement}
              placeholder="Complemento"
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewButton>
          <Button
            onPress={() => console.log('Aqui')}
            text="Salvar"
            style={{backgroundColor: '#34AF23'}}
          />
        </ViewButton>
      </Container>
    </ScrollView>
  );
};

export default React.memo(EditProfile);
