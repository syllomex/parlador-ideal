import styled from "styled-components/native";
import { color } from "../../assets/color";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 14px;
`;

export const Label = styled.Text`
  width: 100%;
  margin-bottom: 8px;

  font-family: "Inter_400Regular";
  color: ${color.dark_gray};
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 9px 12px;

  font-size: 14px;
  font-family: "Inter_400Regular";

  border-width: 1px;
  border-color: ${color.light_gray};
  border-radius: 5px;
`;
