import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoreIcon(props) {
  return (
    <Svg
      height="60%"
      width="60%"
      viewBox="0 0 55 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill={props.color} d="M0 0h50v5H0zM0 17h50v5H0zM0 33h50v5H0z" />
    </Svg>
  );
}

export default SvgMoreIcon;
