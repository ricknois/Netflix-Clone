import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSearchIcon(props) {
  return (
    <Svg
      width={49}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41 22c0 10.493-8.507 19-19 19S3 32.493 3 22 11.507 3 22 3s19 8.507 19 19zm-5.475 17.353A21.905 21.905 0 0122 44C9.85 44 0 34.15 0 22S9.85 0 22 0s22 9.85 22 22c0 5.61-2.1 10.73-5.556 14.615l9.97 9.97-2.828 2.83-10.061-10.062z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgSearchIcon;
