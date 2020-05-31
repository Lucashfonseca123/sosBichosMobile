import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgSexMale(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" {...props}>
      <G filter="url(#prefix__filter0_d)">
        <G filter="url(#prefix__filter1_d)">
          <Path
            d="M11.667 9.667c1.003 0 1.944.319 2.699.863l3.974-3.974h-3.562V5H21v6.222h-1.556v-3.57l-3.974 3.96c.544.777.863 1.71.863 2.721a4.667 4.667 0 11-4.666-4.666zm0 1.555a3.111 3.111 0 100 6.223 3.111 3.111 0 000-6.223z"
            fill="#fff"
          />
          <Path
            d="M14.528 6.556v.25h3.208l-3.4 3.4a4.917 4.917 0 102.248 4.127c0-.99-.291-1.909-.792-2.69l3.402-3.389v3.218h2.056V4.75h-6.722v1.806zM9.644 12.31a2.861 2.861 0 114.046 4.047 2.861 2.861 0 01-4.046-4.047z"
            stroke="#000"
            strokeWidth={0.5}
          />
        </G>
      </G>
      <Defs />
    </Svg>
  );
}

export default SvgSexMale;
