import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNotification(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 28 23" {...props}>
      <Path d="M0 0v19.6s0 2.8 2.8 2.8h22.4s2.8 0 2.8-2.8V0H0zm9.8 12.6H4.2V4.2h5.6v8.4zm14 0H12.6V9.8h11.2v2.8zm0-5.6H12.6V4.2h11.2V7z" />
    </Svg>
  );
}

export default SvgNotification;
