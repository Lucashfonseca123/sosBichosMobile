import React from 'react';

import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import {ContainerClose, ContainerBottom, ViewFlash} from './styles';

import {
  FlashOff,
  FlashOn,
  FlashAutomatico,
  Lantern,
  Close,
  PhotoRefresh,
  CameraButton,
  Galeria,
} from 'assets/icons';
import {useNavigation} from '@react-navigation/native';

interface IBottomBar {
  flash: string;
  changeFlash: Function;
  takePicture: Function;
  changeCamera: Function;
}

const BottomBar = (props: IBottomBar) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ContainerClose onPress={() => navigation.goBack()}>
        <Close color="white" width={40} height={20} />
      </ContainerClose>
      <ContainerBottom>
        <TouchableWithoutFeedback onPress={props.changeFlash}>
          <ViewFlash>
            {props.flash === 'on' ? (
              <FlashOn width={24} height={24} color="white" />
            ) : props.flash === 'off' ? (
              <FlashOff width={24} height={24} color="white" />
            ) : (
              <FlashAutomatico width={24} height={24} color="white" />
            )}
          </ViewFlash>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={{overflow: 'hidden'}}
          onPress={() => props.takePicture()}>
          <ViewFlash>
            <CameraButton width={64} height={64} color="white" />
          </ViewFlash>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.changeCamera}>
          <PhotoRefresh width={32} height={32} color="white" />
        </TouchableOpacity>
      </ContainerBottom>
    </View>
  );
};

export default React.memo(BottomBar);
