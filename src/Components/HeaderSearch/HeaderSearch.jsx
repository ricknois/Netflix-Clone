import React from "react";
import { View, Text } from "react-native";
import { Container, Input, Icons } from "./style";
import { SearchIcon } from "../../../assets/svg";
import theme from "../../global/themes/theme";
import { FontAwesome } from "@expo/vector-icons";

export default function HeaderSearch() {
  return (
    <Container>
      <Icons>
        <SearchIcon color={theme.colors.white50} />
      </Icons>
      <Input placeholder="Search for a show, movie, genre, etc" />
      <Icons>
        <FontAwesome name="microphone" size={20} color={theme.colors.white50} />
      </Icons>
    </Container>
  );
}
