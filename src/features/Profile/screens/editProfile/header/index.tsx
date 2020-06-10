import React, {ReactNode} from 'react';

import {Container} from './styles';
import {Markdown} from 'components';

interface IHeader {
  title: string;
  children: ReactNode;
}

const Header = ({title, children}: IHeader) => {
  return (
    <Container>
      <Markdown fontColor="black" text={title} />
      {children}
    </Container>
  );
};

export default React.memo(Header);
