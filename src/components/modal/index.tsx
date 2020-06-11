import React, {ReactNode} from 'react';
import RNModal from 'react-native-modal';
import {Container} from './styles';
import {ScrollView} from 'react-native';

interface IModal {
  isVisible?: boolean;
  children?: ReactNode;
  width?: number;
  noPaddingBottom?: boolean;
  modal?: boolean;
}

const Modal = ({
  isVisible,
  children,
  width,
  noPaddingBottom,
  modal,
}: IModal) => {
  return (
    <>
      <RNModal
        style={{justifyContent: 'center', alignItems: 'center'}}
        isVisible={isVisible}>
        <Container
          modal={modal}
          noPaddingBottom={noPaddingBottom}
          width={width}>
          {children}
        </Container>
      </RNModal>
    </>
  );
};

export default Modal;
