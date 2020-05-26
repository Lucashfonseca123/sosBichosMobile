import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface IButton {
  fontSize?: number;
  fontColor?: string;
}

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ce2020;
  border-radius: 20px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
  elevation: 3;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Bold';
  ${(props: IButton) => css`
    color: ${props.fontColor ? props.fontColor : '#FFF'};
    font-size: ${props.fontSize ? props.fontSize : 16}px;
  `}
  text-transform: uppercase;
`;
