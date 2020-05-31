import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container, ButtonText} from './styles';

interface ButtonProps extends RectButtonProperties {
  text: string;
  fontSize?: number;
  fontColor?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  fontColor,
  fontSize,
  text,
  disabled,
  children,
  ...rest
}) => (
  <Container disabled={disabled} {...rest}>
    <ButtonText fontColor={fontColor} fontSize={fontSize}>
      {text}
      {children}
    </ButtonText>
  </Container>
);

export default Button;
