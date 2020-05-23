import React from 'react';

import {Text} from './styles';

interface IMarkdown {
  text: string;
  type?: 'bold' | 'regular' | 'light' | 'semiBold';
  fontColor?: string;
  fontSize?: number;
}

const Markdown = ({text, type, fontColor, fontSize}: IMarkdown) => {
  return (
    <Text type={type} color={fontColor} size={fontSize}>
      {text}
    </Text>
  );
};

export default React.memo(Markdown);
