import styled, {css} from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Directions} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 16px;
  width: 100%;
  border-width: ${StyleSheet.hairlineWidth};
  border-radius: 20;
  border-color: #cecece;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ContainerTop = styled.View`
  flex-direction: row;
  width: 100%;
`;
