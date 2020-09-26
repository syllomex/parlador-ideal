import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextProps } from "react-native";

import { Container, IconSmall, IconMedium, Text } from "./styles";

interface IProps extends TextProps {
  withIcon?: boolean;
  iconSize?: "small" | "medium";
  navigateTo?: string;
}

const Title: React.FC<IProps> = ({
  withIcon,
  iconSize,
  children,
  navigateTo,
  ...props
}) => {
  const { navigate } = useNavigation();

  function handlePress() {
    navigateTo && navigate(navigateTo);
  }

  if (withIcon)
    return (
      <Container onTouchEnd={handlePress}>
        {!iconSize || iconSize === "small" ? <IconSmall /> : <IconMedium />}
        <Text {...props}>{children}</Text>
      </Container>
    );

  return <Text {...props}>{children}</Text>;
};

export default Title;
