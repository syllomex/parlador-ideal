import styled from "styled-components/native";
import { color } from "../../assets/color";

import logo_small from "../../assets/images/icons/logo_small.png";

export const Text = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 22px;
  color: ${color.primary};
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image.attrs({ source: logo_small })`
  margin-right: 8px;
  width: 32px;
  height: 32px;
`;
