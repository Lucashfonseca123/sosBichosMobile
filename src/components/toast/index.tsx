import React from 'react';
import {ToastAndroid, View} from 'react-native';

interface IToast {
  visible: boolean;
  message: string;
}

const Toast = ({visible, message}: IToast) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50,
    );
    return null;
  }
  return null;
};

export default React.memo(Toast);
