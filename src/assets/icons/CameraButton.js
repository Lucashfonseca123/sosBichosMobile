import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgCamerabutton(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-1.714c5.68 0 10.286-4.605 10.286-10.286C22.286 6.32 17.68 1.714 12 1.714 6.32 1.714 1.714 6.32 1.714 12c0 5.68 4.605 10.286 10.286 10.286z"
        fill={props.color ? props.color : '#1B253A'}
      />
      <Circle cx={12} cy={12} r={9} fill={props.color ? props.color : '#1B253A'} />
    </Svg>
  );
}

export default SvgCamerabutton;
