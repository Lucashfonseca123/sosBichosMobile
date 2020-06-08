import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const ContainerCollapsible = styled.View`
  border-width: ${StyleSheet.hairlineWidth};
  border-top-color: transparent;
  border-color: #cecece;
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
  padding-left: 16;
  padding-top: 16;
  padding-bottom: 16;
`;

export const ViewTitle = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 8px;
`;
