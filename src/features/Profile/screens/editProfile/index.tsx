import React, {useRef, useState, useEffect} from 'react';

import {ScrollView, Platform, TouchableOpacity, View} from 'react-native';
import {Container, ViewRow, ViewTextField, ViewButton} from './styles';
import {TextField, Button, Markdown, Modal, Toast} from 'components';

import {getCep} from 'features/Authentication/redux/action/LoginActions';

import DateTimePicker from '@react-native-community/datetimepicker';

import {Close, Question} from 'assets/icons';

import * as EmailValidator from 'email-validator';

import Header from './header';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

const EditProfile = () => {
  const dispatch = useDispatch();
  const refName = useRef();
  const refLastName = useRef();
  const refCellPhone = useRef();
  const refOccupation = useRef();
  const refMail = useRef();
  const refStreet = useRef();
  const refStreetNumber = useRef();
  const refCity = useRef();
  const refComplement = useRef();

  const [name, setName] = useState();
  const [cellPhone, setCellPhone] = useState();
  const [occupation, setOccupation] = useState();
  const [mail, setMail] = useState('');
  const [street, setStreet] = useState();
  const [streetNumber, setStreetNumber] = useState();
  const [district, setDistric] = useState();
  const [city, setCity] = useState();
  const [complement, setComplement] = useState();

  const [cep, setCep] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleToast, setVisibleToast] = useState(false);

  const [date, setDate] = useState(new Date('Jan 1, 2000 00:00:00'));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const address = useSelector((appState: AppState) =>
    appState.Authentication.state.user.address
      ? appState.Authentication.state.user.address
      : '',
  );

  const user = useSelector(
    (appState: AppState) => appState.Authentication.state.user,
  );

  useEffect(() => {
    if (cep.length === 8) {
      dispatch(getCep({cep: cep}));
    }
  }, [cep]);

  useEffect(() => {
    setStreet(address.logradouro ? address.logradouro : '');
    setDistric(address.bairro ? address.bairro : '');
    setCity(address.localidade ? address.localidade : '');
  }, [address]);

  useEffect(() => {
    setName(user.name);
    setMail(user.email);
  }, []);

  const mailValidation = (text: string) => {
    if (EmailValidator.validate(text)) {
      setMail(text);
    } else {
      setMail('');
    }
  };

  return (
    <ScrollView>
      <Container>
        <Toast
          visible={visibleToast}
          message="Por favor, adicione ou verifique se os dados estão corretos."
        />
        <Header title="Dados pessoais" />
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refName}
              placeholder="Nome completo"
              onChangeText={(text) => setName(text)}
              defaultValue={user.name ? user.name : ''}
              value={user.name ? user.name : ''}
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refCellPhone}
              onChangeText={(text) => setCellPhone(text)}
              value={cellPhone}
              placeholder="Celular"
              keyboardType="numeric"
              maxLength={11}
              style={{fontSize: 16}}
            />
          </ViewTextField>
          <ViewTextField style={{justifyContent: 'center'}}>
            <TouchableOpacity
              style={{alignItems: 'center', marginRight: 2}}
              onPress={() => setShow(true)}>
              <Markdown
                fontColor="#3A84FF"
                fontSize={15}
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
              onChangeText={(text) => setOccupation(text)}
              value={occupation}
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow style={{marginBottom: 16}}>
          <ViewTextField>
            <TextField
              ref={refMail}
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={mailValidation}
              defaultValue={!mail ? '' : user.email ? user.email : ''}
              value={!mail ? '' : user.email ? user.email : ''}
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <Header title="Endereço">
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Question width={20} height={20} />
          </TouchableOpacity>
        </Header>
        <ViewRow>
          <ViewTextField style={{width: '50%'}}>
            <TextField
              placeholder="Cep"
              onChangeText={(text) => setCep(text)}
              value={cep}
              maxLength={8}
              keyboardType="numeric"
              style={{fontSize: 16, width: '100%'}}
            />
          </ViewTextField>
          <ViewTextField style={{width: '100%'}}>
            <TextField
              placeholder="Bairro"
              onChangeText={(text) => setDistric(text)}
              defaultValue={address.bairro ? address.bairro : ''}
              value={address.bairro ? address.bairro : ''}
              style={{fontSize: 16, width: '100%'}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refStreet}
              onChangeText={(text) => setStreet(text)}
              placeholder="Logradouro"
              defaultValue={address.logradouro ? address.logradouro : ''}
              value={address.logradouro ? address.logradouro : ''}
              style={{fontSize: 16}}
            />
          </ViewTextField>
          <ViewTextField>
            <TextField
              ref={refStreetNumber}
              onChangeText={(text) => setStreetNumber(text)}
              keyboardType="numeric"
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
              onChangeText={(text) => setCity(text)}
              defaultValue={address.localidade ? address.localidade : ''}
              value={address.localidade ? address.localidade : ''}
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refComplement}
              onChangeText={(text) => setComplement(text)}
              value={complement}
              placeholder="Complemento"
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewButton>
          <Button
            onPress={() => {
              name &&
              cellPhone &&
              occupation &&
              mail &&
              cep &&
              district &&
              street &&
              streetNumber &&
              city &&
              complement
                ? alert(
                    `Edição enviada para o id do usuário: ${user.id}\n\n Dados do envio: \n Nome: ${name}\n Celular: ${cellPhone}\n Data de nascimente: ${date}\n  Profissão: ${occupation}\n Email: ${mail}\n Cep: ${cep}\n Bairro: ${district}\n Rua: ${street}\n Número: ${streetNumber}\n Cidade: ${city}\n Complemento: ${complement} `,
                  )
                : setVisibleToast(true);
              setTimeout(() => {
                setVisibleToast(false);
              }, 3000);
            }}
            text="Salvar"
            style={{backgroundColor: '#34AF23'}}
          />
        </ViewButton>
      </Container>
      <Modal isVisible={modalVisible}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{width: '90%'}} />
            <TouchableOpacity
              style={{
                width: 40,
                borderRadius: 15,
                alignItems: 'center',
              }}
              onPress={() => setModalVisible(false)}>
              <Close width={20} height={20} />
            </TouchableOpacity>
          </View>
          <Markdown
            type="bold"
            fontSize={20}
            fontColor="#CE2020"
            style={{alignItems: 'center', marginBottom: 8}}
            text="Otimize seu tempo!"
          />
          <Markdown
            style={{marginBottom: 16}}
            text="Digite seu CEP (somente numeros), caso ele seja válido, alguns campos serão preenchidos automaticamente."
          />
          <TouchableOpacity
            style={{
              borderRadius: 20,
              padding: 12,
              backgroundColor: '#CE2020',
              shadowRadius: 20,
              elevation: 4,
              marginBottom: 8,
            }}
            onPress={() => setModalVisible(false)}>
            <Markdown
              fontColor="#FFF"
              type="semiBold"
              fontSize={14}
              text="OK, ENTENDI"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default React.memo(EditProfile);
