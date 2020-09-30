import styled from "styled-components/native";
import {
  TouchableOpacityProps,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import sign_out from "../../assets/images/icons/sign_out.png";
import new_post from "../../assets/images/icons/new_post.png";

import { color } from "../../assets/color";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  padding: 32px 10% 12px;
  background-color: ${color.background};

  width: 100%;
`;

export const IconButton = styled(TouchableOpacity)<TouchableOpacityProps>``;

export const SignOutIcon = styled.Image.attrs({ source: sign_out })``;

export const NewPostIcon = styled.Image.attrs({ source: new_post })`
  margin-left: 16px;
`;

export const PostsContainer = styled(ScrollView)`
  width: 100%;
  padding: 0 10%;
  margin-top: 32px;
`;

export const AlertPrimary = styled.Text`
  text-align: center;
  color: ${color.primary};
`;

export const AlertSecondary = styled.Text`
  text-align: center;
  color: ${color.text_muted};
`;