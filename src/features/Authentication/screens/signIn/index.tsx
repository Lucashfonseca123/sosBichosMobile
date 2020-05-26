import React, {useRef, useState} from 'react';

import {ScrollView, KeyboardAvoidingView, View} from 'react-native';

import {Container, DivImage, Padding, ContainerButton} from './styles';

import {TextField, Button} from 'components';

import {User} from 'assets/icons';
import {useDispatch} from 'react-redux';

const SignIn = () => {
  const refName = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refConfirmPassword = useRef();

  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const sendAuthenticate = () => {
    dispatch(
      login({
        username: name,
        password: password,
      }),
    );
  };

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
        <Container>
          <KeyboardAvoidingView
            style={{width: '100%'}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            enabled>
            <DivImage>
              <User width={50} height={50} />
            </DivImage>
            <TextField
              ref={refName}
              autoCompleteType="email"
              autoCapitalize="none"
              onChangeText={(text) => setName(text)}
              returnKeyType="next"
              placeholder="Digite seu nome..."
              onSubmitEditing={() => refEmail.current.focus()}
            />
            <Padding />
            <TextField
              ref={refEmail}
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
              returnKeyType="next"
              placeholder="Digite seu e-mail..."
              onSubmitEditing={() => refPassword.current.focus()}
            />
            <Padding />
            <TextField
              ref={refPassword}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              returnKeyType="next"
              placeholder="Digite sua senha..."
              onSubmitEditing={() => refConfirmPassword.current.focus()}
              secureTextEntry={true}
            />
            <Padding />
            <TextField
              ref={refConfirmPassword}
              autoCapitalize="none"
              onChangeText={(text) => setConfirmPassword(text)}
              returnKeyType="next"
              placeholder="Confirme sua senha..."
              onSubmitEditing={() => passwordRef.current.focus()}
              secureTextEntry={true}
            />
            <ContainerButton>
              <Button
                width={187}
                height={59}
                text="cadastrar"
                onPress={() => sendRegister()}
              />
            </ContainerButton>
          </KeyboardAvoidingView>
        </Container>
      </ScrollView>
    </>
  );
};

export default React.memo(SignIn);
