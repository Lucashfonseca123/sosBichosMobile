import styled, {css} from 'styled-components/native';

interface IModal {
  width?: number;
}

const Container = styled.View`
  ${(props: IModal) => css`
    width: ${props.width ? props.width : 100}%;
  `}
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export {Container};
