import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
import {TextInputProps, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {TextInput} from './styles';

interface ITextField extends TextInputProps {
  borderFocus?: boolean;
  value?: string;
}

const TextField = ({borderFocus, value, ...rest}: ITextField, ref: any) => {
  const inputElementRef = useRef();

  const [isFocused, setIsFocused] = useState<boolean>();
  const [isFilled, setIsFilled] = useState<boolean>();

  useEffect(() => {
    if (value && value !== '') {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [value]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput
        ref={inputElementRef}
        placeholderTextColor={isFocused ? '#59B1F0' : '#ADB0B3'}
        border={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFilled={isFilled}
        {...rest}
      />
    </View>
  );
};

export default forwardRef(TextField);
