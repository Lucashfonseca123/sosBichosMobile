import styled, {css} from 'styled-components/native';

interface IModal {
  width?: number;
  noPaddingBottom?: boolean;
}

const Container = styled.View`
  ${(props: IModal) => css`
    width: ${props.width ? props.width : 100}%;
    padding-bottom: ${props.noPaddingBottom ? 0 : 20}px;
    padding-left: ${props.noPaddingBottom ? 0 : 20}px;
    padding-right: ${props.noPaddingBottom ? 0 : 20}px;
  `}
  padding-top: 32px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export {Container};
