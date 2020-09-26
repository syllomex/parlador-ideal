import styled from "styled-components/native";
import { color } from "../../assets/color";

export const Container = styled.View`
  flex: 1;
  padding: 52px 10%;
  justify-content: space-between;

  background-color: ${color.background};
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-bottom: 48px;
`;

export const ActionsContainer = styled.View`
  align-items: center;
  justify-content: space-between;

  height: 68px;
  margin-top: 48px;
`;
