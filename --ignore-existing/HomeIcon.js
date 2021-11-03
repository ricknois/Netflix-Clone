import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeIcon(props) {
  return (
    <Svg
      width={57}
      height={49}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.405.9L28.198 0 27 .91 0 21.41l2.419 3.186 5.371-4.079L9.715 46.65l.136 1.853H45.944l.245-1.717 3.669-25.651 4.656 3.471 2.39-3.207L29.405.9zm16.801 17.513L28.22 5.006 11.59 17.633l1.979 26.87h28.907l3.731-26.09z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgHomeIcon;
