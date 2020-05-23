import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Markdown} from '../';
import {Container} from './styles';

interface IButton {
  text: string;
  onPress: Function;
  width?: number;
  height?: number;
  backgroundColor?: string;
  fontColor?: string;
  fontType?: 'regular' | 'light' | 'semiBold';
  fontSize?: number;
}

const Button = ({
  text,
  onPress,
  width,
  height,
  backgroundColor,
  fontColor,
  fontType,
  fontSize,
}: IButton) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: width ? width : 200,
          height: height ? height : 51,
          borderRadius: 20,
        }}
        onPress={onPress ? onPress : null}>
        <Markdown
          fontSize={fontSize}
          fontColor={fontColor ? fontColor : 'white'}
          type={fontType ? fontType : 'bold'}
          text={text.toUpperCase()}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default React.memo(Button);
