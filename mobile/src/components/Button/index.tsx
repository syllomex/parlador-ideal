import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { ButtonText, Container } from "./styles";

const Button: React.FC<RectButtonProperties> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
