import React, {ReactNode} from 'react';
import RNModal from 'react-native-modal';
import {Container} from './styles';

interface IModal {
  isVisible?: boolean;
  children?: ReactNode;
  width?: number;
  noPaddingBottom?: boolean;
}

const Modal = ({isVisible, children, width, noPaddingBottom}: IModal) => {
  return (
    <>
      <RNModal
        style={{justifyContent: 'center', alignItems: 'center'}}
        isVisible={isVisible}>
        <Container noPaddingBottom={noPaddingBottom} width={width}>
          {children}
        </Container>
      </RNModal>
    </>
  );
};

export default Modal;
