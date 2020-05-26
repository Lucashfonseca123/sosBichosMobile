import React, {useState, useRef, useEffect} from 'react';

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
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch} from 'react-redux';
import {login} from 'features/Authentication/redux/action/LoginActions';

const Login = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const userRef = useRef();
  const passwordRef = useRef();

  const sendAuthenticate = () => {
    dispatch(
      login({
        email: text,
        password: password,
      }),
    );
    navigation.navigate('FeedNavigator', {screen: 'FeedHome'});
  };

  return (
    <Container>
      <DivMiddle>
        <Logo width={180} height={180} />
        <TextField
          ref={userRef}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu usuário..."
          onChangeText={(text) => setText(text)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <TextField
          ref={passwordRef}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Senha..."
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          returnKeyType="send"
          onSubmitEditing={() => {}}
        />
        <DivButton>
          <Button
            text="Entrar"
            width={162}
            height={51}
            onPress={() => sendAuthenticate()}
            backgroundColor="#CE2020"
          />
        </DivButton>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
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

export default React.memo(Login);
