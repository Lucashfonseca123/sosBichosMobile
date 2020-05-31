import React from 'react';
import {TextProps} from 'react-native';

import {Text} from './styles';

interface IMarkdown extends TextProps {
  text: string;
  type?: 'bold' | 'regular' | 'light' | 'semiBold';
  fontColor?: string;
  fontSize?: number;
  elevation?: number;
}

const Markdown = ({
  text,
  type,
  fontColor,
  fontSize,
  elevation,
  ...rest
}: IMarkdown) => {
  return (
    <Text
      {...rest}
      elevation={elevation}
      type={type}
      color={fontColor}
      size={fontSize}>
      {text}
    </Text>
  );
};

export default React.memo(Markdown);
