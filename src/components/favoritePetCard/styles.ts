import styled, {css} from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  padding: 10px;
  width: 100%;
  border-width: ${StyleSheet.hairlineWidth};
  border-radius: 20;
  border-color: #cecece;
  background-color: #fff;
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

export const ViewHeaderButton = styled.View`
  flex-direction: row;
  position: absolute;
  right: 0;
  padding-right: 4px;
  padding-top: 4px;
  z-index: 1;
`;

export const TouchableButtons = styled.TouchableOpacity``;
