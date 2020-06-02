import styled, {css} from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  padding-top: 16px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Content = styled.View`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: transparent
  elevation: 1;
  justify-content: center;
  align-items: center;
`;
