import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFavorite(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 33 33" fill="none" {...props}>
      <Path
        d="M16.156 20.919l-5.04 3.08 1.327-5.807-4.451-3.908 5.872-.502L16.156 8.3l2.293 5.482 5.872.502-4.451 3.908 1.327 5.807-5.04-3.08zm13.407-8.345l-9.64-.828-3.767-8.996-3.767 8.996-9.639.828 7.306 6.418-2.185 9.54 8.285-5.062 8.285 5.061-2.198-9.539 7.32-6.418z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgFavorite;
