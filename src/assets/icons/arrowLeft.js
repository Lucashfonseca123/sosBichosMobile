import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowLeft(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21.344 9.328H7.87l3.147-3.148c.984-.983.984-2.557 0-3.442-.983-.984-2.557-.984-3.442 0L1.082 9.23C.393 9.918 0 10.803 0 11.787c0 .983.393 1.869 1.082 2.557l6.492 6.492c.492.492 1.082.689 1.77.689.689 0 1.279-.197 1.77-.689.984-.983.984-2.557 0-3.443l-3.147-3.147h13.574A2.435 2.435 0 0024 11.786c0-1.376-1.279-2.458-2.656-2.458z"
        fill="#333"
      />
    </Svg>
  );
}

export default SvgArrowLeft;
