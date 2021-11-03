import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/themes/theme";

export default function Background({ children }) {
  const { black40 } = theme.colors;
  return (
    <LinearGradient style={{ flex: 1 }} colors={[black40, black40]}>
      {children}
    </LinearGradient>
  );
}
