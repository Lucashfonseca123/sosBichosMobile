import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const TopImageContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MiddleContainer = styled.View`
  height: 50;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-color: #cecece;
  flex-direction: row;
  justify-content: space-around;
`;

export const Scaffold = styled.View`
  flex: 1;
  background-color: #f8f8f8;
`;

export const ImageUser = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: #cecece;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: #dedede;
`;

export const BottomContainer = styled.View`
  flex: 1.5;
  background-color: #f8f8f8;
`;

export const TouchableButtons = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: #dedede;
`;

export const DivInfoDogs = styled.View`
  /* flex: 1; */
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-evenly;
`;
