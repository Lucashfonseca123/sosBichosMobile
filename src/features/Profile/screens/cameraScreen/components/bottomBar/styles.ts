import styled, {css} from 'styled-components/native';

export const ContainerClose = styled.TouchableOpacity`
  align-items: center;
  border-radius: 8;
  background-color: transparent;
  flex-direction: row;
  top: 32;
  width: 100%;
  overflow: hidden;
  padding-left: 16;
  padding-right: 16;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  padding-top: 24;
  padding-bottom: 24;
  position: absolute;
  bottom: 0;
  background-color: black;
  opacity: 0.8;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  flex-direction: row;
`;

export const ViewFlash = styled.View`
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
