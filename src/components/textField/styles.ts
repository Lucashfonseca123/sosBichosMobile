import styled, {css} from 'styled-components/native';

interface ITextField {
  border?: boolean;
  isFilled?: boolean;
}

const TextInput = styled.TextInput`
  height: 50px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  ${(props: ITextField) => css`
    border-width: ${props.border || props.isFilled ? 2 : 1}px;
    border-bottom-color: ${props.border ? '#59B1F0' : '#e9e9e9'};
  `}
  width: 100%;
  font-size: 20px;
`;

export {TextInput};
