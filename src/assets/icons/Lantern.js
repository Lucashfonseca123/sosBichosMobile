import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLantern(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.734 0H7.185C5.971 0 5 .96 5 2.16v3.76L7.913 8.8v13.04c0 1.2.971 2.16 2.185 2.16h3.804c1.214 0 2.185-.96 2.185-2.16V8.8L19 5.92V2.16C18.92.96 17.948 0 16.734 0zm-3.56 18.16c0 .64-.567 1.2-1.214 1.2-.648 0-1.214-.56-1.214-1.2v-4.4c0-.64.566-1.2 1.213-1.2.648 0 1.214.56 1.214 1.2v4.4z"
        fill={props.color ? props.color : '#1B253A'}
      />
    </Svg>
  );
}

export default SvgLantern;
