import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MobileShare(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 66 66" fill="none" {...props}>
      <Path
        d="M46.75 2.777l-27.5-.027c-3.025 0-5.473 2.475-5.473 5.5v49.5c0 3.025 2.448 5.5 5.473 5.5h27.5c3.025 0 5.5-2.475 5.5-5.5V8.25c0-3.025-2.475-5.473-5.5-5.473zm0 49.473h-27.5v-38.5h27.5v38.5zM35.2 36.355v4.813l8.8-8.223-8.8-8.195v4.675c-8.553 1.183-11.963 7.04-13.2 12.925 3.052-4.125 7.095-5.995 13.2-5.995z"
        fill="#CDCDCD"
      />
    </Svg>
  );
}

export default MobileShare;
