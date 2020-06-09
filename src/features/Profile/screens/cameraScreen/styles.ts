import styled, {css} from 'styled-components/native';
import {RNCamera} from 'react-native-camera';

interface ICameraScreenStyled {
  theme: ITheme;
}
export const Container = styled.View`
  flex: 1 auto;
  justify-content: center;
  ${(props: ICameraScreenStyled) => css`
    background-color: ${props.theme.color.white};
  `}
`;

export const ContainerCamera = styled.View``;

export const Camera = styled(RNCamera)`
  flex: 1 auto;
  justify-content: flex-end;
`;

export const RequestView = styled.View`
  flex: 1 auto;
  justify-content: center;
  align-items: center;
`;

export const LoadingView = styled.View`
  flex: 1 auto;
  justify-content: center;
  ${(props: ICameraScreenStyled) => css`
    background-color: ${props.theme.color.white};
  `}
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MarkdownView = styled.View`
  ${(props: ICameraScreenStyled) => css`
    margin-top: ${props.theme.spaces.x1}px;
  `}
`;

export const ImageContainer = styled.View`
  ${(props: ICameraScreenStyled) => css`
    flex: 1 auto;
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding-bottom: ${props.theme.spaces.x2}px;
    padding-horizontal: ${props.theme.spaces.x1}px;
    padding-top: ${props.theme.spaces.x4}px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Image = styled.Image`
  width: 100%;
  /* background-color: tomato; */
  height: 100%;
`;
