import styled from "styled-components/native";
import theme from "../../global/themes/theme";

export const Container = styled.View`
  background-color: ${theme.colors.black50};
  margin: 12px;
  height: 46px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Icons = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;
export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: theme.colors.white50,
}))`
  flex: 6;
  color: ${theme.colors.white};
`;

export const Label = styled.Text``;
