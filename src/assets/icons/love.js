import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLove(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M14 28l-2.03-2.014C4.76 18.86 0 14.145 0 8.392 0 3.677 3.388 0 7.7 0c2.436 0 4.774 1.236 6.3 3.174C15.526 1.236 17.864 0 20.3 0 24.612 0 28 3.677 28 8.392c0 5.753-4.76 10.468-11.97 17.594L14 28z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgLove;
