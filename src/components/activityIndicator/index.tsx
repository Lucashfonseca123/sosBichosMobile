import React from 'react';
import {ActivityIndicator} from 'react-native';

interface IActivityIndicator {
  size?: 'large' | 'small';
}

const AcitivityIndicator = (props: IActivityIndicator) => {
  return (
    <ActivityIndicator
      color="#ce2020"
      size={props.size ? props.size : 'small'}
    />
  );
};

export default React.memo(AcitivityIndicator);
