import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogo(props) {
  return (
    <Svg
      width={16}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.781 12.968V30H0V0h4.469l6.093 17.032V0h4.688v30H10.5L4.781 12.968z"
        fill="#EE1520"
      />
    </Svg>
  );
}

export default SvgLogo;
