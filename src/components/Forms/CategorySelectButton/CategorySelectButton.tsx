import React from "react";
import { Category, Container, Icon } from "./CategorySelectButtonStyle";

interface Props {
    title: string;
    onPress: () => void;
}

export function CategorySelectButton({title, onPress}: Props) {
  return (
  <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
  </Container>
  )
}
