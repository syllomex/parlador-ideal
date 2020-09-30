import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import PostCard from "../../components/PostCard";
import Title from "../../components/Title";
import { IconsContainer } from "../../components/Title/styles";
import Wrapper from "../../components/Wrapper";
import { useProfile } from "../../contexts/profile";

import { logoutHandler } from "../../handlers/logout";

import {
  Header as StyledHeader,
  IconButton,
  NewPostIcon,
  SignOutIcon,
  PostsContainer,
} from "./styles";
import { api } from "../../services/api";

interface IPost {
  id?: string;
  name: string;
  content: string;
  date: Date;
  isOwner: boolean;
}

const Posts: React.FC = () => {
  const { profile, setProfile } = useProfile();

  const [posts, setPosts] = useState<IPost[]>([]);

  async function fetchPosts() {
    try {
      const response = await api.get("/posts", {
        headers: { Authorization: `Bearer ${profile?.token}` },
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error.response.status, error.response.data);
    }
  }

  const { navigate } = useNavigation();

  function logout() {
    AsyncStorage.removeItem("profile");
    setProfile(null);
    navigate("SignIn");
  }

  const handlePressLogout = logoutHandler(logout).handler;

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

  const Header: React.FC = () => {
    return (
      <StyledHeader>
        <Title withIcon>Publicações</Title>
        <IconsContainer>
          <IconButton onPress={handlePressLogout}>
            <SignOutIcon />
          </IconButton>
          <IconButton onPress={() => navigate("NewPost")}>
            <NewPostIcon />
          </IconButton>
        </IconsContainer>
      </StyledHeader>
    );
  };

  return (
    <Wrapper fixedHeader={<Header />}>
      <PostsContainer>
        {posts.map((post: any) => (
          <PostCard
            key={post.id}
            id={post.id}
            name={post.user?.name}
            content={post.content}
            date={post.date}
            isOwner={post.user?.id === profile?.payload.id}
          />
        ))}
      </PostsContainer>
    </Wrapper>
  );
};

export default Posts;
