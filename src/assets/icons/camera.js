import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgCamera(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" {...props}>
      <Circle cx={13} cy={13} r={13} fill="#C4C4C4" />
      <Circle cx={13} cy={13} r={12.5} stroke="#000" strokeOpacity={0.2} />
      <Path d="M13 15.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z" fill="#fff" />
      <Path
        d="M10.75 5.5L9.377 7H7c-.825 0-1.5.675-1.5 1.5v9c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5h-2.378L15.25 5.5h-4.5zM13 16.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgCamera;
