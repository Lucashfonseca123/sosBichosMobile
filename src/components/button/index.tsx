import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container, ButtonText} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  text: string;
  fontSize?: number;
  fontColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  fontColor,
  fontSize,
  text,
  ...rest
}) => (
  <Container {...rest}>
    <ButtonText fontColor={fontColor} fontSize={fontSize}>
      {text}
    </ButtonText>
  </Container>
);

export default Button;
