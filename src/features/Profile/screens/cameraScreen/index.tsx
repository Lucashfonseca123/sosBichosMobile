import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';

import {request, PERMISSIONS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';

import {ActivityIndicator} from 'components';

import {BottomBar} from './components';
import {useDispatch} from 'react-redux';

import {setPhotoUrl} from 'features/Profile/redux/action/ProfileActions';

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'off',
  // torch: 'off',
};

const flashIcons = {
  off: 'FlashOff',
  on: 'FlashOn',
  auto: 'FlashAutomatico',
  // torch: 'Lantern',
};

const CameraScreen = () => {
  const navigation = useNavigation();
  const cameraRef = useRef();
  const dispatch = useDispatch();

  const [flash, setFlash] = useState<'on' | 'auto' | 'off'>('off');
  const [zoom, setZoom] = useState(0);
  const [onPageReady, setOnPageReady] = useState(false);
  const [autoFocus, setAutoFocus] = useState<'on' | 'off'>('on');
  const [loading, setLoading] = useState<boolean>(false);
  const [typeCamera, setTypeCamera] = useState('front');
  const [hasPermissionStatus, setPermission] = useState<boolean>();

  const changeFlash = () => setFlash(flashModeOrder[flash]);

  useEffect(() => {
    if (hasPermissionStatus !== false) {
      requestCameraPermission();
    }
    return () => {};
  }, [hasPermissionStatus]);

  const requestCameraPermission = async () => {
    let status = await request(PERMISSIONS.ANDROID.CAMERA);
    setPermission(status === 'granted');
  };

  const takePicture = async () => {
    setLoading(true);
    const options = {quality: 0.8};
    const data = await cameraRef.current.takePictureAsync(options);

    setLoading(false);
    dispatch(
      setPhotoUrl({
        url: data.uri,
      }),
    );
    navigation.navigate('ProfileHome', {
      data: data.uri,
    });
  };

  return (
    <View
      style={{flex: 1}}
      onLayout={() =>
        setTimeout(() => {
          setOnPageReady(true);
        }, 300)
      }>
      {onPageReady && (
        <RNCamera
          style={{flex: 1, justifyContent: 'flex-end'}}
          ref={cameraRef}
          flashMode={flash}
          zoom={zoom}
          type={typeCamera}
          autoFocus={autoFocus}
          captureAudio={false}>
          {loading ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <BottomBar
              changeFlash={changeFlash}
              flash={flash}
              takePicture={takePicture}
              changeCamera={() =>
                typeCamera === 'front'
                  ? setTypeCamera('back')
                  : setTypeCamera('front')
              }
            />
          )}
        </RNCamera>
      )}
    </View>
  );
};

export default CameraScreen;
