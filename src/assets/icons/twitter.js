import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function SvgTwitter(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 39 39" fill="none" {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h39v39H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.00444)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={225}
          height={225}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default SvgTwitter;
