import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCreditCard(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 66 66" fill="none" {...props}>
      <Path
        d="M55 11H11c-3.053 0-5.473 2.447-5.473 5.5l-.027 33c0 3.053 2.447 5.5 5.5 5.5h44c3.053 0 5.5-2.447 5.5-5.5v-33c0-3.053-2.447-5.5-5.5-5.5zm0 38.5H11V33h44v16.5zM55 22H11v-5.5h44V22z"
        fill="#CDCDCD"
      />
    </Svg>
  );
}

export default SvgCreditCard;
