import React from 'react';

import {Container} from './styles';
import {Markdown} from 'components';

interface IHeader {
  title: string;
}

const Header = (props: IHeader) => {
  return (
    <Container>
      <Markdown fontColor="black" text={props.title} />
    </Container>
  );
};

export default React.memo(Header);
