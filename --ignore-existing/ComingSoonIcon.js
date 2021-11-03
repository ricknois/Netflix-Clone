import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgComingSoonIcon(props) {
  return (
    <Svg
      width={55}
      height={56}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={17.5}
        y={18}
        width={35}
        height={35}
        rx={3.5}
        stroke="#fff"
        strokeWidth={5}
      />
      <Path
        d="M39 14l-1.7-8.158a4 4 0 00-4.656-3.115L6.022 7.742a4 4 0 00-3.173 4.761L8.328 38.33a4 4 0 003.913 3.17H13.5"
        stroke="#fff"
        strokeWidth={4}
      />
      <Path
        d="M29 42.784v-14.15c0-.49.541-.784.951-.518l11.665 7.554a1 1 0 01-.05 1.71l-11.073 6.274a1 1 0 01-1.493-.87z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComingSoonIcon;
