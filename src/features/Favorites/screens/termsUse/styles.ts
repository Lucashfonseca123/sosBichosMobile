import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;
`;

export const ViewCheckbox = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-bottom: 16px;
`;

export const ContainerModal = styled.View`
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
`;

export const ButtonModalLeft = styled.TouchableOpacity`
  border-bottom-left-radius: 20px;
  margin-top: 32px;
  padding: 14px;
  background-color: #ce2020;
  elevation: 2px;
  flex: 1;
  align-items: center;
  border-right-width: ${StyleSheet.hairlineWidth};
  border-color: #cdcdcd;
`;

export const ButtonModalRight = styled.TouchableOpacity`
  border-bottom-right-radius: 20px;
  margin-top: 32px;
  padding: 14px;
  background-color: #ce2020;
  elevation: 2px;
  flex: 1;
  align-items: center;
`;
