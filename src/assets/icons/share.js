import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShare(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M21 18.76c-.887 0-1.68.35-2.287.898l-8.318-4.842A3.82 3.82 0 0010.5 14c0-.28-.047-.549-.105-.817l8.225-4.795a3.485 3.485 0 004.855-.08A3.5 3.5 0 1017.5 5.833c0 .28.047.548.105.817L9.38 11.445a3.485 3.485 0 00-4.855.08A3.5 3.5 0 007 17.5c.922 0 1.75-.362 2.38-.945l8.307 4.841a3.31 3.31 0 00-.094.77A3.4 3.4 0 0021 25.561a3.4 3.4 0 100-6.801z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgShare;
