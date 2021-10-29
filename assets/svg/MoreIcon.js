import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoreIcon(props) {
  return (
    <Svg
      width={50}
      height={38}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M0 0h50v5H0zM0 17h50v5H0zM0 33h50v5H0z" />
    </Svg>
  );
}

export default SvgMoreIcon;
