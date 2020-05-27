import React, {ReactNode} from 'react';
import RNModal from 'react-native-modal';
import {Container} from './styles';

interface IModal {
  isVisible?: boolean;
  children?: ReactNode;
  width?: number;
}

const Modal = ({isVisible, children, width}: IModal) => {
  return (
    <>
      <RNModal
        style={{justifyContent: 'center', alignItems: 'center'}}
        isVisible={isVisible}>
        <Container width={width}>{children}</Container>
      </RNModal>
    </>
  );
};

export default Modal;
