import React from "react";
import { TextProps } from "react-native";

import { Container, Icon, Text } from "./styles";

interface IProps extends TextProps {
  withIcon?: boolean;
}

const Title: React.FC<IProps> = ({ withIcon, children, ...props }) => {
  if (withIcon)
    return (
      <Container>
        <Icon />
        <Text {...props}>{children}</Text>
      </Container>
    );

  return <Text {...props}>{children}</Text>;
};

export default Title;
