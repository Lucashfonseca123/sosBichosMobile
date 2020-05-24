import React, {forwardRef} from 'react';
import {TextInputProps} from 'react-native';

import {TextInput} from './styles';

interface ITextField extends TextInputProps {
  borderFocus?: boolean;
}

const TextField = ({borderFocus, ...rest}: ITextField, ref: any) => {
  return (
    <TextInput
      ref={ref}
      placeholderTextColor={borderFocus ? '#59B1F0' : '#ADB0B3'}
      border={borderFocus}
      {...rest}
    />
  );
};

export default forwardRef(TextField);
