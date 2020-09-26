import styled from "styled-components/native";
import { color } from "../../assets/color";

export const Container = styled.View`
  background-color: ${color.primary};
  border-radius: 14px;

  width: 100%;
  padding: 20px;
  margin: 24px 0;
`;

export const Content = styled.TextInput`
  font-family: "Inter_400Regular";
  max-height: 52px;
`;

export const Name = styled.Text`
  color: ${color.light};
  font-size: 14px;
  font-family: "Inter_500Medium";

  margin-bottom: 12px;
`;

export const CharacterCounter = styled.Text`
  color: ${color.light};
  font-size: 14px;
  font-family: "Inter_400Regular";

  align-self: flex-end;
`;
