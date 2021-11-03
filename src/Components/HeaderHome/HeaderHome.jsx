import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Label,
  LabelContainer,
  LogoContainer,
  Button,
} from "./style";
import { Logo } from "../../../assets/svg";

export default function HeaderHome() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LabelContainer>
        <Button>
          <Label>TV Shows</Label>
        </Button>
        <Button>
          <Label>Movies</Label>
        </Button>
        <Button>
          <Label>My List</Label>
        </Button>
      </LabelContainer>
    </Container>
  );
}
