import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgFlashoff(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#flash_off_svg__clip0)" fill={props.color ? props.color : '#1B253A'}>
        <Path d="M16.5 9h-3.23L16.957.704A.501.501 0 0016.5 0h-10a.5.5 0 00-.497.54l.265 3.435c.008.118.06.23.144.315l8.482 8.484a.5.5 0 00.814-.157l1.252-2.92A.502.502 0 0016.5 9zM13.905 16.027L7.59 9.71a.502.502 0 00-.852.393l.265 3.436c.019.26.236.461.498.461h1.548l.955 9.55a.497.497 0 00.496.45c.198 0 .38-.117.46-.303l3.053-7.12a.5.5 0 00-.107-.55zM23.853 23.146l-23-23a.5.5 0 00-.706.707l23 23a.502.502 0 00.707.001.502.502 0 000-.708z" />
      </G>
      <Defs>
        <ClipPath id="flash_off_svg__clip0">
          <Path d="M0 0h24v24H0V0z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgFlashoff;
