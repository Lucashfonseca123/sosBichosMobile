import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useState,
} from 'react';
import {TextInputProps} from 'react-native';

import {TextInput} from './styles';

interface ITextField extends TextInputProps {
  borderFocus?: boolean;
}

const TextField = ({borderFocus, ...rest}: ITextField, ref: any) => {
  const inputElementRef = useRef();

  const [isFocused, setIsFocused] = useState<boolean>();
  const [isFilled, setIsFilled] = useState<boolean>();

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <TextInput
      ref={inputElementRef}
      placeholderTextColor={isFocused ? '#59B1F0' : '#ADB0B3'}
      border={isFocused}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      isFilled={isFilled}
      {...rest}
    />
  );
};

export default forwardRef(TextField);
