import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container, ButtonText} from './styles';
import {ActivityIndicator} from 'components';

interface ButtonProps extends RectButtonProperties {
  text: string;
  fontSize?: number;
  fontColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  fontColor,
  fontSize,
  text,
  disabled,
  children,
  isLoading,
  ...rest
}) => (
  <Container disabled={disabled} {...rest}>
    {isLoading ? (
      <ActivityIndicator size="small" color="#FFF" />
    ) : (
      <ButtonText fontColor={fontColor} fontSize={fontSize}>
        {text}
        {children}
      </ButtonText>
    )}
  </Container>
);

export default Button;
