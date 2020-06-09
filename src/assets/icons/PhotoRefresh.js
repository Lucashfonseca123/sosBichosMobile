import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhotorefresh(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 7h-2.4a.888.888 0 01-.789-.57l-.621-1.861A.89.89 0 0015.4 4H8.6c-.33 0-.686.256-.789.568L7.189 6.43A.889.889 0 016.4 7H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-.5 3.2a.7.7 0 110-1.4.7.7 0 010 1.4zM8.727 13.364a3.272 3.272 0 014.803-2.894l.796-.796a4.362 4.362 0 00-6.69 3.69H6l2.182 2.181 2.182-2.181H8.727zm4.91 0l2.181-2.182L18 13.364h-1.636a4.362 4.362 0 01-6.69 3.69l.796-.797a3.272 3.272 0 004.803-2.894h-1.637z"
        fill={props.color ? props.color : '#1B253A'}
      />
    </Svg>
  );
}

export default SvgPhotorefresh;
