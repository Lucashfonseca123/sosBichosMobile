import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAnnouncement(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M25.333 4H6.667A2.657 2.657 0 004 6.667v18.666C4 26.8 5.2 28 6.667 28h18.666C26.8 28 28 26.8 28 25.333V6.667A2.667 2.667 0 0025.333 4zm-12 17.333V10.667L20 16"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgAnnouncement;
