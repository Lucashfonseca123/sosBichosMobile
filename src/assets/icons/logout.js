import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgLogout(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 27 30" fill="none" {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M11.51 16.24l1.47 1.468 5.207-5.208-5.208-5.208L11.51 8.76l2.688 2.698H4.125v2.084h10.073L11.51 16.24zm9.282-13.115H6.208a2.083 2.083 0 00-2.083 2.083v4.167h2.083V5.208h14.584v14.584H6.208v-4.167H4.125v4.167c0 1.145.927 2.083 2.083 2.083h14.584a2.09 2.09 0 002.083-2.083V5.208a2.09 2.09 0 00-2.083-2.083z"
          fill="#fff"
          fillOpacity={0.9}
        />
      </G>
      <Defs />
    </Svg>
  );
}

export default SvgLogout;
