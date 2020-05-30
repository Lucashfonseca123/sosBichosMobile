import React, {useState, useRef, useEffect} from 'react';

import {View, Linking, TouchableOpacity} from 'react-native';
import {
  Markdown,
  TextField,
  Button,
  ActivityIndicator,
  Modal,
  Toast,
} from 'components';
import {Logo} from 'assets/icons';
import {
  Container,
  DivButton,
  DivBottom,
  DivBottomButton,
  DivMiddle,
} from './styles';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from 'store/RootReducer';

import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import * as EmailValidator from 'email-validator';

import {
  login,
  initialTokenMatch,
  loginWithSocialNetworks,
} from 'features/Authentication/redux/action/LoginActions';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [visibleToast, setVisibleToast] = useState(false);
  const [modalError, setModalError] = useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [facebookUser, setFacebookUser] = useState({});

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const userRef = useRef();
  const passwordRef = useRef();

  const tokenMatch = useSelector(
    (appState: AppState) => appState.Authentication.state.match,
  );

  useEffect(() => {
    if (tokenMatch === true) {
      setLoading(false);
      navigation.navigate('BottomTabNavigator');
      dispatch(initialTokenMatch());
    } else if (tokenMatch === false) {
      setLoading(false);
      setModalError(true);
      dispatch(initialTokenMatch());
    }
  }, [tokenMatch]);

  const sendAuthenticate = () => {
    setLoading(true);
    dispatch(
      login({
        email: mail,
        password: password,
      }),
    );
  };

  useEffect(() => {
    SplashScreen.hide();
    GoogleSignin.configure({
      webClientId:
        '578889650978-hsdsorj4pv1f75d746m36itlvuut1i8a.apps.googleusercontent.com',
      offlineAccess: true,
      // forceCodeForRefreshToken: true,
    });
    return () => {};
  }, []);

  const signInGmail = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const resp = await GoogleSignin.signIn();
      const {accessToken} = await GoogleSignin.getTokens();
      setLoading(true);
      console.log(accessToken);
      dispatch(
        loginWithSocialNetworks({
          tokenAccess: accessToken,
          provider: 'google',
        }),
      );
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const loginFacebook = async () => {
    try {
      setLoading(true);
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (!result.isCancelled) {
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          throw new Error('Something went wrong obtaining access token');
        }
        dispatch(
          loginWithSocialNetworks({
            tokenAccess: data.accessToken,
            provider: 'facebook',
          }),
        );
      }
    } catch (error) {
      console.log('Login fail with error: ' + error);
    }
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

  const getErrored = () => {
    setVisibleToast(true);
    if (!isValidEmail) {
      setMessage('Por favor, preencha com um e-mail válido.');
    } else {
      setMessage('Por favor, preencha com uma senha.');
    }
    setTimeout(() => {
      setVisibleToast(false);
    }, 3000);
  };

  const closeModalError = () => {
    setModalError(false);
  };

  return (
    <Container>
      <DivMiddle>
        <Toast visible={visibleToast} message={message} />
        <Logo width={180} height={180} />
        <TextField
          ref={userRef}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu email..."
          onChangeText={mailValidation}
          returnKeyType="next"
          keyboardType="email-address"
          value={mail}
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
          value={password}
          onSubmitEditing={() =>
            !isValidEmail || password === '' ? getErrored() : sendAuthenticate()
          }
        />
        <DivButton>
          <Button
            text="Entrar"
            width={162}
            height={51}
            onPress={() =>
              !isValidEmail || password === ''
                ? getErrored()
                : sendAuthenticate()
            }
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
            onPress={() => loginFacebook()}
            backgroundColor="#3B5998"
            fontType="bold"
          />
          <Button
            text="Gmail"
            fontSize={14}
            width={120}
            height={38}
            onPress={() => signInGmail()}
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
      <Modal width={30} isVisible={loading}>
        <ActivityIndicator size="large" />
      </Modal>
      <Modal width={80} closeModal={closeModalError} isVisible={modalError}>
        <>
          <Markdown
            style={{textAlign: 'center', paddingBottom: 16}}
            text="Usuário não identificado, tente novamente."
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
  );
};

export default React.memo(Login);
