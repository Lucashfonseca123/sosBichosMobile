import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlashautomatico(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.917 9.225A.497.497 0 0013.5 9h-3.23L13.958.703a.505.505 0 00-.04-.475A.497.497 0 0013.5 0h-10a.502.502 0 00-.368.16.502.502 0 00-.13.379l1 13c.019.26.236.461.498.461h1.548l.955 9.55A.497.497 0 007.5 24c.197 0 .38-.117.46-.303l6-14a.502.502 0 00-.043-.472z"
        fill={props.color ? props.color : '#1B253A'}
      />
      <Path
        d="M20.96 7.303l-3-7c-.158-.368-.762-.368-.92 0l-3 7a.5.5 0 00.92.393L15.687 6h3.626l.727 1.697a.5.5 0 00.92-.394zM16.115 5L17.5 1.77 18.884 5h-2.77z"
        fill={props.color ? props.color : '#1B253A'}
      />
    </Svg>
  );
}

export default SvgFlashautomatico;
