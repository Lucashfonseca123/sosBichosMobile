import React, {useRef, useState, useEffect} from 'react';

import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import * as EmailValidator from 'email-validator';

import {User} from 'assets/icons';
import {
  TextField,
  Button,
  Toast,
  Modal,
  Markdown,
  ActivityIndicator,
} from 'components';
import {Container, DivImage, Padding, ContainerButton} from './styles';

import {createUser, initialTokenMatch} from '../../redux/action/LoginActions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {AppState} from 'store/RootReducer';

const SignIn = () => {
  const refName = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refConfirmPassword = useRef();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [visibleToast, setVisibleToast] = useState<boolean>(false);
  const [messageToast, setMessageToast] = useState<boolean>('');
  const [loading, setLoading] = useState(false);
  const [modalError, setModalError] = useState<boolean>(false);

  const tokenMatch = useSelector(
    (appState: AppState) => appState.Authentication.state.match,
  );

  useEffect(() => {
    if (tokenMatch === true) {
      setLoading(false);
      dispatch(initialTokenMatch());
      setTimeout(() => {
        navigation.navigate('FeedNavigator', {screen: 'FeedHome'});
      }, 500);
    } else if (tokenMatch === false) {
      setLoading(false);
      setModalError(true);
      dispatch(initialTokenMatch());
    }
  }, [tokenMatch]);

  const sendRegister = () => {
    dispatch(
      createUser({
        name: name,
        email: mail,
        password: password,
      }),
    );
    setLoading(true);
  };

  useEffect(() => {
    if (
      name !== '' &&
      password === confirmPassword &&
      password !== '' &&
      confirmPassword !== '' &&
      isValidEmail === true
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [password, confirmPassword, isValidEmail, name]);

  const dataErrored = () => {
    if (name === '') {
      return (
        setVisibleToast(true),
        setMessageToast('Por favor, preencha o campo do nome.'),
        setTimeout(() => {
          setVisibleToast(false);
        }, 3000)
      );
    } else if (password !== confirmPassword) {
      return (
        setVisibleToast(true),
        setMessageToast('Sua senha deve ser igual nos 2 campos.'),
        setTimeout(() => {
          setVisibleToast(false);
        }, 3000)
      );
    } else if (isValidEmail === false) {
      return (
        setVisibleToast(true),
        setMessageToast('Por favor, preencha com um e-mail válido.'),
        setTimeout(() => {
          setVisibleToast(false);
        }, 3000)
      );
    } else if (password === '' || confirmPassword === '') {
      return (
        setVisibleToast(true),
        setMessageToast('Por favor, preencha o campo de senha.'),
        setTimeout(() => {
          setVisibleToast(false);
        }, 3000)
      );
    } else {
      return (
        setVisibleToast(true),
        setMessageToast('Erro desconhecido'),
        setTimeout(() => {
          setVisibleToast(false);
        }, 3000)
      );
    }
  };

  const closeModalError = () => {
    setModalError(false);
  };

  const mailValidation = (text: string) => {
    if (EmailValidator.validate(text)) {
      setMail(text);
      setIsValidEmail(true);
    } else {
      setMail('');
      setIsValidEmail(false);
    }
  };

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
        <Container>
          <Toast visible={visibleToast} message={messageToast} />
          <KeyboardAvoidingView
            style={{width: '100%'}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            enabled>
            <DivImage>
              <User width={50} height={50} />
            </DivImage>
            <TextField
              ref={refName}
              autoCapitalize="none"
              onChangeText={(text) => setName(text)}
              returnKeyType="next"
              placeholder="Digite seu nome..."
              value={name}
              onSubmitEditing={() => refEmail.current.focus()}
            />
            <Padding />
            <TextField
              ref={refEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={mailValidation}
              returnKeyType="next"
              placeholder="Digite seu e-mail..."
              value={mail}
              onSubmitEditing={() => refPassword.current.focus()}
            />
            <Padding />
            <TextField
              ref={refPassword}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              returnKeyType="next"
              placeholder="Digite sua senha..."
              value={password}
              onSubmitEditing={() => refConfirmPassword.current.focus()}
              secureTextEntry={true}
            />
            <Padding />
            <TextField
              ref={refConfirmPassword}
              autoCapitalize="none"
              onChangeText={(text) => setConfirmPassword(text)}
              returnKeyType="done"
              placeholder="Confirme sua senha..."
              value={confirmPassword}
              onSubmitEditing={() =>
                isDisabled ? dataErrored() : sendRegister()
              }
              secureTextEntry={true}
            />
            <ContainerButton>
              <Button
                width={187}
                height={59}
                text="cadastrar"
                onPress={() => (isDisabled ? dataErrored() : sendRegister())}
                disabled={isDisabled}
              />
            </ContainerButton>
          </KeyboardAvoidingView>
          <Modal width={30} isVisible={loading}>
            <ActivityIndicator size="large" />
          </Modal>
          <Modal width={80} closeModal={closeModalError} isVisible={modalError}>
            <>
              <Markdown
                style={{textAlign: 'center', paddingBottom: 16}}
                text="Usuário ja registrado, tente com outro email."
              />
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#CE2020',
                  shadowRadius: 20,
                }}
                onPress={() => closeModalError()}>
                <Markdown
                  fontColor="#CE2020"
                  type="semiBold"
                  fontSize={14}
                  text="TENTAR DE NOVO"
                />
              </TouchableOpacity>
            </>
          </Modal>
        </Container>
      </ScrollView>
    </>
  );
};

export default React.memo(SignIn);
