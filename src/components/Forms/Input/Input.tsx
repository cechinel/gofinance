import React from "react";
import { Container } from "./InputStyle";
import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return <Container {...rest} />;
}
