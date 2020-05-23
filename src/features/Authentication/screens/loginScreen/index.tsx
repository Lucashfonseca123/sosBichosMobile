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
  const [isFocused, setIsFocused] = useState();
  const refForm = useRef();

  useEffect(() => {
    console.log(refForm.current.focus());
  }, [isFocused]);

  const setTextInput = useCallback(
    (texto: string) => {
      setText(texto);
    },
    [text],
  );

  return (
    <Container>
      <DivMiddle>
        <Logo width={180} height={180} />
        <TextField
          ref={refForm}
          placeholder="Digite seu usuário..."
          onChangeText={setTextInput}
        />
        <TextField
          ref={refForm}
          placeholder="Senha..."
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <DivButton>
          <Button
            text="Entrar"
            width={162}
            height={51}
            onPress={() =>
              Alert.alert(
                'Bem vindo',
                'QUERO AUTENTICAÇÃO',
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
