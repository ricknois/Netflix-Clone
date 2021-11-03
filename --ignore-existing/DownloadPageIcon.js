import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgDownloadPageIcon(props) {
  return (
    <Svg
      width={194}
      height={194}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={97} cy={97} r={97} fill="#323232" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.905 108.893V29h11.098v79.637l19.819-15.207 6.974 8.202-32.277 24.766-33.437-24.706 6.813-8.322 21.01 15.523z"
        fill="#000"
      />
      <Path d="M50 133.439h93.878V144H50v-10.561z" fill="#000" />
    </Svg>
  );
}

export default SvgDownloadPageIcon;
