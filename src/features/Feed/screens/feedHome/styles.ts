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

export const FooterComponent = styled.View`
  padding: 8px;
  margin-top: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ViewRescuedAndDescription = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const ContainerContent = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  margin-right: 40px;
  flex-direction: row;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
