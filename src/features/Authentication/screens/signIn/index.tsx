import React, {useRef, useState} from 'react';

import {ScrollView, KeyboardAvoidingView, View} from 'react-native';

import {Container, DivImage, Padding, ContainerButton} from './styles';

import {TextField, Button} from 'components';

import {User} from 'assets/icons';

const SignIn = () => {
  const refName = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refConfirmPassword = useRef();

  const [text, setText] = useState();

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
              onChangeText={(text) => setText(text)}
              returnKeyType="next"
              placeholder="Digite seu nome..."
              onSubmitEditing={() => refEmail.current.focus()}
            />
            <Padding />
            <TextField
              ref={refEmail}
              autoCapitalize="none"
              onChangeText={(text) => setText(text)}
              returnKeyType="next"
              placeholder="Digite seu e-mail..."
              onSubmitEditing={() => refPassword.current.focus()}
            />
            <Padding />
            <TextField
              ref={refPassword}
              autoCapitalize="none"
              onChangeText={(text) => setText(text)}
              returnKeyType="next"
              placeholder="Digite sua senha..."
              onSubmitEditing={() => refConfirmPassword.current.focus()}
              secureTextEntry={true}
            />
            <Padding />
            <TextField
              ref={refConfirmPassword}
              autoCapitalize="none"
              onChangeText={(text) => setText(text)}
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
                onPress={() => {}}
              />
            </ContainerButton>
          </KeyboardAvoidingView>
        </Container>
      </ScrollView>
    </>
  );
};

export default React.memo(SignIn);
