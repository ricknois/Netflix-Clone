import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDownloadIcon(props) {
  return (
    <Svg
      height="60%"
      width="60%"
      viewBox="0 0 55 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 0v43m0 0L8.5 32.5M22 43l13-10.5"
        stroke={props.color}
        strokeWidth={5}
      />
      <Path fill={props.color} d="M0 49h44v5H0z" />
    </Svg>
  );
}

export default SvgDownloadIcon;
