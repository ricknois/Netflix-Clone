import styled from "styled-components/native";
import theme from "../../global/themes/theme";

export const Container = styled.View`
  height: 52px;
  margin: 21px;
  flex-direction: row;
  align-items: center;
`;

export const LogoContainer = styled.View``;

export const LabelContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;

export const Label = styled.Text`
  font-family: ${theme.fonts.text500};
  font-size: 16px;
  line-height: 19px;
  color: ${theme.colors.white};
`;
