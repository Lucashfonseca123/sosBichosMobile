import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface IButton {
  backgroundColor?: string;
}

const Container = styled(RectButton)`
  ${(props: IButton) => css`
    background-color: ${props.backgroundColor
      ? props.backgroundColor
      : '#ce2020'};
  `}
  border-radius: 20px;
  elevation: 3;
`;

export {Container};
