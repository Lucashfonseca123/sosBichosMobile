import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSexFemale(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 14 22" fill="none" {...props}>
      <Path
        d="M5.9 12.994V15.9h-3v2.2h3v2.988h2.2V18.1h3v-2.2h-3v-2.906c2.84-.52 5-3.006 5-5.994C13.1 3.636 10.364.9 7 .9A6.106 6.106 0 00.9 7c0 2.988 2.16 5.474 5 5.994zM7 10.9c-2.15 0-3.9-1.75-3.9-3.9S4.85 3.1 7 3.1s3.9 1.75 3.9 3.9-1.75 3.9-3.9 3.9z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.2}
      />
    </Svg>
  );
}

export default SvgSexFemale;
