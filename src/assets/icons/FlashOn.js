import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlashon(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17 9h-3.23L17.456.703A.501.501 0 0017 0H7a.498.498 0 00-.498.539l1 13c.02.26.236.461.498.461h1.548l.955 9.55A.497.497 0 0011 24c.197 0 .38-.117.46-.303l6-14A.502.502 0 0017 9z"
        fill={props.color ? props.color : '#1B253A'}
      />
    </Svg>
  );
}

export default SvgFlashon;
