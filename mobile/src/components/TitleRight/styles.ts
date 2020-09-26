import styled from "styled-components/native";
import { color } from "../../assets/color";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const TopLine = styled.Text`
  width: 100%;
  font-size: 28px;
  color: ${color.dark_gray};

  text-align: right;
  font-family: "Inter_400Regular";
`;

export const BottomLine = styled.Text`
  width: 100%;
  font-size: 28px;
  color: ${color.primary};

  text-align: right;
  font-family: "Inter_400Regular";
`;
