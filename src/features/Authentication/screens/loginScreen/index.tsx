import React, {useState, useCallback, useRef, useEffect} from 'react';

import {View, Alert, Linking} from 'react-native';
import {Markdown, TextField, Button} from 'components';
import {Logo} from 'assets/icons';
import {
  Container,
  DivButton,
  DivBottom,
  DivBottomButton,
  DivMiddle,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedUser, setIsFocusedUser] = useState();
  const [isFocusedPassword, setIsFocusedPassword] = useState();

  const userRef = useRef();
  const passwordRef = useRef();

  const setFocus = (type: number) => {
    if (type === 1) {
      setIsFocusedUser(true);
    } else {
      if (text) {
        setIsFocusedUser(true);
      } else {
        setIsFocusedUser(false);
      }
    }
  };

  const setBlur = (type: number) => {
    if (type === 2) {
      if (password) {
        setIsFocusedPassword(true);
      } else {
        setIsFocusedPassword(false);
      }
    } else {
      setIsFocusedPassword(true);
    }
  };
  console.log({isFocusedUser});
  console.log({isFocusedPassword});

  return (
    <Container>
      <DivMiddle>
        <Logo width={180} height={180} />
        <TextField
          ref={userRef}
          placeholder="Digite seu usuário..."
          onChangeText={(text) => setText(text)}
          onBlur={() => setBlur(1)}
          onFocus={() => setFocus(1)}
          borderFocus={isFocusedUser}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <TextField
          ref={passwordRef}
          placeholder="Senha..."
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          onBlur={() => setBlur(2)}
          onFocus={() => setFocus(2)}
          borderFocus={isFocusedPassword}
          returnKeyType="send"
          onSubmitEditing={() =>
            Alert.alert(
              'Bem vindo',
              `Enaido. Usuário: ${text}`,
              [
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Cancel pressed'),
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            )
          }
        />
        <DivButton>
          <Button
            text="Entrar"
            width={162}
            height={51}
            onPress={() =>
              Alert.alert(
                'Bem vindo',
                `Assinado: ${text}`,
                [
                  {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel pressed'),
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              )
            }
            backgroundColor="#CE2020"
          />
        </DivButton>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Bem vindo',
              'Bora criar uma conta chegado',
              [
                {
                  text: 'Não',
                  onPress: () => console.log('Cancel pressed'),
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            )
          }>
          <Markdown fontColor="#CE2020" type="semiBold" text="Crie uma conta" />
        </TouchableOpacity>
      </DivMiddle>
      <DivBottom>
        <Markdown type="semiBold" text="Ou entre com:" />
        <DivBottomButton>
          <Button
            text="Facebook"
            fontSize={14}
            width={120}
            height={38}
            onPress={() =>
              Alert.alert(
                'Gmail',
                'Conta do faces',
                [
                  {
                    text: 'Não',
                    onPress: () => console.log('Cancel pressed'),
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              )
            }
            backgroundColor="#3B5998"
            fontType="bold"
          />
          <Button
            text="Gmail"
            fontSize={14}
            width={120}
            height={38}
            onPress={() =>
              Alert.alert(
                'Gmail',
                'Conta do gmail',
                [
                  {
                    text: 'Não',
                    onPress: () => console.log('Cancel pressed'),
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              )
            }
            backgroundColor="#FFFFFF"
            fontColor="#CE2020"
          />
        </DivBottomButton>
      </DivBottom>
      <View style={{paddingTop: 8}}>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.sosbichosderua.org.br')}>
          <Markdown text="http://www.sosbichosderua.org.br" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginScreen;
