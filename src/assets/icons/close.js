import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgClose(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgClose;
