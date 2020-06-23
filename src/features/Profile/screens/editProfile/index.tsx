import React, {useRef, useState, useEffect} from 'react';

import {format, isValid} from 'date-fns';

import {ScrollView, Platform, TouchableOpacity, View} from 'react-native';
import {Container, ViewRow, ViewTextField, ViewButton} from './styles';
import {
  TextField,
  Button,
  Markdown,
  Modal,
  Toast,
  ActivityIndicator,
} from 'components';

import {
  getCep,
  setProfileEditUser,
  setInitialLoading,
  setInitialMessage,
  setUserComplete,
} from 'features/Authentication/redux/action/LoginActions';

import DateTimePicker from '@react-native-community/datetimepicker';

import {Close, Question} from 'assets/icons';

import * as EmailValidator from 'email-validator';

import Header from './header';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const dispatch = useDispatch();
  const refName = useRef();
  const refCellPhone = useRef();
  const refOccupation = useRef();
  const refMail = useRef();
  const refStreet = useRef();
  const refStreetNumber = useRef();
  const refCity = useRef();
  const refComplement = useRef();
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [cellPhone, setCellPhone] = useState();
  const [occupation, setOccupation] = useState();
  const [mail, setMail] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState(0);
  const [district, setDistric] = useState('');
  const [city, setCity] = useState('');
  const [complement, setComplement] = useState('');
  const [cep, setCep] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);
  const [modalVisibleErrored, setModalVisibleErrored] = useState(false);
  const [visibleToast, setVisibleToast] = useState(false);
  const [visibleToastConnected, setVisibleToastConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const loading = useSelector(
    (appState: AppState) => appState.Authentication.state.isLoading,
  );

  const isConnected = useSelector(
    (appState: AppState) => appState.Authentication.state.isConnected,
  );

  const message = useSelector(
    (appState: AppState) => appState.Authentication.state.message,
  );

  useEffect(() => {
    if (cep.length === 8) {
      dispatch(getCep({cep: cep}));
    }
  }, [cep]);

  useEffect(() => {
    setStreet(address.logradouro ? address.logradouro : street);
    setStreetNumber(address.number ? address.number : streetNumber);
    setDistric(address.bairro ? address.bairro : district);
    setCity(address.localidade ? address.localidade : city);
    setComplement(address.complemento ? address.complemento : complement);
  }, [address]);

  useEffect(() => {
    setName(user.name);
    setMail(user.email);
    setCellPhone(user.cellphone);
    setOccupation(user.profession);
    setMail(user.email);
    setDate(new Date(user.birthdate));
  }, []);

  useEffect(() => {
    if (loading === true) {
      setIsLoading(false);
      setModalVisibleSuccess(true);
      dispatch(setInitialLoading());
      dispatch(setUserComplete());
    }
  }, [loading]);

  useEffect(() => {
    if (message !== '') {
      setIsLoading(false);
      setModalVisibleErrored(true);
    }
  }, [message]);

  const mailValidation = (text: string) => {
    if (EmailValidator.validate(text)) {
      setMail(text);
    } else {
      setMail('');
    }
  };

  const handleEditUser = () => {
    setIsLoading(true);
    dispatch(
      setProfileEditUser({
        name: name,
        email: mail,
        profession: occupation,
        cellphone: cellPhone,
        birthdate: date,
        address: {
          cep: cep,
          logradouro: street,
          numero: streetNumber,
          bairro: district,
          complemento: complement,
          localidade: city,
          uf: address.uf ? address.uf : '',
        },
      }),
    );
  };

  return (
    <ScrollView>
      <Container>
        <Toast
          visible={visibleToast}
          message="Por favor, adicione ou verifique se os dados estão corretos."
        />
        <Toast
          visible={visibleToastConnected}
          message="Por favor, conecte-se e reinicie o aplicativo para editar o usuário."
        />
        <Header title="Dados pessoais" />
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refName}
              autoCapitalize="words"
              placeholder="Nome completo"
              onChangeText={(text) => setName(text)}
              defaultValue={user.name ? user.name : name}
              value={user.name ? user.name : name}
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refCellPhone}
              onChangeText={(text) => setCellPhone(text)}
              defaultValue={user.cellphone ? user.cellphone : cellPhone}
              value={user.cellphone ? user.cellphone : cellPhone}
              placeholder="Celular"
              keyboardType="numeric"
              maxLength={11}
              style={{fontSize: 16}}
            />
          </ViewTextField>
          <ViewTextField style={{justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 10,
                backgroundColor: '#3A84FF',
                shadowRadius: 20,
                elevation: 4,
              }}
              activeOpacity={0.5}
              onPress={() => setShow(true)}>
              <Markdown
                fontColor="#FFF"
                type="semiBold"
                style={{textAlign: 'center'}}
                fontSize={14}
                text={
                  isValid(date)
                    ? `Nascimento: ${format(date, 'dd/MM/yy')}`
                    : 'Data de nascimento'
                }
              />
            </TouchableOpacity>
            {show ? (
              <DateTimePicker
                testID="dateTimePicker"
                value={isValid(date) ? date : new Date()}
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
              defaultValue={user.profession ? user.profession : occupation}
              value={user.profession ? user.profession : occupation}
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
              defaultValue={!mail ? '' : user.email ? user.email : mail}
              value={!mail ? '' : user.email ? user.email : mail}
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
              defaultValue={address.bairro ? address.bairro : district}
              value={address.bairro ? address.bairro : district}
              style={{fontSize: 16, width: '100%'}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refStreet}
              onChangeText={(text) => setStreet(text)}
              defaultValue={address.logradouro ? address.logradouro : street}
              value={address.logradouro ? address.logradouro : street}
              placeholder="Logradouro"
              style={{fontSize: 16}}
            />
          </ViewTextField>
          <ViewTextField>
            <TextField
              ref={refStreetNumber}
              onChangeText={(text) => setStreetNumber(text)}
              defaultValue={address.numero ? address.numero : streetNumber}
              value={address.numero ? address.numero : streetNumber}
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
              defaultValue={address.localidade ? address.localidade : city}
              value={address.localidade ? address.localidade : city}
              style={{fontSize: 16}}
            />
          </ViewTextField>
        </ViewRow>
        <ViewRow>
          <ViewTextField>
            <TextField
              ref={refComplement}
              onChangeText={(text) => setComplement(text)}
              defaultValue={
                address.complemento ? address.complemento : complement
              }
              value={address.complemento ? address.complemento : complement}
              placeholder="Complemento/Ponto de referência"
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
              complement &&
              isConnected
                ? handleEditUser()
                : !isConnected
                ? (setVisibleToastConnected(true),
                  setTimeout(() => {
                    setVisibleToastConnected(false);
                  }, 3000))
                : (setVisibleToast(true),
                  setTimeout(() => {
                    setVisibleToast(false);
                  }, 3000));
            }}
            text="Salvar"
            style={{
              backgroundColor:
                name &&
                cellPhone &&
                occupation &&
                mail &&
                cep &&
                district &&
                street &&
                streetNumber &&
                city &&
                complement &&
                isConnected
                  ? '#34AF23'
                  : '#a2a2a2',
            }}
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
      <Modal isVisible={modalVisibleSuccess}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Markdown
            type="bold"
            fontSize={20}
            fontColor="#CE2020"
            style={{alignItems: 'center', marginBottom: 16}}
            text="Perfil editado com successo!"
          />
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#ce2020',
              padding: 12,
              shadowRadius: 20,
              marginBottom: 8,
            }}
            onPress={() => {
              setModalVisibleSuccess(false);
              navigation.navigate('BottomTabNavigator', {screen: 'Feed'});
            }}>
            <Markdown
              fontColor="#ce2020"
              type="semiBold"
              fontSize={14}
              text="VOLTAR"
            />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={modalVisibleErrored}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Markdown
            type="bold"
            fontSize={20}
            fontColor="#CE2020"
            style={{alignItems: 'center', marginBottom: 16}}
            text={message}
          />
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#ce2020',
              padding: 12,
              shadowRadius: 20,
              marginBottom: 8,
            }}
            onPress={() => {
              dispatch(setInitialMessage());
              navigation.navigate('BottomTabNavigator', {
                screen: 'Profile',
              });
              setModalVisibleErrored(false);
            }}>
            <Markdown
              fontColor="#ce2020"
              type="semiBold"
              fontSize={14}
              text="VOLTAR"
            />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal modal={true} isVisible={isLoading} width={30}>
        <ActivityIndicator size="large" />
      </Modal>
    </ScrollView>
  );
};

export default React.memo(EditProfile);
