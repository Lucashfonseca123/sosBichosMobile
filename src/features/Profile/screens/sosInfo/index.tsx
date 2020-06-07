import React from 'react';

import {Container} from './styles';
import {ScrollView} from 'react-native';
import {Markdown} from 'components';

const SosInfo = () => {
  return (
    <ScrollView>
      <Container>
        <Markdown
          style={{textAlign: 'auto'}}
          fontColor="#a2a2a2"
          text=" Lorem ipsum dolor sit amet. Sapien vel viverra. Nunc, gravida nulla in sed condimentum lorem magna diam urna. At magna suscipit euismod ultricies ante. Tellus rhoncus cursus a id arcu arcu, integer cursus amet. Nunc ut sapien erat maecenas sed mauris. Condimentum lorem sem diam consectetur duis rhoncus justo. Tincidunt semper cursus quis senectus magna. Cursus condimentum porta habitant et, eget bibendum nulla vitae. Phasellus bibendum proin pharetra consequat.
        hendrerit porttitor lacus pellentesquacus pellentesquacus pellentesquacus pellentesquacus pellentesquacus pellentesquacus pellentesque pretium, eu. Luctus eget dui vel dictum quisque elit tortor vestibulum. Pulvinar amet a sit at risus varius nulla praesent. Amet interdum morbi at eget lorem. Diam rutrum consectetur dictumst at felis aliquam. Ante eget massa tincidunt odio id porttitor malesuada fermentum. Sit amet, elit augue suspendisse mattis velit eget."
        />
      </Container>
    </ScrollView>
  );
};

export default React.memo(SosInfo);
