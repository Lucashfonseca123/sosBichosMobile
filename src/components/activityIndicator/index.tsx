import React from 'react';
import {ActivityIndicator} from 'react-native';

interface IActivityIndicator {
  size?: 'large' | 'small';
  color?: string;
}

const AcitivityIndicator = (props: IActivityIndicator) => {
  return (
    <ActivityIndicator
      color={props.color ? props.color : '#ce2020'}
      size={props.size ? props.size : 'small'}
    />
  );
};

export default React.memo(AcitivityIndicator);
