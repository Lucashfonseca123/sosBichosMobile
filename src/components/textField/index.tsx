import React, {forwardRef, useEffect} from 'react';
import {TextInput} from 'react-native';

interface ITextField {
  onChangeText?: Function;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search';
  secureTextEntry?: boolean;
}

const TextField = (
  {onChangeText, placeholder, keyboardType, secureTextEntry}: ITextField,
  ref: any,
) => {
  return (
    <>
      <TextInput
        ref={ref}
        style={{
          height: 40,
          borderWidth: 1,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderTopColor: 'transparent',
          borderBottomColor: '#E9E9E9',
          width: '100%',
        }}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={(text) => onChangeText(text)}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default forwardRef(TextField);
