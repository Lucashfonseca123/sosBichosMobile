import styled, {css} from 'styled-components/native';

interface IMarkdown {
  type?: 'bold' | 'regular' | 'light' | 'semiBold';
  color?: string;
  size?: number;
  fontFamily?: string;
  elevation?: number;
}

const Text = styled.Text`
  ${(props: IMarkdown) => css`
    font-family: ${props.type === 'bold'
      ? 'RobotoSlab-Bold'
      : props.type === 'light'
      ? 'RobotoSlab-Light'
      : props.type === 'semiBold'
      ? 'RobotoSlab-SemiBold'
      : 'RobotoSlab-Regular'};
    color: ${props.color ? props.color : '#B8B8B8'};
    font-size: ${props.size ? props.size : '16'}px;
    elevation: ${props.elevation ? props.elevation : 0};
  `}
`;

export {Text};
