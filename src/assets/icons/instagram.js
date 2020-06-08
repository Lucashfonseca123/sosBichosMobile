import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

function SvgInstagram(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 39 39" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M2.438 2.653C-.627 5.837 0 9.218 0 19.492c0 8.531-1.488 17.083 6.302 19.097 2.432.625 23.986.625 26.416-.003 3.243-.837 5.882-3.468 6.243-8.056.05-.64.05-21.425-.002-22.079C38.576 3.565 35.568.75 31.605.18c-.909-.132-1.09-.171-5.751-.18C9.323.009 5.699-.727 2.438 2.654z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path
          d="M19.497 5.1c-5.9 0-11.504-.524-13.644 4.968-.884 2.269-.755 5.215-.755 9.434 0 3.701-.12 7.18.755 9.431 2.135 5.496 7.784 4.97 13.64 4.97 5.65 0 11.476.588 13.642-4.97.886-2.291.756-5.193.756-9.431 0-5.626.31-9.258-2.418-11.985-2.763-2.762-6.498-2.416-11.983-2.416h.007zm-1.29 2.596c12.307-.02 13.874-1.388 13.01 17.62-.308 6.722-5.427 5.985-11.719 5.985-11.472 0-11.802-.329-11.802-11.806 0-11.61.91-11.793 10.51-11.802v.003zm8.976 2.39a1.728 1.728 0 100 3.455 1.728 1.728 0 000-3.455zm-7.686 2.02a7.395 7.395 0 000 14.79 7.392 7.392 0 007.392-7.394 7.394 7.394 0 00-7.392-7.396zm0 2.595c6.345 0 6.353 9.6 0 9.6-6.344 0-6.354-9.6 0-9.6z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={2.512}
          y1={36.509}
          x2={38.759}
          y2={5.138}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FD5" />
          <Stop offset={0.5} stopColor="#FF543E" />
          <Stop offset={1} stopColor="#C837AB" />
        </LinearGradient>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h39v39H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgInstagram;
