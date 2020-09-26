import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { color } from "../../assets/color";

export const Container = styled(TouchableOpacity)`
  padding: 8px 24px;
  border-radius: 7px;

  background-color: ${color.primary};
`;

export const ButtonText = styled.Text`
  color: ${color.light};

  font-size: 14px;
  font-family: "Inter_400Regular";
`;
