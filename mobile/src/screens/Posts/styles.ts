import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

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
  margin-top: 32px;
`;
