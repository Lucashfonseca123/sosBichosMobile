import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgProfile(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M14 0a7 7 0 110 14 7 7 0 010-14zm0 17.5c7.735 0 14 3.133 14 7V28H0v-3.5c0-3.867 6.265-7 14-7z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgProfile;
