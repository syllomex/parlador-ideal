import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { color } from "../../assets/color";

export const TouchableContainer = styled(TouchableOpacity)<TouchableOpacityProps>`
  background-color: ${color.primary};

  border-radius: 14px;
  padding: 20px;
  margin-bottom: 24px;
`;

export const Container = styled.View`
  background-color: ${color.gray_background};

  border-radius: 14px;
  padding: 20px;
  margin-bottom: 24px;
`;

export const Name = styled.Text`
  color: ${color.light};
  font-size: 14px;
  font-family: "Inter_500Medium";

  margin-bottom: 12px;
`;

export const Content = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 14px;
  line-height: 20px;
  color: ${color.dark};

  margin-bottom: 12px;
`;

export const Date = styled.Text`
  color: ${color.light};
  font-size: 12px;
  font-family: "Inter_400Regular";

  align-self: flex-end;
`;
